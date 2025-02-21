"use client";
import { useRouter } from "next/navigation"; // Importar useRouter
import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useSidebar } from "@/context/SidebarContext";

export const NewChatButton = () => {
  const { isOpen } = useSidebar();
  const router = useRouter(); // Obtener el enrutador

  // Función para manejar el clic en el botón
  const handleButtonClick = () => {
    router.push("/chat/"); // Redirigir a /chat/
  };

  return (
    <div className="p-4">
      <Button
        onClick={handleButtonClick} // Asignar la función al evento onClick
        className={`w-full bg-blue-500 hover:bg-blue-600 text-white transition-all duration-500 flex items-center justify-center ${
          !isOpen && "p-2"
        }`}
        size={isOpen ? "lg" : "icon"}
      >
        {/* Contenedor del ícono */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="flex items-center justify-center"
        >
          <PlusCircle className={`w-4 h-4 ${!isOpen && "mx-auto"}`} />
        </motion.div>
        {/* Texto */}
        <AnimatePresence>
          {isOpen && (
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="ml-2"
            >
              New Chat
            </motion.span>
          )}
        </AnimatePresence>
      </Button>
    </div>
  );
};
