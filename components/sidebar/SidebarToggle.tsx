import { ListCollapse } from "lucide-react";
import { useSidebar } from "@/context/SidebarContext";

export const SidebarToggle = () => {
  const { toggle } = useSidebar();

  return (
    <button
      onClick={toggle}
      className="p-3 w-full flex items-center justify-center hover:bg-gray-700 transition"
    >
      <ListCollapse size={24} />
    </button>
  );
};
