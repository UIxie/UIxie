"use client";
import type React from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export function ChatInput() {
  return (
    <form className="relative">
      <Textarea
        placeholder="Type your prompt here..."
        className="min-h-[100px] pr-12 resize-none backdrop-blur-sm border rounded-3xl text-white placeholder:text-gray-400 bg-custom-dark"
      />
      <Button type="submit" size="icon" className="absolute right-4 bottom-4">
        <Send className="h-4 w-4 text-white" />
      </Button>
    </form>
  );
}
