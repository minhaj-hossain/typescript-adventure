import { NextRequest, NextResponse } from "next/server";

// Simple in-memory sliding-window rate limiter (per-process, adequate for serverless)
const WINDOW_MS = 60_000;
const MAX_REQUESTS_PER_WINDOW = 20;
const ipBuckets = new Map<string, { count: number; resetAt: number }>();

function getClientIp(req: NextRequest): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  const realIp = req.headers.get("x-real-ip");
  if (realIp) return realIp.trim();
  return "unknown";
}

export function checkRateLimit(req: NextRequest): NextResponse | null {
  const ip = getClientIp(req);
  const now = Date.now();
  const bucket = ipBuckets.get(ip);
  if (!bucket || bucket.resetAt < now) {
    ipBuckets.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return null;
  }
  bucket.count += 1;
  if (bucket.count > MAX_REQUESTS_PER_WINDOW) {
    return NextResponse.json(
      { error: "Too many requests. Please slow down and try again in a minute." },
      { status: 429 },
    );
  }
  return null;
}

export function truncate(text: string, maxLength: number): string {
  return text.length <= maxLength ? text : text.slice(0, maxLength);
}

export function sanitizeUserContent(text: string): string {
  return text
    .replace(/\b(ignore|disregard|forget|override|bypass)\s+(all\s+)?(previous|above|prior|the\s+above|system|instructions?|prompts?)\b/gi, "[redacted]")
    .replace(/\b(show|reveal|print|display|output)\s+(your\s+)?(system\s+)?prompts?\b/gi, "[redacted]")
    .replace(/\b(what\s+is\s+your\s+|what\s+are\s+your\s+)(system\s+|initial\s+)?instructions?\b/gi, "[redacted]")
    .trim();
}

export function handleApiError(err: unknown, logLabel: string): NextResponse {
  const detail = err instanceof Error ? err.message : String(err);
  console.error(`[${logLabel}]`, detail, {
    stack: err instanceof Error ? err.stack : undefined,
    timestamp: new Date().toISOString(),
  });
  return NextResponse.json(
    { error: "Something went wrong. Please try again." },
    { status: 500 },
  );
}

// Periodically clean up stale buckets to prevent unbounded map growth
setInterval(() => {
  const now = Date.now();
  for (const [ip, bucket] of ipBuckets) {
    if (bucket.resetAt < now) ipBuckets.delete(ip);
  }
}, WINDOW_MS * 2);