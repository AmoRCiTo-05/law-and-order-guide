
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import MobileMenuButton from "@/components/MobileMenuButton";
import MobileBackButton from "@/components/MobileBackButton";

const sops = [
  { number: 1, title: "Respect and Professionalism", description: "Maintain respect, discipline and professionalism at all times." },
  { number: 2, title: "Chain of Command", description: "Follow the chain of command for all communications and issues." },
  { number: 3, title: "Uniform", description: "Always wear the appropriate uniform and gear for duty." },
  { number: 4, title: "Use of Force", description: "Use force as a last resort, with proper escalation protocols." },
  { number: 5, title: "Radio Protocol", description: "Use proper radio codes/language and maintain clarity during communication." },
  { number: 6, title: "Evidence Handling", description: "Collect, catalogue, and submit evidence correctly." },
  { number: 7, title: "Documentation", description: "File all necessary reports accurately and promptly." },
  { number: 8, title: "Arrest Procedure", description: "Follow protocol during detainment and arrests. Read rights." },
  { number: 9, title: "Vehicle Pursuits", description: "Attend briefings and obtain approval before initiating pursuits." },
  { number: 10, title: "Medical Attention", description: "Render/Request medical aid for suspects and officers as needed." },
  { number: 11, title: "Scene Security", description: "Secure and control all active scenes to prevent evidence tampering." },
  { number: 12, title: "Backup Requests", description: "Request and provide backup appropriately, using correct urgency codes." },
  { number: 13, title: "Court Appearance", description: "Attend court and testify when summoned." },
  { number: 14, title: "Public Relations", description: "Uphold a positive image of the department with the public." },
  { number: 15, title: "Confidentiality", description: "Do not share sensitive information with unauthorized persons." },
  { number: 16, title: "Training & Continuous Learning", description: "Attend mandatory training sessions and continually improve skills." },
];

const Sop = () => {
  return (
    <div className="container mx-auto p-2 sm:p-6 bg-[#2E3440] min-h-screen relative">
      <MobileMenuButton />
      <MobileBackButton />
      <div className="sm:mt-0 mt-16" />
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-8 text-[#88C0D0]">Standard Operating Procedure</h1>
      <div className="grid gap-4 sm:gap-6">
        {sops.map((sop) => (
          <Card key={sop.number} className="bg-[#3B4252] border border-[#434C5E]">
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-[#81A1C1] text-lg sm:text-xl">{sop.number}. {sop.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0 sm:p-6 sm:pt-0">
              <p className="text-[#ECEFF4] font-bold text-sm sm:text-base">{sop.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Sop;
