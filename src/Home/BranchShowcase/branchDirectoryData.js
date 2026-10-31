import { branchDetails } from "../../data/branchDetails";

// Original branch photos (src/images/Branches/clean) — the same images the
// previous branch section used. Theni has no clean photo, so it keeps the
// image the old section used for it.
import ameerpetImg from "../../images/Branches/clean/Ameerpet.png";
import dilsukhnagarImg from "../../images/Branches/clean/Dilsukhnagar.png";
import gandhipuramImg from "../../images/Branches/clean/Gandhipuram.png";
import hopesImg from "../../images/Branches/clean/Hopes.png";
import kochiImg from "../../images/Branches/clean/Kochi.png";
import kolhapurImg from "../../images/Branches/clean/Kolhapur.png";
import puneImg from "../../images/Branches/clean/Pune.png";
import salemImg from "../../images/Branches/clean/Salem.png";
import saravanampattiImg from "../../images/Branches/clean/Saravanampatti.png";
import tirupatiImg from "../../images/Branches/clean/Tirupati.png";
import trichyImg from "../../images/Branches/clean/Trichy.png";
import trivandrumImg from "../../images/Branches/clean/Trivandrum.png";
import vizagImg from "../../images/Branches/clean/Vizag.png";
import theniImg from "../../images/Branches/theni-teaching.jpg";

/** Display order of states in the filter. */
export const STATES = ["Tamil Nadu", "Kerala", "Telangana", "Andhra Pradesh", "Maharashtra"];

/**
 * All 14 branches. Address and phone come from src/data/branchDetails.js
 * (single source of truth), so edits there show up here automatically.
 * Page links are the existing routes in App.js.
 */
const BRANCH_LIST = [
  { key: "hopes", city: "Coimbatore", state: "Tamil Nadu", img: hopesImg, path: "/Medical-Coding-Excellence-at-Hopes" },
  { key: "gandhipuram", city: "Coimbatore", state: "Tamil Nadu", img: gandhipuramImg, path: "/Premier-Medical-Coding-Institute-Gandhipuram" },
  { key: "saravanampatti", city: "Coimbatore", state: "Tamil Nadu", img: saravanampattiImg, path: "/Top-Medical-Coding-Training-Saravanampatti" },
  { key: "salem", city: "Salem", state: "Tamil Nadu", img: salemImg, path: "/Future-Ready-Medical-Coding-Salem" },
  { key: "trichy", city: "Tiruchirappalli", state: "Tamil Nadu", img: trichyImg, path: "/Career-Focused-Medical-Coding-Trichy" },
  { key: "theni", city: "Theni", state: "Tamil Nadu", img: theniImg, path: "/medical-coding-course-theni" },
  { key: "kochi", city: "Ernakulam", state: "Kerala", img: kochiImg, path: "/Medical-Coding-Academy-Kochi" },
  { key: "trivandrum", city: "Thiruvananthapuram", state: "Kerala", img: trivandrumImg, path: "/Advanced-Medical-Coding-Tiruvandrum" },
  { key: "ameerpet", city: "Hyderabad", state: "Telangana", img: ameerpetImg, path: "/Trusted-Medical-Coding-Ameerpet" },
  { key: "dilsukhnagar", city: "Hyderabad", state: "Telangana", img: dilsukhnagarImg, path: "/Professional-Medical-Coding-Dilsukhnagar" },
  { key: "tirupati", city: "Tirupati", state: "Andhra Pradesh", img: tirupatiImg, path: "/Expert-Medical-Coding-Tirupathi" },
  { key: "vizag", city: "Visakhapatnam", state: "Andhra Pradesh", img: vizagImg, path: "/Innovative-Medical-Coding-Vizag" },
  { key: "pune", city: "Pune", state: "Maharashtra", img: puneImg, path: "/medical-coding-course-pune/" },
  { key: "kolhapur", city: "Kolhapur", state: "Maharashtra", img: kolhapurImg, path: "/Medical-Coding-Training-Kolhapur" },
];

export const BRANCHES = BRANCH_LIST.map((b) => {
  const d = branchDetails[b.key] || {};
  return {
    ...b,
    id: b.key,
    name: d.name || b.key,
    address: d.address || "",
    phone: d.phone || "",
    phoneHref: d.phoneClean ? `tel:${d.phoneClean}` : "",
  };
});
