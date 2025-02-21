"use client";
import { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";

interface PreviewPanelProps {
  code: string;
  staticPanel?: boolean;
}

export function PreviewPanel({ code, staticPanel = false }: PreviewPanelProps) {
  const [editorCode, setEditorCode] = useState(code);

  const panelClassName = staticPanel
    ? "h-screen bg-background flex flex-col"
    : "fixed right-0 top-0 h-screen w-[40%] bg-custom-dark z-50 flex flex-col";

  return (
    <div className={panelClassName}>
      <div className="flex items-center justify-between p-4 border-b border-border">
        <h2 className="text-lg font-semibold">Code Panel</h2>
      </div>

      <div className="flex-1 p-4 relative bg-custom-dark">
        <CodeMirror
          value={editorCode}
          height="100%"
          theme={oneDark}
          extensions={[javascript({ jsx: true })]}
          onChange={(value) => setEditorCode(value)}
          className="border-none rounded-md overflow-hidden"
        />
      </div>
    </div>
  );
}
