
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
import { Book, File, FileText, Home, Search, Siren } from "lucide-react";

const menuItems = [
  { title: "Home", icon: Home, path: "/" },
  { title: "Amendments", icon: FileText, path: "/amendments" },
  { title: "Short Forms", icon: File, path: "/short-forms" },
  { title: "Case Laws", icon: Book, path: "/case-laws" },
  { title: "SOP", icon: Search, path: "/sop" },
];

export function Sidebar() {
  return (
    <SidebarComponent className="bg-[hsl(var(--sidebar))]">
      <div className="p-4 flex items-center gap-2">
        <Siren className="h-8 w-8 text-[hsl(var(--logo))]" />
        <span className="text-lg font-bold text-[hsl(var(--logo))]">PD RP Guide</span>
      </div>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-[hsl(var(--sidebarForeground))]">Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.path} className="flex items-center gap-2 text-[hsl(var(--sidebarForeground))]">
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
      <div className="absolute bottom-4 left-4 text-[hsl(var(--sidebarForeground))] text-sm opacity-70">
        Made by Aansh (AmoRCiTo)
      </div>
    </SidebarComponent>
  );
}
