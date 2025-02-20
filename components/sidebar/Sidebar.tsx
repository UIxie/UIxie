// components/sidebar/Sidebar.tsx
"use client";
import { motion } from "framer-motion";
import { useSidebar } from "@/context/SidebarContext";
import { Logo } from "./Logo";
import { NewChatButton } from "./NewChatButton";
import { CurrentChat } from "./CurrentChat";
import { RecentChats } from "./RecentChats";
import { ToggleButton } from "./ToggleButton";
import { Chat } from "@/types/sidebar";

export const Sidebar = () => {
  const { isOpen } = useSidebar();

  // Este data podría venir de un custom hook useChats() en el futuro
  const recentChats: Chat[] = [
    { id: 1, title: "Instagram Clone UI", timestamp: "2m ago" },
    { id: 2, title: "Portfolio Website", timestamp: "1h ago" },
    { id: 3, title: "E-commerce Dashboard", timestamp: "2h ago" },
    { id: 4, title: "Mobile App Layout", timestamp: "1d ago" },
  ];

  const currentChat: Chat = {
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
      <Logo />
      <NewChatButton />
      <CurrentChat chat={currentChat} />
      <RecentChats chats={recentChats} />
      <ToggleButton />
    </motion.aside>
  );
};
