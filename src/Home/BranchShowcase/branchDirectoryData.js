import { branchDetails } from "../../data/branchDetails";
import { mediaUrl } from '../../config/media';
const ameerpetImg = mediaUrl("images/Branches/clean/Ameerpet.png");
const dilsukhnagarImg = mediaUrl("images/Branches/clean/Dilsukhnagar.png");
const gandhipuramImg = mediaUrl("images/Branches/clean/Gandhipuram.png");
const hopesImg = mediaUrl("images/Branches/clean/Hopes.png");
const kochiImg = mediaUrl("images/Branches/clean/Kochi.png");
const kolhapurImg = mediaUrl("images/Branches/clean/Kolhapur.png");
const puneImg = mediaUrl("images/Branches/clean/Pune.png");
const salemImg = mediaUrl("images/Branches/clean/Salem.png");
const saravanampattiImg = mediaUrl("images/Branches/clean/Saravanampatti.png");
const tirupatiImg = mediaUrl("images/Branches/clean/Tirupati.png");
const trichyImg = mediaUrl("images/Branches/clean/Trichy.png");
const trivandrumImg = mediaUrl("images/Branches/clean/Trivandrum.png");
const vizagImg = mediaUrl("images/Branches/clean/Vizag.png");
const theniImg = mediaUrl("images/Branches/theni-teaching.jpg");

// Original branch photos (src/images/Branches/clean) — the same images the
// previous branch section used. Theni has no clean photo, so it keeps the
// image the old section used for it.

/** Display order of states in the filter. */
export const STATES = ["Tamil Nadu", "Kerala", "Telangana", "Andhra Pradesh", "Maharashtra"];

/**
 * All 14 branches. Address and phone come from src/data/branchDetails.js
 * (single source of truth), so edits there show up here automatically.
 * Page links are the existing routes in App.js.
 */
const BRANCH_LIST = [
  { key: "saravanampatti", city: "Coimbatore", state: "Tamil Nadu", img: saravanampattiImg, path: "/Top-Medical-Coding-Training-Saravanampatti" },
  { key: "gandhipuram", city: "Coimbatore", state: "Tamil Nadu", img: gandhipuramImg, path: "/Premier-Medical-Coding-Institute-Gandhipuram" },
  { key: "hopes", city: "Coimbatore", state: "Tamil Nadu", img: hopesImg, path: "/Medical-Coding-Excellence-at-Hopes" },
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
