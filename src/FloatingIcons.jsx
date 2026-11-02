import { useLocation } from "react-router-dom";
import { FaWhatsapp, FaPhoneAlt, FaLinkedin, FaInstagram } from "react-icons/fa";
import { getBranchInfoByPath, defaultBranchDetails } from "./data/branchDetails";

const baseStyle = {
  backgroundColor: "#fff",
  boxShadow: "0 4px 14px rgba(7, 55, 102, 0.15)",
  transition: "all 0.25s ease",
};

const FloatingIcons = () => {
  const location = useLocation();
  const currentBranch = getBranchInfoByPath(location.pathname) || defaultBranchDetails;

  return (
    <div className="fixed bottom-5 right-5 flex flex-col gap-3 z-50">
      {/* WhatsApp Icon */}
      <a
        href={`https://wa.me/91${currentBranch.phoneRaw || '9384576852'}`}
        aria-label={`Chat on WhatsApp - ${currentBranch.name || 'ThoughtFlows'}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-full"
        style={{ ...baseStyle, color: "#25D366" }}
        onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#E9F9EF"; }}
        onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#fff"; }}
      >
        <FaWhatsapp size={20} />
      </a>

      {/* Call Icon */}
      <a
        href={`tel:${currentBranch.phoneClean || '+919384576852'}`}
        aria-label={`Call ${currentBranch.name || 'ThoughtFlows'}`}
        className="p-3 rounded-full"
        style={{ ...baseStyle, color: "#097D8A" }}
        onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#E6F4F5"; }}
        onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#fff"; }}
      >
        <FaPhoneAlt size={18} />
      </a>

      {/* LinkedIn Icon */}
      <a
        href="https://linkedin.com/company/thoughtflows-medical-coding-academy" aria-label="LinkedIn"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-full"
        style={{ ...baseStyle, color: "#0A66C2" }}
        onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#EAF3FC"; }}
        onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#fff"; }}
      >
        <FaLinkedin size={20} />
      </a>

      {/* Instagram Icon */}
      <a
        href={currentBranch.instagram || "https://www.instagram.com/thought_flows/"}
        aria-label={`Instagram - ${currentBranch.name || 'ThoughtFlows'}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-full"
        style={{ ...baseStyle, color: "#D6307E" }}
        onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#FDEEF3"; }}
        onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#fff"; }}
      >
        <FaInstagram size={20} />
      </a>
    </div>
  );
};

export default FloatingIcons;
