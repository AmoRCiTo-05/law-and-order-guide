
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Home, Menu, ChevronLeft, Siren } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { name: "Home", path: "/", icon: Home },
  { name: "10 Codes", path: "/ten-codes" },
  { name: "Short Forms", path: "/short-forms" },
  { name: "SOP", path: "/sop" },
  { name: "Amendments", path: "/amendments" },
  { name: "Case Laws", path: "/case-laws" },
  { name: "Confusing", path: "/confusing-topics" },
];

const MobileNavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#3B4252] border-t border-[#434C5E] z-40 flex items-center justify-between px-2 py-2 shadow md:hidden">
      {/* Home button */}
      <button
        className="flex flex-col items-center gap-0.5 px-3 py-1 rounded-lg text-[#81A1C1] font-bold hover:bg-[#2E3440] transition focus:outline-none"
        aria-label="Back to Home"
        onClick={() => navigate("/")}
      >
        <Home className="h-6 w-6" />
        <span className="text-xs">Home</span>
      </button>
      
      {/* Sidebar drawer */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <button
            className="flex flex-col items-center gap-0.5 px-3 py-1 rounded-lg text-[#81A1C1] font-bold hover:bg-[#2E3440] transition focus:outline-none"
            aria-label="Open navigation menu"
          >
            <Menu className="h-6 w-6" />
            <span className="text-xs">Menu</span>
          </button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[250px] bg-[#2E3440] border-r border-[#434C5E] p-0">
          <div className="p-4 flex items-center justify-between border-b border-[#434C5E]">
            <div className="flex items-center gap-2">
              <Siren className="h-8 w-8 text-[#8FBCBB]" />
              <span className="text-lg font-bold text-[#8FBCBB]">PD RP Guide</span>
            </div>
            <button 
              onClick={() => setOpen(false)}
              className="text-[#D8DEE9] p-1 rounded-md hover:bg-[#4C566A] transition-colors"
              aria-label="Close sidebar"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          </div>
          <div className="py-4">
            <div className="px-4 mb-2">
              <h3 className="text-[#D8DEE9] text-sm font-medium">Navigation</h3>
            </div>
            <div className="space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    navigate(item.path);
                    setOpen(false);
                  }}
                  className={`w-full flex items-center gap-2 py-2 px-4 text-[#D8DEE9] hover:bg-[#4C566A] transition-colors ${
                    location.pathname === item.path ? "bg-[#434C5E] font-medium text-[#81A1C1]" : ""
                  }`}
                  aria-current={location.pathname === item.path ? "page" : undefined}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
          <div className="absolute bottom-4 left-4 text-[#D8DEE9] text-sm opacity-70">
            Made by Aansh (AmoRCiTo)
          </div>
        </SheetContent>
      </Sheet>

      {/* Nav items (compact) */}
      <div className="flex overflow-x-auto gap-1 hide-scrollbar">
        {navItems.slice(1, 5).map((item) => (
          <button
            key={item.name}
            onClick={() => navigate(item.path)}
            className={`flex flex-col items-center px-2 py-1 rounded-md text-xs ${location.pathname === item.path ? "font-bold text-[#81A1C1]" : "text-[#ECEFF4]"} hover:bg-[#2E3440]`}
            aria-current={location.pathname === item.path ? "page" : undefined}
          >
            <span>{item.name}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default MobileNavBar;
