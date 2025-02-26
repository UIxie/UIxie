"use client";
import { motion } from "framer-motion";

interface AuthToggleProps {
  isSignUp: boolean;
  onToggle: () => void;
}

export default function AuthToggle({ isSignUp, onToggle }: AuthToggleProps) {
  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="text-center text-sm text-muted-foreground"
    >
      {isSignUp ? "Already have an account? " : "Don't have an account? "}
      <button
        type="button"
        onClick={onToggle}
        className="text-primary hover:text-primary/90 transition-colors"
      >
        {isSignUp ? "Sign in" : "Sign up"}
      </button>
    </motion.p>
  );
}
