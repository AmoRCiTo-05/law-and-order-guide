
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="container mx-auto p-6 bg-[#2E3440]">
      <h1 className="text-4xl font-bold mb-8 text-center text-[#88C0D0]">Law Enforcement Guide</h1>
      
      <div className="mb-8 text-center">
        <p className="text-[#ECEFF4] max-w-2xl mx-auto text-base leading-relaxed">
          This document was created by AmoRCiTo to assist players interested in police department roleplay on GTA RP servers. Please note that these materials cover the basics and may vary depending on the specific server's rules and guidelines.
        </p>
        <p className="text-[#ECEFF4] mt-4">
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link to="/amendments" className="block">
          <Card className="transition-transform hover:scale-105 cursor-pointer h-full bg-[#3B4252] border border-[#434C5E]">
            <CardHeader>
              <CardTitle className="font-bold text-[#81A1C1]">Constitutional Amendments</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#ECEFF4] font-bold">Essential amendments governing law enforcement practices and civil rights protection.</p>
            </CardContent>
          </Card>
        </Link>

        <Link to="/short-forms" className="block">
          <Card className="transition-transform hover:scale-105 cursor-pointer h-full bg-[#3B4252] border border-[#434C5E]">
            <CardHeader>
              <CardTitle className="font-bold text-[#81A1C1]">Short Forms</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#ECEFF4] font-bold">Common abbreviations and codes used in law enforcement communications.</p>
            </CardContent>
          </Card>
        </Link>

        <Link to="/case-laws" className="block">
          <Card className="transition-transform hover:scale-105 cursor-pointer h-full bg-[#3B4252] border border-[#434C5E]">
            <CardHeader>
              <CardTitle className="font-bold text-[#81A1C1]">Case Laws</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#ECEFF4] font-bold">Landmark legal decisions and precedents shaping law enforcement procedures.</p>
            </CardContent>
          </Card>
        </Link>

        <Link to="/sop" className="block">
          <Card className="transition-transform hover:scale-105 cursor-pointer h-full bg-[#3B4252] border border-[#434C5E]">
            <CardHeader>
              <CardTitle className="font-bold text-[#81A1C1]">Standard Operating Procedures</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#ECEFF4] font-bold">Comprehensive guidelines and protocols for law enforcement operations.</p>
            </CardContent>
          </Card>
        </Link>
        
        <Link to="/ten-codes" className="block">
          <Card className="transition-transform hover:scale-105 cursor-pointer h-full bg-[#3B4252] border border-[#434C5E]">
            <CardHeader>
              <CardTitle className="font-bold text-[#81A1C1]">10 Codes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#ECEFF4] font-bold">Radio communication codes used by law enforcement for efficient messaging.</p>
            </CardContent>
          </Card>
        </Link>

        <Link to="/confusing-topics" className="block">
          <Card className="transition-transform hover:scale-105 cursor-pointer h-full bg-[#3B4252] border border-[#434C5E]">
            <CardHeader>
              <CardTitle className="font-bold text-[#81A1C1]">Confusing Topics</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#ECEFF4] font-bold">Clear explanations for complicated legal scenarios and frequently asked questions.</p>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
};

export default Index;
