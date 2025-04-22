
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const sopItems = [
  {
    title: "What is SOP?",
    content: "Guidelines set by police or government for officers. Includes: Reasonable suspicion, probable cause, chain of command, use of force, etc.",
  },
  {
    title: "What is Code of Conduct?",
    content: "Set of ethical guidelines for officer behavior. Key Points: Respect civilians' rights, inform Miranda rights, maintain professionalism, adhere to dress code, use official vehicles.",
  },
  {
    title: "What is Chain of Command?",
    content: "Hierarchical order of authority in the department. Key Points: Officers must follow senior officers' orders, grievances can be escalated to HR, can file grievances if mistreated by a senior.",
  },
  {
    title: "What is Bonafide and Non-Bonafide Evidence?",
    content: "Bonafide Evidence: Genuine, admissible evidence (e.g., eyewitness, DNA). Non-Bonafide Evidence: Unreliable or fabricated evidence (e.g., hearsay, illegally obtained).",
  },
  {
    title: "Difference Between Frisk and Search?",
    content: "Frisk: Brief pat-down for weapons, safety measure. Search: Thorough examination for criminal evidence, requires warrant or consent.",
  },
  {
    title: "What is Miranda Rights?",
    content: "Rights: You have the right to remain silent. Anything you say can & will be used against you in the court of law. You have the right to have an attorney. If you can't afford one, one will be provided to you by the state 'IF AVAILABLE'. Do You understand your rights? Key Points: Must be read during detainment or arrest.",
  },
  {
    title: "How Many Levels of Force?",
    content: "Officer Presence, Verbalization, Empty Hand Control, Less-Lethal Force, Lethal Force",
  },
  {
    title: "What is De-escalation of Force?",
    content: "Definition: Using communication and non-threatening body language to reduce tension. Key Points: Avoid physical force when possible, prioritize safety and peaceful resolution.",
  },
  {
    title: "What is Escalation of Force?",
    content: "Definition: Gradual increase in force used by officers. Key Points: Starts with verbal commands, then physical restraint, and can escalate to lethal force if needed.",
  },
  {
    title: "What is Match of Force?",
    content: "Definition: Using force that matches the threat posed by suspects. Key Points: Officers match criminal's weapon or capability, can use any weapon in specific high-threat situations.",
  },
  {
    title: "What are 10-Codes?",
    content: "Definition: Short phrases or numbers used for quick communication. Purpose: To improve speed and clarity in radio communications.",
  },
  {
    title: "What are Warrants and Types of Them?",
    content: "Definition: Legal orders from a judge allowing police action. Types: AOS (Arrest on sight), Search and Seizure (Allows property search and seizure of illegal items), Raid Warrant (Seize any illegal items), KOS (Kill on sight for terrorists).",
  },
  {
    title: "What is Bail?",
    content: "Definition: Money paid to release a suspect until trial. Key Points: Magistrate grants bail for misdemeanors, judge for felonies. Guarantor is responsible for the suspect's appearance. Missing court results in a warrant for both suspect and guarantor.",
  },
  {
    title: "Difference Between Detain and Arrest?",
    content: "Detain: Temporary holding for questioning, based on reasonable suspicion. Arrest: Taking into custody with probable cause to charge with a crime.",
  },
  {
    title: "How Many Types of Crimes?",
    content: "Felony: Serious crimes with long sentences (e.g., murder). Misdemeanor: Lesser crimes with shorter sentences (e.g., trespassing). Infraction: Minor offenses, typically fines (e.g., speeding). HUT: Held Until Trial, for serious offenses (e.g., terrorism).",
  },
  {
    title: "Difference Between BOLO and Warrants?",
    content: "BOLO: Alert to watch for a person or object, no authority to arrest. Warrant: Legal document authorizing an arrest, search, or seizure.",
  },
  {
    title: "Use of Taser?",
    content: "Location Restrictions: Avoid wet areas or heights. Usage: No repeated tasering, cooldown between uses, proper warning required. Conditions: Used for fleeing suspects or safety.",
  },
  {
    title: "What is N+2?",
    content: "Definition: A server rule where officers are +2 from the number of suspects. Exceptions: No N+2 for kidnappings, warrants, terrorist attacks, or gang wars. Weapon Use: Officers can use any weapons in these cases.",
  },
  {
    title: "Explain Reasonable Suspicion?",
    content: "Definition: A belief based on facts that someone might be involved in a crime. Key Points: Less than probable cause, can lead to detaining or frisking, but not an arrest.",
  },
  {
    title: "Explain Probable Cause?",
    content: "Definition: Legal justification with evidence to believe a crime has occurred. Example: Smelling marijuana and seeing drugs in plain view gives probable cause for search or arrest.",
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
