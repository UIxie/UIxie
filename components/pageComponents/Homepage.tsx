"use client";
import { Header } from "@/components/shell/Header";
import { SearchInput } from "@/components/search/SearchInput";
import { ExampleButtons } from "@/components/search/ExampleButtons";
import { Footer } from "@/components/shell/Footer";
import { motion } from "framer-motion";

export const Homepage = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
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
        <SearchInput />
        <ExampleButtons />
      </main>
      <Footer />
    </div>
  );
};
