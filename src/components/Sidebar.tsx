
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
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
  useSidebar,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Book, ChevronLeft, File, FileText, Home, MessageSquareText, Search, Siren, Zap } from "lucide-react";

// Order as requested:
const menuItems = [
  { title: "Home", icon: Home, path: "/" },
  { title: "10 Codes", icon: MessageSquareText, path: "/ten-codes" },
  { title: "Short Forms", icon: File, path: "/short-forms" },
  { title: "Standard Operating Procedure", icon: Search, path: "/sop" },
  { title: "Amendments", icon: FileText, path: "/amendments" },
  { title: "Case Laws", icon: Book, path: "/case-laws" },
  { title: "Confusing Topics", icon: Zap, path: "/confusing-topics" },
];

export function Sidebar() {
  const [sidebarWidth, setSidebarWidth] = useState("--sidebar-width");
  const { state, toggleSidebar, open, setOpen } = useSidebar();
  const location = useLocation();

  // Toggle sidebar size between default and smaller
  const toggleSidebarSize = () => {
    setSidebarWidth(prev => prev === "--sidebar-width" ? "--sidebar-width-icon" : "--sidebar-width");
    toggleSidebar();
  };

  return (
    <>
      <SidebarComponent className="bg-[#2E3440]">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Siren className="h-8 w-8 text-[#8FBCBB]" />
            <span className={`text-lg font-bold text-[#8FBCBB] ${state === "collapsed" ? "hidden" : "hidden md:inline"}`}>PD RP Guide</span>
          </div>
          <button 
            onClick={toggleSidebarSize} 
            className="text-[#D8DEE9] p-1 rounded-md hover:bg-[#4C566A] transition-colors flex items-center justify-center"
            aria-label="Toggle sidebar"
          >
            <ChevronLeft className={`h-5 w-5 transition-transform ${state === "collapsed" ? "rotate-180" : ""}`} />
          </button>
        </div>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel className="text-[#D8DEE9]">Navigation</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {menuItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton 
                      asChild 
                      tooltip={item.title}
                      isActive={location.pathname === item.path}
                    >
                      <Link to={item.path} className="flex items-center gap-2 text-[#D8DEE9]">
                        <item.icon className="h-4 w-4" />
                        <span className={state === "collapsed" ? "hidden" : ""}>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <div className={`absolute bottom-4 left-4 text-[#D8DEE9] text-sm opacity-70 ${state === "collapsed" ? "hidden" : ""}`}>
          Made by Aansh (AmoRCiTo)
        </div>
      </SidebarComponent>
      {/* "Rail" to bring sidebar back when collapsed */}
      {state === "collapsed" ? (
        <button
          onClick={toggleSidebar}
          className="fixed top-4 left-0 z-50 h-12 w-3 bg-[#2E3440] hover:bg-[#4C566A] rounded-r-md flex items-center justify-center border-r border-[#8FBCBB] shadow-md"
          aria-label="Open sidebar"
          tabIndex={0}
        >
          <ChevronLeft className="h-5 w-5 text-[#8FBCBB] rotate-180" />
        </button>
      ) : null}
    </>
  );
}
