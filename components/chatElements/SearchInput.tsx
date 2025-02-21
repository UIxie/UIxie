"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { motion } from "framer-motion";

export const SearchInput = () => {
  return (
    <motion.div
      className="w-full max-w-xl relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.3 }}
    >
      <Input
        type="text"
        placeholder="What do you want to build?"
        className="w-full pl-4 pr-10 py-6 text-lg bg-background border-border transition-all duration-300 focus:ring-2 focus:ring-blue-500"
      />
      <Button
        size="icon"
        variant="ghost"
        className="absolute right-2 top-1/2 -translate-y-1/2 transition-all duration-300 hover:bg-blue-500 hover:text-white"
      >
        <Search className="w-5 h-5" />
      </Button>
    </motion.div>
  );
};
