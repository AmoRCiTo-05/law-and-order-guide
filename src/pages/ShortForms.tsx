
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import MobileMenuButton from "@/components/MobileMenuButton";
import MobileBackButton from "@/components/MobileBackButton";

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
    <div className="container mx-auto p-2 sm:p-6 bg-[#2E3440] min-h-screen relative">
      {/* Menu and back buttons for mobile */}
      <MobileMenuButton />
      <MobileBackButton />
      <div className="sm:mt-0 mt-16" />
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-8 text-[#88C0D0]">Law Enforcement Short Forms</h1>
      <div className="border border-[#434C5E] rounded-lg overflow-hidden bg-[#3B4252] overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="border-b border-[#434C5E]">
              <TableHead className="text-[#81A1C1] font-bold px-2 py-2 sm:px-4 sm:py-3 text-sm sm:text-base">Abbreviation</TableHead>
              <TableHead className="text-[#81A1C1] font-bold px-2 py-2 sm:px-4 sm:py-3 text-sm sm:text-base">Meaning</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {shortForms.map((form) => (
              <TableRow key={form.abbreviation} className="hover:bg-[#434C5E]/50 border-b border-[#434C5E]">
                <TableCell className="font-bold text-[#ECEFF4] px-2 py-2 sm:px-4 sm:py-3 text-sm sm:text-base">{form.abbreviation}</TableCell>
                <TableCell className="text-[#ECEFF4] px-2 py-2 sm:px-4 sm:py-3 text-sm sm:text-base">{form.meaning}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ShortForms;
