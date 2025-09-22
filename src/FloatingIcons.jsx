import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const FloatingIcons = () => {
  return (
    <div className="fixed bottom-5 right-5 flex flex-col gap-3 z-50">
      {/* WhatsApp Icon */}
      <a
        href="https://wa.me/9384576852" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all"
      >
        <FaWhatsapp size={24} />
      </a>

      {/* Call Icon */}
      <a
        href="tel:+919384576852" // Replace with your phone number
        className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition-all"
      >
        <FaPhoneAlt size={24} />
      </a>
    </div>
  );
};

export default FloatingIcons;
