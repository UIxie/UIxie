"use client";
import { motion } from "framer-motion";

export default function SocialDivider() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="flex items-center justify-center space-x-2"
    >
      <div className="w-full border-t border-border" />
      <p className="text-muted-foreground text-sm">Or</p>
      <div className="w-full border-t border-border" />
    </motion.div>
  );
}
