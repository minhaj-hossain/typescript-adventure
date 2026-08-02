import { ValidationRule } from "../types";

export interface EditorMarker {
  message: string;
  severity: number;
  startLineNumber: number;
}

/** Severity 8 = Error in Monaco */
const MONACO_ERROR = 8;

export function getEditorErrors(markers: EditorMarker[]): string[] {
  return markers
    .filter((m) => m.severity === MONACO_ERROR)
    .map((m) => `Line ${m.startLineNumber}: ${m.message}`);
}

export function mergeValidationErrors(
  keywordErrors: string[],
  editorErrors: string[],
): string[] {
  if (editorErrors.length === 0) return keywordErrors;
  return [...keywordErrors, ...editorErrors.map((e) => `Compiler: ${e}`)];
}

/**
 * Multi-layer validation system.
 * Layer 1: Keyword-based (simple string matching)
 * Layer 2: AST-based (structural pattern matching)
 * Layer 3: TypeScript compilation check (via Monaco markers)
 */
export function validateCode(
  code: string,
  validation: ValidationRule,
  editorErrors: string[],
): string[] {
  const errors: string[] = [];
  const strategy = validation.type || "keyword";

  // Layer 1: Keyword validation (always runs as baseline)
  if (validation.requiredKeywords) {
    for (const keyword of validation.requiredKeywords) {
      if (!code.includes(keyword)) {
        errors.push(`Missing required: \`${keyword}\``);
      }
    }
  }

  if (validation.forbiddenKeywords) {
    for (const keyword of validation.forbiddenKeywords) {
      if (code.includes(keyword)) {
        errors.push(`Forbidden keyword: \`${keyword}\``);
      }
    }
  }

  // Layer 2: AST-based structural validation
  if (strategy === "ast" || strategy === "typescript") {
    const astErrors = validateAST(code, validation);
    errors.push(...astErrors);
  }

  // Layer 3: TypeScript compiler errors from Monaco
  if (strategy === "typescript") {
    errors.push(...editorErrors.map((e) => `Compiler: ${e}`));
  }

  return errors;
}

/**
 * AST-based structural validation using regex-based pattern matching.
 * In a production environment, this would use the TypeScript compiler API.
 */
function validateAST(code: string, validation: ValidationRule): string[] {
  const errors: string[] = [];
  const rules = validation.astRules;
  if (!rules) return errors;

  // Check required declarations (e.g., "interface Event", "type EventStatus")
  if (rules.requiredDeclarations) {
    for (const decl of rules.requiredDeclarations) {
      const pattern = createDeclarationPattern(decl);
      if (!pattern.test(code)) {
        errors.push(`Missing declaration: \`${decl}\``);
      }
    }
  }

  // Check required properties on specific types
  if (rules.requiredProperties) {
    for (const [typeName, properties] of Object.entries(rules.requiredProperties)) {
      const typeBlock = extractTypeBlock(code, typeName);
      if (typeBlock) {
        for (const prop of properties) {
          if (!typeBlock.includes(prop)) {
            errors.push(`\`${typeName}\` is missing property: \`${prop}\``);
          }
        }
      }
    }
  }

  // Check required types are used
  if (rules.requiredTypes) {
    for (const type of rules.requiredTypes) {
      const escapedType = type.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const pattern = new RegExp(`\\b${escapedType}\\b`);
      if (!pattern.test(code)) {
        errors.push(`Type \`${type}\` is not used in the code`);
      }
    }
  }

  // Check forbidden patterns
  if (rules.forbiddenPatterns) {
    for (const pattern of rules.forbiddenPatterns) {
      const escapedPattern = pattern.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const regex = new RegExp(`\\b${escapedPattern}\\b`);
      if (regex.test(code)) {
        errors.push(`Avoid using \`${pattern}\` in your code`);
      }
    }
  }

  return errors;
}

/**
 * Creates a regex pattern to match a TypeScript declaration.
 * e.g., "interface Event" -> /interface\s+Event\b/
 * e.g., "type EventStatus" -> /type\s+EventStatus\b/
 */
function createDeclarationPattern(declaration: string): RegExp {
  const parts = declaration.split(/\s+/);
  if (parts.length < 2) return new RegExp(`\\b${declaration}\\b`);
  
  const keyword = parts[0]; // "interface", "type", "function", etc.
  const name = parts.slice(1).join("\\s+");
  return new RegExp(`\\b${keyword}\\s+${name}\\b`);
}

/**
 * Extracts the body of a type/interface/class declaration from code.
 * Uses a simple brace-matching approach.
 */
function extractTypeBlock(code: string, typeName: string): string | null {
  // Find the declaration
  const declPattern = new RegExp(
    `\\b(interface|type|class)\\s+${typeName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s*(?:extends\\s+\\w+\\s*)?(?:\\{|\\=)`,
  );
  const match = declPattern.exec(code);
  if (!match) return null;

  const startIndex = match.index + match[0].length;
  // The opening brace was already consumed in the match, so we start with braceCount = 1
  let braceCount = 1;
  let blockContent = "";

  for (let i = startIndex; i < code.length; i++) {
    const char = code[i];
    if (char === "{") {
      braceCount++;
    } else if (char === "}") {
      braceCount--;
      if (braceCount === 0) {
        return blockContent;
      }
    }
    blockContent += char;
  }

  return null;
}

/**
 * Validates that the code compiles with TypeScript by checking for
 * common structural issues that Monaco would catch.
 */
export function validateTypeScriptCompilation(code: string): string[] {
  const errors: string[] = [];

  // Check for basic syntax issues
  const lines = code.split("\n");
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const lineNum = i + 1;

    // Check for unclosed strings
    const stringMatches = line.match(/['"`]/g);
    if (stringMatches && stringMatches.length % 2 !== 0) {
      errors.push(`Line ${lineNum}: Unclosed string literal`);
    }

    // Check for obvious type errors
    if (/: string\s*=\s*\d+/.test(line)) {
      errors.push(`Line ${lineNum}: Cannot assign number to string type`);
    }
    if (/: number\s*=\s*['"`]/.test(line)) {
      errors.push(`Line ${lineNum}: Cannot assign string to number type`);
    }
  }

  return errors;
}