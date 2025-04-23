
import { useState, useEffect } from "react";
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
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Book, ChevronLeft, File, FileText, Home, MessageSquareText, Search, Siren, Zap } from "lucide-react";

const menuItems = [
  { title: "Home", icon: Home, path: "/" },
  { title: "Amendments", icon: FileText, path: "/amendments" },
  { title: "Short Forms", icon: File, path: "/short-forms" },
  { title: "Case Laws", icon: Book, path: "/case-laws" },
  { title: "SOP", icon: Search, path: "/sop" },
  { title: "10 Codes", icon: MessageSquareText, path: "/ten-codes" },
  { title: "Confusing Topics", icon: Zap, path: "/confusing-topics" },
];

export function Sidebar() {
  const [sidebarWidth, setSidebarWidth] = useState("--sidebar-width");

  // Toggle sidebar size between default and smaller
  const toggleSidebarSize = () => {
    setSidebarWidth(prev => prev === "--sidebar-width" ? "--sidebar-width-icon" : "--sidebar-width");
  };

  return (
    <SidebarComponent className="bg-[hsl(var(--sidebar))]">
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Siren className="h-8 w-8 text-[hsl(var(--logo))]" />
          <span className="text-lg font-bold text-[hsl(var(--logo))] hidden md:inline">PD RP Guide</span>
        </div>
        <button onClick={toggleSidebarSize} className="text-[hsl(var(--sidebarForeground))] p-1 rounded-md hover:bg-[hsl(var(--muted))] transition-colors md:flex items-center justify-center hidden">
          <ChevronLeft className={`h-5 w-5 transition-transform ${sidebarWidth === "--sidebar-width-icon" ? "rotate-180" : ""}`} />
        </button>
        <SidebarTrigger className="md:hidden text-[hsl(var(--sidebarForeground))]" />
      </div>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-[hsl(var(--sidebarForeground))]">Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
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
