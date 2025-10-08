import { useEffect } from "react"
import { TeamMember } from "./TeamMember"
import Awanth from "../images/Profile images/blazer pic/Aswanth - Regional Head.webp"
import Ashok from "../images/Profile images/Group 2.png"
import Arun from "../images/Profile images/Group 2 copy.png"
import Arputhakumar from "../images/Profile images/Group 2 copy 2.png"
import Anakha from "../images/Profile images/Group 2 copy 3.png"
import Aleena from "../images/Profile images/Group 2 copy 4.png"
import Akshaya from "../images/Profile images/Group 2 copy 5.png"
import Ajai from "../images/Profile images/blazer pic/Arputha Kumar - TA Executive.webp"
import Aswini from "../images/Profile images/Group 2 copy 8.png"
import Atchaya from "../images/Profile images/Group 2 copy 9.png"
import Babu from "../images/Profile images/Group 2 copy 10.png"
import Deva from "../images/Profile images/Group 2 copy 11.png"
import Devi from "../images/Profile images/Group 2 copy 12.png"
import Dharshini from "../images/Profile images/Group 2 copy 13.png"
import Elilarasi from "../images/Profile images/Group 2 copy 14.png"  
import Gayatri from "../images/Profile images/blazer pic/Gayathri - BRANCH HEAD.webp"
import Gayathri from "../images/Profile images/blazer pic/Gayathri - HR Executive.webp"
import Jasmin from "../images/Profile images/Group 2 copy 17.png"
import Kalai from "../images/Profile images/Group 2 copy 18.png"  
import Kalaimathi from "../images/Profile images/Group 2 copy 19.png"
import Kanchana from "../images/Profile images/blazer pic/Kanchana - HR Executive.webp"
import Kartheeswari from "../images/Profile images/Group 2 copy 21.png"
import Karthik from "../images/Profile images/blazer pic/Karthick - DM TL.webp"
import Karthika from "../images/Profile images/Group 2 copy 23.png"  
import Keerthika from "../images/Profile images/Group 2 copy 24.png"
import Kiruthika from "../images/Profile images/blazer pic/Kiruthika - Digital Marketing Executive.webp"
import Kishore from "../images/Profile images/blazer pic/Kishore - HR Executive.webp"
import Kowsikan from "../images/Profile images/Group 2 copy 27.png"
import Logeshwaran from "../images/Profile images/Group 2 copy 28.png"  
import Lokesh from "../images/Profile images/blazer pic/Lokesh Babu - Marketing Head.webp"           
import Madhumitha from "../images/Profile images/Group 2 copy 30.png"
import Manoj from "../images/Profile images/blazer pic/Manoj - Training Department Head.webp"
import Mohamed from "../images/Profile images/Group 2 copy 32.png"
import Mounika from "../images/Profile images/blazer pic/Mounika - Trainer.webp"
import group2copy34 from "../images/Profile images/Group 2 copy 34.png"  
import Pavithra from "../images/Profile images/blazer pic/Pavithra - Training Manager.webp"
import Peemuthannagari from "../images/Profile images/blazer pic/Peemuthannagari Supraja - HR Executive.webp"
import group2copy37 from "../images/Profile images/Group 2 copy 37.png"
import Prabhu from "../images/Profile images/blazer pic/Prabhu - HR Executive.webp"  
import Pradheesh from "../images/Profile images/Group 2 copy 39.png"
import Priyadharshini from "../images/Profile images/Group 2 copy 40.png"
import Ram from "../images/Profile images/Group 2 copy 41.png"
import Punitha from "../images/Profile images/Group 2 copy 42.png"
import kumar from "../images/Profile images/blazer pic/Ram Kumar - DM Executive.webp"
import Reshma from "../images/Profile images/Group 2 copy 44.png"
import Sabnam from "../images/Profile images/Group 2 copy 45.png"
import Sanjay from "../images/Profile images/Group 2 copy 46.png"
import group2copy47 from "../images/Profile images/Group 2 copy 47.png"
import Sasikala from "../images/Profile images/Sasikala.png"
import Sindhu from "../images/Profile images/Group 2 copy 48.png"
import Sindhuja from "../images/Profile images/blazer pic/Sindhuja - HR TL.webp"      
import Srujana from "../images/Profile images/Group 2 copy 50.png"
import Sruthi from "../images/Profile images/Group 2 copy 51.png"
import Subashini from "../images/Profile images/blazer pic/Subashini - HR Executive.webp"
import Suvarna from "../images/Profile images/blazer pic/Maisani Suvarna - TA Executive.webp"
import Subiksha from "../images/Profile images/Group 2 copy 54.png"
import Swetha from "../images/Profile images/Group 2 copy 55.png"  
import thulasi from "../images/Profile images/Group 2 copy 56.png"
import Vaanmathi from "../images/Profile images/Group 2 copy 57.png"  
import Vaishna from "../images/Profile images/Group 2 copy 58.png"
import Veenadhari from "../images/Profile images/blazer pic/VEENA - FRANCHISE PARTNER.webp"
import Vidya from "../images/Profile images/Group 2 copy 60.png"
import Vignesh from "../images/Profile images/blazer pic/Vignesh - HR Executive.webp"
import Vishnupriya from "../images/Profile images/blazer pic/Vishnupriya - OFFICE ASSISTANT.webp"
import group2copy63 from "../images/Profile images/Group 2 copy 63.png"
import Mittu from "../images/Profile images/Mittu - Franchise Partner - Kerala.png"
import BalaMurali from "../images/Profile images/blazer pic/balamurali.jpg"
import Banumathy from "../images/Profile images/blazer pic/bhanu mathi.png"
import Meta from '../Meta';
import Kobika from "../images/Profile images/blazer pic/Kobika - Trainer.webp"
import Shilpa from "../images/Profile images/Shilpa.png"
import Sreenath from "../images/Profile images/blazer pic/Sreenath Reddy - HR Executive.webp"
import Kamara from "../images/Profile images/blazer pic/Kammara Boya Shiva - HR Executive.webp"
import Sobika from "../images/Profile images/Sobika.png"
import Manasa from "../images/Profile images/Manasa.png"
import Manojs from "../images/Profile images/blazer pic/Manoj Kumar - OFFICE ASSISTANT.webp"
import Aasifa from "../images/Profile images/blazer pic/Aashifa - Trainer.webp"
import Jadav from "../images/Profile images/blazer pic/Pooja Jadav - Trainer.webp"
import Prasanna from "../images/Profile images/blazer pic/Prasanna - Trainer.webp"
import Rukshar from "../images/Profile images/blazer pic/Rukshar - HR Executive.webp"
import basu from "../images/Profile images/basu.png"
import shruthy from "../images/Profile images/shruthy.png"
import Sreelekha from "../images/Profile images/blazer pic/Sreelekha - HR Executive.webp"
import Julie from "../images/man.png"
import PavithraN from "../images/Profile images/blazer pic/Pavithra N - HR Executive.webp"
import KalaiMathi from "../images/Profile images/blazer pic/KalaiMathi - HR Executive.webp"
import Kannan from "../images/Profile images/blazer pic/Kannan - HR.webp"
import logarasan from "../images/man.png"
import kathleen from "../images/Profile images/blazer pic/kathleen - HR Executive.webp"
import PriyadharshiniR from "../images/Profile images/blazer pic/Priyadharshini - HR Executive.webp"
import SangaviP from "../images/Profile images/blazer pic/Sangavi - HR Executive.webp"
import Megha from "../images/man.png"
import Karthick from "../images/Profile images/blazer pic/Karthick - DM Executive.webp"
import Pranav from "../images/Profile images/blazer pic/Pranav - DM Executive.webp"
import Chandu from "../images/man.png"
import Sharon from "../images/Profile images/blazer pic/Sharon Roopavathy - Trainer.webp"
import Charishma from "../images/Profile images/blazer pic/Charishma- Trainer.webp"
import KamatamVarsha from "../images/Profile images/blazer pic/Kamatam Varsha - Trainer.webp"
import Nayana from "../images/Profile images/blazer pic/Nayana - Trainer.webp"



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


  {"name": "Logeshwaran", "role": "FRANCHISE PARTNER", "phone": "81487 32017, 96553 63552", "email": "", "Branch": "Salem","image":Logeshwaran},
  {"name": "Arun Kumar Pandey", "role": "FRANCHISE PARTNER", "phone": "", "email": "", "Branch": "DSNR","image":Arun},
  {"name": "Ashok Uppara", "role": "FRANCHISE PARTNER", "phone": "", "email": "", "Branch": "DSNR","image":Ashok},
  {"name": "Veenadhari", "role": "FRANCHISE PARTNER", "phone": "", "email": "veenadharithoughtflows@gmail.com", "Branch": "Vizag","image":Veenadhari},


  {"name": "Thulasi", "role": "GENERAL MANAGER", "phone": "78936 82459", "email": "thulasick@thoughtflows.in", "Branch": "","image":thulasi},


  {"name": "Nilanjan Basu", "role": "INDIA HEAD - OPERATIONS & STRATEGIC PARTNERSHIP", "phone": "", "email": "", "Branch": "","image":basu},


  {"name": "Kartheeswari", "role": "OPERATIONAL HEAD", "phone": "95009 87080", "email": "karthik@thoughtflows.in", "Branch": "","image":Kartheeswari},
  {"name": "Jasmin", "role": "HR DEPARTMENT HEAD", "phone": "96550 79784", "email": "jasmin@thoughtflows.in", "Branch": "","image":Jasmin},
  {"name": "Vidya", "role": "TALENT ACQUISITION HEAD", "phone": "97919 74560", "email": "vidya@thoughtflows.in", "Branch": "","image":Vidya},
  {"name": "Manoj", "role": "TRAINING DEPARTMENT HEAD", "phone": "9629417645", "email": "manojs@thoughtflows.in", "Branch": "","image":Manoj},
  {"name": "Lokesh Babu", "role": "MARKETING HEAD", "phone": "8790424835", "email": "lokesh@thoughtflows.in", "Branch": "","image":Lokesh},
  {"name": "Mohamed Asiq", "role": "DIGITAL MARKETING HEAD", "phone": "", "email": "", "Branch": "","image":Mohamed},


  {"name": "Awanth", "role": "REGIONAL HEAD", "phone": "9048023242", "email": "aswanth@thoughtflows.in", "Branch": "Kerala","image":Awanth},


  {"name": "Keerthika", "role": "TRAINING MANAGER", "phone": "9600655803", "email": "keerthisakthi03@gmail.com", "Branch": "","image":Keerthika},
  {"name": "Pavithra", "role": "TRAINING MANAGER", "phone": "7418578160", "email": "pavithra@thoughtflows.in", "Branch": "","image":Pavithra},


  {"name": "Prasanna", "role": "TRAINER", "phone": "9618226640", "email": "prasannan@thoughtflows.in", "Branch": "","image":Prasanna},
  {"name": "Vaanmathi", "role": "TRAINER", "phone": "8883656915", "email": "vanmathi@thoughtflows.in", "Branch": "","image":Vaanmathi},
  {"name": "Aleena Susan JG", "role": "TRAINER", "phone": "85902 18123", "email": "aleenasusanJ@thoughtflows.in", "Branch": "","image":Aleena},
  {"name": "Ram Balaji", "role": "TRAINER", "phone": "", "email": "rambalaji@thoughtflows.in", "Branch": "","image":Ram},
  {"name": "Priyadharshini", "role": "TRAINER", "phone": "", "email": "", "Branch": "","image":Priyadharshini},
  {"name": "Mounika", "role": "TRAINER", "phone": "7075263848", "email": "mounikav@thoughtflows.in", "Branch": "","image":Mounika},
  {"name": "Pooja Jadav", "role": "TRAINER", "phone": "9346194108", "email": "poojajadhav@thoughtflows.in", "Branch": "","image":Jadav},
  {"name": "Kobika", "role": "TRAINER", "phone": "", "email": "", "Branch": "","image":Kobika},
  {"name": "Aashifa", "role": "TRAINER", "phone": "", "email": "", "Branch": "","image":Aasifa},
  {"name": "Sharon ", "role": "TRAINER", "phone": "8870951112", "email": "sharonr@thoughtflows.in", "Branch": "Trichy","image":Sharon},
  {"name": "Charishma", "role": "TRAINER", "phone": "", "email": "", "Branch": "Vizag","image":Charishma},
  {"name": "Kamatam Varsha", "role": "TRAINER", "phone": "", "email": "", "Branch": "Ameerpet","image":KamatamVarsha},
  {"name": "Nayana", "role": "TRAINER", "phone": "", "email": "", "Branch": "","image":Nayana},


  // {"name": "Elilarasi", "role": "TRAINER", "phone": "", "email": "", "Branch": "","image":Elilarasi},
  {"name": "Gayathri", "role": "BRANCH HEAD", "phone": "8807510359", "email": "gayathrib@thoughtflows.in", "Branch": "","image":Gayatri},
  {"name": "Sruthi", "role": "BRANCH HEAD", "phone": "8438974736", "email": "sruthig@thoughtflows.in", "Branch": "","image":Sruthi},
  {"name": "Swetha", "role": "TEAM LEAD", "phone": "8438939806", "email": "swethac@thoughtflows.in", "Branch": "TA - Team Lead","image":Swetha},
  {"name": "Madhumitha", "role": "Inhouse Placement - Team Lead", "phone": "8754561316", "email": "madhumitham@thoughtflows.in", "Branch": "","image":Madhumitha},
  {"name": "Anakha Suresh", "role": "HR - Team Lead", "phone": "7306388099", "email": "anakhas@thoughtflows.in", "Branch": "HR - Team Lead","image":Anakha},
  {"name": "Srujana Erothu", "role": "HR - Team Lead", "phone": "8074729024", "email": "srujanaerothu@thoughtflows.in", "Branch": "","image":Srujana},
  {"name": "Sindhuja", "role": "HR - Team Lead", "phone": "90302 33115", "email": "", "Branch": "HR - Team Lead","image":Sindhuja},
  {"name": "Kalai Selvi", "role": "HR - Team Lead", "phone": "8122854228", "email": "kalaiselvic@thoughtflows.in", "Branch": "HR - Team Lead","image":Kalai},
  {"name": "Karthick", "role": "DM - Team Lead", "phone": "", "email": "", "Branch": "","image":Karthik},
  {"name": "Vaishna", "role": "Trainer - Team Lead", "phone": "7736469198", "email": "vaishnas@thoughtflows.in", "Branch": "Trainer - Team Lead","image":Vaishna},

  {"name": "Sindhu Thakaiya", "role": "PROCESS COACH", "phone": "8807765495", "email": "sindhus@thoughtflows.in", "Branch": "","image":Sindhu},
  // {"name": "Karthika", "role": "TEAM LEAD", "phone": "", "email": "", "Branch": "HR - Team Lead","image":Karthika},


  {"name": "Punitha", "role": "HR EXECUTIVE", "phone": "+91 78458 28547", "email": "punithac@thoughtflows.in", "Branch": "","image":Punitha},
  {"name": "Vignesh", "role": "HR EXECUTIVE", "phone": "91 7396213531", "email": "vigneshp@thoughtflows.in", "Branch": "","image":Vignesh},
  {"name": "Reshma Jenifar", "role": "HR EXECUTIVE", "phone": "7200603257", "email": "reshmaj@thoughtflows.in", "Branch": "","image":Reshma},
  {"name": "Peemuthannagari Supraja", "role": "HR EXECUTIVE", "phone": "8015108186", "email": "suprajap@thoughtflows.in", "Branch": "","image":Peemuthannagari},
  {"name": "Sreelekha ", "role": "HR EXECUTIVE", "phone": "89437 44055", "email": "sreelekhapc@thoughtflows.in", "Branch": "","image":Sreelekha},
  // {"name": "Sabnam Banu", "role": "HR EXECUTIVE", "phone": "6381960026", "email": "mohameds@thoughtflows.in", "Branch": "","image":Sabnam},
  {"name": "Dharshini", "role": "HR EXECUTIVE", "phone": "9944484356", "email": "dharshinis@thoughtflows.in", "Branch": "","image":Dharshini},
  {"name": "Sreenath Reddy", "role": "HR EXECUTIVE", "phone": "6305839325", "email": "sreenathr@thoghtflows.in", "Branch": "","image":Sreenath},
  {"name": "Prabhu", "role": "HR EXECUTIVE", "phone": "9789518184", "email": "prabhum@thoughtflows.in", "Branch": "","image":Prabhu},
  {"name": "Kishore Senthil", "role": "HR EXECUTIVE", "phone": "7397574599", "email": "kishoresenthil@thoughtflows.in", "Branch": "","image":Kishore},
  // {"name": "Atchaya", "role": "HR EXECUTIVE", "phone": "8015693629", "email": "atchayas@thoughtflows.in", "Branch": "","image":Atchaya},
  {"name": "Subashini", "role": "HR EXECUTIVE", "phone": "8015059899", "email": "subashinit@thoughtflows.in", "Branch": "","image":Subashini},
  {"name": "Pavithra N", "role": "HR EXECUTIVE", "phone": "63856 18301", "email": "pavithran@thoughtflows.in", "Branch": "","image":PavithraN},
  {"name": "Gayathri", "role": "HR EXECUTIVE", "phone": "6374582079", "email": "ugayathri@thoughtflows.in", "Branch": "","image":Gayathri},
  {"name": "Kanchana", "role": "HR EXECUTIVE", "phone": "7339564314", "email": "kanchana@thoughtflows.in", "Branch": "","image":Kanchana},
  {"name": "Subiksha", "role": "HR EXECUTIVE", "phone": "7845986967", "email": "subiksham@thoughtflows.in", "Branch": "","image":Subiksha},
  {"name": "Rukshar", "role": "HR EXECUTIVE", "phone": "9701729110", "email": "", "Branch": "","image":Rukshar},
  {"name": "Kammara Boya Shiva", "role": "HR EXECUTIVE", "phone": "7382831810", "email": "", "Branch": "","image":Kamara},
  {"name": "Julie", "role": "HR EXECUTIVE", "phone": "80156 93629", "email": "julie@thoughtflows.in", "Branch": "","image":Julie},
  {"name": "KalaiMathi", "role": "HR EXECUTIVE", "phone": "8122241392", "email": "kalaim@thoughtflows.in", "Branch": "","image":KalaiMathi},
  {"name": "logarasan", "role": "HR EXECUTIVE", "phone": "8122241977", "email": "logarasanb@thoughtflows.in", "Branch": "","image":logarasan},
  {"name": "kathleen", "role": "HR EXECUTIVE", "phone": "8122234005", "email": "kathleenr@thoughtflows.in", "Branch": "","image":kathleen},
  {"name": "Priyadharshini R", "role": "HR EXECUTIVE", "phone": "8015769049", "email": "Priyar@thoughtflows.in", "Branch": "","image":PriyadharshiniR},
  {"name": "Sangavi.P", "role": "HR EXECUTIVE", "phone": "8122242136", "email": "sangavipthoughtflows.in", "Branch": "","image":SangaviP},
  {"name": "Kannan", "role": "HR EXECUTIVE", "phone": "755 811 901", "email": "kannans@thoughtflows.in", "Branch": "","image":Kannan},

  // {"name": "Manasa Bulle", "role": "HR EXECUTIVE", "phone": "7675922965", "email": "", "Branch": "","image":Manasa},
  // {"name": "Sobika", "role": "HR EXECUTIVE", "phone": "8807141379", "email": "sobikac@thoughtflows.in", "Branch": "","image":Sobika},
  
  {"name": "Sanjay", "role": "TALENT ACQUISITION EXECUTIVE", "phone": "8122920938", "email": "sanjayp@thoughtflows.in", "Branch": "","image":Sanjay},
  // 
  {"name": "Shruthy", "role": "TALENT ACQUISITION EXECUTIVE", "phone": "9043354505", "email": "shruthys@thoughtflows.in", "Branch": "","image":shruthy },
  {"name": "Ajai Suriya", "role": "TALENT ACQUISITION EXECUTIVE", "phone": "9042149163", "email": "ajaisuriya@thoughtflows.in", "Branch": "","image":Ajai},
  {"name": "Maisani Suvarna", "role": "TALENT ACQUISITION EXECUTIVE", "phone": "90302 33115", "email": "", "Branch": "","image":Suvarna},
  {"name": "Arputhakumar", "role": "TALENT ACQUISITION EXECUTIVE", "phone": "8939761685", "email": "arputhakumara@thoughtflows.in", "Branch": "","image":Arputhakumar},
  {"name": "Megha", "role": "TALENT ACQUISITION EXECUTIVE", "phone": "81222 60271", "email": "", "Branch": "","image":Megha},
  
  
  {"name": "Kowsikan", "role": "DIGITAL MARKETING EXECUTIVE", "phone": "", "email": "", "Branch": "","image":Kowsikan},
  {"name": "Kiruthika", "role": "DIGITAL MARKETING EXECUTIVE", "phone": "", "email": "", "Branch": "","image":Kiruthika},
  {"name": "Ram Kumar", "role": "DIGITAL MARKETING EXECUTIVE", "phone": "", "email": "", "Branch": "","image":kumar},
  {"name": "Pranav", "role": "DIGITAL MARKETING EXECUTIVE", "phone": "", "email": "", "Branch": "","image":Pranav},
  {"name": "Karthick ", "role": "DIGITAL MARKETING EXECUTIVE", "phone": "", "email": "", "Branch": "","image":Karthick },

  {"name": "Manoj Kumar", "role": "OFFICE ASSISTANT", "phone": "7660834401", "email": "manojkumar@thoughtflows.in", "Branch": "","image":Manojs},
  {"name": "Deva Dharshini", "role": "OFFICE ASSISTANT", "phone": "6380099212", "email": "devadharshinis@thoughtflows.in", "Branch": "","image":Deva},
  {"name": "Vishnupriya", "role": "OFFICE ASSISTANT", "phone": "9360213843", "email": "vishnupriyav@thoughtflows.in", "Branch": "","image":Vishnupriya},


  {"name": "Babu", "role": "OUTDOOR MARKETING EXECUTIVE", "phone": "8978593885", "email": "", "Branch": "","image":Babu},
  {"name": "Pradheesh", "role": "OUTDOOR MARKETING EXECUTIVE", "phone": "70947 02901", "email": "pradheeshthoughtflow@gmail.com", "Branch": "","image":Pradheesh},
  {"name": "Chandu", "role": "OUTDOOR MARKETING EXECUTIVE", "phone": "", "email": "", "Branch": "","image":Chandu},
]


const teamStructure = [
  { role: "OUR FOUNDERS", count: 2 },
  { role: "FRANCHISE PARTNERS", count: 4 },
  { role: "GENERAL MANAGER", count: 1 },
  { role: "INDIA HEAD - OPERATIONS &  STRATEGIC PARTNERSHIP", count: 1 },
  { role: "OPERATIONAL HEAD", count: 1},
  { role: "DEPARTMENT HEADS", count: 5},
  { role: "REGIONAL HEAD", count: 1},
  { role: "TRAINING MANAGER", count: 2},
  { role: "TRAINER", count: 13},
  { role: "BRANCH HEAD", count: 2},
  { role: "TEAM LEAD", count: 8 },
  { role: "PROCESS COACH", count: 1 },
  { role: "HR EXECUTIVE", count: 23 },
  { role: "TALENT ACQUISITION EXECUTIVE", count: 6 },
  { role: "DIGITAL MARKETING EXECUTIVE", count: 5 },
  { role: "OFFICE ASSISTANT", count: 3 },
  { role: "OUTDOOR MARKETING EXECUTIVE", count: 3 },
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

