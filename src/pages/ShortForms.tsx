
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const shortForms = [
  { abbreviation: "AOS", meaning: "Arrest On Sight" },
  { abbreviation: "BOLO", meaning: "Be on a Lookout" },
  { abbreviation: "CDS", meaning: "Controlled Dangerous Substance" },
  { abbreviation: "CI", meaning: "Confidential Informant" },
  { abbreviation: "DOA", meaning: "Dead On Arrival / Drug Observation Agency" },
  { abbreviation: "DOJ", meaning: "Department of Justice" },
  { abbreviation: "FTD", meaning: "Field Training Department" },
  { abbreviation: "FTO", meaning: "Field Training Officer" },
  { abbreviation: "GTA", meaning: "Grand Theft Auto" },
  { abbreviation: "GSR", meaning: "Gun Shot Residue" },
  { abbreviation: "IAA", meaning: "Internal Affairs Agency" },
  { abbreviation: "IFAKS", meaning: "Individual First Aid Kits" },
  { abbreviation: "KOS", meaning: "Kill On Sight" },
  { abbreviation: "MDT", meaning: "Mobile Data Terminal" },
  { abbreviation: "PIT", meaning: "Pursuit Immobilization/Intervention Technique" },
  { abbreviation: "POI", meaning: "Person of Interest" },
  { abbreviation: "RA", meaning: "Rescue Ambulance" },
  { abbreviation: "UTL", meaning: "Unable to Locate" },
  { abbreviation: "VCB", meaning: "Visual Contact Broken" },
  { abbreviation: "SASP", meaning: "San Andreas State Police" },
  { abbreviation: "SOP", meaning: "Standard Operating Procedure" },
  { abbreviation: "LSPD", meaning: "Los Santos Police Department" },
  { abbreviation: "BCSO", meaning: "Blaine County Sheriffs Office" },
  { abbreviation: "FIB", meaning: "Federal Investigation Bureau" },
  { abbreviation: "SWAT", meaning: "Special Weapons and Tactics" },
  { abbreviation: "FIR", meaning: "First Investigation Report" },
  { abbreviation: "HUT", meaning: "Held Until Trial" }
];

const ShortForms = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-[#FFD700]">Law Enforcement Short Forms</h1>
      <div className="border border-[#FFD700]/20 rounded-lg overflow-hidden bg-black/50">
        <Table>
          <TableHeader>
            <TableRow className="border-b border-[#FFD700]/20">
              <TableHead className="text-[#FFD700] font-bold">Abbreviation</TableHead>
              <TableHead className="text-[#FFD700] font-bold">Meaning</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {shortForms.map((form) => (
              <TableRow key={form.abbreviation} className="hover:bg-black/50 border-b border-[#FFD700]/20">
                <TableCell className="font-bold text-white">{form.abbreviation}</TableCell>
                <TableCell className="text-white">{form.meaning}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ShortForms;
