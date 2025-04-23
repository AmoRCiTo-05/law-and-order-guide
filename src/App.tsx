
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { useEffect } from "react";
import Index from "./pages/Index";
import { Sidebar } from "./components/Sidebar";
import NotFound from "./pages/NotFound";
import Amendments from "./pages/Amendments";
import ShortForms from "./pages/ShortForms";
import CaseLaws from "./pages/CaseLaws";
import Sop from "./pages/Sop";
import TenCodes from "./pages/TenCodes";
import ConfusingTopics from "./pages/ConfusingTopics";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import { useIsMobile } from "./hooks/use-mobile";

const queryClient = new QueryClient();

const AppContent = () => {
  const isMobile = useIsMobile();
  
  // Apply default theme on mount
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "nord";
    const themeEvent = new CustomEvent('themechange', { 
      detail: { theme: storedTheme } 
    });
    window.dispatchEvent(themeEvent);
    
    // Force reapplication of theme
    const root = document.documentElement;
    const body = document.body;
    body.classList.add("theme-refresh");
    
    // Apply theme to all text elements
    setTimeout(() => {
      const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, div, li, td, th');
      textElements.forEach(el => {
        if (!el.getAttribute('style')) {
          (el as HTMLElement).style.color = '';  // Reset to use CSS variables
        }
      });
    }, 100);
  }, []);

  return (
    <SidebarProvider defaultOpen={isMobile ? false : true}>
      <div className="theme-refresh min-h-screen flex w-full">
        <Sidebar />
        <main className="flex-1 overflow-x-hidden bg-[hsl(var(--background))]">
          <div className="p-4 flex justify-end items-center">
            <ThemeSwitcher />
          </div>
          <div className={`px-4 pb-4 md:px-6 ${isMobile ? 'pt-2' : 'pt-4'}`}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/amendments" element={<Amendments />} />
              <Route path="/short-forms" element={<ShortForms />} />
              <Route path="/case-laws" element={<CaseLaws />} />
              <Route path="/sop" element={<Sop />} />
              <Route path="/ten-codes" element={<TenCodes />} />
              <Route path="/confusing-topics" element={<ConfusingTopics />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
