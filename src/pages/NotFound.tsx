
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import MobileMenuButton from "@/components/MobileMenuButton";
import MobileBackButton from "@/components/MobileBackButton";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#2E3440] relative">
      <MobileMenuButton />
      <MobileBackButton />
      <div className="sm:mt-0 mt-16" />
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-[#88C0D0]">404</h1>
        <p className="text-xl text-[#ECEFF4] mb-4">Oops! Page not found</p>
        <button
          onClick={() => navigate("/")}
          className="px-5 py-2 bg-[#3B4252] border border-[#434C5E] rounded text-[#81A1C1] font-semibold hover:bg-[#434C5E] mt-2"
        >
          Return to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
