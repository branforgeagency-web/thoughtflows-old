import React from "react";
import { Link } from "react-router-dom";
import "./Branches.css";
import { mediaUrl } from "../config/media";
const ameerpetImg = mediaUrl("images/Branches/clean/Ameerpet.png");
const dilsukhnagarImg = mediaUrl("images/Branches/clean/Dilsukhnagar.png");
const gandhipuramImg = mediaUrl("images/Branches/clean/Gandhipuram.png");
const hopesImg = mediaUrl("images/Branches/clean/Hopes.png");
const kochiImg = mediaUrl("images/Branches/clean/Kochi.png");
const salemImg = mediaUrl("images/Branches/clean/Salem.png");
const saravanampattiImg = mediaUrl("images/Branches/clean/Saravanampatti.png");
const tirupatiImg = mediaUrl("images/Branches/clean/Tirupati.png");
const trichyImg = mediaUrl("images/Branches/clean/Trichy.png");
const trivandrumImg = mediaUrl("images/Branches/clean/Trivandrum.png");
const vizagImg = mediaUrl("images/Branches/clean/Vizag.png");
const puneImg = mediaUrl("images/Branches/clean/Pune.png");
const kolhapurImg = mediaUrl("images/Branches/clean/Kolhapur.png");
const theniImg = mediaUrl("images/Branches/theni-teaching.jpg");


const branchList = [
  { name: "Ameerpet", region: "Telangana", img: ameerpetImg, path: "/Trusted-Medical-Coding-Ameerpet" },
  { name: "Dilsukhnagar", region: "Telangana", img: dilsukhnagarImg, path: "/Professional-Medical-Coding-Dilsukhnagar" },
  { name: "Gandhipuram", region: "Tamil Nadu", img: gandhipuramImg, path: "/Premier-Medical-Coding-Institute-Gandhipuram" },
  { name: "Hopes", region: "Tamil Nadu", img: hopesImg, path: "/Medical-Coding-Excellence-at-Hopes" },
  { name: "Saravanampatti", region: "Tamil Nadu", img: saravanampattiImg, path: "/Top-Medical-Coding-Training-Saravanampatti" },
  { name: "Kochi", region: "Kerala", img: kochiImg, path: "/Medical-Coding-Academy-Kochi" },
  { name: "Trivandrum", region: "Kerala", img: trivandrumImg, path: "/Advanced-Medical-Coding-Tiruvandrum" },
  { name: "Salem", region: "Tamil Nadu", img: salemImg, path: "/Future-Ready-Medical-Coding-Salem" },
  { name: "Trichy", region: "Tamil Nadu", img: trichyImg, path: "/Career-Focused-Medical-Coding-Trichy" },
  { name: "Theni", region: "Tamil Nadu", img: theniImg, path: "/medical-coding-course-theni" },
  { name: "Tirupati", region: "Andhra Pradesh", img: tirupatiImg, path: "/Expert-Medical-Coding-Tirupathi" },
  { name: "Vizag", region: "Andhra Pradesh", img: vizagImg, path: "/Innovative-Medical-Coding-Vizag" },
  { name: "Pune", region: "Maharashtra", img: puneImg, path: "/medical-coding-course-pune/" },
  { name: "Kolhapur", region: "Maharashtra", img: kolhapurImg, path: "/Medical-Coding-Training-Kolhapur" },
];

const Branches = () => {
  return (
    <section className="branches-lux">
      <div className="branches-lux-inner">
        <div className="branches-lux-header">
          <span className="branches-eyebrow">Our Presence</span>
          <h2 className="branches-lux-heading">
            Fourteen campuses, <em>one standard</em> of excellence
          </h2>
          <p className="branches-lux-subheading">
            From Pune and Kolhapur to Hyderabad and Kochi, Thoughtflows brings the
            same premium medical coding training experience to every campus across India.
          </p>
        </div>

        <div className="branches-lux-grid">
          {branchList.map((branch) => (
            <Link to={branch.path} className="branch-lux-card" key={branch.name}>
              <span className="branch-ring">
                <span className="branch-ring-inner">
                  <img src={branch.img} alt={`Thoughtflows ${branch.name} branch`} />
                </span>
              </span>
              <h3 className="branch-lux-name">{branch.name}</h3>
              <span className="branch-lux-region">{branch.region}</span>
              <span className="branch-lux-explore">Explore branch &rarr;</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Branches;
