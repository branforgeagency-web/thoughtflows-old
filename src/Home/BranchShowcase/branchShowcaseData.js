import coimbatore from "../../images/Branches/showcase/coimbatore.jpg";
import coimbatoreSm from "../../images/Branches/showcase/coimbatore-sm.jpg";
import hyderabad from "../../images/Branches/showcase/hyderabad.jpg";
import hyderabadSm from "../../images/Branches/showcase/hyderabad-sm.jpg";
import kochi from "../../images/Branches/showcase/kochi.jpg";
import kochiSm from "../../images/Branches/showcase/kochi-sm.jpg";

/**
 * Branch showcase content.
 * Only real Thoughtflows locations are listed (verified against src/data/branchDetails.js
 * and the hub routes in App.js). Add another branch by appending an object;
 * the accordion adapts to any count.
 *
 * Photos: real campus photography, 1376px + 760px widths in src/images/Branches/showcase/.
 * `focus` is the CSS object-position that keeps the people in frame in narrow panels.
 */
export const SHOWCASE_BRANCHES = [
  {
    id: "coimbatore",
    category: "Tamil Nadu",
    title: "Coimbatore Academy",
    location: "Coimbatore, Tamil Nadu",
    description:
      "Build your medical coding career with professional training, expert guidance and practical learning opportunities.",
    campuses: ["Hopes", "Gandhipuram", "Saravanampatti"],
    href: "/coimbatore",
    image: coimbatore,
    imageSm: coimbatoreSm,
    focus: "42% 55%",
    alt: "Students working on computers in a Thoughtflows medical coding classroom in Coimbatore",
  },
  {
    id: "hyderabad",
    category: "Telangana",
    title: "Hyderabad Academy",
    location: "Hyderabad, Telangana",
    description:
      "Develop industry-ready medical coding skills through structured training and career-focused learning.",
    campuses: ["Ameerpet", "Dilsukhnagar"],
    href: "/hyderabad",
    image: hyderabad,
    imageSm: hyderabadSm,
    focus: "55% 50%",
    alt: "Instructor explaining medical coding concepts to students at a Thoughtflows Hyderabad campus",
  },
  {
    id: "kochi",
    category: "Kerala",
    title: "Kochi Academy",
    location: "Kochi, Kerala",
    description:
      "Discover professional medical coding education designed to prepare learners for healthcare industry opportunities.",
    campuses: ["Kochi", "Trivandrum"],
    href: "/kerala",
    image: kochi,
    imageSm: kochiSm,
    focus: "50% 55%",
    alt: "Students collaborating in the Thoughtflows Kochi medical coding training centre",
  },
];
