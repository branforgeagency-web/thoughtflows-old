import { useEffect } from "react"
import { TeamMember } from "./TeamMember"
import Awanth from "../images/Profile images/Group 1.png"
import Ashok from "../images/Profile images/Group 2.png"
import Arun from "../images/Profile images/Group 2 copy.png"
import Arputhakumar from "../images/Profile images/Group 2 copy 2.png"
import Anakha from "../images/Profile images/Group 2 copy 3.png"
import Aleena from "../images/Profile images/Group 2 copy 4.png"
import Akshaya from "../images/Profile images/Group 2 copy 5.png"
import Ajai from "../images/Profile images/Group 2 copy 6.png"
import Aswini from "../images/Profile images/Group 2 copy 8.png"
import Atchaya from "../images/Profile images/Group 2 copy 9.png"
import Babu from "../images/Profile images/Group 2 copy 10.png"
import Deva from "../images/Profile images/Group 2 copy 11.png"
import Devi from "../images/Profile images/Group 2 copy 12.png"
import Dharshini from "../images/Profile images/Group 2 copy 13.png"
import Elilarasi from "../images/Profile images/Group 2 copy 14.png"  
import Gayatri from "../images/Profile images/Group 2 copy 15.png"
import Gayathri from "../images/Profile images/Group 2 copy 16.png"
import Jasmin from "../images/Profile images/Group 2 copy 17.png"
import Kalai from "../images/Profile images/Group 2 copy 18.png"  
import Kalaimathi from "../images/Profile images/Group 2 copy 19.png"
import Kanchana from "../images/Profile images/Group 2 copy 20.png"
import Kartheeswari from "../images/Profile images/Group 2 copy 21.png"
import Karthik from "../images/Profile images/Group 2 copy 22.png"
import Karthika from "../images/Profile images/Group 2 copy 23.png"  
import Keerthika from "../images/Profile images/Group 2 copy 24.png"
import Kiruthika from "../images/Profile images/Group 2 copy 25.png"
import Kishore from "../images/Profile images/Group 2 copy 26.png"
import Kowsikan from "../images/Profile images/Group 2 copy 27.png"
import Logeshwaran from "../images/Profile images/Group 2 copy 28.png"  
import Lokesh from "../images/Profile images/Group 2 copy 29.png"          
import Madhumitha from "../images/Profile images/Group 2 copy 30.png"
import Manoj from "../images/Profile images/Group 2 copy 31.png"
import Mohamed from "../images/Profile images/Group 2 copy 32.png"
import Mounika from "../images/Profile images/Group 2 copy 33.png"
import group2copy34 from "../images/Profile images/Group 2 copy 34.png"  
import Pavithra from "../images/Profile images/Group 2 copy 35.png"
import Peemuthannagari from "../images/Profile images/Group 2 copy 36.png"
import group2copy37 from "../images/Profile images/Group 2 copy 37.png"
import Prabhu from "../images/Profile images/Group 2 copy 38.png"  
import Pradheesh from "../images/Profile images/Group 2 copy 39.png"
import Priyadharshini from "../images/Profile images/Group 2 copy 40.png"
import Ram from "../images/Profile images/Group 2 copy 41.png"
import Punitha from "../images/Profile images/Group 2 copy 42.png"
import kumar from "../images/Profile images/Group 2 copy 43.png"
import Reshma from "../images/Profile images/Group 2 copy 44.png"
import Sabnam from "../images/Profile images/Group 2 copy 45.png"
import Sanjay from "../images/Profile images/Group 2 copy 46.png"
import group2copy47 from "../images/Profile images/Group 2 copy 47.png"
import Sasikala from "../images/Profile images/Sasikala.png"
import Sindhu from "../images/Profile images/Group 2 copy 48.png"
import Sindhuja from "../images/Profile images/Group 2 copy 49.png"      
import Srujana from "../images/Profile images/Group 2 copy 50.png"
import Sruthi from "../images/Profile images/Group 2 copy 51.png"
import Subashini from "../images/Profile images/Group 2 copy 52.png"
import Suvarna from "../images/Profile images/Group 2 copy 53.png"
import Subiksha from "../images/Profile images/Group 2 copy 54.png"
import Swetha from "../images/Profile images/Group 2 copy 55.png"  
import thulasi from "../images/Profile images/Group 2 copy 56.png"
import Vaanmathi from "../images/Profile images/Group 2 copy 57.png"  
import Vaishna from "../images/Profile images/Group 2 copy 58.png"
import Veenadhari from "../images/Profile images/Group 2 copy 59.png"
import Vidya from "../images/Profile images/Group 2 copy 60.png"
import Vignesh from "../images/Profile images/Group 2 copy 61.png"
import Vishnupriya from "../images/Profile images/Group 2 copy 62.png"
import group2copy63 from "../images/Profile images/Group 2 copy 63.png"
import Mittu from "../images/Profile images/Mittu - Franchise Partner - Kerala.png"
import BalaMurali from "../images/Profile images/founder.png"
import Banumathy from "../images/Profile images/ceo.png"
import Meta from '../Meta';
import Kobika from "../images/Profile images/Kobika.png"
import Shilpa from "../images/Profile images/Shilpa.png"
import Sreenath from "../images/Profile images/Sreenath.png"
import Kamara from "../images/Profile images/Kamara.png"
import Sobika from "../images/Profile images/Sobika.png"
import Manasa from "../images/Profile images/Manasa.png"
import Pranav from "../images/Profile images/Pranav.png"
import Manojs from "../images/Profile images/Manojs.png"
import Aasifa from "../images/Profile images/aasifa.png"
import Jadav from "../images/Profile images/jadav.png"
import Prasanna from "../images/Profile images/Prasanna.png"
import Rukshar from "../images/Profile images/Ruksar.png"
import basu from "../images/Profile images/basu.png"
import shruthy from "../images/Profile images/shruthy.png"


const profileImages = [     
  BalaMurali, Banumathy, Kalai, Kalaimathi, Kanchana, Kartheeswari, Karthik, Karthika, Keerthika, Kiruthika, Kishore, Kowsikan,
  Logeshwaran, Lokesh, Madhumitha, Manoj, Mohamed, Mounika, group2copy34, Pavithra, Peemuthannagari, group2copy37,
  Prabhu, Pradheesh, Priyadharshini, Ram, Punitha, kumar, Reshma, Sabnam, Sanjay, group2copy47,
  Sindhu, Sindhuja, Srujana, Sruthi, Subashini, Suvarna, Subiksha, Swetha, thulasi, Vaanmathi,
  Vaishna, Veenadhari, Vidya, Vignesh, Vishnupriya, group2copy63
];

const teamMemberData =  [
  {"name": "Mr. BalaMurali", "role": "FOUNDER & MD", "phone": "733 875 3815", "email": "", "Branch": "","image":BalaMurali},
  {"name": "Ms. Bhanu Mathi", "role": "FOUNDER & CEO", "phone": "93845 76852", "email": "", "Branch": "","image":Banumathy},
  {"name": "Mittu", "role": "FRANCHISE PARTNER", "phone": "", "email": "", "Branch": "Kerala","image":Mittu},
  {"name": "Aswini", "role": "FRANCHISE PARTNER", "phone": "", "email": "","Branch": "Kerala","image":Aswini},
  {"name": "Logeshwaran", "role": "FRANCHISE PARTNER", "phone": "81487 32017, 96553 63552", "email": "", "Branch": "Branch Manager of Salem","image":Logeshwaran},
  {"name": "Arun Kumar Pandey", "role": "FRANCHISE PARTNER", "phone": "", "email": "", "Branch": "Branch Manager of Dilsukhnagar","image":Arun},
  {"name": "Ashok Uppara", "role": "FRANCHISE PARTNER", "phone": "", "email": "", "Branch": "Branch Manager of Dilsukhnagar","image":Ashok},
  {"name": "Thulasi", "role": "GENERAL MANAGER", "phone": "78936 82459", "email": "thulasick@thoughtflows.in", "Branch": "","image":thulasi},
  {"name": "Nilanjan Basu", "role": "INDIA HEAD - OPERATIONS & STRATEGIC PARTNERSHIP", "phone": " 81213 45855", "email": "", "Branch": "","image":basu},
  {"name": "Kartheeswari", "role": "OPERATIONAL HEAD", "phone": "95009 87080", "email": "karthik@thoughtflows.in", "Branch": "","image":Kartheeswari},
  {"name": "Jasmin", "role": "REGIONAL HEAD", "phone": "96550 79784", "email": "jasmin@thoughtflows.in", "Branch": "","image":Jasmin},
  {"name": "Vidya", "role": "REGIONAL HEAD", "phone": "97919 74560", "email": "vidya@thoughtflows.in", "Branch": "","image":Vidya},
  {"name": "Lokesh Babu", "role": "REGIONAL HEAD", "phone": "8790424835", "email": "lokesh@thoughtflows.in", "Branch": "","image":Lokesh},
  {"name": "Manoj", "role": "TRAINING DEPARTMENT HEAD", "phone": "9629417645", "email": "manojs@thoughtflows.in", "Branch": "","image":Manoj},
  {"name": "Keerthika", "role": "TRAINING MANAGER", "phone": "9600655803", "email": "keerthisakthi03@gmail.com", "Branch": "","image":Keerthika},
  {"name": "Pavithra", "role": "TRAINING MANAGER", "phone": "7418578160", "email": "pavithra@thoughtflows.in", "Branch": "","image":Pavithra},
  {"name": "Prasanna", "role": "TRAINER", "phone": "9618226640", "email": "prasannan@thoughtflows.in", "Branch": "","image":Prasanna},
  {"name": "Sasikala", "role": "TRAINER", "phone": "", "email": "", "Branch": "","image":Sasikala},
  {"name": "Kalaimathi", "role": "TRAINER", "phone": "8870193124", "email": "", "Branch": "","image":Kalaimathi},
  {"name": "Vaanmathi", "role": "TRAINER", "phone": "8883656915", "email": "vanmathi@thoughtflows.in", "Branch": "","image":Vaanmathi},
  {"name": "Devi Kiruba", "role": "TRAINER", "phone": "", "email": "devik@thoughtflows.in", "Branch": "","image":Devi},
  {"name": "Veenadhari", "role": "TRAINER", "phone": "8977507230", "email": "veenadharithoughtflows@gmail.com", "Branch": "Branch Manager of Vizag","image":Veenadhari},
  {"name": "Aleena Susan JG", "role": "TRAINER", "phone": "85902 18123", "email": "aleenasusanJ@thoughtflows.in", "Branch": "","image":Aleena},
  {"name": "Ram Balaji", "role": "TRAINER", "phone": "", "email": "rambalaji@thoughtflows.in", "Branch": "","image":Ram},
  {"name": "Priyadharshini", "role": "TRAINER", "phone": "", "email": "", "Branch": "","image":Priyadharshini},
  {"name": "Mounika", "role": "TRAINER", "phone": "7075263848", "email": "mounikav@thoughtflows.in", "Branch": "","image":Mounika},
  {"name": "Pooja Jadav", "role": "TRAINER", "phone": "9346194108", "email": "poojajadhav@thoughtflows.in", "Branch": "","image":Jadav},
  {"name": "Kobika", "role": "TRAINER", "phone": "", "email": "", "Branch": "","image":Kobika},
  {"name": "Aashifa", "role": "TRAINER", "phone": "", "email": "", "Branch": "","image":Aasifa},
  {"name": "Shilpa", "role": "TRAINER", "phone": "", "email": "", "Branch": "","image":Shilpa},
  // {"name": "Elilarasi", "role": "TRAINER", "phone": "", "email": "", "Branch": "","image":Elilarasi},
  {"name": "Gayathri", "role": "BRANCH HEAD", "phone": "8807510359", "email": "gayathrib@thoughtflows.in", "Branch": "","image":Gayatri},
  {"name": "Sruthi", "role": "BRANCH HEAD", "phone": "8438974736", "email": "sruthig@thoughtflows.in", "Branch": "","image":Sruthi},
  {"name": "Awanth", "role": "BRANCH HEAD", "phone": "9048023242", "email": "aswanth@thoughtflows.in", "Branch": "Regional Head – Kerala","image":Awanth},
  {"name": "Swetha", "role": "TA - Team Lead", "phone": "8438939806", "email": "swethac@thoughtflows.in", "Branch": "TA - Team Lead","image":Swetha},
  {"name": "Anakha Suresh", "role": "TEAM LEAD", "phone": "7306388099", "email": "anakhas@thoughtflows.in", "Branch": "HR - Team Lead","image":Anakha},
  // {"name": "Karthika", "role": "TEAM LEAD", "phone": "", "email": "", "Branch": "HR - Team Lead","image":Karthika},
  {"name": "Vaishna", "role": "TEAM LEAD", "phone": "7736469198", "email": "vaishnas@thoughtflows.in", "Branch": "Trainer - Team Lead","image":Vaishna},
  {"name": "Sindhuja", "role": "TEAM LEAD", "phone": "90302 33115", "email": "", "Branch": "HR - Team Lead","image":Sindhuja},
  {"name": "Kalai Selvi", "role": "TEAM LEAD", "phone": "8122854228", "email": "kalaiselvic@thoughtflows.in", "Branch": "HR - Team Lead","image":Kalai},
  {"name": "Sindhu Thakaiya", "role": "PROCESS COACH", "phone": "8807765495", "email": "sindhus@thoughtflows.in", "Branch": "","image":Sindhu},
  {"name": "Punitha", "role": "HR EXECUTIVE", "phone": "+91 78458 28547", "email": "punithac@thoughtflows.in", "Branch": "","image":Punitha},
  {"name": "Vignesh", "role": "HR EXECUTIVE", "phone": "91 7396213531", "email": "vigneshp@thoughtflows.in", "Branch": "","image":Vignesh},
  {"name": "Reshma Jenifar", "role": "HR EXECUTIVE", "phone": "7200603257", "email": "reshmaj@thoughtflows.in", "Branch": "","image":Reshma},
  {"name": "Peemuthannagari Supraja", "role": "HR EXECUTIVE", "phone": "8015108186", "email": "suprajap@thoughtflows.in", "Branch": "","image":Peemuthannagari},
  {"name": "Sabnam Banu", "role": "HR EXECUTIVE", "phone": "6381960026", "email": "mohameds@thoughtflows.in", "Branch": "","image":Sabnam},
  {"name": "Srujana Erothu", "role": "HR EXECUTIVE", "phone": "8074729024", "email": "srujanaerothu@thoughtflows.in", "Branch": "","image":Srujana},
  {"name": "Dharshini", "role": "HR EXECUTIVE", "phone": "9944484356", "email": "dharshinis@thoughtflows.in", "Branch": "","image":Dharshini},
  {"name": "Sreenath Reddy", "role": "HR EXECUTIVE", "phone": "6305839325", "email": "sreenathr@thoghtflows.in", "Branch": "","image":Sreenath},
  {"name": "Prabhu", "role": "HR EXECUTIVE", "phone": "9789518184", "email": "prabhum@thoughtflows.in", "Branch": "","image":Prabhu},
  {"name": "Kishore Senthil", "role": "HR EXECUTIVE", "phone": "7397574599", "email": "kishoresenthil@thoughtflows.in", "Branch": "","image":Kishore},
  {"name": "Atchaya", "role": "HR EXECUTIVE", "phone": "8015693629", "email": "atchayas@thoughtflows.in", "Branch": "","image":Atchaya},
  {"name": "Subashini", "role": "HR EXECUTIVE", "phone": "8015059899", "email": "subashinit@thoughtflows.in", "Branch": "","image":Subashini},
  {"name": "Gayathri", "role": "HR EXECUTIVE", "phone": "6374582079", "email": "ugayathri@thoughtflows.in", "Branch": "","image":Gayathri},
  {"name": "Kanchana", "role": "HR EXECUTIVE", "phone": "7339564314", "email": "kanchana@thoughtflows.in", "Branch": "","image":Kanchana},
  {"name": "Subiksha", "role": "HR EXECUTIVE", "phone": "7845986967", "email": "subiksham@thoughtflows.in", "Branch": "","image":Subiksha},
  // {"name": "Rukshar", "role": "HR EXECUTIVE", "phone": "9701729110", "email": "", "Branch": "","image":Rukshar},
  // {"name": "Kammara Boya Shiva", "role": "HR EXECUTIVE", "phone": "7382831810", "email": "", "Branch": "","image":Kamara},
  {"name": "Manasa Bulle", "role": "HR EXECUTIVE", "phone": "7675922965", "email": "", "Branch": "","image":Manasa},
  {"name": "Sobika", "role": "HR EXECUTIVE", "phone": "8807141379", "email": "sobikac@thoughtflows.in", "Branch": "","image":Sobika},
  {"name": "Madhumitha", "role": "TALENT ACQUISITION EXECUTIVE", "phone": "8754561316", "email": "madhumitham@thoughtflows.in", "Branch": "","image":Madhumitha},
  {"name": "Sanjay", "role": "TALENT ACQUISITION EXECUTIVE", "phone": "8122920938", "email": "sanjayp@thoughtflows.in", "Branch": "","image":Sanjay},
  {"name": "Akshaya", "role": "TALENT ACQUISITION EXECUTIVE", "phone": "8939761685", "email": "akshaya@thoughtflows.in", "Branch": "","image":Akshaya},
  {"name": "Shruthy", "role": "TALENT ACQUISITION EXECUTIVE", "phone": "9043354505", "email": "shruthys@thoughtflows.in", "Branch": "","image":shruthy },
  {"name": "Ajai Suriya", "role": "TALENT ACQUISITION EXECUTIVE", "phone": "9042149163", "email": "ajaisuriya@thoughtflows.in", "Branch": "","image":Ajai},
  {"name": "Maisani Suvarna", "role": "TALENT ACQUISITION EXECUTIVE", "phone": "90302 33115", "email": "", "Branch": "","image":Suvarna},
  {"name": "Arputhakumar", "role": "TALENT ACQUISITION EXECUTIVE", "phone": "8939761685", "email": "arputhakumara@thoughtflows.in", "Branch": "","image":Arputhakumar},
  {"name": "Kowsikan", "role": "DIGITAL MARKETING EXECUTIVE", "phone": "", "email": "", "Branch": "","image":Kowsikan},
  {"name": "Kiruthika", "role": "DIGITAL MARKETING EXECUTIVE", "phone": "", "email": "", "Branch": "","image":Kiruthika},
  {"name": "Mohamed Asiq", "role": "DIGITAL MARKETING EXECUTIVE", "phone": "81222 41364", "email": "", "Branch": "","image":Mohamed},
  {"name": "Karthick", "role": "DIGITAL MARKETING EXECUTIVE", "phone": "", "email": "", "Branch": "","image":Karthik},
  {"name": "Ram Kumar", "role": "DIGITAL MARKETING EXECUTIVE", "phone": "", "email": "", "Branch": "","image":kumar},
  {"name": "Pranav", "role": "DIGITAL MARKETING EXECUTIVE", "phone": "", "email": "", "Branch": "","image":Pranav},
  {"name": "Manoj Kumar", "role": "OFFICE ASSISTANT", "phone": "7660834401", "email": "manojkumar@thoughtflows.in", "Branch": "","image":Manojs},
  {"name": "Deva Dharshini", "role": "OFFICE ASSISTANT", "phone": "6380099212", "email": "devadharshinis@thoughtflows.in", "Branch": "","image":Deva},
  {"name": "Vishnupriya", "role": "OFFICE ASSISTANT", "phone": "9360213843", "email": "vishnupriyav@thoughtflows.in", "Branch": "","image":Vishnupriya},
  {"name": "Babu", "role": "OUTDOOR MARKETING EXECUTIVE", "phone": "8978593885", "email": "", "Branch": "","image":Babu},
  {"name": "Pradheesh", "role": "OUTDOOR MARKETING EXECUTIVE", "phone": "70947 02901", "email": "pradheeshthoughtflow@gmail.com", "Branch": "","image":Pradheesh}
]


const teamStructure = [
  { role: "OUR FOUNDERS", count: 2 },
  { role: "FRANCHISE PARTNERS", count: 5 },
  { role: "GENERAL MANAGER", count: 1 },
  { role: "INDIA HEAD - OPERATIONS &  STRATEGIC PARTNERSHIP", count: 1 },
  { role: "OPERATIONAL HEAD", count: 1},
  { role: "REGIONAL HEAD", count: 3},
  { role: "TRAINING DEPARTMENT HEAD", count: 1},
  { role: "TRAINING MANAGER", count: 2},
  { role: "TRAINER", count: 14},
  { role: "BRANCH HEAD", count: 3 },
  { role: "TEAM LEAD", count: 5 },
  { role: "PROCESS COACH", count: 1 },
  { role: "HR EXECUTIVE", count: 19 },
  { role: "TALENT ACQUISITION EXECUTIVE", count: 7 },
  { role: "DIGITAL MARKETING EXECUTIVE", count: 6 },
  { role: "OFFICE ASSISTANT", count: 3 },
  { role: "OUTDOOR MARKETING EXECUTIVE", count: 2 },
]

// Background colors for profile images
const bgColors = ["bg-pink-200", "bg-blue-200", "bg-gray-200", "bg-purple-200", "bg-green-200"]

function TeamHierarchy() {
  
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });   
     },[])
  let imageIndex = 0;  // Keep track of which images have been used

  return (
    <>
    <Meta title="Our team - Thoughtflows Medical Coding Training Academy" description="Thoughtflows Medical Coding Academy offers the highest quality education to help you succeed in your career, visit us today to learn more." />
    <div className=" min-h-screen bg-gradient-to-br from-[#36b0bd] via-[#2a8b96] to-[#1e666e] py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Enhanced premium decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Original blobs with enhanced styling */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#4ac4d1] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#2a8b96] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-[#1e666e] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        
        {/* Premium background patterns */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0ibm9uZSI+PC9yZWN0Pgo8cGF0aCBkPSJNMzAgMzBMNjAgME0wIDMwTDMwIDBNMzAgNjBMNjAgMzBNMCAzMEwzMCA2MCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjAuMjUiIG9wYWNpdHk9IjAuMDUiPjwvcGF0aD4KPC9zdmc+')] opacity-30"></div>
        
        {/* Light beams */}
        <div className="absolute top-0 left-1/4 w-[2px] h-full bg-gradient-to-b from-white to-transparent opacity-10"></div>
        <div className="absolute top-0 right-1/4 w-[2px] h-full bg-gradient-to-b from-white to-transparent opacity-10"></div>
        
        {/* Glowing circles */}
        <div className="absolute top-1/3 right-1/5 w-32 h-32 rounded-full bg-white opacity-5"></div>
        <div className="absolute bottom-1/3 left-1/5 w-24 h-24 rounded-full bg-white opacity-5"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxyZWN0IHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0ibm9uZSI+PC9yZWN0Pgo8Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIwLjUiIGZpbGw9IiNmZmZmZmYiIG9wYWNpdHk9IjAuMSI+PC9jaXJjbGU+Cjwvc3ZnPg==')] opacity-50"></div>
        
        {/* Premium wave patterns */}
        <svg className="absolute bottom-0 left-0 w-full opacity-10" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#ffffff" fillOpacity="0.2" d="M0,192L48,208C96,224,192,256,288,245.3C384,235,480,181,576,160C672,139,768,149,864,165.3C960,181,1056,203,1152,202.7C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
        <svg className="absolute bottom-0 left-0 w-full opacity-5" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#ffffff" fillOpacity="0.1" d="M0,64L48,96C96,128,192,192,288,192C384,192,480,128,576,128C672,128,768,192,864,192C960,192,1056,128,1152,117.3C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
        
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-radial-gradient-to-center from-transparent to-[#1e666e] opacity-40"></div>
      </div>
  
      {/* Enhanced Logo and Header */}
      <div className="relative mb-16 text-center pt-40">
        <div className="inline-block mb-6">
          <div className="w-20 h-1 bg-white opacity-50 mx-auto mb-6"></div>
          <h1 className="text-5xl font-bold  text-white mb-4">
            OUR TEAMS
          </h1>
          <div className="w-20 h-1 bg-white opacity-50 mx-auto mt-6"></div>
        </div>
        <p className="text-white text-lg max-w-2xl mx-auto">Meet the talented individuals behind our success</p>
      </div>
  
      {/* Team Sections with enhanced styling */}
      <div className="relative mx-auto max-w-7xl">
        <div className="space-y-16">
          {teamStructure.map((level, index) => (
            <div key={index} className="space-y-8 backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10 shadow-xl">
              <div className="flex items-center">
                <div className="h-px flex-grow bg-gradient-to-r from-transparent via-[#4ac4d1] to-transparent"></div>
                <h2 className="text-2xl font-semibold text-white mx-4 px-6 py-2 bg-gradient-to-r from-[#36b0bd]/30 to-[#1e666e]/30 rounded-full border border-[#4ac4d1]/20">
                  {level.role}
                </h2>
                <div className="h-px flex-grow bg-gradient-to-r from-transparent via-[#4ac4d1] to-transparent"></div>
              </div>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {Array.from({ length: level.count }).map((_, memberIndex) => {
                  const currentImageIndex = imageIndex++;
                  const memberData = teamMemberData[currentImageIndex] || {
                    name: `Team Member ${currentImageIndex + 1}`,
                    role: level.role,
                    phone:"",
                    email:"",
                    branch:"",
                    image: profileImages[currentImageIndex % profileImages.length],
                  };
                  
                  return (
                    <div className="transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                      <TeamMember
                        key={memberIndex}
                        name={memberData.name}
                        role={memberData.role}
                        phone={memberData.phone}
                        email={memberData.email}
                        branch={memberData.branch}
                        imageUrl={memberData.image}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Bottom decorative gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#1e666e] to-transparent"></div>
    </div>
  </>
  );
}

export default TeamHierarchy

