"use client";
import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useSidebar } from "@/context/SidebarContext";

export const NewChatButton = () => {
  const { isOpen } = useSidebar();

  return (
    <div className="p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: 1,
          scale: 1,
          x: isOpen ? 0 : -20, // Mover ligeramente hacia la izquierda cuando está cerrado
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 15,
          duration: 0.3,
        }}
      >
        <Button
          className={`w-full bg-blue-500 hover:bg-blue-600 text-white transition-all duration-500 ${
            !isOpen && "p-2"
          }`}
          size={isOpen ? "lg" : "icon"}
        >
          {/* Icono */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <PlusCircle className={`w-4 h-4 ${!isOpen && "mx-auto"}`} />
          </motion.div>

          {/* Texto */}
          <AnimatePresence>
            {isOpen && (
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="ml-2"
              >
                New Chat
              </motion.span>
            )}
          </AnimatePresence>
        </Button>
      </motion.div>
    </div>
  );
};
