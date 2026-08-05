"use client";

import { useState } from "react";
import CodeEditor from "../../components/CodeEditor";

export default function PlaygroundPage() {
  const [code, setCode] = useState(`// Event Kingdom Playground
// Write, experiment, and test TypeScript code freely!

interface EventItem {
  id: string;
  title: string;
  price: number;
  isPublished: boolean;
}

const festival: EventItem = {
  id: "evt_101",
  title: "Grand Kingdom Concert",
  price: 150,
  isPublished: true,
};

console.log(\`[Kingdom App] Registered \${festival.title} (\$\${festival.price})\`);
`);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      <header className="p-4 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
        <div>
          <h1 className="text-lg font-black text-slate-100">TypeScript Playground</h1>
          <p className="text-xs text-slate-400">
            Free sandbox pre-configured with Event Kingdom type environment.
          </p>
        </div>
      </header>
      <main className="flex-1 p-4">
        <div className="h-[75vh] border border-slate-800 rounded-xl overflow-hidden shadow-2xl">
          <CodeEditor
            value={code}
            onChange={(val) => setCode(val || "")}
            defaultLanguage="typescript"
            theme="vs-dark"
          />
        </div>
      </main>
    </div>
  );
}
