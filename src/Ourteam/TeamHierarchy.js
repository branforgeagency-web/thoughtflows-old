 


import { useEffect } from "react"
import { TeamMember } from "./TeamMember"
import Awanth from "../images/Profile images/blazer pic/Aswanth - Regional Head.webp"
import Ashok from "../images/Profile images/Group 2.png"
import Arun from "../images/Profile images/Group 2 copy.png"
import Arputhakumar from "../images/Profile images/Group 2 copy 2.png"
import Anakha from "../images/Profile images/Group 2 copy 3.png"
import Aleena from "../images/Profile images/Group 2 copy 4.png"
import Akshaya from "../images/Profile images/Group 2 copy 5.png"
import Ajai from "../images/Profile images/blazer pic/Ajay suriya-TALENT ACQUISITION EXECUTIVE.png"
import Aswini from "../images/Profile images/Group 2 copy 8.png"
import Atchaya from "../images/Profile images/Group 2 copy 9.png"
import Babu from "../images/Profile images/blazer pic/Babu-ODM Executive.png"
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
import Kishore from "../images/Profile images/blazer pic/Kishore Senthil.png"
import Kowsikan from "../images/Profile images/Group 2 copy 27.png"
import Logeshwaran from "../images/Profile images/Group 2 copy 28.png"
import Lokesh from "../images/Profile images/blazer pic/Lokesh Babu - Marketing Head.webp"
import Madhumitha from "../images/Profile images/Group 2 copy 30.png"
import Manoj from "../images/Profile images/blazer pic/Manoj - Training Department Head.webp"
import Mohamed from "../images/Profile images/Group 2 copy 32.png"
import Mounika from "../images/Profile images/blazer pic/Mounika - Trainer.jpeg"
import group2copy34 from "../images/Profile images/Group 2 copy 34.png"
import Pavithra from "../images/Profile images/blazer pic/Pavithra - Training Manager.png"
import Peemuthannagari from "../images/Profile images/blazer pic/Peemuthannagari Supraja - HR Executive.webp"
import group2copy37 from "../images/Profile images/Group 2 copy 37.png"
import Prabhu from "../images/Profile images/blazer pic/Prabhu - HR Executive.webp"
import Pradheesh from "../images/Profile images/blazer pic/Pradheesh.jpeg"
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
import Sindhuja from "../images/Profile images/blazer pic/Sindhuja -  HR - Team Lead.jpeg"
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
import group2copy63 from "../images/Profile images/Group 2 copy 63.png"
import Mittu from "../images/Profile images/Mittu - Franchise Partner - Kerala.png"
import BalaMurali from "../images/Profile images/blazer pic/karthick revision .jpg"
import Banumathy from "../images/Profile images/blazer pic/bhanu mathi.png"
import Meta from '../Meta';
import Shilpa from "../images/Profile images/Shilpa.png"
import Sreenath from "../images/Profile images/blazer pic/Sreenath Reddy - Technical and Marketing Executive.jpeg"
import Kamara from "../images/Profile images/blazer pic/Kammara Boya Shiva - HR Executive.webp"
import Sobika from "../images/Profile images/Sobika.png"
import Manasa from "../images/Profile images/Manasa.png"
import Manojs from "../images/Profile images/blazer pic/Manoj Kumar - OFFICE ASSISTANT.webp"
import Aasifa from "../images/Profile images/blazer pic/Aashifa - Trainer.webp"
import Jadav from "../images/Profile images/Pooja Jadav-trainer.jpeg"
import Prasanna from "../images/Profile images/blazer pic/Prasanna - Trainer.webp"
import Rukshar from "../images/Profile images/blazer pic/Rukshar - HR Executive.webp"
import basu from "../images/Profile images/basu.png"
import shruthy from "../images/Profile images/blazer pic/Shruthy-TA Executive.png"
import Sreelekha from "../images/Profile images/blazer pic/Sreelekha - HR Executive.webp"
import PavithraN from "../images/Profile images/blazer pic/Pavithra N - HR Executive.webp"
import KalaiMathi from "../images/Profile images/blazer pic/KalaiMathi - HR Executive.webp"
import Kannan from "../images/Profile images/blazer pic/Kannan - HR.webp"
import Logarasan from "../images/Profile images/blazer pic/Logarsan-HR Executive.png"
import PriyadharshiniR from "../images/Profile images/blazer pic/Priyadharshini - HR Executive.webp"
import SangaviP from "../images/Profile images/blazer pic/Sangavi - HR Executive.webp"
import Megha from "../images/Profile images/blazer pic/Megha-TALENT ACQUISITION EXECUTIVE.png"

import Pranav from "../images/Profile images/blazer pic/Pranav - DM Executive.webp"
import Chandu from "../images/Profile images/blazer pic/Chandu-ODM Executive.png"
import Sharon from "../images/Profile images/blazer pic/Sharon Roopavathy - Trainer.webp"
import Charishma from "../images/Profile images/blazer pic/Charishma- Trainer.webp"
import KamatamVarsha from "../images/Profile images/blazer pic/Kamatam Varsha - Trainer.webp"
import Nayana from "../images/Profile images/blazer pic/Nayana - Trainer.webp"
import Santhiya from "../images/Profile images/blazer pic/Santhiya - Trainer.png"
import Jenny from "../images/Profile images/blazer pic/Jenny Wilson.png"
import SabihaSulthana from "../images/Profile images/blazer pic/sabitha-Trainer.png"
import Kavya from "../images/Profile images/blazer pic/Kaviya-Trainer.png"
import VishnupriyaDev from "../images/Profile images/blazer pic/Vishnupriya Dev-HR Executive.png"
import Guruvigneshwaran from "../images/Profile images/blazer pic/Guru vigneshvar-HR Executive.png"
import Julie from "../images/Profile images/blazer pic/Julie-HR Executive.png"
import Deepthi from "../images/Profile images/blazer pic/Deepthi-HR Executive.png"
import Dhivya from "../images/Profile images/blazer pic/Dhivya-HR Executive.png"
import Manjula from "../images/Profile images/blazer pic/Manjula-HR Executive.png"
import Sharanya from "../images/Profile images/blazer pic/Sharanya-HR Executive.png"
import Amrutha from "../images/Profile images/blazer pic/Amrutha-HR Executive.png"
import GVishnupriya from "../images/Profile images/blazer pic/G Vishinupriya-HR Executive.png"
import Nikitha from "../images/Profile images/blazer pic/Nikitha-HR Executive.png"
import KDivya from "../images/Profile images/blazer pic/K Divya-HR Executive.png"
import Aryasree from "../images/Profile images/blazer pic/Aryasree-HR Execcutive.png"
import Rahul from "../images/Profile images/blazer pic/Rahul-HR Executive.png"
import Tejaswini from "../images/Profile images/blazer pic/Thajaswani-TALENT ACQUISITION EXECUTIVE.png"
import ByreddyVinayAnandAkashReddy from "../images/Profile images/blazer pic/Byreddy Vinay Anand Akash Reddy - TA Executive (2).png"
import Shreelakshmi from "../images/Profile images/blazer pic/Sree lakshmi-DM Executive.png"
import DeepkKumarPujari from "../images/Profile images/blazer pic/Depak kumar pujar-DM Executive.png"
import SathyaSriVaishnavi from "../images/Profile images/blazer pic/Sathya sree vaishnavi-MIS Executive.png"
import SherlinRuth from "../images/Profile images/blazer pic/Sherlin Ruth - HR Executive.png"
import Santhosh from "../images/Profile images/blazer pic/Santhosh_dm.jpg"
import Jeron from "../images/Profile images/blazer pic/JERON.jpg"
import kiruthika from "../images/Profile images/blazer pic/kiruthika D.png"
import Kavitha from "../images/Profile images/blazer pic/Kavitha.png"
import BadawathKavitha from "../images/Profile images/blazer pic/Badawath Kavitha.png"
import Keerthiga from "../images/Profile images/blazer pic/Keerthiga.png"
import Priya from "../images/Profile images/blazer pic/Priya.png"
import LakshmiPavani from "../images/Profile images/Group 1000002151.png"
import Likitha from "../images/Profile images/Group 1000002152.png"
const profileImages = [
  BalaMurali, Banumathy, Kalai, Kalaimathi, Kanchana, Kartheeswari, Karthik, Karthika, Keerthika, Kiruthika, Kishore, Kowsikan,
  Logeshwaran, Lokesh, Madhumitha, Manoj, Mohamed, Mounika, group2copy34, Pavithra, Peemuthannagari, group2copy37,
  Prabhu, Pradheesh, Priyadharshini, Ram, Punitha, kumar, Reshma, Sabnam, Sanjay, group2copy47,
  Sindhu, Sindhuja, Srujana, Sruthi, Subashini, Suvarna, Subiksha, Swetha, thulasi, Vaanmathi,
  Vaishna, Veenadhari, Vidya, Vignesh, group2copy63
];

const teamMemberData = [
  { "name": "Mr. BalaMurali", "role": "FOUNDER & MD", "phone": "93845 76852", "email": "", "Branch": "", "image": BalaMurali },
  { "name": "Ms. Bhanu Mathi", "role": "FOUNDER & CEO", "phone": "93845 76852", "email": "", "Branch": "", "image": Banumathy },


  { "name": "Logeshwaran", "role": "BRANCH MANAGER OF SALEM", "phone": "81487 32017, 96553 63552", "email": "", "Branch": "Salem", "image": Logeshwaran },
  { "name": "Arun Kumar Pandey", "role": "BRANCH MANAGER OF DILSUKHNAGAR", "phone": "+91 90305 08844", "email": "", "Branch": "DSNR", "image": Arun },
  { "name": "Ashok Uppara", "role": "BRANCH MANAGER OF DILSUKHNAGAR", "phone": "+91 90001 88024", "email": "", "Branch": "DSNR", "image": Ashok },
  { "name": "Veenadhari", "role": "BRANCH MANAGER OF VIZAG", "phone": "89775 07230", "email": "veenadharithoughtflows@gmail.com", "Branch": "Vizag", "image": Veenadhari },





  { "name": "Nilanjan Basu", "role": "INDIA HEAD - OPERATIONS & STRATEGIC PARTNERSHIP", "phone": "81213 45855", "email": "", "Branch": "", "image": basu },


  { "name": "Kartheeswari", "role": "OPERATIONAL HEAD", "phone": "95009 87080", "email": "karthik@thoughtflows.in", "Branch": "", "image": Kartheeswari },
  { "name": "Jasmin", "role": "HR DEPARTMENT HEAD", "phone": "96550 79784", "email": "jasmin@thoughtflows.in", "Branch": "", "image": Jasmin },
  { "name": "Vidya", "role": "TALENT ACQUISITION HEAD", "phone": "97919 74560", "email": "vidya@thoughtflows.in", "Branch": "", "image": Vidya },
  { "name": "Manoj", "role": "TRAINING DEPARTMENT HEAD", "phone": "96294 17645", "email": "manojs@thoughtflows.in", "Branch": "", "image": Manoj },
  { "name": "Lokesh Babu", "role": "HR DEPARTMENT HEAD (AP/TS)", "phone": "87904 24835", "email": "lokesh@thoughtflows.in", "Branch": "", "image": Lokesh },



  { "name": "Aswanth", "role": "REGIONAL MANAGER OF KERALA", "phone": "90480 23242", "email": "aswanth@thoughtflows.in", "Branch": "Kerala", "image": Awanth },
  { "name": "Gayathri", "role": "REGIONAL MANAGER", "phone": "88075 10359", "email": "gayathrib@thoughtflows.in", "Branch": "", "image": Gayatri },
  { "name": "Sruthi", "role": "REGIONAL MANAGER", "phone": "84389 74736", "email": "sruthig@thoughtflows.in", "Branch": "", "image": Sruthi },


  { "name": "Keerthika", "role": "TRAINING MANAGER", "phone": "96006 55803", "email": "keerthisakthi03@gmail.com", "Branch": "", "image": Keerthika },
  { "name": "Pavithra", "role": "TRAINING MANAGER", "phone": "74185 78160", "email": "pavithra@thoughtflows.in", "Branch": "", "image": Pavithra },


  { "name": "Prasanna", "role": "TRAINER", "phone": "96182 26640", "email": "prasannan@thoughtflows.in", "Branch": "", "image": Prasanna },
  { "name": "Ram Balaji", "role": "TRAINER", "phone": "", "email": "rambalaji@thoughtflows.in", "Branch": "", "image": Ram },

  { "name": "Jenny Wilson", "role": "TRAINER", "phone": "", "email": "", "Branch": "Hopes", "image": Jenny },
  { "name": "Aleena Susan JG", "role": "TRAINER", "phone": "85902 18123", "email": "aleenasusanJ@thoughtflows.in", "Branch": "", "image": Aleena },
  { "name": "Mounika", "role": "TRAINER", "phone": "70752 63848", "email": "mounikav@thoughtflows.in", "Branch": "", "image": Mounika },
  { "name": "Pooja Jadav", "role": "TRAINER", "phone": "93461 94108", "email": "poojajadhav@thoughtflows.in", "Branch": "", "image": Jadav },
  { "name": "Kamatam Varsha", "role": "TRAINER", "phone": "", "email": "", "Branch": "Ameerpet", "image": KamatamVarsha },
  { "name": "Sharon ", "role": "TRAINER", "phone": "88709 51112", "email": "sharonr@thoughtflows.in", "Branch": "Trichy", "image": Sharon },
  { "name": "Aashifa", "role": "TRAINER", "phone": "", "email": "", "Branch": "", "image": Aasifa },
  { "name": "Charishma", "role": "TRAINER", "phone": "", "email": "", "Branch": "Vizag", "image": Charishma },
  { "name": "Kavya", "role": "TRAINER", "phone": "", "email": "", "Branch": "", "image": Kavya },
  { "name": "Priya", "role": "TRAINER", "phone": "", "email": "priya5thoughtflows@gmail.com", "Branch": "", "image": Priya },


  // {"name": "Elilarasi", "role": "TRAINER", "phone": "", "email": "", "Branch": "","image":Elilarasi},
  // { "name": "Gayathri", "role": "BRANCH HEAD", "phone": "88075 10359", "email": "gayathrib@thoughtflows.in", "Branch": "", "image": Gayatri },
  // { "name": "Sruthi", "role": "BRANCH HEAD", "phone": "84389 74736", "email": "sruthig@thoughtflows.in", "Branch": "", "image": Sruthi },
  { "name": "Sindhu Thakaiya", "role": "BRANCH HEAD & PROCESS COACH", "phone": "88077 65495", "email": "sindhus@thoughtflows.in", "Branch": "", "image": Sindhu },
  { "name": "Anakha Suresh", "role": "HR - Team Lead", "phone": "73063 88099", "email": "anakhas@thoughtflows.in", "Branch": "HR - Team Lead", "image": Anakha },
  { "name": "Sindhuja", "role": "HR - Team Lead", "phone": "+91 91336 85810", "email": "", "Branch": "HR - Team Lead", "image": Sindhuja },
  { "name": "Kalai Selvi", "role": "HR - Team Lead", "phone": "81228 54228", "email": "kalaiselvic@thoughtflows.in", "Branch": "HR - Team Lead", "image": Kalai },
  { "name": "Vaishna", "role": "Trainer - Team Lead", "phone": "77364 69198", "email": "vaishnas@thoughtflows.in", "Branch": "Trainer - Team Lead", "image": Vaishna },
  { "name": "Punitha", "role": "HR TEAM LEAD", "phone": "+91 78458 28547", "email": "punithac@thoughtflows.in", "Branch": "", "image": Punitha },
  { "name": "Guruvigneshwar", "role": "HR-TEAM LEAD", "phone": "81221 02581", "email": "", "Branch": "", "image": Guruvigneshwaran },
  { "name": "Priyadharshini R", "role": "HR-TEAM LEAD", "phone": "80157 69049", "email": "Priyar@thoughtflows.in", "Branch": "", "image": PriyadharshiniR },
  // { "name": "Sindhu Thakaiya", "role": "BRANCH HEAD & PROCESS COACH", "phone": "88077 65495", "email": "sindhus@thoughtflows.in", "Branch": "", "image": Sindhu },
  // {"name": "Karthika", "role": "TEAM LEAD", "phone": "", "email": "", "Branch": "HR - Team Lead","image":Karthika},

  { "name": "Kiruthika D", "role": "SENIOR FINANCE MANAGER", "phone": "", "email": "", "Branch": "", "image": kiruthika },




  { "name": "Peemuthannagari Supraja", "role": "HR EXECUTIVE", "phone": "80151 08186", "email": "suprajap@thoughtflows.in", "Branch": "", "image": Peemuthannagari },
  { "name": "Sreelekha ", "role": "HR EXECUTIVE", "phone": "89437 44055", "email": "sreelekhapc@thoughtflows.in", "Branch": "", "image": Sreelekha },
  { "name": "Dharshini", "role": "SENIOR HR EXECUTIVE", "phone": "99444 84356", "email": "dharshinis@thoughtflows.in", "Branch": "", "image": Dharshini },
  { "name": "Prabhu", "role": " HR EXECUTIVE", "phone": "97895 18184", "email": "prabhum@thoughtflows.in", "Branch": "", "image": Prabhu },
  { "name": "Vishnupriya Dev", "role": "HR EXECUTIVE", "phone": "96455 88099", "email": "", "Branch": "", "image": VishnupriyaDev },
  { "name": "Pavithra N", "role": "HR EXECUTIVE", "phone": "63856 18301", "email": "pavithran@thoughtflows.in", "Branch": "", "image": PavithraN },
  { "name": "Gayathri", "role": "HR EXECUTIVE", "phone": "63745 82079", "email": "ugayathri@thoughtflows.in", "Branch": "", "image": Gayathri },
  { "name": "Kanchana", "role": "HR EXECUTIVE", "phone": "73395 64314", "email": "kanchana@thoughtflows.in", "Branch": "", "image": Kanchana },

  { "name": "Julie", "role": "HR EXECUTIVE", "phone": "80156 93629", "email": "julie@thoughtflows.in", "Branch": "", "image": Julie },
  { "name": "Sangavi.P", "role": "HR EXECUTIVE", "phone": "81222 42136", "email": "sangavipthoughtflows.in", "Branch": "", "image": SangaviP },
  { "name": "Kannan", "role": "HR EXECUTIVE", "phone": "75581 19016", "email": "kannans@thoughtflows.in", "Branch": "", "image": Kannan },
  { "name": "Deepthi", "role": "HR EXECUTIVE", "phone": "81222 60415", "email": "", "Branch": "", "image": Deepthi },
  { "name": "Dhivya", "role": "HR EXECUTIVE", "phone": "81222 60498", "email": "", "Branch": "", "image": Dhivya },

  { "name": "G.VishnuPriya", "role": "HR EXECUTIVE", "phone": "93983 02884", "email": "", "Branch": "", "image": GVishnupriya },
  { "name": "k.Divya", "role": "HR EXECUTIVE", "phone": "83742 15861", "email": "", "Branch": "", "image": KDivya },
  { "name": "Aryasree A", "role": "HR EXECUTIVE", "phone": "89436 44055", "email": "", "Branch": "", "image": Aryasree },
  { "name": "Rahul", "role": "HR EXECUTIVE", "phone": "93914 59921", "email": "", "Branch": "", "image": Rahul },
  { "name": "M.Keerthiga", "role": "HR EXECUTIVE", "phone": "9940279031", "email": "keerthigathoughtflows@gmail.com", "Branch": "", "image": Keerthiga },
  { "name": "R.Lakshmi Pavani", "role": "HR EXECUTIVE", "phone": "", "email": "", "Branch": "", "image": LakshmiPavani },
  { "name": "B. Likitha", "role": "HR EXECUTIVE", "phone": "7396213531", "email": "", "Branch": "", "image": Likitha },

  // {"name": "Manasa Bulle", "role": "HR EXECUTIVE", "phone": "7675922965", "email": "", "Branch": "","image":Manasa},
  // {"name": "Sobika", "role": "HR EXECUTIVE", "phone": "8807141379", "email": "sobikac@thoughtflows.in", "Branch": "","image":Sobika},

  /*
  { "name": "Sanjay", "role": "TALENT ACQUISITION EXECUTIVE", "phone": "81229 20938", "email": "sanjayp@thoughtflows.in", "Branch": "", "image": Sanjay },
  { "name": "Tejaswini", "role": "TALENT ACQUISITION EXECUTIVE", "phone": "89397 61685", "email": "arputhakumara@thoughtflows.in", "Branch": "", "image": Tejaswini },
  { "name": "Megha", "role": "TALENT ACQUISITION EXECUTIVE", "phone": "81222 60271", "email": "", "Branch": "", "image": Megha },
  { "name": "Byreddy Vinay Anand Akash Reddy", "role": "TALENT ACQUISITION EXECUTIVE", "phone": "70937 53815", "email": "", "Branch": "", "image": ByreddyVinayAnandAkashReddy },


  { "name": "Kowsikan", "role": "DIGITAL MARKETING EXECUTIVE", "phone": "", "email": "", "Branch": "", "image": Kowsikan },
  { "name": "Kiruthika", "role": "DIGITAL MARKETING EXECUTIVE", "phone": "", "email": "", "Branch": "", "image": Kiruthika },
  { "name": "Ram Kumar", "role": "DIGITAL MARKETING EXECUTIVE", "phone": "", "email": "", "Branch": "", "image": kumar },

  { "name": "Deepak Kumar Pujari", "role": "DIGITAL MARKETING EXECUTIVE", "phone": "", "email": "", "Branch": "", "image": DeepkKumarPujari },
  { "name": "Santhosh", "role": "DIGITAL MARKETING EXECUTIVE", "phone": "", "email": "", "Branch": "", "image": Santhosh },
  { "name": "Sreenath Reddy", "role": "TECHNICAL AND MARKETING EXECUTIVE", "phone": "63058 39325", "email": "sreenathr@thoghtflows.in", "Branch": "", "image": Sreenath },
  { "name": "Jeron", "role": "Graphic Designer", "phone": "", "email": "", "Branch": "", "image": Jeron },
  */

  { "name": "Manoj Kumar", "role": "MANAGEMENT INFORMATION SYSTEM EXECUTIVE", "phone": "76608 34401", "email": "manojkumar@thoughtflows.in", "Branch": "", "image": Manojs },
  // { "name": "Deva Dharshini", "role": "MANAGEMENT INFORMATION SYSTEM EXECUTIVE", "phone": "63800 99212", "email": "devadharshinis@thoughtflows.in", "Branch": "", "image": Deva },
  { "name": "Kavitha", "role": "MANAGEMENT INFORMATION SYSTEM EXECUTIVE", "phone": "63800 99212", "email": "", "Branch": "", "image": Kavitha },

    { "name": "Mohammed Azeesdeen", "role": "Digital Marketing Executive", "phone": "", "email": "", "Branch": "", "image": null },
  { "name": "Babu", "role": "OUTDOOR MARKETING EXECUTIVE", "phone": "89785 93885", "email": "", "Branch": "", "image": Babu },
  { "name": "Pradheesh", "role": "OUTDOOR MARKETING EXECUTIVE", "phone": "70947 02901", "email": "pradheeshthoughtflow@gmail.com", "Branch": "", "image": Pradheesh },
]


const teamStructure = [
  { role: "OUR FOUNDERS", count: 2 },
  { role: "BRANCH MANAGERS", count: 4 },
  { role: "INDIA HEAD - OPERATIONS &  STRATEGIC PARTNERSHIP", count: 1 },
  { role: "OPERATIONAL HEAD", count: 1 },
  { role: "DEPARTMENT HEADS", count: 4 },
  { role: "REGIONAL MANAGER", count: 3 },
  { role: "TRAINING MANAGER", count: 2 },
  { role: "TRAINER", count: 12 },
  { role: "BRANCH HEAD", count: 1 },
  { role: "TEAM LEAD", count: 7 },
  // { role: "PROCESS COACH", count: 1 },
  { role: "FINANCE MANAGER", count: 1 },
  { role: "HR EXECUTIVE", count: 20 },
  // { role: "TALENT ACQUISITION EXECUTIVE", count: 4 },
  // { role: "DIGITAL MARKETING EXECUTIVE", count: 7 },
  { role: "MANAGEMENT INFORMATION SYSTEM EXECUTIVE", count: 2 },
  { role: "MARKETING TEAM", count: 3 },

]

// Background colors for profile images
const bgColors = ["bg-pink-200", "bg-blue-200", "bg-gray-200", "bg-purple-200", "bg-green-200"]

function TeamHierarchy() {

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [])
  let imageIndex = 0;  // Keep track of which images have been used

  return (
    <>
      <Meta title="Meet the ThoughtFlows Team | Experts in Medical Coding" description="Get to know the dedicated team at ThoughtFlows — expert trainers and professionals shaping the future of medical coding education." canonical="https://www.thoughtflows.in/ourteam" />
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
          <p className="text-white text-lg max-w-2xl mx-auto">Meet The Talented Individuals Behind Our Success</p>
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
                      phone: "",
                      email: "",
                      branch: "",
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

