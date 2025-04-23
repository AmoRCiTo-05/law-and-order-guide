
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider>
          <div className="theme-refresh min-h-screen flex w-full">
            <Sidebar />
            <main className="flex-1 overflow-x-hidden">
              <div className="p-4 flex justify-end">
                <ThemeSwitcher />
              </div>
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
            </main>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
