"use client";
import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useSidebar } from "@/context/SidebarContext";

export const NewChatButton = () => {
  const { isOpen } = useSidebar();

  return (
    <div className="p-4">
      <Button
        className={`w-full bg-blue-500 hover:bg-blue-600 text-white transition-all duration-500 ${
          !isOpen && "p-2"
        }`}
        size={isOpen ? "lg" : "icon"}
      >
        <PlusCircle className={`w-4 h-4 ${!isOpen && "mx-auto"}`} />
        <AnimatePresence>
          {isOpen && (
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="ml-2"
            >
              New Chat
            </motion.span>
          )}
        </AnimatePresence>
      </Button>
    </div>
  );
};
