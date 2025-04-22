
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const sopItems = [
  {
    title: "What is SOP?",
    content: "Standard Operating Procedures (SOPs) are guidelines provided/set by police management or government to guides the police officers in their work. These procedures includes various aspects such as identifying reasonable suspicion, establishing probable cause, adhering to the chain of command, managing the escalation and de-escalation of force, ensuring the appropriate level of force, and addressing other operational considerations."
  },
  {
    title: "Code of Ethics vs Code of Conduct",
    content: `
    **Code of Ethics:**
    - Integrity: Officers should always act with honesty and fairness.
    - Respect for Human Rights: Treat all individuals with dignity.
    - Impartiality: Make decisions without bias.
    - Accountability: Be responsible for actions and decisions.
    - Service to the Community: Prioritize community safety.

    **Code of Conduct:**
    - Use of Force: Only use force when absolutely necessary.
    - Duty to Report Misconduct: Report unethical behavior.
    - Professional Appearance: Maintain neat, clean uniform.
    - Confidentiality: Keep sensitive information private.
    - Respect for Authority: Follow lawful orders from supervisors.
    `
  },
  {
    title: "Chain of Command",
    content: "Officers are required to follow orders from their seniors without questioning, demonstrating professionalism. However, officers are only obligated to follow orders related to departmental duties and not personal tasks unrelated to the department. If a senior officer threatens or mistreats an officer, the officer can file a grievance report to the captain or higher authority to address the situation. Additionally, if an officer has an issue with a colleague or senior, they should first seek assistance from a senior officer. If this approach fails, they may escalate the matter to the Human Resources department for resolution."
  },
  {
    title: "Bonafide and Non-Bonafide Evidence",
    content: `
    **Bonafide Evidence:** Genuine, trustworthy evidence admissible in court.
    Examples: Eyewitness testimony, physical evidence like fingerprints or DNA, authenticated documents.

    **Non-Bonafide Evidence:** Evidence not genuine or trustworthy.
    Examples: Hearsay, illegally obtained evidence, fabricated documentation.
    `
  },
  {
    title: "Frisk vs Search",
    content: `
    **Frisk:**
    - Brief pat-down for weapons
    - Requires reasonable suspicion
    - Limited to outer clothing
    - Safety-focused

    **Search:**
    - Thorough examination
    - Requires warrant/probable cause
    - Can include property/belongings
    - Evidence-gathering focused
    `
  },
  {
    title: "Miranda Rights",
    content: `
    Rights that must be read during detainment/arrest and before questioning:
    - Right to remain silent
    - Anything said can be used in court
    - Right to an attorney
    - State will provide attorney if needed
    - Confirmation of understanding rights
    `
  },
  {
    title: "Levels of Force",
    content: `
    1. Officer Presence: Professional demeanor
    2. Verbalization: Calm commands
    3. Empty Hand Control: Physical restraint
    4. Less-Lethal Force: Tasers, batons
    5. Lethal Force: Firearms (serious threats only)
    `
  },
  {
    title: "De-escalation of Force",
    content: "Using communication and strategies to calm situations without physical force. Focus on peaceful resolution through verbal communication, reducing police presence, and maintaining professional demeanor. Main priority is always to de-escalate the situation."
  },
  {
    title: "Escalation of Force",
    content: "Gradual increase in force from verbal commands to physical intervention when necessary. Example: If a civilian draws a weapon during questioning, officer may escalate from verbal to lethal force to neutralize the threat."
  },
  {
    title: "Match of Force",
    content: "Officers match the level of force/equipment to counter threats effectively. Examples include using similar weapons or vehicles to match criminal capabilities."
  },
  {
    title: "10-Codes",
    content: "Short phrases or numbers used for quick radio communication to improve speed and clarity."
  },
  {
    title: "Warrants and Types",
    content: `
    - AOS (Arrest on Sight): Requires high command/DA permission
    - Search & Seizure: Judge approval needed, specific items only
    - Raid Warrant: Judge permission, any illegal items
    - KOS (Kill on Sight): For terrorists only
    `
  },
  {
    title: "Bail",
    content: `
    - Misdemeanors: Magistrate can grant
    - Felonies: Judge approval only
    - Requires guarantor
    - 3x amount of registered charges
    - Ankle monitor required
    `
  },
  {
    title: "Detain vs Arrest",
    content: `
    **Detain:**
    - Temporary hold for questioning
    - Based on reasonable suspicion
    - Limited movement restriction

    **Arrest:**
    - Taking into custody
    - Requires probable cause
    - Full custody and charges
    `
  },
  {
    title: "Types of Crimes",
    content: `
    - Felony: Serious crimes (murder, arson)
    - Misdemeanor: Lesser offenses (trespassing)
    - Infraction: Minor violations (traffic)
    - HUT: Held Until Trial (terrorism)
    `
  },
  {
    title: "BOLO vs Warrants",
    content: `
    **BOLO:**
    - Alert to watch for person/vehicle
    - No arrest authority
    - Information gathering

    **Warrant:**
    - Legal document for action
    - Arrest/search authority
    - Court issued
    `
  },
  {
    title: "Use of Taser",
    content: `
    - Avoid wet areas/heights
    - No continuous use
    - 1-3 minute cooldown
    - Warning required
    - For fleeing suspects
    `
  },
  {
    title: "N+2 Rule",
    content: "Server rule: officers = suspects + 2. Exceptions: government employee kidnapping, warrants, terrorist attacks, gang wars. Officers can use any weapons in these cases."
  },
  {
    title: "Reasonable Suspicion",
    content: "Solid reason to believe criminal activity might be occurring. Less than probable cause, allows for stop/frisk/detainment. Based on specific facts/observations."
  },
  {
    title: "Probable Cause",
    content: "Bonafide evidence of crime commission. Example: smelling marijuana and seeing drugs in plain view during traffic stop. Sufficient for arrest/search."
  },
  {
    title: "Reports/FIR vs Chargesheet",
    content: `
    **Reports/FIR:**
    - Initial incident documentation
    - Investigation needed
    - Complaint filing

    **Chargesheet:**
    - Formal charges
    - Based on evidence
    - Leads to prosecution
    `
  }
];

const Sop = () => {
  return (
    <div className="container mx-auto p-6 bg-black min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-[#FFD700]">Standard Operating Procedures (SOP)</h1>
      <Accordion type="single" collapsible className="w-full space-y-4">
        {sopItems.map((item, index) => (
          <AccordionItem 
            key={index} 
            value={`item-${index}`}
            className="border border-[#FFD700]/20 rounded-lg bg-black/50 overflow-hidden"
          >
            <AccordionTrigger className="px-4 py-3 text-[#FFD700] hover:text-[#FFD700]/80 font-bold">
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="px-4 py-3 text-[#FFD700]/90">
              <div className="prose prose-invert max-w-none">
                {item.content}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Sop;
