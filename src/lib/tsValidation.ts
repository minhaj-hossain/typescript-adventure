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
