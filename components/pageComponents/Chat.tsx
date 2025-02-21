"use client";
import { useState } from "react";
import { ChatInput } from "@/components/chatElements/ChatInput";
import { PreviewPanel } from "@/components/PreviewTabs/PreviewCode";

export default function Chat() {
  const [generatedCode, setGeneratedCode] = useState("");
  const [isPreviewOpen, setIsPreviewOpen] = useState(true);

  const handleCodeGeneration = (code: string) => {
    setGeneratedCode(code);
  };

  const togglePreviewPanel = () => {
    setIsPreviewOpen((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 flex flex-col  border-border">
        <div className="flex-1 p-4 overflow-auto">
          <p className="text-muted-foreground text-center">
            Start typing to generate code...
          </p>
        </div>
        <div className="p-4  border-border bg-background">
          <ChatInput />
        </div>
      </div>

      {isPreviewOpen && (
        <div className="w-full md:w-1/2">
          <PreviewPanel code={generatedCode} staticPanel={false} />
        </div>
      )}
    </div>
  );
}
