
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const sopItems = [
  {
    title: "What is SOP?",
    content: "Guidelines set by police or government for officers. Includes: Reasonable suspicion, probable cause, chain of command, use of force, etc.",
  },
  {
    title: "What is Code of Conduct?",
    content: "Set of ethical guidelines for officer behavior. Officers must respect civilians' rights, inform Miranda rights, maintain professionalism, and adhere to dress code.",
  },
  // Add more SOP items here
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
