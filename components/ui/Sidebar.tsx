"use client";
import React from "react";
import {
  PlusCircle,
  MessageSquare,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useSidebar } from "./SidebarContext";
import { motion, AnimatePresence } from "framer-motion";

const Sidebar = () => {
  const { isOpen, toggle } = useSidebar();
  const recentChats = [
    { id: 1, title: "Instagram Clone UI", timestamp: "2m ago" },
    { id: 2, title: "Portfolio Website", timestamp: "1h ago" },
    { id: 3, title: "E-commerce Dashboard", timestamp: "2h ago" },
    { id: 4, title: "Mobile App Layout", timestamp: "1d ago" },
  ];

  const currentChat = {
    id: 1,
    title: "Instagram Clone UI",
    timestamp: "Active now",
  };

  return (
    <motion.aside
      initial={false}
      animate={{
        width: isOpen ? 256 : 64,
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      className="relative border-r border-border bg-card flex flex-col flex-shrink-0 h-screen"
    >
      {/* Logo */}
      <div className="p-4">
        <motion.div
          animate={{ opacity: 1 }}
          className="flex items-center justify-center"
        >
          {isOpen ? (
            <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              UIxie
            </span>
          ) : (
            <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              U
            </span>
          )}
        </motion.div>
      </div>

      {/* New Chat Button */}
      <div className="p-4">
        <Button
          className={`w-full bg-blue-500 hover:bg-blue-600 text-white transition-all duration-500 ${
            !isOpen && "p-2"
          }`}
          size={isOpen ? "lg" : "icon"}
        >
          <PlusCircle className={`w-4 h-4 ${!isOpen && "mx-auto"}`} />
          <AnimatePresence>
            {isOpen && (
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="ml-2"
              >
                New Chat
              </motion.span>
            )}
          </AnimatePresence>
        </Button>
      </div>

      {/* Current Chat Section */}
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
                      {currentChat.title}
                    </div>
                    <div className="text-xs text-blue-500">
                      {currentChat.timestamp}
                    </div>
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

      {/* Recent Chats */}
      <div className="flex-1 overflow-y-auto">
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
                {recentChats.map((chat, index) => (
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
                    <Link
                      href={`/chat/${chat.id}`}
                      className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-secondary transition-colors duration-300 group"
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
              {recentChats.map((chat, index) => (
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

      {/* Toggle Button */}
      <motion.div animate={{ x: isOpen ? 0 : 0 }}>
        <Button
          variant="ghost"
          size="sm"
          onClick={toggle}
          className="absolute -right-3 top-20 p-0 w-6 h-12 bg-card border border-border hover:bg-secondary flex items-center justify-center rounded-full"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="chevron-left"
                initial={{ opacity: 0, rotate: 180 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 180 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <ChevronLeft className="w-4 h-4" />
              </motion.div>
            ) : (
              <motion.div
                key="chevron-right"
                initial={{ opacity: 0, rotate: -180 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -180 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <ChevronRight className="w-4 h-4" />
              </motion.div>
            )}
          </AnimatePresence>
        </Button>
      </motion.div>
    </motion.aside>
  );
};

export default Sidebar;
