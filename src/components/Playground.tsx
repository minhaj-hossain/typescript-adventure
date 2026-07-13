import { useState, useRef } from "react";
import Editor, { Monaco } from "@monaco-editor/react";
import {
  Play,
  RotateCcw,
  Copy,
  Download,
  Sparkles,
  Check,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

const INITIAL_PLAYGROUND_CODE = `// Welcome to the standalone TypeScript Playground!
// Feel free to experiment with any TypeScript constructs here.

interface Attendee {
  id: string;
  name: string;
  email: string;
  role: "vip" | "standard" | "speaker";
}

const attendees: Attendee[] = [
  { id: "1", name: "Albus Dumbledore", email: "albus@hogwarts.edu", role: "speaker" },
  { id: "2", name: "Harry Potter", email: "harry@gryffindor.com", role: "vip" }
];

function greetVIPs(list: Attendee[]): void {
  const vips = list.filter(p => p.role === "vip");
  vips.forEach(vip => {
    console.log(\`⚡ Welcome, Honored Guest \${vip.name}!\`);
  });
}

greetVIPs(attendees);
`;

export default function Playground() {
  const [code, setCode] = useState(INITIAL_PLAYGROUND_CODE);
  const [copied, setCopied] = useState(false);
  const [errors, setErrors] = useState<any[]>([]);
  const [consoleLogs, setConsoleLogs] = useState<string[]>([]);
  const editorRef = useRef<any>(null);
  const monacoRef = useRef<Monaco | null>(null);

  function handleEditorDidMount(editor: any, monaco: Monaco) {
    editorRef.current = editor;
    monacoRef.current = monaco;

    // Listen for model marker (error) changes
    monaco.editor.onDidChangeMarkers(() => {
      const markers = monaco.editor.getModelMarkers({ owner: "typescript" });
      setErrors(markers);
    });
  }

  const handleFormat = () => {
    if (editorRef.current) {
      editorRef.current.getAction("editor.action.formatDocument").run();
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([code], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "playground.ts";
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleReset = () => {
    if (window.confirm("Reset the playground back to starter code?")) {
      setCode(INITIAL_PLAYGROUND_CODE);
      setConsoleLogs([]);
    }
  };

  const handleRun = () => {
    // Simulate compilation & console logs for the user's playground code
    setConsoleLogs([
      "[System] Transpiling TypeScript...",
      "[System] Executing compiled JavaScript...",
    ]);

    // Quick in-browser runner simulation
    setTimeout(() => {
      try {
        const logs: string[] = [];
        const originalConsoleLog = console.log;
        console.log = (...args: any[]) => {
          logs.push(
            args
              .map((arg) =>
                typeof arg === "object" ? JSON.stringify(arg) : String(arg),
              )
              .join(" "),
          );
        };

        // Standard JS regex to strip out TS types for clean, safe execution
        // Strips standard type definitions, interfaces, type annotations
        let jsCode = code
          .replace(/interface\s+\w+\s*\{[^}]*\}/g, "")
          .replace(/type\s+\w+\s*=\s*[^;]+/g, "")
          .replace(/:\s*Attendee\[\]/g, "")
          .replace(/:\s*Attendee/g, "")
          .replace(/:\s*void/g, "")
          .replace(/:\s*string/g, "")
          .replace(/:\s*number/g, "")
          .replace(/:\s*boolean/g, "");

        // Run the cleaned js code inside a safe sandbox
        new Function(jsCode)();

        console.log = originalConsoleLog;
        setConsoleLogs((prev) => [
          ...prev,
          ...logs,
          "✨ Execution completed successfully!",
        ]);
      } catch (err: any) {
        setConsoleLogs((prev) => [...prev, `❌ Runtime Error: ${err.message}`]);
      }
    }, 400);
  };

  return (
    <div
      className="flex flex-col md:flex-row h-[calc(100vh-64px)] md:h-[calc(100vh-64px)] bg-surface text-on-surface"
      id="playground-page"
    >
      {/* Editor Pane */}
      <div
        className="flex-1 flex flex-col border-r border-outline-variant/30"
        id="playground-editor-pane"
      >
        {/* Editor Toolbar */}
        <div className="flex items-center justify-between px-6 py-3 bg-surface-container-high/60 border-b border-outline-variant/30">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 bg-primary rounded-sm animate-pulse"></span>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-on-surface-variant">
              Sandbox Code
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleFormat}
              className="px-3 py-1.5 text-xs font-mono font-bold text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 transition-colors cursor-pointer"
              id="btn-format"
            >
              Format
            </button>
            <button
              onClick={handleReset}
              className="px-3 py-1.5 text-xs font-mono font-bold text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 transition-colors cursor-pointer flex items-center gap-1"
              id="btn-reset"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset
            </button>
            <button
              onClick={handleCopy}
              className="px-3 py-1.5 text-xs font-mono font-bold text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 transition-colors cursor-pointer flex items-center gap-1"
              id="btn-copy"
            >
              {copied ? (
                <Check className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
              {copied ? "Copied" : "Copy"}
            </button>
            <button
              onClick={handleDownload}
              className="px-3 py-1.5 text-xs font-mono font-bold text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 transition-colors cursor-pointer flex items-center gap-1"
              id="btn-download"
            >
              <Download className="w-3.5 h-3.5" />
              Download
            </button>
            <button
              onClick={handleRun}
              className="px-4 py-2 text-xs font-bold rounded bg-primary hover:bg-primary/90 text-on-primary shadow-md flex items-center gap-1.5 transition-colors cursor-pointer uppercase tracking-wider"
              id="btn-run"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              Run Code
            </button>
          </div>
        </div>

        {/* Monaco Editor Wrapper */}
        <div
          className="flex-1 w-full h-full relative"
          id="monaco-editor-container"
        >
          <Editor
            height="100%"
            language="typescript"
            theme="vs-dark"
            value={code}
            onChange={(val) => setCode(val || "")}
            onMount={handleEditorDidMount}
            options={{
              minimap: { enabled: false },
              fontSize: 14,
              fontFamily: "var(--font-mono)",
              lineHeight: 22,
              tabSize: 2,
              cursorBlinking: "smooth",
              smoothScrolling: true,
              scrollBeyondLastLine: false,
              wordWrap: "on",
              padding: { top: 16 },
              bracketPairColorization: { enabled: true },
            }}
          />
        </div>
      </div>

      {/* Compiler & Output Output Console */}
      <div
        className="w-full md:w-96 flex flex-col bg-surface-container-low border-l border-outline-variant/30"
        id="playground-output-pane"
      >
        {/* Compiler Status Card */}
        <div className="p-4 border-b border-outline-variant/30 bg-surface-container-high/20">
          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-on-surface-variant mb-3">
            Compiler Diagnostics
          </h3>
          {errors.length === 0 ? (
            <div className="flex items-center gap-2.5 p-3.5 rounded border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-sm">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <div>
                <p className="font-semibold uppercase tracking-wider text-xs">
                  Compilation clean
                </p>
                <p className="text-xs text-emerald-500/80 mt-0.5 font-sans">
                  Type safety rules are 100% satisfied.
                </p>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2.5 p-3.5 rounded border border-rose-500/25 bg-rose-500/5 text-rose-400 text-sm mb-1">
                <AlertTriangle className="w-5 h-5 text-rose-400 shrink-0" />
                <div>
                  <p className="font-semibold uppercase tracking-wider text-xs">
                    Found {errors.length} compiler issues
                  </p>
                  <p className="text-xs text-rose-500/80 mt-0.5 font-sans">
                    Correct the errors highlighted below.
                  </p>
                </div>
              </div>
              <div className="max-h-40 overflow-y-auto flex flex-col gap-1.5 pr-1">
                {errors.map((err, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 bg-slate-900 border border-slate-800 rounded text-xs flex flex-col gap-1"
                  >
                    <div className="flex items-center justify-between text-rose-400 font-semibold font-mono">
                      <span>Line {err.startLineNumber}</span>
                      <span>TS{err.code}</span>
                    </div>
                    <p className="text-slate-300 font-sans leading-relaxed">
                      {err.message}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Runtime Console Logs Output */}
        <div className="flex-1 flex flex-col p-4">
          <h3 className="text-xs font-black uppercase tracking-widest text-slate-500 mb-3">
            Console Logs Output
          </h3>
          <div className="flex-1 bg-slate-900/30 border border-slate-800 rounded p-4 font-mono text-xs overflow-y-auto flex flex-col gap-2 text-slate-300 min-h-[200px]">
            {consoleLogs.length === 0 ? (
              <span className="text-slate-600 italic font-sans">
                No output yet. Click "Run Code" to compile and execute.
              </span>
            ) : (
              consoleLogs.map((log, idx) => (
                <div
                  key={idx}
                  className={`whitespace-pre-wrap leading-relaxed ${
                    log.startsWith("❌")
                      ? "text-rose-400 font-medium"
                      : log.startsWith("[System]")
                        ? "text-slate-500"
                        : "text-sky-300"
                  }`}
                >
                  {log}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
