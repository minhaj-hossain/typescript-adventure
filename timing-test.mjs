import ts from "typescript";

const code = 'let x: number = "hello";';

console.log("createSourceFile...");
const sourceFile = ts.createSourceFile("temp.ts", code, ts.ScriptTarget.ES2022, true);

const options = {
  noEmit: true,
  target: ts.ScriptTarget.ES2022,
  module: ts.ModuleKind.CommonJS,
  strict: true,
  noLib: false,
};

const t0 = Date.now();
const host = ts.createCompilerHost(options);
console.log("createCompilerHost took", Date.now() - t0, "ms");

const originalGetSourceFile = host.getSourceFile;
host.getSourceFile = (fileName, languageVersion) => {
  if (fileName === "temp.ts") return sourceFile;
  return originalGetSourceFile(fileName, languageVersion);
};

const t1 = Date.now();
const program = ts.createProgram(["temp.ts"], options, host);
console.log("createProgram took", Date.now() - t1, "ms");

const t2 = Date.now();
const diagnostics = ts.getPreEmitDiagnostics(program);
console.log("getPreEmitDiagnostics took", Date.now() - t2, "ms");

console.log("diagnostics:", diagnostics.map((d) => ts.flattenDiagnosticMessageText(d.messageText, "\n")));
console.log("TOTAL", Date.now() - t0, "ms");
