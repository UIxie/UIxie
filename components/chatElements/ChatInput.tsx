"use client";
import { useState } from "react"; // Importa useState directamente
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

export function ChatInput({ onSendMessage }: ChatInputProps) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {
    if (inputValue.trim()) {
      onSendMessage(inputValue);
      setInputValue("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      if (!e.shiftKey) {
        e.preventDefault();
        handleSubmit();
      }
    }
  };

  return (
    <form className="relative" onSubmit={(e) => e.preventDefault()}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Textarea
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your prompt here..."
          className="min-h-[100px] pr-12 resize-none backdrop-blur-sm rounded-3xl text-white placeholder:text-gray-400 bg-custom-dark ml-3"
        />
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <Button
          type="button"
          onClick={handleSubmit}
          size="icon"
          className="absolute right-4 bottom-4"
        >
          <Send className="h-4 w-4 text-white" />
        </Button>
      </motion.div>
    </form>
  );
}
