export interface Chat {
  id: number;
  title: string;
  timestamp: string;
}

export interface SidebarContextType {
  isOpen: boolean;
  toggle: () => void;
}
