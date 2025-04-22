
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
  {
    number: "4th",
    title: "No Warrant No Search & Seizure",
    description: "Prohibits unreasonable searches and seizures without a warrant.",
  },
  {
    number: "5th",
    title: "Protection Against Self-Incrimination",
    description: "Without Evidence a LEO cannot incriminate through interrogation & threats, Directly / Indirectly",
  },
  {
    number: "6th",
    title: "Right to Attorney",
    description: "Guarantees the right to legal representation in criminal cases.",
  },
  {
    number: "7th",
    title: "Right to Trial by a Judge",
    description: "Ensures the right to a fair trial presided over by a judge.",
  },
  {
    number: "8th",
    title: "Protection Against Cruel Punishment",
    description: "No cruel or unusual punishments / not limited to excessive fines",
  },
  {
    number: "9th",
    title: "Unlisted Rights",
    description: "Protects rights not listed in Constitution",
  },
  {
    number: "10th",
    title: "Federal Powers",
    description: "Federal Government possess powers only listed in Constitution",
  },
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
              <p className="text-white font-bold">{amendment.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Amendments;
