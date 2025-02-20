"use client";
import { SidebarProvider } from "@/context/SidebarContext";
import { Sidebar } from "@/components/sidebar/Sidebar";
import "./globals.css";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Obtener la ruta actual
  const pathname = usePathname();

  // Verificar si la ruta contiene "/auth"
  const isAuthRoute = pathname?.startsWith("/auth");

  return (
    <html lang="en">
      <body>
        <SidebarProvider>
          <div className="flex h-screen">
            {!isAuthRoute && <Sidebar />}
            <main className="flex-1">{children}</main>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
