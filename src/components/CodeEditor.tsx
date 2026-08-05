"use client";

import dynamic from "next/dynamic";

const Editor = dynamic(() => import("@monaco-editor/react"), {
  ssr: false,
  loading: () => (
    <div className="flex-1 min-h-[350px] bg-surface flex items-center justify-center text-xs font-mono text-on-surface-variant/60">
      Loading Code Editor...
    </div>
  ),
});

export default Editor;
