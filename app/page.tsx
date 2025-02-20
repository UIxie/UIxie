"use client";

import Link from "next/link";
import { Search } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Page() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="absolute top-4 right-4">
        <motion.div
          className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-secondary transition-colors duration-300 cursor-pointer"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold">
            U
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-medium text-foreground">User Name</div>
            <div className="text-xs text-muted-foreground">
              user@example.com
            </div>
          </div>
        </motion.div>
      </div>

      <main className="flex-1 flex flex-col items-center justify-center px-4 text-center max-w-3xl mx-auto w-full gap-8">
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="flex justify-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-16 h-16 text-white"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </motion.div>
          <motion.h1
            className="text-4xl font-bold tracking-tighter text-white"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            UI-xie
          </motion.h1>
          <motion.p
            className="text-3xl font-semibold bg-gradient-to-r from-blue-500 to-blue-600 text-transparent bg-clip-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.3 }}
          >
            Mobile apps in minutes.
          </motion.p>
        </motion.div>

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

        <motion.div
          className="flex flex-wrap gap-2 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.3 }} // Cambiado de 1 a 0.9 y de 0.5 a 0.3
        >
          {[
            "Text Adventure",
            "Instagram Post",
            "Chess Game",
            "Art Gallery",
          ].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + index * 0.1, duration: 0.3 }} // Cambiado de 0.3 a 0.2
            >
              <Button
                variant="secondary"
                size="sm"
                className="transition-all duration-300 hover:bg-blue-500 hover:text-white"
              >
                {item}
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </main>

      <motion.footer
        className="border-t border-border py-4 px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.3 }} // Cambiado de 1.5 a 1.2 y de 0.5 a 0.3
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
    </div>
  );
}
