"use client";
import { motion } from "framer-motion";
import { useSidebar } from "@/context/SidebarContext";

export const Logo = () => {
  const { isOpen } = useSidebar();

  return (
    <div className="p-4">
      <motion.div
        animate={{ opacity: 1 }}
        className="flex items-center justify-center"
      >
        {isOpen ? (
          <span className="text-2xl font-bold text-blue-800 bg-clip-text">
            UIxie
          </span>
        ) : (
          <span className="text-xl font-bold text-blue-800">U</span>
        )}
      </motion.div>
    </div>
  );
};
