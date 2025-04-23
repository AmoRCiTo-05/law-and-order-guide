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
    <div className="container mx-auto p-2 sm:p-6 bg-[#2E3440]">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-8 text-[#88C0D0]">Case Laws</h1>
      <div className="grid gap-4 sm:gap-6">
        {caseLaws.map((law) => (
          <Card key={law.title} className="bg-[#3B4252] border border-[#434C5E]">
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-[#81A1C1] text-lg sm:text-xl">{law.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0 sm:p-6 sm:pt-0">
              <p className="text-[#ECEFF4] font-bold text-sm sm:text-base">{law.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CaseLaws;
