import { mediaUrl } from '../../config/media';
const coimbatore = mediaUrl("images/Branches/gallery/coimbatore.jpg");
const chennai = mediaUrl("images/Branches/gallery/chennai.jpg");
const bangalore = mediaUrl("images/Branches/gallery/bangalore.jpg");
const hyderabad = mediaUrl("images/Branches/gallery/hyderabad.jpg");
const madurai = mediaUrl("images/Branches/gallery/madurai.jpg");
const trichy = mediaUrl("images/Branches/gallery/trichy.jpg");
const kochi = mediaUrl("images/Branches/gallery/kochi.jpg");
const training = mediaUrl("images/Branches/gallery/training.jpg");



/**
 * Gallery content. Edit labels, photos and links here only.
 * Photos are 800×800 graded crops in src/images/Branches/gallery/.
 */
export const BRANCHES = [
  {
    id: "coimbatore",
    category: "Tamil Nadu",
    title: "Coimbatore Campus",
    image: coimbatore,
    alt: "Trainer leading a medical coding session at the Thoughtflows Coimbatore campus",
    href: "/coimbatore",
  },
  {
    id: "chennai",
    category: "Tamil Nadu",
    title: "Chennai Campus",
    image: chennai,
    alt: "Students working at computer workstations in a modern medical coding classroom",
  },
  {
    id: "bangalore",
    category: "Karnataka",
    title: "Bangalore Campus",
    image: bangalore,
    alt: "Bright, corporate-style healthcare training centre with student workstations",
  },
  {
    id: "hyderabad",
    category: "Telangana",
    title: "Hyderabad Campus",
    image: hyderabad,
    alt: "Medical coding lab with students at computer workstations in Hyderabad",
    href: "/hyderabad",
  },
  {
    id: "madurai",
    category: "Tamil Nadu",
    title: "Madurai Campus",
    image: madurai,
    alt: "Trainer teaching students in a modern educational facility",
  },
  {
    id: "trichy",
    category: "Tamil Nadu",
    title: "Trichy Campus",
    image: trichy,
    alt: "Collaborative medical coding classroom with students at workstations",
    href: "/Career-Focused-Medical-Coding-Trichy",
  },
  {
    id: "kochi",
    category: "Kerala",
    title: "Kochi Campus",
    image: kochi,
    alt: "Healthcare education classroom at the Thoughtflows Kochi campus",
    href: "/Medical-Coding-Academy-Kochi",
  },
  {
    id: "training",
    category: "Our Expertise",
    title: "Training Excellence",
    image: training,
    alt: "Certified medical coding instructor reviewing coding work with students",
    href: "/about",
  },
];
