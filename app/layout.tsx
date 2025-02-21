// RootLayout.tsx
"use client";
import { SidebarProvider } from "@/context/SidebarContext";
import { Sidebar } from "@/components/sidebar/Sidebar";
import "./globals.css";
import { usePathname } from "next/navigation";
import { useSidebar } from "@/context/SidebarContext";

// Creamos un componente wrapper para el contenido principal
const MainContent = ({
  children,
  isAuthRoute,
}: {
  children: React.ReactNode;
  isAuthRoute: boolean;
}) => {
  const { isOpen } = useSidebar();

  return (
    <main
      className={`flex-1 ${!isAuthRoute ? (isOpen ? "ml-64" : "ml-16") : ""}`}
    >
      {children}
    </main>
  );
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAuthRoute = pathname?.startsWith("/auth");

  return (
    <html lang="en">
      <body>
        <SidebarProvider>
          <div className="flex min-h-screen">
            {!isAuthRoute && <Sidebar />}
            <MainContent isAuthRoute={isAuthRoute}>{children}</MainContent>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
