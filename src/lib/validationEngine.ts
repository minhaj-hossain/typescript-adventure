import ts from "typescript";

export interface ValidationRule {
  requiredKeywords?: string[];
  forbiddenKeywords?: string[];
  requiredPatterns?: string[];
  mustCompile?: boolean;
  type?: string;
  astRules?: {
    requiredDeclarations?: string[];
    requiredProperties?: Record<string, string[]>;
  };
}

export function validateCode(
  code: string,
  rule: ValidationRule,
  editorErrors: string[] = [],
): string[] {
  const errors: string[] = [];

  // 1. Required Keywords
  if (rule.requiredKeywords) {
    for (const kw of rule.requiredKeywords) {
      if (!code.includes(kw)) {
        errors.push(`Missing required statement or type symbol: "${kw}"`);
      }
    }
  }

  // 2. Forbidden Keywords
  if (rule.forbiddenKeywords) {
    for (const kw of rule.forbiddenKeywords) {
      if (code.includes(kw)) {
        errors.push(`Forbidden keyword detected: "${kw}"`);
      }
    }
  }

  // 3. AST Rules
  if (rule.astRules) {
    if (rule.astRules.requiredDeclarations) {
      for (const decl of rule.astRules.requiredDeclarations) {
        if (!code.includes(decl)) {
          errors.push(`Missing required declaration: "${decl}"`);
        }
      }
    }
    if (rule.astRules.requiredProperties) {
      for (const [entity, props] of Object.entries(rule.astRules.requiredProperties)) {
        for (const prop of props) {
          if (!code.includes(prop)) {
            errors.push(`Missing property "${prop}" on ${entity}`);
          }
        }
      }
    }
  }


  // 3. Regex Patterns
  if (rule.requiredPatterns) {
    for (const pattern of rule.requiredPatterns) {
      const regex = new RegExp(pattern);
      if (!regex.test(code)) {
        errors.push(`Code does not match expected structure pattern: ${pattern}`);
      }
    }
  }

  // 4. Editor / Compiler diagnostics
  if (editorErrors.length > 0) {
    errors.push(...editorErrors);
  }

  return errors;
}

export function validateTypeScriptCompilation(code: string): string[] {
  const sourceFile = ts.createSourceFile("temp.ts", code, ts.ScriptTarget.ES2022, true);
  // Basic TS syntax check using compiler host
  const options: ts.CompilerOptions = {
    noEmit: true,
    target: ts.ScriptTarget.ES2022,
    module: ts.ModuleKind.CommonJS,
    strict: true,
  };
  
  const host = ts.createCompilerHost(options);
  const originalGetSourceFile = host.getSourceFile;
  host.getSourceFile = (fileName, languageVersion) => {
    if (fileName === "temp.ts") return sourceFile;
    return originalGetSourceFile(fileName, languageVersion);
  };

  const program = ts.createProgram(["temp.ts"], options, host);
  const diagnostics = ts.getPreEmitDiagnostics(program);

  return diagnostics.map((diag) => {
    const message = ts.flattenDiagnosticMessageText(diag.messageText, "\n");
    if (diag.file && diag.start !== undefined) {
      const { line } = diag.file.getLineAndCharacterOfPosition(diag.start);
      return `Line ${line + 1}: ${message}`;
    }
    return message;
  });
}
