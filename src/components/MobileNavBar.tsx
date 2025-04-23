
import { useLocation, useNavigate } from "react-router-dom";
import { Home, Menu } from "lucide-react";

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

  // Only main sections (excluding the Home nav on the left)
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
      {/* Center nav items as dropdown menu */}
      <div className="flex gap-1">
        {navItems.slice(1).map((item) => (
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
