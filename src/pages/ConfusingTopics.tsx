import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const topics = [
  {
    question: "Q1. Can we continue following a suspect if we see them again after a \"Code 4\" (situation clear)?",
    answer: `Yes — but you can't arrest them just because they have the same clothes or vehicle as used in the crime.
- You can detain and question them if you have a reasonable suspicion.
- If you know their identity and have evidence, you can arrest them if they're in a public place.
- If they're inside a private property, you need a warrant to arrest them.
- Cars are not considered private property.
- To search someone's car, you need a probable cause (a solid legal reason).
- Note: You must have genuine, solid evidence (bonafide evidence).`
  },
  {
    question: "Q2. Can a police officer shoot first?",
    answer: `Yes — according to a famous US case (Tennessee v. Garner), an officer can use deadly force if:
- They genuinely believe the suspect is a serious threat to someone's life or safety.

Note:
After using a weapon, an officer might face an inquiry to prove they acted within their authority.`
  },
  {
    question: "Q3. Can a police officer shoot tires to stop a vehicle?",
    answer: `In real life, shooting tires is generally not allowed.
In roleplay (RP) games or virtual police servers, it depends on the server rules.
- Some allow shooting 1 tire if a suspect switches vehicles.
- Only shoot if your superior officer gives permission, and you have good shooting skills.
- Even then, a court case could follow, so act wisely.`
  },
  {
    question: "Q4. Is abusing or disrespecting a police officer legal under free speech?",
    answer: `- Disrespecting or making fun of a cop (like commenting on their appearance or vehicle) is usually ignored by the law.
- But abusing/cursing (using foul language) is often treated as "fighting words" and not protected.

Example: "I'll beat you up, Officer Ramesh" — this could lead to:
- Verbal assault: Threatening or emotionally hurting someone with words.
- Disorderly conduct: Causing a public disturbance by being loud or offensive.

Note:
These are usually minor charges, but laws can upgrade them to more serious ones by order.`
  },
  {
    question: "Q5. Is a suspect's statement valid in court after being told their rights (Miranda rights)?",
    answer: `- If a suspect is told their rights and agrees to speak, what they say is usually valid in court.
- If later, they deny it or say they were forced, the court will check if they understood their rights.
- If there's a problem, the statement might be rejected.
- Undercover cops don't need to give Miranda warnings before collecting evidence through conversation.`
  },
  {
    question: "Q6. In a fire, if an officer can save only one person — a judge, a mayor, a police chief, or a civilian — who do they save?",
    answer: `The officer should save the civilian first. Their primary duty is to protect ordinary people during emergencies.`
  },
  {
    question: "Q7. Can a cop enter private property if a crime is happening or after a 911 call?",
    answer: `- If a 911 call is confirmed real, officers can enter.
- If an officer sees a crime happening, they can enter immediately (this is called probable cause).
- Always capture evidence with a bodycam and report it.`
  },
  {
    question: "Q8. If Ramesh tells a cop he saw a gun on Arjun, can the officer search Arjun?",
    answer: `Yes — the officer can frisk (pat down) Arjun to check for weapons.
- A frisk is only a quick check over clothes — not a full search.
- If a weapon is found, then a full search can be done based on probable cause.`
  },
  {
    question: "Q9. Is evidence collected illegally (without proper cause or warrant) allowed in court?",
    answer: `No — evidence taken by breaking the Fourth Amendment (illegal searches) is not usually allowed.
- Exception: If the officer acted in good faith (believed they were following the law), the evidence might still be allowed.
- If not, it must be returned, unless it's an illegal item (like a weapon or drugs), which stays confiscated.`
  },
  {
    question: "Q10. What is 'Good Faith' in police work?",
    answer: `Good faith means acting honestly, believing you're following the law, even if you make a mistake.

Example:
Officer Priya has a warrant for one crime, but accidentally finds evidence for another unrelated crime while searching legally. Since she followed the proper process in good faith, the evidence can still be used.`
  },
  {
    question: "Q11. Examples of Genuine (Bonafide) and Fake (Non-Bonafide) Evidence",
    answer: `Bonafide Evidence:
- Eyewitness supported by camera footage or DNA.
- Properly collected fingerprints.
- Official verified documents.
- Expert statements from reliable professionals.
- Voluntary confessions with supporting proof.

Non-Bonafide Evidence:
- Hearsay (second-hand gossip) without proof.
- Evidence taken illegally (like wiretapping).
- Fake or altered documents.
- Unreliable sources like tabloids.
- Irrelevant or unrelated evidence.`
  },
  {
    question: "Q12. Difference between 'Evading' and 'Escaping'",
    answer: `Evading: Avoiding being caught or avoiding responsibility. Example: Arjun drives away from a police check.

Escaping: Physically breaking out or running away. Example: Ramesh escapes from jail.`
  },
  {
    question: "Q13. What does 'Accessory' mean in legal terms?",
    answer: `An accessory is a person who helps with a crime but is not the main criminal.
- Can help before, during, or after the crime.

Example: Priya helps Ramesh hide after he robs a store — she's an accessory.`
  },
  {
    question: "Q14. Can police arrest someone later without a warrant if they have probable cause and know their details?",
    answer: `Yes — if police have probable cause and know the suspect's identity, they can arrest them later without a warrant.`
  },
  {
    question: "Q15. Difference Between Detain and Arrest",
    answer: `Detain:
- Temporary hold for questioning
- Based on reasonable suspicion
- Limited movement restriction

Arrest:
- Taking into custody
- Requires probable cause
- Full custody and charges`
  },
  {
    question: "Q16. BOLO vs Warrant",
    answer: `BOLO (Be On the Lookout)
- Alert to watch for a person/vehicle
- No arrest authority
- Information gathering tool

Warrant
- Legal document allowing arrest or search
- Gives arrest/search authority
- Issued by a court`
  },
  {
    question: "Q17. Reasonable Suspicion vs Probable Cause",
    answer: `Reasonable Suspicion
- A good reason to believe something illegal might be happening
- Lower standard than probable cause
- Allows for stopping, detaining, frisking
- Example: Smelling alcohol during a traffic stop

Probable Cause
- Solid evidence a crime has happened
- Higher standard, needs proof
- Allows for arrest, search, seizure
- Example: Seeing drugs in the car`
  }
];

const ConfusingTopics = () => {
  return (
    <div className="container mx-auto p-4 md:p-6 min-h-screen">
      <div className="flex flex-col mb-6">
        <a href="/" className="back-button mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left">
            <path d="m12 19-7-7 7-7"/>
            <path d="M19 12H5"/>
          </svg>
          <span>Back to Home</span>
        </a>
        <h1 className="text-3xl md:text-4xl font-bold text-[hsl(var(--primary))]">Confusing Topics</h1>
      </div>
      
      <div className="mb-6">
        <p className="text-[hsl(var(--foreground))] text-lg">
          Easy-to-Understand Explanation of Police Laws & Scenarios
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full space-y-4">
        {topics.map((topic, index) => (
          <AccordionItem 
            key={index} 
            value={`item-${index}`}
            className="border border-[hsl(var(--border))] rounded-lg bg-[hsl(var(--card))/50] overflow-hidden"
          >
            <AccordionTrigger className="px-4 py-3 text-[hsl(var(--primary))] hover:text-[hsl(var(--primary))]/80 font-bold">
              {topic.question}
            </AccordionTrigger>
            <AccordionContent className="px-4 py-3 text-[hsl(var(--foreground))]">
              <div className="prose prose-invert max-w-none whitespace-pre-wrap">
                {topic.answer.split('\n').map((line, idx) => (
                  <p key={idx} className="mb-2 text-[hsl(var(--foreground))]">{line}</p>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default ConfusingTopics;
