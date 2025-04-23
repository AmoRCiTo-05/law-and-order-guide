
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-center">Law Enforcement Guide</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link to="/amendments" className="block">
          <Card className="transition-transform hover:scale-105 cursor-pointer h-full">
            <CardHeader>
              <CardTitle className="font-bold">Constitutional Amendments</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[hsl(var(--foreground))] font-bold">Essential amendments governing law enforcement practices and civil rights protection.</p>
            </CardContent>
          </Card>
        </Link>

        <Link to="/short-forms" className="block">
          <Card className="transition-transform hover:scale-105 cursor-pointer h-full">
            <CardHeader>
              <CardTitle className="font-bold">Short Forms</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[hsl(var(--foreground))] font-bold">Common abbreviations and codes used in law enforcement communications.</p>
            </CardContent>
          </Card>
        </Link>

        <Link to="/case-laws" className="block">
          <Card className="transition-transform hover:scale-105 cursor-pointer h-full">
            <CardHeader>
              <CardTitle className="font-bold">Case Laws</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[hsl(var(--foreground))] font-bold">Landmark legal decisions and precedents shaping law enforcement procedures.</p>
            </CardContent>
          </Card>
        </Link>

        <Link to="/sop" className="block">
          <Card className="transition-transform hover:scale-105 cursor-pointer h-full">
            <CardHeader>
              <CardTitle className="font-bold">Standard Operating Procedures</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[hsl(var(--foreground))] font-bold">Comprehensive guidelines and protocols for law enforcement operations.</p>
            </CardContent>
          </Card>
        </Link>
        
        <Link to="/ten-codes" className="block">
          <Card className="transition-transform hover:scale-105 cursor-pointer h-full">
            <CardHeader>
              <CardTitle className="font-bold">10 Codes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[hsl(var(--foreground))] font-bold">Radio communication codes used by law enforcement for efficient messaging.</p>
            </CardContent>
          </Card>
        </Link>

        <Link to="/confusing-topics" className="block">
          <Card className="transition-transform hover:scale-105 cursor-pointer h-full">
            <CardHeader>
              <CardTitle className="font-bold">Confusing Topics</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[hsl(var(--foreground))] font-bold">Clear explanations for complicated legal scenarios and frequently asked questions.</p>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
};

export default Index;
