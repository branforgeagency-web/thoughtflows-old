import { Phone, Building } from "lucide-react";
import { useState } from "react";

export function TeamMember({ name, role, imageUrl, phone, branch, email }) {
  const [isFlipped, setIsFlipped] = useState(false);

  // Function to format phone numbers
  const formatPhoneNumbers = (phoneString) => {
    if (!phoneString) return null;
    
    // Split by comma and clean up each number
    const numbers = phoneString.split(',').map(num => num.trim()).filter(num => num);
    
    // Format each number with +91 prefix
    return numbers.map(num => {
      // Remove any existing +91 or 91 prefix
      let cleanNum = num.replace(/^(\+91|91)/, '').trim();
      // Add +91 prefix
      return `+91 ${cleanNum}`;
    });
  };

  return (
    <div
      className="w-64 h-80 perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front of card */}
        <div className="absolute w-full h-full backface-hidden bg-white rounded-2xl p-6 shadow-lg flex flex-col items-center">
          <div className="relative mb-4 group">
            <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-transparent hover:ring-teal-400 transition-all duration-300">
              <img
                src={imageUrl || "/api/placeholder/200/200"}
                alt={name}
                className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-1">{name}</h3>
          <p className="text-gray-500 mb-6">{role}</p>
          <div className="flex gap-4">{/* Social icons can go here */}</div>
        </div>

        {/* Back of card */}
        <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-6 shadow-lg flex flex-col items-center justify-center rotate-y-180">
          <h3 className="text-xl font-bold text-gray-800 mb-6">{name}</h3>
          <p className="text-gray-500 mb-6">{role}</p>


          <div className="space-y-4 w-full">
            {branch && (
              <div className="flex items-center gap-3">
                <Building className="text-teal-600" size={20} />
                <span className="text-gray-700">{branch}</span>
              </div>
            )}

            {phone && (
              <div className="flex items-start gap-3">
                <Phone className="text-teal-600 mt-1" size={20} />
                <div className="text-gray-700">
                  {formatPhoneNumbers(phone)?.map((formattedNumber, index) => (
                    <div key={index} className="block">
                      {formattedNumber}
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}
