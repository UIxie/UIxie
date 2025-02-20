"use client";
import { MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useSidebar } from "@/context/SidebarContext";
import { Chat } from "@/types/sidebar";

interface CurrentChatProps {
  chat: Chat;
}

export const CurrentChat = ({ chat }: CurrentChatProps) => {
  const { isOpen } = useSidebar();

  return (
    <div className="px-4 py-2">
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-1"
          >
            <h2 className="text-sm font-semibold text-muted-foreground">
              Current Chat
            </h2>
            <div className="bg-secondary/50 rounded-lg p-2">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-blue-500" />
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-foreground truncate">
                    {chat.title}
                  </div>
                  <div className="text-xs text-blue-500">{chat.timestamp}</div>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex justify-center"
          >
            <MessageSquare className="w-4 h-4 text-blue-500" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
