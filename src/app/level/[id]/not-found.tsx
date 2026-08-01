import Link from "next/link";

export default function LevelNotFound() {
  return (
    <div className="min-h-screen bg-surface flex flex-col items-center justify-center p-6 text-center">
      <span className="text-6xl mb-4">📜</span>
      <h1 className="text-2xl font-extrabold text-on-surface mb-2">Level Not Found</h1>
      <p className="text-on-surface-variant text-sm max-w-md mb-6">
        Minhaj couldn&apos;t find this level in the Kingdom curriculum. It may have been renamed or
        doesn&apos;t exist yet.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-gradient-to-r from-primary via-secondary to-tertiary text-neutral-950 rounded-xl font-extrabold text-sm"
      >
        Back to Learning Path
      </Link>
    </div>
  );
}
