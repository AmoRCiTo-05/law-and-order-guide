
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Index = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-center">Law Enforcement Guide</h1>
      
      <div className="relative mb-8">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        <Input
          type="search"
          placeholder="Search guides and information..."
          className="pl-10 w-full"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Constitutional Amendments</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">Key amendments related to law enforcement and civil rights.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Short Forms</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">Common abbreviations and acronyms used in law enforcement.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Case Laws</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">Important legal precedents and court decisions.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Standard Operating Procedures</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">Guidelines and procedures for law enforcement officers.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
