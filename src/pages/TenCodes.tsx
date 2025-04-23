import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import MobileMenuButton from "@/components/MobileMenuButton";
import MobileBackButton from "@/components/MobileBackButton";

const tenCodes = [
  { code: "10-2", description: "Reception Good" },
  { code: "10-3", description: "Stop Transmitting" },
  { code: "10-4", description: "Message Received, Understood" },
  { code: "10-6", description: "Change Channel" },
  { code: "10-7", description: "Out of Service" },
  { code: "10-8", description: "In service" },
  { code: "10-9", description: "Repeat Message" },
  { code: "10-10", description: "Negative" },
  { code: "10-11", description: "Traffic Stop" },
  { code: "10-12", description: "Ride-along" },
  { code: "10-13", description: "Shots Fired" },
  { code: "10-14A", description: "Officer Down" },
  { code: "10-14B", description: "EMS Down" },
  { code: "10-15", description: "Suspect/Prisoner in Custody" },
  { code: "10-16", description: "Hospital" },
  { code: "10-19", description: "Return(ing) to Station" },
  { code: "10-20", description: "Location" },
  { code: "10-21", description: "Telephone" },
  { code: "10-22", description: "Disregard" },
  { code: "10-23", description: "Arrived at Scene" },
  { code: "10-25", description: "Meet in person" },
  { code: "10-28", description: "Vehicle Registration Check" },
  { code: "10-29", description: "Warrant Check" },
  { code: "10-29F", description: "Subject Wanted/ Felony" },
  { code: "10-29M", description: "Subject Wanted/ Misdemeanor" },
  { code: "10-29V", description: "Vehicle Wanted" },
  { code: "10-31", description: "Crime in progress" },
  { code: "10-32", description: "Person with a gun" },
  { code: "10-38", description: "Drug Sales" },
  { code: "10-41", description: "Going ON DUTY" },
  { code: "10-42", description: "Going OFF DUTY" },
  { code: "10-47", description: "Injured Person" },
  { code: "10-50", description: "Vehicle Accident" },
  { code: "10-52", description: "Requesting EMS" },
  { code: "10-55", description: "Intoxicated driver" },
  { code: "10-56", description: "Intoxicated person" },
  { code: "10-57", description: "HIT & RUN" },
  { code: "10-60", description: "Stolen Vehicle" },
  { code: "10-66", description: "Suspicious Person" },
  { code: "10-67", description: "GTA/Car Jacking" },
  { code: "10-70", description: "Foot pursuit" },
  { code: "10-71", description: "Shooting" },
  { code: "10-72", description: "Hostage/Hostage situation" },
  { code: "10-76", description: "Enroute" },
  { code: "10-77", description: "Need backup (non-emergency)" },
  { code: "10-78", description: "Need backup (emergency)" },
  { code: "10-79", description: "Estimate time of arrival (ETA)" },
  { code: "10-80", description: "Vehicle pursuit" },
  { code: "10-90A", description: "Bank Robbery" },
  { code: "10-90B", description: "Jewellery Robbery" },
  { code: "10-90C", description: "Store Robbery" },
  { code: "10-90D", description: "House Robbery/Burglary" },
  { code: "10-91", description: "Transport Unit" },
  { code: "10-94", description: "Reckless Driving" },
  { code: "10-98", description: "Prison Break" },
  { code: "10-99", description: "Everyone responds" }
];

const TenCodes = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCodes = tenCodes.filter(
    (code) =>
      code.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      code.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6 min-h-screen bg-[#2E3440] relative">
      <MobileMenuButton />
      <MobileBackButton />
      <div className="sm:mt-0 mt-16" />
      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
        <h1 className="text-4xl font-bold text-[#88C0D0]">10 Codes Reference</h1>
      </div>
      <div className="mb-6">
        <Input
          type="search"
          placeholder="Search codes or descriptions..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-md bg-[#3B4252] text-[#ECEFF4] border-[#434C5E]"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCodes.map((code) => (
          <Card key={code.code} className="transition-all hover:shadow-lg bg-[#3B4252] border border-[#434C5E]">
            <CardHeader className="bg-[#4C566A] py-2 px-4 rounded-t-lg">
              <CardTitle className="text-xl font-bold text-[#88C0D0]">{code.code}</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <p className="text-[#ECEFF4]">{code.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      {filteredCodes.length === 0 && (
        <p className="text-center mt-8 text-[#81A1C1]">
          No codes found matching "{searchTerm}"
        </p>
      )}
    </div>
  );
};

export default TenCodes;
