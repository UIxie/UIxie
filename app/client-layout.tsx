"use client";

import { SidebarProvider } from "@/context/SidebarContext";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SidebarProvider>{children}</SidebarProvider>;
}
