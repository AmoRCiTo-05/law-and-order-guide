
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="container mx-auto p-2 sm:p-6 bg-[#2E3440]">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-[#88C0D0]">Law Enforcement Guide</h1>
      
      <div className="mb-6 text-center px-2 sm:px-0">
        <p className="text-[#ECEFF4] max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          This document was created by AmoRCiTo to assist players interested in police department roleplay on GTA RP servers. Please note that these materials cover the basics and may vary depending on the specific server's rules and guidelines.
        </p>
        <p className="text-[#ECEFF4] mt-4 text-sm sm:text-base">
          If you have any suggestions or improvements, feel free to share them through the feedback form{" "}
          <a 
            href="https://forms.gle/W1mN5pZKLUeyK2uo6" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[#81A1C1] hover:underline"
          >
            Form
          </a>.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <Link to="/amendments" className="block">
          <Card className="transition-transform hover:scale-105 cursor-pointer h-full bg-[#3B4252] border border-[#434C5E]">
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="font-bold text-[#81A1C1] text-lg sm:text-xl">Constitutional Amendments</CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0 sm:p-6 sm:pt-0">
              <p className="text-[#ECEFF4] font-bold text-sm sm:text-base">Essential amendments governing law enforcement practices and civil rights protection.</p>
            </CardContent>
          </Card>
        </Link>

        <Link to="/short-forms" className="block">
          <Card className="transition-transform hover:scale-105 cursor-pointer h-full bg-[#3B4252] border border-[#434C5E]">
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="font-bold text-[#81A1C1] text-lg sm:text-xl">Short Forms</CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0 sm:p-6 sm:pt-0">
              <p className="text-[#ECEFF4] font-bold text-sm sm:text-base">Common abbreviations and codes used in law enforcement communications.</p>
            </CardContent>
          </Card>
        </Link>

        <Link to="/case-laws" className="block">
          <Card className="transition-transform hover:scale-105 cursor-pointer h-full bg-[#3B4252] border border-[#434C5E]">
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="font-bold text-[#81A1C1] text-lg sm:text-xl">Case Laws</CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0 sm:p-6 sm:pt-0">
              <p className="text-[#ECEFF4] font-bold text-sm sm:text-base">Landmark legal decisions and precedents shaping law enforcement procedures.</p>
            </CardContent>
          </Card>
        </Link>

        <Link to="/sop" className="block">
          <Card className="transition-transform hover:scale-105 cursor-pointer h-full bg-[#3B4252] border border-[#434C5E]">
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="font-bold text-[#81A1C1] text-lg sm:text-xl">Standard Operating Procedures</CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0 sm:p-6 sm:pt-0">
              <p className="text-[#ECEFF4] font-bold text-sm sm:text-base">Comprehensive guidelines and protocols for law enforcement operations.</p>
            </CardContent>
          </Card>
        </Link>
        
        <Link to="/ten-codes" className="block">
          <Card className="transition-transform hover:scale-105 cursor-pointer h-full bg-[#3B4252] border border-[#434C5E]">
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="font-bold text-[#81A1C1] text-lg sm:text-xl">10 Codes</CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0 sm:p-6 sm:pt-0">
              <p className="text-[#ECEFF4] font-bold text-sm sm:text-base">Radio communication codes used by law enforcement for efficient messaging.</p>
            </CardContent>
          </Card>
        </Link>

        <Link to="/confusing-topics" className="block">
          <Card className="transition-transform hover:scale-105 cursor-pointer h-full bg-[#3B4252] border border-[#434C5E]">
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="font-bold text-[#81A1C1] text-lg sm:text-xl">Confusing Topics</CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0 sm:p-6 sm:pt-0">
              <p className="text-[#ECEFF4] font-bold text-sm sm:text-base">Clear explanations for complicated legal scenarios and frequently asked questions.</p>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
};

export default Index;
