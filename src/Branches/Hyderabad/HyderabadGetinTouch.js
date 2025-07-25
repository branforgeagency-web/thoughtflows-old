import React from "react";
import { Link } from "react-router-dom";
function HyderabadGetinTouch() {
  return (
    <>
      <div className="get">
        <div className="get-1">
          <h2 style={{ marginBottom: "20px" }}>
            Affordable Fees and Easy Payment Options
          </h2>
          <p>
            We understand that investing in your education is a significant
            decision. Our training program offers affordable fees and easy
            payment options to make it accessible for aspiring medical coders.
            We strive to provide high-quality training at an affordable price,
            ensuring that finances are not a barrier to your career advancement
            in the medical coding field.
          </p>
        </div>
        <div className="get-2">
          <h2 style={{ marginBottom: "20px" }}>Get in Touch with Us</h2>
          <p>
            If you have any questions or inquiries about our medical coding
            training program in Hyderabad, we encourage you to get in touch with
            us. Our friendly and knowledgeable staff are ready to assist you and
            provide you with all the information you need to make an informed
            decision. Contact us today and take the first step towards a
            rewarding career in medical coding.
          </p>
          <Link to="/contact" className="button">Contact Us</Link>
        </div>
      </div>
    </>
  );
}

export default HyderabadGetinTouch;
