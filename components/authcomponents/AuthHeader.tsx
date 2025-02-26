"use client";
import Link from "next/link";
import { motion } from "framer-motion";

interface AuthHeaderProps {
  isSignUp: boolean;
}

export default function AuthHeader({ isSignUp }: AuthHeaderProps) {
  return (
    <div className="text-center space-y-2">
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="mx-auto w-fit"
      >
        <Link href="/">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="w-10 h-10 text-primary mx-auto"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        </Link>
      </motion.div>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-xl font-bold tracking-tight"
      >
        {isSignUp ? "Create an account" : "Sign in to your account"}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-sm text-muted-foreground"
      >
        {isSignUp
          ? "Enter your details to create an account"
          : "Enter your email below to access your account"}
      </motion.p>
    </div>
  );
}
