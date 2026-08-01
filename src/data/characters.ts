export type CharacterId =
  | "minhaj"
  | "tasnim"
  | "jordan"
  | "evans"
  | "apurba"
  | "salman"
  | "imran";

export interface Character {
  id: CharacterId;
  name: string;
  role: string;
  color: string;
  bgColor: string;
  emoji: string;
}

export const CHARACTERS: Record<CharacterId, Character> = {
  minhaj: {
    id: "minhaj",
    name: "Minhaj",
    role: "Senior Engineer",
    color: "text-sky-400",
    bgColor: "bg-sky-500/10 border-sky-500/30",
    emoji: "👨‍💻",
  },
  tasnim: {
    id: "tasnim",
    name: "Tasnim",
    role: "Type Architect",
    color: "text-violet-400",
    bgColor: "bg-violet-500/10 border-violet-500/30",
    emoji: "👩‍🔬",
  },
  jordan: {
    id: "jordan",
    name: "Jordan",
    role: "Security Lead",
    color: "text-amber-400",
    bgColor: "bg-amber-500/10 border-amber-500/30",
    emoji: "🛡️",
  },
  evans: {
    id: "evans",
    name: "Evans",
    role: "Backend Engineer",
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/10 border-emerald-500/30",
    emoji: "⚙️",
  },
  apurba: {
    id: "apurba",
    name: "Apurba",
    role: "Frontend Developer",
    color: "text-rose-400",
    bgColor: "bg-rose-500/10 border-rose-500/30",
    emoji: "🎨",
  },
  salman: {
    id: "salman",
    name: "Salman",
    role: "UI Engineer",
    color: "text-teal-400",
    bgColor: "bg-teal-500/10 border-teal-500/30",
    emoji: "✨",
  },
  imran: {
    id: "imran",
    name: "Imran",
    role: "Senior Weaver",
    color: "text-primary",
    bgColor: "bg-primary/10 border-primary/30",
    emoji: "🔮",
  },
};

const STAGE_PRIMARY_CHARACTER: Record<string, CharacterId> = {
  "stage-0-onboarding": "minhaj",
  "stage-1-primitives": "minhaj",
  "stage-2-structural": "tasnim",
  "stage-3-shapeshifter": "minhaj",
  "stage-4-generic": "tasnim",
  "stage-5-frontend": "evans",
  "stage-6-gymnastics": "tasnim",
  "stage-7-production": "evans",
  "stage-8-backend": "evans",
  "stage-9-type-mastery": "jordan",
};

export function getStagePrimaryCharacter(stageId: string): Character {
  const id = STAGE_PRIMARY_CHARACTER[stageId] ?? "minhaj";
  return CHARACTERS[id];
}

export function inferSpeakerFromText(text: string): CharacterId | null {
  const lower = text.toLowerCase();
  for (const id of Object.keys(CHARACTERS) as CharacterId[]) {
    if (lower.includes(id)) return id;
  }
  if (lower.includes("he says") || lower.includes("he explains")) return "minhaj";
  if (lower.includes("she says") || lower.includes("she wants")) return "tasnim";
  return null;
}

export const CHECKPOINT_LEVEL_IDS = new Set([
  "level-2-5-checkpoint-domain",
  "level-5-5-launch-day",
  "level-8-6-checkpoint-booking-route",
]);
