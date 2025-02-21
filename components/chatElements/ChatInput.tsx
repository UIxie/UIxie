"use client";
import type React from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

export function ChatInput() {
  return (
    <form className="relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Textarea
          placeholder="Type your prompt here..."
          className="min-h-[100px] pr-12 resize-none backdrop-blur-sm border rounded-3xl text-white placeholder:text-gray-400 bg-custom-dark ml-3"
        />
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <Button type="submit" size="icon" className="absolute right-4 bottom-4">
          <Send className="h-4 w-4 text-white" />
        </Button>
      </motion.div>
    </form>
  );
}
