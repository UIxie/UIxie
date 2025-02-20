"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const examples = [
  "Text Adventure",
  "Instagram Post",
  "Chess Game",
  "Art Gallery",
];

export const ExampleButtons = () => {
  return (
    <motion.div
      className="flex flex-wrap gap-2 justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.9, duration: 0.3 }}
    >
      {examples.map((item, index) => (
        <motion.div
          key={item}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 + index * 0.1, duration: 0.3 }}
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
  );
};
