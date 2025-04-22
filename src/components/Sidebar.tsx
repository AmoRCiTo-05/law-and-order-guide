
import { Link } from "react-router-dom";
import {
  Sidebar as SidebarComponent,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Book, File, FileText, Home, Search } from "lucide-react";

const menuItems = [
  { title: "Home", icon: Home, path: "/" },
  { title: "Amendments", icon: FileText, path: "/amendments" },
  { title: "Short Forms", icon: File, path: "/short-forms" },
  { title: "Case Laws", icon: Book, path: "/case-laws" },
  { title: "SOP", icon: Search, path: "/sop" },
];

export function Sidebar() {
  return (
    <SidebarComponent>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.path} className="flex items-center gap-2">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <div className="absolute bottom-4 left-4 text-[#C8C8C9] text-sm opacity-70">
        Made by Aansh (AmoRCiTo)
      </div>
    </SidebarComponent>
  );
}
