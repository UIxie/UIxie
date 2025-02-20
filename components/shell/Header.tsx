"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="absolute top-4 right-4">
      <motion.div
        className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-secondary transition-colors duration-300 cursor-pointer"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        onClick={toggleMenu}
      >
        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold">
          U
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-sm font-medium text-foreground">User Name</div>
          <div className="text-xs text-muted-foreground">user@example.com</div>
        </div>
      </motion.div>

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <motion.div
          className="absolute top-16 right-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-lg z-10"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          <div className="py-1">
            <button
              className="block w-full text-left px-4 py-2 text-sm text-foreground hover:bg-secondary transition-colors duration-300"
              onClick={() => alert("My Subscription")}
            >
              My Subscription
            </button>
            <button
              className="block w-full text-left px-4 py-2 text-sm text-foreground hover:bg-secondary transition-colors duration-300"
              onClick={() => alert("Settings")}
            >
              Settings
            </button>
            <button
              className="block w-full text-left px-4 py-2 text-sm text-foreground hover:bg-secondary transition-colors duration-300"
              onClick={() => alert("Log Out")}
            >
              Log Out
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};
