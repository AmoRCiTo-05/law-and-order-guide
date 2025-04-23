
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "10 Codes", path: "/ten-codes" },
  { name: "Short Forms", path: "/short-forms" },
  { name: "Standard Operating Procedure", path: "/sop" },
  { name: "Amendments", path: "/amendments" },
  { name: "Case Laws", path: "/case-laws" },
  { name: "Confusing Topics", path: "/confusing-topics" },
];

import React, { useState } from "react";

const MobileMenuButton = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="sm:hidden fixed left-0 top-0 w-full z-50">
      <div className="flex items-center h-14 bg-[#2E3440] border-b border-[#434C5E] px-2">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              aria-label="Open menu"
              className="rounded-lg p-1 text-[#81A1C1] focus:outline-none hover:bg-[#3B4252]"
            >
              <Menu size={28} />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[240px] bg-[#2E3440] border-r border-[#434C5E] px-0">
            <div className="py-4">
              <div className="px-4 mb-2">
                <h3 className="text-[#D8DEE9] text-lg font-bold">Menu</h3>
              </div>
              <div className="space-y-1">
                {menuItems.map((item) => (
                  <button
                    key={item.path}
                    onClick={() => {
                      navigate(item.path);
                      setOpen(false);
                    }}
                    className={`w-full text-left py-3 px-4 rounded-md font-medium transition-colors ${
                      location.pathname === item.path
                        ? "bg-[#434C5E] text-[#81A1C1]"
                        : "text-[#ECEFF4] hover:bg-[#4C566A]"
                    }`}
                  >
                    <span>{item.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </SheetContent>
        </Sheet>
        <div className="flex-1 text-center">
          <span className="text-lg font-bold text-[#88C0D0] drop-shadow">Law Enforcement Guide</span>
        </div>
      </div>
    </div>
  );
};

export default MobileMenuButton;
