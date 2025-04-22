
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const caseLaws = [
  {
    title: "Tennessee vs Garner",
    description: "Deadly force allowed if suspect poses serious threat.",
  },
  {
    title: "Terry vs Ohio",
    description: "Stop-and-frisk allowed with reasonable suspicion.",
  },
  // Add more case laws here
];

const CaseLaws = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">Case Laws</h1>
      <div className="grid gap-6">
        {caseLaws.map((law) => (
          <Card key={law.title}>
            <CardHeader>
              <CardTitle>{law.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{law.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CaseLaws;
