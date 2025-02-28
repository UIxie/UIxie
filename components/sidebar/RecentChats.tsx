"use client";
import { MessageSquare, MoreHorizontal } from "lucide-react"; // Importa MoreHorizontal
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useSidebar } from "@/context/SidebarContext";
import { Chat } from "@/types/sidebar";

interface RecentChatsProps {
  chats: Chat[];
}

export const RecentChats = ({ chats }: RecentChatsProps) => {
  const { isOpen } = useSidebar();

  const handleIconClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className="flex-1 overflow-y-auto custom-scrollbar">
      <AnimatePresence mode="wait">
        {isOpen ? (
          <motion.div
            key="expanded"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="px-3 py-2"
          >
            <motion.h2
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="text-sm font-semibold text-muted-foreground mb-2 px-2"
            >
              Recent Chats
            </motion.h2>
            <div className="space-y-1">
              {chats.map((chat, index) => (
                <motion.div
                  key={chat.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * 0.15,
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                >
                  <div className="relative group">
                    <Link
                      href={`/chat/${chat.id}`}
                      className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-secondary transition-colors duration-300"
                    >
                      <MessageSquare className="w-4 h-4 text-muted-foreground group-hover:text-foreground" />
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium truncate text-foreground">
                          {chat.title}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {chat.timestamp}
                        </div>
                      </div>
                    </Link>
                    <div
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer"
                      onClick={(e) => handleIconClick(e, chat.id)} // Maneja el clic en el ícono
                    >
                      <MoreHorizontal className="w-4 h-4 text-muted-foreground hover:text-foreground" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="collapsed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="flex flex-col items-center py-2"
          >
            {chats.map((chat, index) => (
              <motion.div
                key={chat.id}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.5,
                  ease: "easeInOut",
                }}
              >
                <Link
                  href={`/chat/${chat.id}`}
                  className="p-2 hover:bg-secondary rounded-lg transition-colors duration-300 w-full flex justify-center"
                  title={chat.title}
                >
                  <MessageSquare className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
