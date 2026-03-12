import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
// import Header1 from './header1';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from "react-helmet";
import Home from './Home/Home';
import About from './About/About';
import Blog from './Blog/Blog';
import Blog4 from './Blog/Blog4';
import Blog5 from './Blog/Blog5';
import Blog6 from './Blog/Blog6';
import Blog7 from './Blog/Blog7';
import Contact from './Contact/Contact';
import Footer from './Footer';
import Career from './Career/Career';
import CPC from './Courses/CPC';
import Blog1 from "../src/Blog/Blog1"
import Blog2 from "../src/Blog/Blog2"
import Blog3 from "../src/Blog/Blog3"
import CIC from './Courses/CIC';
import COC from './Courses/COC';
import CPMA from './Courses/CPMA';
import CRC from './Courses/CRC';
import Surgery from './Courses/Surgery';
import ED from './Courses/ED';
import EM from './Courses/EM';
import CO from './Courses/ClinicalOrder';
import Radio from './Courses/Radio';
import Anesesthesia from './Courses/Anesesthesia';
import CbeBranch1 from './Branches/CbeBranch1';
import TirupathiBranch from './Branches/TirupathiBranch';
import CbeBranch2 from './Branches/CbeBranch2';
import CbeBranch3 from './Branches/CbeBranch3';
import Kochi from './Branches/Kochi';
import Trivandrum from './Branches/Trivandrum';
import Hyderabad from './Branches/Hyderabad';
import Vizag from './Branches/Vizag';
import TrichyBranches from './Branches/TrichyBranches';
import ScrollToTop from './ScrollToTop';
import IpDrug from './Courses/IpDrug';
import CCS from './Courses/CCS';
import RHIA from './Courses/RHIA';
import RHIT from './Courses/RHIT';
import HIM from './Courses/HIM';
import CSS from './Courses/CSSP';
import CPB from './Courses/CPB';
import CEDC from './Courses/CEDC';
import CEMC from './Courses/CEMC';
import CDEO from './Courses/CDEO';
import CDEI from './Courses/CDEI';
import CPPM from './Courses/CPPM';
import HCC from './Courses/HCC';
import IVR from './Courses/IVR';
import Hyderabad2 from './Branches/Hyderabad2';
import Salem from "./Branches/Salem"
import TeamHierarchy from './Ourteam/TeamHierarchy';
import { PopupProvider } from './context/PopupContext';
import FloatingIcons from './FloatingIcons';
import Placements from './Placements/Placements';
import YearlyPlacementList from './Placements/YearlyPlacementList';

function App() {

  return (
    <>
      <PopupProvider>
        <Router>

          <Header />
          <FloatingIcons />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path='/career' element={<Career />} />
            <Route path='/ourteam' element={<TeamHierarchy />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/what-is-medical-coding-complete-guide-for-beginners-thoughtflows" element={<Blog1 />} />
            <Route path="/blog/why-medical-coding-is-the-backbone-of-the-healthcare-industry" element={<Blog2 />} />
            <Route path="/blog/top-5-medical-coding-mistakes-and-how-to-avoid-them-for-a-successful-career" element={<Blog3 />} />
            <Route path="/blog/how-to-prepare-for-the-cpc-exam-expert-tips-and-strategies-for-success" element={<Blog4 />} />
            <Route path="/blog/exploring-icd10cm-key-changes-you-need-to-know-for-accurate-medical-coding" element={<Blog5 />} />
            <Route path="/blog/the-role-of-medical-coders-in-modern-healthcare-essential-insights" element={<Blog6 />} />
            <Route path="/blog/medical-coding-career-path-opportunities-and-growth-in-healthcare" element={<Blog7 />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cpc" element={<CPC />} />
            <Route path="/cic" element={<CIC />} />
            <Route path="/coc" element={<COC />} />
            <Route path='/cpma' element={<CPMA />} />
            <Route path='/crc' element={<CRC />} />
            <Route path='/surgery' element={<Surgery />} />
            <Route path='/ed' element={<ED />} />
            <Route path='/em' element={<EM />} />
            <Route path='/ccc' element={<CO />} />
            <Route path='/him' element={<HIM />} />
            <Route path='/radiology' element={<Radio />} />
            <Route path='/anesesthesia' element={<Anesesthesia />} />
            <Route path='/Top-Medical-Coding-Training-Saravanampatti' element={<CbeBranch1 />} />
            <Route path='/Medical-Coding-Excellence-at-Hopes' element={<CbeBranch2 />} />
            <Route path='/Premier-Medical-Coding-Institute-Gandhipuram' element={<CbeBranch3 />} />
            <Route path='/Expert-Medical-Coding-Tirupathi' element={<TirupathiBranch />} />
            <Route path='/Medical-Coding-Academy-Kochi' element={<Kochi />} />
            <Route path='/Advanced-Medical-Coding-Tiruvandrum' element={<Trivandrum />} />
            <Route path='/Future-Ready-Medical-Coding-Salem' element={<Salem />} />
            <Route path='/Trusted-Medical-Coding-Ameerpet' element={<Hyderabad />} />
            <Route path='/Professional-Medical-Coding-Dilsukhnagar' element={<Hyderabad2 />} />
            <Route path='/Innovative-Medical-Coding-Vizag' element={<Vizag />} />
            <Route path='/Career-Focused-Medical-Coding-Trichy' element={<TrichyBranches />} />
            <Route path='/ip-drg' element={<IpDrug />} />
            <Route path='/ccs' element={<CCS />} />
            <Route path='/ccs-p' element={<CSS />} />
            <Route path='/rhia' element={<RHIA />} />
            <Route path='/rhit' element={<RHIT />} />
            <Route path='/cpb' element={<CPB />} />
            <Route path='/cedc' element={<CEDC />} />
            <Route path='/cemc' element={<CEMC />} />
            <Route path='/cdeo' element={<CDEO />} />
            <Route path='/cdei' element={<CDEI />} />
            <Route path='/cppm' element={<CPPM />} />
            <Route path='/hcc' element={<HCC />} />
            <Route path='/ivr' element={<IVR />} />
            <Route path="/placements" element={<Placements />} />
            <Route path="/placements/:year" element={<YearlyPlacementList />} />
          </Routes>
          {/* <ScrollToTop/> */}
          <Footer />
        </Router>
      </PopupProvider>
    </>
  );
}

export default App;
