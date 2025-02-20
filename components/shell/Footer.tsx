"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <motion.footer
      className="border-t border-border py-4 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.3 }}
    >
      <div className="flex items-center justify-between text-sm text-muted-foreground max-w-7xl mx-auto">
        <div>© 2025, uixie</div>
        <div className="flex items-center gap-4">
          {["Privacy", "Contact Us"].map((item, index) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="#"
                className="hover:text-foreground transition-colors duration-300"
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.footer>
  );
};
