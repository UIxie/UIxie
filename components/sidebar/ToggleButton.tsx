"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useSidebar } from "@/context/SidebarContext";

export const ToggleButton = () => {
  const { isOpen, toggle } = useSidebar();

  return (
    <motion.div animate={{ x: isOpen ? 0 : 0 }}>
      <Button
        variant="ghost"
        size="sm"
        onClick={toggle}
        className="absolute -right-3 top-20 p-0 w-6 h-12 bg-card border border-border hover:bg-secondary flex items-center justify-center rounded-full"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="chevron-left"
              initial={{ opacity: 0, rotate: 180 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 180 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <ChevronLeft className="w-4 h-4" />
            </motion.div>
          ) : (
            <motion.div
              key="chevron-right"
              initial={{ opacity: 0, rotate: -180 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -180 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <ChevronRight className="w-4 h-4" />
            </motion.div>
          )}
        </AnimatePresence>
      </Button>
    </motion.div>
  );
};
