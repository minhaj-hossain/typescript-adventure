export interface MonacoMarker {
  message: string;
  severity: number;
  startLineNumber: number;
}

export interface MonacoEditorInstance {
  addCommand: (key: number, fn: () => void) => void;
}

export interface MonacoInstance {
  editor: {
    getModelMarkers: (filter: object) => MonacoMarker[];
  };
  languages: {
    typescript: {
      typescriptDefaults: { setDiagnosticsOptions: (o: object) => void };
      javascriptDefaults: { setDiagnosticsOptions: (o: object) => void };
    };
  };
  KeyMod: { CtrlCmd: number };
  KeyCode: { Enter: number };
}