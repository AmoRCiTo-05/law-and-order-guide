
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const MobileBackButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Don't show back button on home page
  if (location.pathname === "/") return null;

  return (
    <button
      onClick={() => navigate("/")}
      className="sm:hidden flex items-center gap-2 p-2 pl-3 text-[#81A1C1] bg-transparent font-bold focus:outline-none"
      aria-label="Back to Home"
      style={{ marginTop: "56px" }}
    >
      <ArrowLeft className="h-5 w-5" />
      <span className="text-base">Back to Home</span>
    </button>
  );
};

export default MobileBackButton;
