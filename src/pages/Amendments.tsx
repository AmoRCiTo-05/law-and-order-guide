
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const amendments = [
  {
    number: "1st",
    title: "No Religious Discrimination",
    description: "Protects religious freedom and prevents discrimination based on religious beliefs.",
  },
  {
    number: "2nd",
    title: "Right to bear arms with proper Paperwork",
    description: "Allows citizens to own firearms with appropriate documentation and permits.",
  },
  {
    number: "3rd",
    title: "No Warrant No Entry",
    description: "Protects against unauthorized entry into private property without a warrant.",
  },
  // ... continuing with other amendments
];

const Amendments = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">Constitutional Amendments</h1>
      <div className="grid gap-6">
        {amendments.map((amendment) => (
          <Card key={amendment.number}>
            <CardHeader>
              <CardTitle>{amendment.number} Amendment - {amendment.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{amendment.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Amendments;
