import { useLocation } from "react-router-dom";
import { FaWhatsapp, FaPhoneAlt, FaLinkedin, FaInstagram } from "react-icons/fa";
import { getBranchInfoByPath, defaultBranchDetails } from "./data/branchDetails";

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
        className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all"
      >
        <FaWhatsapp size={20} />
      </a>

      {/* Call Icon */}
      <a
        href={`tel:${currentBranch.phoneClean || '+919384576852'}`}
        aria-label={`Call ${currentBranch.name || 'ThoughtFlows'}`}
        className="text-white p-3 rounded-full shadow-lg transition-all"
        style={{
          background: 'linear-gradient(135deg, #8B5CF6, #A855F7)',
          backgroundSize: '200% 200%',
          animation: 'gradientShift 3s ease infinite'
        }}
        onMouseEnter={(e) => {
          e.target.style.background = 'linear-gradient(135deg, #7C3AED, #9333EA)';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = 'linear-gradient(135deg, #8B5CF6, #A855F7)';
        }}
      >
        <FaPhoneAlt size={18} />
      </a>

      {/* LinkedIn Icon */}
      <a
        href="https://linkedin.com/company/thoughtflows-medical-coding-academy" aria-label="LinkedIn"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white p-3 rounded-full shadow-lg transition-all"
        style={{
          backgroundColor: '#0A66C2'
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = '#084D8A';
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = '#0A66C2';
        }}
      >
        <FaLinkedin size={20} />
      </a>

      {/* Instagram Icon */}
      <a
        href={currentBranch.instagram || "https://www.instagram.com/thought_flows/"}
        aria-label={`Instagram - ${currentBranch.name || 'ThoughtFlows'}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white p-3 rounded-full shadow-lg transition-all"
        style={{
          background: 'linear-gradient(45deg, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5)',
          backgroundSize: '300% 300%',
          animation: 'instagramGradient 3s ease infinite'
        }}
        onMouseEnter={(e) => {
          e.target.style.background = 'linear-gradient(45deg, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5)';
          e.target.style.transform = 'scale(1.1)';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = 'linear-gradient(45deg, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5)';
          e.target.style.transform = 'scale(1)';
        }}
      >
        <FaInstagram size={20} />
      </a>
    </div>
  );
};

export default FloatingIcons;