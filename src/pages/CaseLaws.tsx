
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
  {
    title: "Pennsylvania vs Mimms",
    description: "Officers can order people out of vehicles if armed suspicion exists.",
  },
  {
    title: "Wyoming vs Houghton",
    description: "Officers can search belongings if hiding illegal items is suspected.",
  },
  {
    title: "Carrol vs United States",
    description: "No warrant needed with probable cause.",
  },
  {
    title: "Mike Smoore vs LSPD",
    description: "Search & sweep allowed in felony stops for protective custody.",
  },
  {
    title: "Miranda vs Arizona",
    description: "Suspects must be read their Miranda rights.",
  },
  {
    title: "People vs Georgina Williams",
    description: "Undercover statements are admissible in court.",
  },
  {
    title: "People vs Meg Kyrakruz",
    description: "No interrogation without a lawyer present.",
  },
  {
    title: "People vs Cedric Stanfield",
    description: "Possessing an unlicensed firearm is illegal, even if broken.",
  }
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
              <p className="text-white font-bold">{law.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CaseLaws;
