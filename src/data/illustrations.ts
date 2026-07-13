export interface CodeIllustration {
  buggyTitle: string;
  buggyCode: string;
  buggyDesc: string;
  safeTitle: string;
  safeCode: string;
  safeDesc: string;
}

export const GRIMOIRE_ILLUSTRATIONS: Record<string, CodeIllustration> = {
  "ref-static-vs-dynamic-typing": {
    buggyTitle: "Unstable Alchemy (Dynamic Runtime Failure)",
    buggyCode: `// Pure JavaScript - No warning circles!
function applyManaBoost(wizard) {
  return wizard.mana + 50; 
}

// Runtime Disaster: returns NaN or crashes
applyManaBoost("Gandalf"); // output: "Gandalf50"
applyManaBoost(undefined); // crash: cannot read property 'mana'`,
    buggyDesc:
      "Errors only surface when your spell is cast (runtime). A typo can trigger catastrophic fractures mid-battle.",
    safeTitle: "Resistant Formula (Static Compile-Time Shield)",
    safeCode: `interface Wizard {
  mana: number;
}

function applyManaBoost(wizard: Wizard): number {
  return wizard.mana + 50;
}

// Compile Shield active:
// ❌ Error: Argument 'string' is not assignable to 'Wizard'
applyManaBoost("Gandalf"); `,
    safeDesc:
      "The Compiler Oracle reviews your blueprint immediately. Shape mismatched values are halted before the code runs.",
  },
  "ref-tsconfig": {
    buggyTitle: "Unrestrained Conduit (Loose/Permissive Type-checking)",
    buggyCode: `// tsconfig.json (Loose configurations)
{
  "compilerOptions": {
    "strict": false,
    "noImplicitAny": false
  }
}

// inside scroll.ts:
function transmute(relic) { // Allowed! 'any' inferred
  return relic.activate();  // Crashes if activate is missing
}`,
    buggyDesc:
      "Permissive rules hide sleeping curses. Inferred 'any' values spread through your code like raw, unchecked chaos.",
    safeTitle: "Locked Leylines (Strict/Rigid Alignment)",
    safeCode: `// tsconfig.json (Fortified configurations)
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true
  }
}

// inside scroll.ts:
function transmute(relic: { activate: () => void }) {
  relic.activate(); // Shielded & verified!
}`,
    safeDesc:
      "Enabling 'strict' forces every variable to reveal its true shape. Leaks and implicit 'any' anomalies are blocked instantly.",
  },
  "ref-primitive-types": {
    buggyTitle: "Accidental Soul-Bind (Capitalized Wrappers)",
    buggyCode: `// Over-engineered object boxes:
let count: Number = new Number(42);
let incantation: String = "Fireball";

// ❌ Warning: Type 'Number' is not assignable to 'number'
let rawPrice: number = count;`,
    buggyDesc:
      "Using capital String or Number binds variables to heavy runtime Object containers instead of clean native primitives.",
    safeTitle: "Pure Sparks (Lowercase Primitives)",
    safeCode: `// Clean, light, atomic sparks:
let count: number = 42;
let incantation: string = "Fireball";
let isActive: boolean = true;

let rawPrice: number = count; // Smooth flow`,
    safeDesc:
      "Lowercase types point directly to lightweight stack-allocated primitives, avoiding memory bloat and box mismatches.",
  },
  "ref-any": {
    buggyTitle: "Amorphous Abyss (Silent Corruption via 'any')",
    buggyCode: `let spellBook: any = { incantation: "Levitate" };

// Amorphous 'any' accepts any garbage!
spellBook.manaCost = "High"; // typed string
spellBook.target = 999;
spellBook.ignite(); // ❌ Runtime crash: ignite is not a function`,
    buggyDesc:
      "Reaching for 'any' blindfolds the Compiler Oracle. Mismatches travel silently through your leylines, fracturing at runtime.",
    safeTitle: "Fortified Structure (Explicit Shape)",
    safeCode: `interface Spell {
  incantation: string;
  manaCost: number;
}

let spellBook: Spell = { 
  incantation: "Levitate",
  manaCost: 35 // Guaranteed shape!
};`,
    safeDesc:
      "Giving each value a concrete interface establishes a permanent contract. The compiler verifies every single access.",
  },
  "ref-void-never": {
    buggyTitle: "Mismatched Ingress (Confusing Void and Never)",
    buggyCode: `// Returns undefined eventually (void):
function logWarning(): never {
  console.warn("Mana leak detected");
} // ❌ Error: A function returning 'never' cannot have a reachable end.`,
    buggyDesc:
      "A function that prints to a log returns control to the caller (void). Labeling it 'never' causes compiler contradictions.",
    safeTitle: "Harmonized Ingress (Precise Termination)",
    safeCode: `// Returns control, but yields nothing useful:
function logWarning(): void {
  console.warn("Mana leak detected");
}

// Halts execution permanently (never):
function explodeCore(): never {
  throw new Error("Core overload!");
}`,
    safeDesc:
      "Use 'void' for side effects that complete safely. Use 'never' for endless feedback loops or absolute panic exceptions.",
  },
  "ref-object-types": {
    buggyTitle: "Leaky Struct (Unconstrained Inline Sockets)",
    buggyCode: `// Raw structure, easily bloated
let event: { title: string; capacity: number };

event = {
  title: "Archery Duel",
  capacity: 250,
  host: "Robin" // ❌ Error: Object literal may only specify known properties
};`,
    buggyDesc:
      "Inline shape constraints are rigid. Adding unannounced properties directly triggers an Excess Property Check crash.",
    safeTitle: "Extensible Crest (Flexible Pattern)",
    safeCode: `interface EventBlueprint {
  title: string;
  capacity: number;
  [extraProps: string]: any; // Extensible socket!
}

let event: EventBlueprint = {
  title: "Archery Duel",
  capacity: 250,
  host: "Robin" // Safe & welcomed!
};`,
    safeDesc:
      "An index signature or an explicit interface provides room for unexpected secondary scrolls without losing core type checking.",
  },
  "ref-optional-readonly": {
    buggyTitle: "Unstable Crest (Accidental Field Overwrites)",
    buggyCode: `interface Relic {
  id: string; // writable
  charge: number;
}

const relic: Relic = { id: "excalibur-9", charge: 100 };
relic.id = "broken-hilt"; // ❌ Oh no! Relic identity altered!`,
    buggyDesc:
      "Allowing key identifiers to be mutated lets accidental code re-assignments damage critical, immutable entities.",
    safeTitle: "Tempered Crest (Readonly Seals)",
    safeCode: `interface Relic {
  readonly id: string; // Sealed!
  charge?: number;     // Optional socket
}

const relic: Relic = { id: "excalibur-9" };
// relic.id = "broken-hilt"; // ❌ Blocked! Read-only property!`,
    safeDesc:
      "The 'readonly' seal stops modification attempts instantly, while '?' optional tags safely represent potential future sockets.",
  },
  "ref-interfaces-vs-types": {
    buggyTitle: "Closed Circle (Using Type Aliases for Extensible Items)",
    buggyCode: `type SpellCaster = {
  name: string;
};

// ❌ Warning: Duplicate identifier 'SpellCaster'.
// You cannot re-open a type alias to merge fields!
type SpellCaster = {
  element: "fire" | "ice";
};`,
    buggyDesc:
      "Type aliases are closed blueprints. If downstream spells or plugins need to inject custom fields, type aliases block them.",
    safeTitle: "Open Scroll (Declaration Merging Interfaces)",
    safeCode: `interface SpellCaster {
  name: string;
}

// Downstream expansion automatically merges:
interface SpellCaster {
  element: "fire" | "ice";
}

const gandalf: SpellCaster = { name: "Gandalf", element: "ice" };`,
    safeDesc:
      "Interfaces support declaration merging. They seamlessly combine from multiple source files, perfect for library developers.",
  },
  "ref-interface-extension": {
    buggyTitle: "Redundant Blueprint Copying (Bloated Duplications)",
    buggyCode: `interface BaseScroll {
  id: string;
  creator: string;
}

interface FireScroll {
  id: string;      // Redundant clone!
  creator: string; // Redundant clone!
  burnRadius: number;
}`,
    buggyDesc:
      "Duplicating core fields manually violates the DRY principle and makes updating base records a nightmare.",
    safeTitle: "Lineage Binding (Interface Extension)",
    safeCode: `interface BaseScroll {
  id: string;
  creator: string;
}

interface FireScroll extends BaseScroll {
  burnRadius: number;
}

const scroll: FireScroll = {
  id: "sc-001",
  creator: "Imran",
  burnRadius: 15
};`,
    safeDesc:
      "Using 'extends' creates a direct type lineage, automatically forwarding all parent properties to the child scroll.",
  },
  "ref-union-types": {
    buggyTitle: "Amorphous Prism (Unsafe Property Probing)",
    buggyCode: `interface Mage { cast: () => void }
interface Archer { shoot: () => void }

function performAction(unit: Mage | Archer) {
  // ❌ Compiler Error: Property 'shoot' does not exist on type 'Mage'
  unit.shoot(); 
}`,
    buggyDesc:
      "The compiler forbids calling specific methods on general union objects because the incoming unit might be the opposite.",
    safeTitle: "Prism Discriminator (Tag Narrowing)",
    safeCode: `interface Mage { kind: "mage"; cast: () => void }
interface Archer { kind: "archer"; shoot: () => void }

function performAction(unit: Mage | Archer) {
  if (unit.kind === "mage") {
    unit.cast(); // Safely narrowed to Mage!
  } else {
    unit.shoot(); // Safely narrowed to Archer!
  }
}`,
    safeDesc:
      "Attaching a shared literal tag ('kind') lets you split union paths with elegant 'if' gates, shielding precise capabilities.",
  },
  "ref-literal-types": {
    buggyTitle: "Infinite Void (General Loose Inputs)",
    buggyCode: `let spellType: string = "Fire";

// accepts any spelling or complete garbage:
spellType = "fiiire"; 
spellType = "shattered-glass";`,
    buggyDesc:
      "Using standard 'string' permits accidental typo injections that pass the compiler but trigger logical bugs later.",
    safeTitle: "Finite Sockets (Literal Constellations)",
    safeCode: `let spellType: "Fire" | "Ice" | "Earth";

spellType = "Fire"; // Allowed
// spellType = "fiiire"; // ❌ Error: Type '"fiiire"' is not assignable to...`,
    safeDesc:
      "Literal types constrain strings to a finite set of sacred spells, turning spelling typos into syntax highlights.",
  },
  "ref-intersection-types": {
    buggyTitle: "Compound Bloat (Unintentional Type Collisions)",
    buggyCode: `interface FireSeal { modifier: string }
interface IceSeal { modifier: number }

// modifier must be both string and number!
type AbsoluteTemp = FireSeal & IceSeal; 

// ❌ Impossible to fulfill! Inferred as 'never':
const core: AbsoluteTemp = { modifier: "frozen-fire" }; `,
    buggyDesc:
      "Intersecting conflicting fields creates an impossible constraint, folding the variable shape into the black hole of 'never'.",
    safeTitle: "Sacred Combination (Crest Overlay)",
    safeCode: `interface FireSeal { firePower: number }
interface IceSeal { frostRadius: number }

type ElementalCombustion = FireSeal & IceSeal;

// Merges all structural requirements nicely:
const spell: ElementalCombustion = {
  firePower: 80,
  frostRadius: 25
};`,
    safeDesc:
      "Combine independent non-overlapping behaviors to synthesize a complete composite model with total coverage.",
  },
  "ref-function-types": {
    buggyTitle: "Blind Trigger (Untyped Callback Pipelines)",
    buggyCode: `// Function accepts ANY anonymous callback:
function executeRitual(onComplete: Function) {
  onComplete("done");
}

// ❌ Runtime crash: expects number, got string
executeRitual((code: number) => code.toFixed(2));`,
    buggyDesc:
      "The general 'Function' placeholder is a black void. It fails to define or check parameter inputs or return expectations.",
    safeTitle: "Ritual Protocol (Typed Function Signature)",
    safeCode: `type CompletionRitual = (code: number) => void;

function executeRitual(onComplete: CompletionRitual) {
  onComplete(200); // Verified!
}

// ❌ Compiler blocks invalid callback types immediately:
// executeRitual((msg: string) => msg.toUpperCase());`,
    safeDesc:
      "Declaring exact function parameters and returns guarantees that callbacks handle values exactly as dispatched.",
  },
  "ref-generics": {
    buggyTitle: "Cast-Iron Mould (Single-Type Rigidity)",
    buggyCode: `// Monolithic, duplicates needed for strings/booleans
interface NumberChest {
  item: number;
}
interface StringChest {
  item: string;
}

const goldChest: NumberChest = { item: 500 };`,
    buggyDesc:
      "Forcing specific types makes you write redundant clones, bloats the scroll library, and breaks reusability.",
    safeTitle: "Liquid Crystal Mould (Generic Parameter)",
    safeCode: `interface Chest<T> {
  item: T;
}

const goldChest: Chest<number> = { item: 500 };
const letterChest: Chest<string> = { item: "Edict" };`,
    safeDesc:
      "Generics act as shape-shifting placeholder envelopes that adapt to whatever item class is slid inside at creation.",
  },
  "ref-generic-constraints": {
    buggyTitle: "Wild Shape (Unconstrained Generics)",
    buggyCode: `function inspectRelic<T>(relic: T) {
  // ❌ Error: Property 'id' does not exist on type 'T'
  console.log("Relic ID: " + relic.id);
}`,
    buggyDesc:
      "If a generic parameter has no constraints, the compiler assumes it could be anything, including simple numbers with no fields.",
    safeTitle: "Chained Wild Shape (Extending Constraints)",
    safeCode: `interface Identifiable {
  id: string;
}

function inspectRelic<T extends Identifiable>(relic: T) {
  console.log("Relic ID: " + relic.id); // Shielded and allowed!
}

inspectRelic({ id: "wand-1", power: 450 }); // Safe`,
    safeDesc:
      "Using 'extends' locks the placeholder within a boundary, guaranteeing it possesses essential properties.",
  },
  "ref-pick-omit-partial": {
    buggyTitle: "Manual Scraping (Hardcoded Subset Models)",
    buggyCode: `interface Character {
  id: string; name: string; level: number; hp: number;
}

// Manual duplicate for simple updates:
interface CharacterUpdate {
  name?: string;
  level?: number;
} // Redundant copy! Breaks if fields change.`,
    buggyDesc:
      "Cloning subsets manually breaks easily. If the source 'Character' updates, the manually crafted subset drifts out of sync.",
    safeTitle: "Shape Sifting (Built-In Utility Mutators)",
    safeCode: `interface Character {
  id: string; name: string; level: number; hp: number;
}

// Derive dynamically from source:
type CharacterUpdate = Partial<Pick<Character, "name" | "level">>;

const update: CharacterUpdate = { level: 4 }; // verified optional subset!`,
    safeDesc:
      "Utility mutators act as immediate transmuters, cloning or editing source configurations dynamically with no boilerplate.",
  },
  "ref-required-readonly-record": {
    buggyTitle: "Amorphous Dictionary (Weak Key-Value Mapping)",
    buggyCode: `// Loose dictionary maps anything to any string:
interface SpellBook {
  [spellName: string]: string;
}

const books: SpellBook = {
  "fireball": "active",
  "heeeal": "broken" // Typos welcome, value unstructured
};`,
    buggyDesc:
      "Simple index signatures are blind to spelling mistakes and allow random string associations to bypass validation.",
    safeTitle: "Garrison Slots (Record Type Mapping)",
    safeCode: `type SacredSpells = "fireball" | "heal" | "haste";
type Status = "active" | "sealed" | "depleted";

// Strictly binds keys to Literal Unions:
const books: Record<SacredSpells, Status> = {
  "fireball": "active",
  "heal": "sealed",
  "haste": "depleted"
};`,
    safeDesc:
      "The Record helper maps precise keys to specific value shapes, transforming dictionaries into strict arrays of sockets.",
  },
  "ref-enums-vs-unions": {
    buggyTitle: "Heavy Rune (Accidental Runtime Enum Bloat)",
    buggyCode: `// Standard Enum produces complex compiled JS helper objects:
enum MageLevel {
  Initiate = "INITIATE",
  Grandmaster = "GRANDMASTER"
}

// Emits runtime prototype boilerplate in output potion!`,
    buggyDesc:
      "Enums generate compiled runtime weight. Unless you need physical lookup arrays, they add unnecessary bulk to your scripts.",
    safeTitle: "Lighter Crest (Literal String Unions)",
    safeCode: `// Lightweight, compile-only construct:
type MageLevel = "INITIATE" | "GRANDMASTER";

const lvl: MageLevel = "INITIATE";
// Compiles to a plain JS string: var lvl = "INITIATE";`,
    safeDesc:
      "Literal Unions deliver complete type protection at compile-time, compiling down to standard, zero-overhead primitive JS values.",
  },
  "ref-generic-react-components": {
    buggyTitle: "Opaque Component (Loose/Any Prop Array)",
    buggyCode: `// Accepts 'any' items: type safety lost!
interface ListProps {
  items: any[];
  onSelect: (item: any) => void;
}

// React component cannot verify selection item types inside.`,
    buggyDesc:
      "Passing raw arrays to lists disables component type checks. Users can click and trigger missing method crashes.",
    safeTitle: "Luminous Component (Generic React Props)",
    safeCode: `interface ListProps<T> {
  items: T[];
  onSelect: (item: T) => void;
}

// Adaptive generic React spell:
export function List<T>({ items, onSelect }: ListProps<T>) {
  return (
    <ul>
      {items.map((it, i) => (
        <li key={i} onClick={() => onSelect(it)}>Select</li>
      ))}
    </ul>
  );
}`,
    safeDesc:
      "Generic React components adapt their props to matching input lists, securing selection callbacks perfectly.",
  },
  "ref-typed-api-responses": {
    buggyTitle: "Blind Request (Untyped API Fetch Pipeline)",
    buggyCode: `async function fetchRoster() {
  const res = await fetch("/api/wizards");
  const data = await res.json(); // returns 'any'
  return data.toUpperCase(); // ❌ Crash: data is an Array, not string!
}`,
    buggyDesc:
      "By default, fetch and JSON parsing produce wild 'any' shapes, allowing runtime crashes to bypass simple checks.",
    safeTitle: "Sealed Scroll Request (Generic API Wrap)",
    safeCode: `interface Wizard { name: string; power: number; }

async function fetchRoster(): Promise<Wizard[]> {
  const res = await fetch("/api/wizards");
  const data: Wizard[] = await res.json(); // Bound to shape!
  return data;
}

// Compiler blocks mismatch:
// fetchRoster().then(list => list.toUpperCase()); // ❌ Blocked!`,
    safeDesc:
      "Wrapping response streams in typed Promise wrappers shields other components from unexpected server schemas.",
  },
  "ref-typed-forms": {
    buggyTitle: "Blind Form (Untyped Input Elements)",
    buggyCode: `// Loose, unchecked state
const [form, setForm] = useState({
  name: "",
  manaLimit: "infinite" // should be number!
});

// React forms accept any raw garbage strings without check.`,
    buggyDesc:
      "Loose state lets strings leak into number sockets, resulting in nasty arithmetic issues during runtime calculations.",
    safeTitle: "Sealed Form (Typed State & Explicit Mutators)",
    safeCode: `interface SpellForm {
  name: string;
  manaLimit: number;
}

const [form, setForm] = useState<SpellForm>({
  name: "",
  manaLimit: 100
});

// Enforces correct types:
setForm(prev => ({ ...prev, manaLimit: 250 }));`,
    safeDesc:
      "Explicitly annotating useState with model structures locks values within form pipelines, preventing leakage.",
  },
};
