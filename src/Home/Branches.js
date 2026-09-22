import React from "react";
import { Link } from "react-router-dom";
import "./Branches.css";

import ameerpetImg from "../images/Branches/clean/Ameerpet.png";
import dilsukhnagarImg from "../images/Branches/clean/Dilsukhnagar.png";
import gandhipuramImg from "../images/Branches/clean/Gandhipuram.png";
import hopesImg from "../images/Branches/clean/Hopes.png";
import kochiImg from "../images/Branches/clean/Kochi.png";
import salemImg from "../images/Branches/clean/Salem.png";
import saravanampattiImg from "../images/Branches/clean/Saravanampatti.png";
import tirupatiImg from "../images/Branches/clean/Tirupati.png";
import trichyImg from "../images/Branches/clean/Trichy.png";
import trivandrumImg from "../images/Branches/clean/Trivandrum.png";
import vizagImg from "../images/Branches/clean/Vizag.png";

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
  { name: "Tirupati", region: "Andhra Pradesh", img: tirupatiImg, path: "/Expert-Medical-Coding-Tirupathi" },
  { name: "Vizag", region: "Andhra Pradesh", img: vizagImg, path: "/Innovative-Medical-Coding-Vizag" },
];

const Branches = () => {
  return (
    <section className="branches-lux">
      <div className="branches-lux-inner">
        <div className="branches-lux-header">
          <span className="branches-eyebrow">Our Presence</span>
          <h2 className="branches-lux-heading">
            Eleven campuses, <em>one standard</em> of excellence
          </h2>
          <p className="branches-lux-subheading">
            From Hyderabad to Kochi, Thoughtflows brings the same premium medical
            coding training experience to every campus across South India.
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
