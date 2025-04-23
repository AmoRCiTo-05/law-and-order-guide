
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link, useLocation } from "react-router-dom";
import MobileNavBar from "@/components/MobileNavBar";

const menuItems = [
  {
    title: "Home",
    path: "/",
    description: "Welcome to the Law Enforcement Guide homepage.",
  },
  {
    title: "10 Codes",
    path: "/ten-codes",
    description: "Radio communication codes used by law enforcement for efficient messaging.",
  },
  {
    title: "Short Forms",
    path: "/short-forms",
    description: "Common abbreviations and codes used in law enforcement communications.",
  },
  {
    title: "Standard Operating Procedure",
    path: "/sop",
    description: "Comprehensive guidelines and protocols for law enforcement operations.",
  },
  {
    title: "Amendments",
    path: "/amendments",
    description: "Essential amendments governing law enforcement practices and civil rights protection.",
  },
  {
    title: "Case Laws",
    path: "/case-laws",
    description: "Landmark legal decisions and precedents shaping law enforcement procedures.",
  },
  {
    title: "Confusing Topics",
    path: "/confusing-topics",
    description: "Clear explanations for complicated legal scenarios and frequently asked questions.",
  },
];

const Index = () => {
  const location = useLocation();
  return (
    <div className="container mx-auto px-2 sm:px-6 py-4 bg-[#2E3440] min-h-screen flex flex-col">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-center text-[#88C0D0] drop-shadow">Law Enforcement Guide</h1>
      <div className="mb-4 sm:mb-6 text-center px-2 sm:px-0">
        <p className="text-[#ECEFF4] max-w-2xl mx-auto text-sm sm:text-base leading-relaxed mb-2">
          This document was created by AmoRCiTo to assist players interested in police department roleplay on GTA RP servers. Please note that these materials cover the basics and may vary depending on the specific server's rules and guidelines.
        </p>
        <p className="text-[#ECEFF4] text-sm sm:text-base">
          If you have any suggestions or improvements, feel free to share them through the feedback form{" "}
          <a 
            href="https://forms.gle/W1mN5pZKLUeyK2uo6" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-bold text-[#81A1C1] hover:underline"
          >
            Form
          </a>.
        </p>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {menuItems.map((item) =>
            item.path !== "/" ? (
              <Link
                to={item.path}
                className="block"
                key={item.title}
                aria-current={location.pathname === item.path ? "page" : undefined}
              >
                <Card className={`transition-transform hover:scale-105 cursor-pointer h-full bg-[#3B4252] border border-[#434C5E] ${location.pathname === item.path ? "ring-2 ring-[#81A1C1]" : ""}`}>
                  <CardHeader className="p-4 sm:p-6">
                    <CardTitle className="font-bold text-[#81A1C1] text-lg sm:text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0 sm:p-6 sm:pt-0">
                    <p className="text-[#ECEFF4] font-medium text-sm sm:text-base">{item.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ) : null
          )}
        </div>
      </div>
      {/* Mobile nav shown only on mobile */}
      <div className="sm:hidden">
        <MobileNavBar />
      </div>
    </div>
  );
};

export default Index;
