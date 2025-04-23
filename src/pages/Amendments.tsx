import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import MobileMenuButton from "@/components/MobileMenuButton";
import MobileBackButton from "@/components/MobileBackButton";

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
    <div className="container mx-auto p-2 sm:p-6 bg-[#2E3440] min-h-screen relative">
      <MobileMenuButton />
      <MobileBackButton />
      <div className="sm:mt-0 mt-16" />
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-8 text-[#88C0D0]">Constitutional Amendments</h1>
      <div className="grid gap-4 sm:gap-6">
        {amendments.map((amendment) => (
          <Card key={amendment.number} className="bg-[#3B4252] border border-[#434C5E]">
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-[#81A1C1] text-lg sm:text-xl">{amendment.number} Amendment - {amendment.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0 sm:p-6 sm:pt-0">
              <p className="text-[#ECEFF4] font-bold text-sm sm:text-base">{amendment.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Amendments;
