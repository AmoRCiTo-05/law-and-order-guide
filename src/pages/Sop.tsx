
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const sopItems = [
  {
    title: "What is SOP?",
    content: "Standard Operating Procedures (SOPs) are guidelines provided by police management or government to guide police officers in their work. These procedures include various aspects such as identifying reasonable suspicion, establishing probable cause, adhering to the chain of command, managing the escalation and de-escalation of force, ensuring the appropriate level of force, and addressing other operational considerations."
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
    - Professional Appearance: Maintain a neat, clean uniform.
    - Confidentiality: Keep sensitive information private.
    - Respect for Authority: Follow lawful orders from supervisors.
    `
  },
  {
    title: "Chain of Command",
    content: "Officers must follow orders from seniors related to departmental duties. If a senior officer threatens or mistreats an officer, a grievance report can be filed to higher authorities. Officers should first seek assistance from a senior officer and can escalate to HR if needed."
  },
  {
    title: "Bonafide and Non-Bonafide Evidence",
    content: `
    **Bonafide Evidence:** Genuine and trustworthy evidence admissible in court.
    Examples: Eyewitness testimony, physical evidence like fingerprints or DNA, authenticated documents.

    **Non-Bonafide Evidence:** Unreliable or inadmissible evidence.
    Examples: Hearsay, illegally obtained evidence, fabricated documentation.
    `
  },
  {
    title: "Difference Between Frisk and Search",
    content: `
    **Frisk:**
    - Brief pat-down to check for weapons
    - Requires reasonable suspicion
    - Focuses on safety
    - Limited to outer clothing

    **Search:**
    - Thorough examination of belongings
    - Requires warrant, probable cause, or consent
    - Aims to find evidence of crime
    - Can include detailed personal and property examination
    `
  },
  {
    title: "Miranda Rights",
    content: `
    Key Rights:
    - Right to remain silent
    - Anything said can be used in court
    - Right to an attorney
    - State will provide an attorney if cannot afford one

    Must be read during detainment or arrest before questioning.
    `
  },
  {
    title: "Levels of Force",
    content: `
    1. Officer Presence: Deterrence through professional demeanor
    2. Verbalization: Calm, non-threatening commands
    3. Empty Hand Control: Physical restraint techniques
    4. Less-Lethal Force: Tasers, batons
    5. Lethal Force: Firearms, used only in serious threat situations
    `
  },
  {
    title: "De-escalation of Force",
    content: "Using communication and non-threatening strategies to calm situations without physical force. Prioritize peaceful resolution through communication, reducing police presence, and maintaining a calm, firm approach."
  },
  {
    title: "Escalation of Force",
    content: "Gradual increase in force from verbal commands to physical restraint and potentially lethal force when a situation becomes critically dangerous. Example: Transitioning from verbal communication to using a taser or firearm when a suspect becomes immediately threatening."
  },
  {
    title: "Match of Force",
    content: "Using tools and tactics equivalent to the threat level. Officers match criminal capabilities, such as using similar weapons or vehicles to neutralize a threat effectively."
  }
];

const Sop = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">Standard Operating Procedures (SOP)</h1>
      <Accordion type="single" collapsible className="w-full">
        {sopItems.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{item.title}</AccordionTrigger>
            <AccordionContent>{item.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Sop;
