"use client";
import { motion } from "framer-motion";
import { useSidebar } from "@/context/SidebarContext";

export const Logo = () => {
  const { isOpen } = useSidebar();

  return (
    <div className="p-4 flex justify-center">
      {/* Contenedor del logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: 1,
          scale: 1,
          x: 0, // Mantener el logo centrado sin moverlo horizontalmente
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 15,
          duration: 0.3,
        }}
        className="flex items-center justify-center"
      >
        {/* Texto completo cuando la barra lateral está abierta */}
        {isOpen ? (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
            className="text-2xl font-bold text-blue-800 bg-clip-text"
          >
            UIxie
          </motion.span>
        ) : (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="text-xl font-bold text-blue-800"
          >
            U
          </motion.span>
        )}
      </motion.div>
    </div>
  );
};
