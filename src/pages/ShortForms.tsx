
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const shortForms = [
  { abbreviation: "AOS", meaning: "Arrest On Sight" },
  { abbreviation: "BOLO", meaning: "Be on a Lookout" },
  { abbreviation: "CDS", meaning: "Controlled Dangerous Substance" },
  // Add more short forms here
];

const ShortForms = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">Law Enforcement Short Forms</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Abbreviation</TableHead>
            <TableHead>Meaning</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {shortForms.map((form) => (
            <TableRow key={form.abbreviation}>
              <TableCell className="font-medium">{form.abbreviation}</TableCell>
              <TableCell>{form.meaning}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ShortForms;
