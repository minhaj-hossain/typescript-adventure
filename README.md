# 🔮 TypeScript Adventure: Type-Weaving Quest

[![React v19](https://img.shields.io/badge/React-19.x-61dafb?logo=react&logoColor=black&style=flat-square)](#)
[![Next.js 16](https://img.shields.io/badge/Next.js-16.x-000000?logo=next.js&style=flat-square)](#)
[![TypeScript v5.x](https://img.shields.io/badge/TypeScript-5.x_(strict)-3178c6?logo=typescript&logoColor=white&style=flat-square)](#)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-4.x-38bdf8?logo=tailwind-css&logoColor=white&style=flat-square)](#)
[![Vitest](https://img.shields.io/badge/Tests-Vitest-6e9f18?logo=vitest&style=flat-square)](#)

Welcome, apprentice! **TypeScript Adventure** is an immersive, gamified, and highly polished interactive learning platform. It is designed to teach developers the art of safe type-weaving—scaling from absolute entry-level parameters to professional-grade, enterprise-ready type declarations and backend schema synthesis.

Bypass dry textbooks and study guilds! Step directly into the boots of an apprentice wizard under the tutelage of **Imran, the Senior Weaver**, alongside elder scribes **Tasnim**, **Minhaj**, and **Jordan**. Together, you will repair broken source matrices, prevent corruptions, and formulate airtight compiler rules inside a real-time, in-browser Monaco Editor backed by live compiler diagnostics.

---

## 🗺️ The Learning Curriculum

The platform features **10 progressive stages** containing carefully calibrated trials. Unlock stages sequentially, earn XP, and secure badges of mastery.

### 🟢 Stage 0: The Onboarding Ritual

_Set up the foundational magic circles to host the type compiler._

- **0-1 Bootstrap**: Install TypeScript compiler parameters in `package.json`.
- **0-2 Strict Mode**: Activate strict security overrides (`strict: true`) in `tsconfig.json`.
- **0-3 Watch Mode**: Wire automatic watch build cycles (`tsc --watch`) in compile scripts.
- **0-4 Diagnostic Scribing**: Interpret and resolve primary compiler errors.

### 🔵 Stage 1: The Primitive Runes

_Harness fundamental, explicit annotations to isolate basic variables._

- **1-1 Primitives**: Convert loose string inputs into explicit numeric and boolean fields.
- **1-2 Inference Engine**: Remove redundant, duplicate annotations and let the compiler infer shapes.
- **1-3 Array Lists**: Define arrays (`type[]`) and map core item groupings.
- **1-4 Object Contracts**: Formulate inline schemas for custom event and wizard records.
- **1-5 Function Contracts**: Type incoming function parameters and direct returns.
- **1-6 Callback Callbacks**: Define arrow-syntax callback type contracts for action handlers.
- **1-7 Unknown, Any & Never**: Master top types (`unknown`), bottom types (`never`), and the escape hatches of `any`.

### 🟣 Stage 2: The Structural Guild

_Eschew repetitive inline declarations by grouping objects into named blueprints._

- **2-1 Interfaces**: Declare reusable, structured object shapes using the `interface` keyword.
- **2-2 Type Aliases**: Set up type definitions for custom primitives and unions using `type`.
- **2-3 Optional & Read-only Props**: Shield fields from reassignment (`readonly`) and flag optionals (`?`).
- **2-4 Inheritance Extensions**: Use the `extends` operator to let specialized interfaces inherit base structures.
- **2-5 Domain Synthesis**: Model high-fidelity domain concepts by bringing structural runes together.
- **2-6 Index Signatures**: Safely type dynamic key/value dictionaries with arbitrary indices.

### 🟡 Stage 3: The Shapeshifter's Path

_Formulate flexible models representing values that change structure or behave differently at runtime._

- **3-1 Unions**: Use pipe-syntax (`A | B`) to allow variables to assume multiple structured shapes.
- **3-2 Literal Unions**: Restrict broad string types to exact, safe literals to prevent spelling errors.
- **3-3 Type Narrowing**: Craft smart runtime guards (`typeof`, property checks) to safely read restricted fields.
- **3-4 Discriminated Unions**: Build perfect tagged-unions featuring a unique literal property as a discriminant.
- **3-5 Assertions**: Master when and how to override the compiler via the `as` keyword safely.
- **3-6 Type Predicates**: Build custom guard functions (`parameter is Type`) to filter unions safely.

### 🟠 Stage 4: The Generic Alchemists

_Craft generic, parameterized helpers that work with any object structure while maintaining 100% type safety._

- **4-1 Generics**: Define parameterized functions (`<T>`) to retain exact return shapes based on inputs.
- **4-2 Constraints**: Limit generic inputs (`<T extends { id: string }>`) to protect underlying logic.
- **4-3 Transformative Utilities**: Leverage utility functions like `Pick`, `Omit`, and `Partial` to dynamically derive sub-types.
- **4-4 Key-Value Records**: Structure dynamic lookups with `Record<K, V>` mappings.
- **4-5 Enums vs. Unions**: Compare runtime enum objects with compile-time literal unions.
- **4-6 Keyof Operator**: Harness `keyof` to dynamically reference property names.

### 🔴 Stage 5: The Frontend Convergence

_Connect high-fidelity React components with generic props and design safe API interfaces._

- **5-1 Generic Components**: Build generic React component props to type-safely render list data.
- **5-2 Standard API Responses**: Structure reusable, generic network payload envelopes.
- **5-3 Air-Tight React Forms**: Guarantee UI inputs match underlying schema interfaces.
- **5-4 Next.js Endpoint Handlers**: Enforce backend type safety in custom server endpoints.
- **5-5 Launch Day**: Resolve a master synthesis ledger to launch your spell portal.
- **5-6 State Managers**: Model robust action reducers with exact type bounds.
- **5-7 Satisfies Operator**: Validate objects without over-constraining narrow literal types.

### 🧬 Stage 6: Advanced Type Gymnastics

_Master compile-time metaprogramming for absolute type certainty._

- **6-1 Conditional Types**: Resolve types dynamically at compile-time (`T extends U ? A : B`).
- **6-2 Template Literals**: Derive dynamic, type-safe string formats programmatically.
- **6-3 Mapped and Infer**: Extract inner generic parameters and map properties recursively.
- **6-4 Utility Extraction**: Harness `Parameters<T>` and `ReturnType<T>` to deconstruct signatures.

### 🛠️ Stage 7: Production Tooling & Compilation

_Scale and configure enterprise systems and advanced compilation mechanisms._

- **7-1 Ambient Declarations**: Teach the compiler about global variables (`window.X`) via ambient `.d.ts` blocks.
- **7-2 Decorators**: Build metaprogramming hooks to intercept method calls.
- **7-3 Monorepos**: Scale to enterprise project structures using TS Project References.

### 🪐 Stage 8: Backend Foundations

_Wire up a real Express service backed by typed routes and runtime validation._

- **8-1 Express Routes**: Ensure controller requests and parameters are strictly typed.
- **8-2 MongoDB Document Contracts**: Formulate type-safe collections with native `ObjectId` structures.
- **8-3 Request Augmentation**: Augment core framework interfaces dynamically (e.g., adding `req.user`).
- **8-4 Better Auth JWT Flow**: Enforce watertight verification signatures.
- **8-5 Async Handler**: Avoid try/catch boilerplates with generic wrappers.
- **8-6 Checkpoint: Booking Route**: Coordinate database queries, middleware safety, and request inputs.
- **8-7 Runtime Validation**: Bridge the compile-time/runtime divide with `zod` schema parsing.

### 🏆 Stage 9: Type Safety Mastery

_Close the last remaining loopholes in your enterprise codebase._

- **9-1 Branded Types**: Prevent similar primitives (like `UserId` vs `EventId`) from being mixed up.
- **9-2 Deep Readonly**: Freeze entire nested object trees recursively.
- **9-3 Algebraic State Machines**: Structure safe state enums to prevent illegal transitions.

---

## 🏗️ Technical Architecture & Modern Stack

The application is structured around a highly responsive, single-page application framework with full type safety:

- **Frontend Core**: **React 19** paired with **TypeScript 5.x (strict mode)** and **Next.js 16** (App Router) for blazing fast development and optimized chunk builds.
- **Styling & Theme**: Modern **Tailwind CSS v4** layout primitives utilizing customized high-contrast slate colors, neon border highlights, and elegant typography.
- **Animations**: **motion/react** (Framer Motion) powering smooth page fades, interactive accordion reveals, level unlocking effects, and badge popups.
- **Code Editor**: A customized instance of **Monaco Editor** with preloaded files, fully customized dark color palettes, strict compiler feedback, and formatting.
- **Progress Persistence**: All progress (XP, badges, unlocked levels, code) is stored locally in the browser via `localStorage`. No login or account required.
- **AI Features**: Optional Gemini-powered error explanations and Oracle chat via Next.js API routes.

---

## 🛡️ High-Integrity Engineering Systems

In addition to core curriculum modules, the application is engineered to handle runtime errors and routing gracefully:

### 1. ⚡ The Leyline Barrier (ErrorBoundary)

A global React `ErrorBoundary` wraps the component tree. If an unexpected runtime anomaly escapes, instead of a blank white screen, the app activates the Leyline Barrier:

- **Pre-emptive Isolation**: Captures the stack trace of the component fracture and displays it in a clean, scrollable dark box.
- **Safe State Recovery**: Provides three immediate actions—**Reload Spell** (immediate refresh), **Return to Realm** (re-routes to home and resets active level states safely), and **Reset Progress** (wipes corrupted state cache and rebuilds from scratch).
- **Guaranteed Resilience**: Fully styled with custom CSS to keep the layout immersive.

### 2. 🌌 The 404 Void Continuum (NotFound Route)

When navigation variables do not align with any valid active screens (e.g., direct route fractures or invalid state restoration):

- Renders a highly detailed 404 Void Continuum viewport.
- Features an animated spin compass indicator representing a wandering compass.
- Incorporates direct, high-contrast actions to warp back to safety (**Warp to Sanctum** or **Open Wisdom Grimoire**).

### 3. 🗺️ Dynamic Cosmic Metadata

The application manages metadata dynamically during tab changes:

- **Contextual Document Titles**: Updates your browser tab title in real-time depending on whether you are editing in the **Sandbox Forge**, studying in the **Grimoire Scroll Library**, or embarking on **Spellcraft Quests**.
- **Adaptive Search Meta**: Modifies `meta[name="description"]` dynamically to maximize search representation.

---

## 🚀 How to Get the Most Out of the Game

1.  **Read the Narratives**:
    Every level begins with a real-world scenario from Imran, the Senior Weaver, or Minhaj, the Senior Engineer. Understanding the _context_ teaches you _why_ a particular TypeScript construct is necessary, not just _how_ to write it.
2.  **Utilize Live Compiler Feedback**:
    Before jumping straight to solutions, hover over red-underlined errors in the code editor or inspect the **Compiler Diagnostics** console to build muscle memory for debugging errors.
3.  **Toggle Solution Guides Strategically**:
    If you get stuck, click the **Solution** button inside the active workspace. It reveals a premium guide detailing:
    - **Visual Concept Breakdowns**: Why the bug occurs.
    - **Surgical Step-by-Step Instructions**: Precise lines to change.
    - **Syntax Code Patterns**: Beautiful snippets showing correct formatting.
    - **Expert Code Tips**: Common pitfalls to avoid.
4.  **Use the Standalone Playground**:
    Found a concept confusing? Toggle over to the **Playground** tab, copy code snippets from the **Library** reference sheet, and see how they compile live!

---

## 🛠️ Run Locally

### Prerequisites

- [Node.js](https://nodejs.org) (v18 or higher recommended)
- A terminal shell

### Steps

1.  **Clone & Extract**: Unpack the project code into your preferred directory.
2.  **Install Dependencies**:
    ```bash
    npm install
    ```
3.  **Configure Environment (Optional)**:
    Copy `.env.example` to `.env` and add your `GEMINI_API_KEY` if you want AI-powered error explanations and Oracle chat.
4.  **Boot Development Server**:
    ```bash
    npm run dev
    ```
5.  **Open Browser**:
    Open [http://localhost:3000](http://localhost:3000) to start your adventure!

---

## 🧪 Testing & Code Quality

```bash
# Run the curriculum integrity test suite
npm test

# Type-check the entire project
npm run typecheck

# Lint the codebase
npm run lint

# Format code with Prettier
npm run format
```

---

## Deploying to Vercel

This project uses **Next.js 16** with the App Router. Deploy with:

```bash
npm run build
```

### Vercel setup

1. Connect the repository to [Vercel](https://vercel.com) — framework preset: **Next.js**.
2. Build command: `npm run build` (also set in `vercel.json`).
3. No custom output directory is required.
4. Add `GEMINI_API_KEY` to Vercel environment variables if you want AI features.

---

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes (Gemini AI)
│   ├── level/[id]/        # Dynamic level pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── providers.tsx      # Context providers
├── components/            # React components
│   ├── CodeEditor.tsx     # Monaco editor wrapper
│   ├── CompletionModal.tsx
│   ├── ConceptDiagram.tsx
│   ├── ErrorBoundary.tsx  # Global error boundary
│   ├── GrimoirePanel.tsx  # Reference library panel
│   ├── Home.tsx           # Landing page with stage timeline
│   ├── KingdomIntro.tsx   # Onboarding intro slides
│   ├── LevelDetailsPage.tsx # Main level workspace
│   ├── Navigation.tsx     # Top nav bar
│   ├── StageCinematicModal.tsx
│   ├── StoryModal.tsx     # Story narrative modal
│   └── WizardSanctum.tsx  # Progress & achievements modal
├── context/
│   └── GameContext.tsx    # Global game state (XP, badges, levels)
├── data/
│   ├── characters.ts      # NPC character definitions
│   ├── illustrations.ts  # Buggy vs safe code examples
│   ├── levels.ts          # All level definitions
│   ├── referenceLibrary.ts # Grimoire reference entries
│   ├── solutions.ts       # Solution explanations per level
│   ├── stageMeta.ts       # Stage metadata & badges
│   └── stages.ts          # Stage definitions
├── lib/
│   ├── monacoTypes.ts     # TypeScript types for Monaco editor
│   ├── narrativeFeedback.ts # Error formatting & prediction questions
│   ├── storyActs.ts       # Story act structure
│   └── tsValidation.ts    # Monaco marker validation
├── curriculum.ts          # Re-exports stages, levels, reference library
├── curriculum.test.ts     # Vitest curriculum integrity tests
├── index.css             # Global styles & Tailwind theme
└── types.ts              # TypeScript type definitions
```

---

_"May your compilers always run green, and your models stay strictly defined!"_ 🔮✨