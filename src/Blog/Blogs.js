// Blogs.js
import React from "react";

import '@fortawesome/fontawesome-free/css/all.min.css';
import { Col, Row, Container } from "react-bootstrap";
import blog1 from "../images/Blog/blog.jpg";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


import BlogRef1 from "./BlogRef1";

function Blogs() {
  return (

    <Routes>
      <Route path="/" element={<BlogList />} />
      <Route path="/blog/:id" element={<BlogRef1 />} />
    </Routes>

  );
}

function BlogList() {
  return (
    <>
      <div
        id="blog1"
        style={{
          width: "100%",
          background: "transparent",
          height: "auto",
          display: "flex",
          justifyContent: "space-around",
          gap: "40px",
          marginBottom: "75px",
        }}
      >
        <div>
          <img
            src={blog1}
            style={{
              width: "750px",
              margin: "80px 0px 0px 0px",
              borderTopLeftRadius: "25px",
            }}
            alt="Blog 1"
          />
          <div style={{ border: "2px solid black", padding: "20px 20px", borderTop: "0px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <p>September 27, 2022 </p>
              <p>Comments 0</p>
            </div>
            <h2 style={{ margin: "20px 0px 10px 0px" }}>16 Tips to clear your CPC exam?</h2>
            <p style={{ margin: "20px 0px 10px 0px" }}>
              CPC Exam The CPC exam is a type of exam conducted by the AAPC for the candidates...
            </p>
            <Link to="/blog/1">
              <button style={{ margin: "20px 0px 10px 0px" }}>Continue Reading</button>
            </Link>
          </div>
        </div>
      </div>


      <div
        id="blog2"
        style={{
          width: "100%",
          background: "transparent",
          height: "auto",
          display: "flex",
          justifyContent: "space-around",
          gap: "40px",
          marginBottom: "80px",
        }}
      >
        <div>
          <img
            src={blog1}
            style={{
              width: "750px",
              margin: "0px",
              borderTopLeftRadius: "25px",
            }}
            alt="Blog 2"
          />
          <div style={{ border: "2px solid black", padding: "20px 20px", borderTop: "0px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <p>January 2, 2023 </p>
              <p>Comments 0</p>
            </div>
            <h2 style={{ margin: "20px 0px 10px 0px" }}>What's CPC Exam?</h2>
            <p style={{ margin: "20px 0px 10px 0px" }}>
              Certified Professional Coder (CPC) For anyone who doesn’t know what CPC...
            </p>
            <Link to="/blog/2">
              <button style={{ margin: "20px 0px 10px 0px" }}>Continue Reading</button>
            </Link>
          </div>
        </div>
      </div>

      <BlogRef1 />
    </>
  );
}

export default Blogs;
