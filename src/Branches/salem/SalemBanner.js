// import React from "react";
// import bannerImage from "../../images/homebannerbg.png";
// import { Container, Row } from "react-bootstrap";
// import CountUp from "react-countup";
// import { Col } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import salem from "../../images/Branches/3.png";

// const SalemBanner = () => {
//   return (
//     <>
//       <Row
//         className="salem-banner"
//         style={{
//           backgroundImage: `url(${bannerImage})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           overflow: "hidden",
//           backgroundRepeat: "no-repeat",
//           minHeight: "90vh",
//           alignItems: "center",
//           margin: 0,
//           padding: "20px 0",
//         }}
//       >
//         <Col lg={1} xs={0}></Col>
//         <Col
//           lg={5}
//           xs={12}
//           className="salem-banner-lft order-1 order-lg-1 px-3 px-lg-4 py-3 py-lg-4 text-center text-lg-start"
//         >
//           <Col className="salem-banner-heading">
//             <h2
//               style={{
//                 fontSize: "clamp(22px, 4.5vw, 40px)",
//                 lineHeight: "1.3",
//               }}
//             >
//               No.1 Leading Training Institute
//             </h2>
//             <h2
//               style={{
//                 fontSize: "clamp(22px, 4.5vw, 40px)",
//                 lineHeight: "1.3",
//               }}
//             >
//               Medical Coding Academy in{" "}
//               <span style={{ color: "#097D8A" }}>Salem</span>
//             </h2>
//           </Col>
//           <Col>
//             <p
//               style={{
//                 fontSize: "clamp(14px, 2.5vw, 16px)",
//                 marginTop: "15px",
//                 lineHeight: "1.6",
//               }}
//             >
//               Enroll in Thoughtflows Academy, the No.1 leading training
//               institute in Salem and unlock your talents in medical coding.
//             </p>
//           </Col>
//           <Col className="cbe1-btn  m-20 mb-0 " style={{ maxWidth: "250px" }}>
//             <Link
//               to="/contact"
//               className="button-animation "
//               id="popup-contact"
//               style={{ maxWidth: "250px" }}
//             >
//               Register Now
//             </Link>
//           </Col>
//         </Col>

//         <Col
//           lg={5}
//           xs={12}
//           className=" sm:mt-0 salem-banner-rht order-2 order-lg-2 d-flex justify-content-center align-items-center lg:mt-4 mt-lg-0"
//         >
//           <img
//             src={salem}
//             alt="Salem branch"
//             className="bannergif img-fluid"
//             style={{
//               maxWidth: "90%",
//               height: "auto",
//               objectFit: "contain",
              
//             }}
//           />
//         </Col>
//         <Col lg={1} xs={0}></Col>
//       </Row>
//       <Container
//         fluid
//         className="salem-counter px-3 px-lg-4"
//         style={{
//           background: "#fff",
//           borderRadius: "20px",
//           boxShadow: "0 3px 15px 0 rgba(0, 0, 0, 0.13)",
//           marginTop: "-60px",
//           marginBottom: "20px",
//           padding: "20px 15px",
//           zIndex: 2,
//           position: "relative",
//           maxWidth: "95%",
//         }}
//       >
//         <Row className="align-items-center">
//           <Col lg={12}>
//             <Row className="gy-4">
//               <Col xs={6} md={3} className="text-center px-2">
//                 <p
//                   style={{
//                     color: "#FFC100",
//                     fontWeight: "700",
//                     fontSize: "clamp(18px, 3.5vw, 30px)",
//                     margin: 0,
//                     lineHeight: "1.2",
//                   }}
//                 >
//                   <CountUp start={0} end={30000} separator="," />+
//                 </p>
//                 <p
//                   style={{
//                     fontWeight: "500",
//                     fontSize: "clamp(14px, 2.5vw, 20px)",
//                     marginTop: "5px",
//                   }}
//                 >
//                   Training
//                 </p>
//               </Col>
//               <Col xs={6} md={3} className="text-center px-2">
//                 <p
//                   style={{
//                     color: "#F15BB5",
//                     fontWeight: "700",
//                     fontSize: "clamp(18px, 3.5vw, 30px)",
//                     margin: 0,
//                     lineHeight: "1.2",
//                   }}
//                 >
//                   <CountUp start={0} end={18000} separator="," />+
//                 </p>
//                 <p
//                   style={{
//                     fontWeight: "500",
//                     fontSize: "clamp(14px, 2.5vw, 20px)",
//                     marginTop: "5px",
//                   }}
//                 >
//                   Placement
//                 </p>
//               </Col>
//               <Col xs={6} md={3} className="text-center px-2">
//                 <p
//                   style={{
//                     color: "#00BBFA",
//                     fontWeight: "700",
//                     fontSize: "clamp(18px, 3.5vw, 30px)",
//                     margin: 0,
//                     lineHeight: "1.2",
//                   }}
//                 >
//                   <CountUp start={0} end={20} separator="," />+
//                 </p>
//                 <p
//                   style={{
//                     fontWeight: "500",
//                     fontSize: "clamp(14px, 2.5vw, 20px)",
//                     marginTop: "5px",
//                   }}
//                 >
//                   Courses
//                 </p>
//               </Col>
//               <Col xs={6} md={3} className="text-center px-2">
//                 <p
//                   style={{
//                     color: "#01F6D5",
//                     fontWeight: "700",
//                     fontSize: "clamp(18px, 3.5vw, 30px)",
//                     margin: 0,
//                     lineHeight: "1.2",
//                   }}
//                 >
//                   <CountUp start={0} end={11} separator="," />+
//                 </p>
//                 <p
//                   style={{
//                     fontWeight: "500",
//                     fontSize: "clamp(14px, 2.5vw, 20px)",
//                     marginTop: "5px",
//                   }}
//                 >
//                   Branches
//                 </p>
//               </Col>
//             </Row>
//           </Col>
//         </Row>
//       </Container>
//     </>
//   );
// };

// export default SalemBanner;


import React from "react";
import bannerImage from "../../images/homebannerbg.png";
import cbe1banner from "../../images/Branches/3.png";
import banner2 from "../../images/Branches/lapgirl.png";
// import cbe1banner from '../../images/Branches/cbe1bannerRight.png'
import { Container, Row } from "react-bootstrap";
import CountUp from "react-countup";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
// import bannerVid from "../../images/Branches/online/Comp.mp4"


const SalemBanner = () => {
  return (
    <>
      <Row
        className="cbe1-banner"
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          overflow: "hidden",
          backgroundRepeat: "no-repeat",
          minHeight: "95vh",
          alignItems: "center",
          padding: "40px 0",
        }}
      >
        <Col lg={1}></Col>
        <Col lg={5} className="cbe1-banner-lft mb-4 mb-lg-0 order-1 order-lg-1">
          {/* <Col className='cbe1-banner-dis'>
                    <h6 className='disc'>20% Off</h6>
                    <p className='cbe1-banner-lrn' style={{marginLeft:'15px', marginTop:'5px'}}>Learn from today</p>
                </Col> */}
          <Col className="cbe1-banner-heading">
            <h2 style={{ fontSize: "clamp(28px, 5vw, 40px)" }}>Medical Coding Training </h2>
            <h2 style={{ fontSize: "clamp(28px, 5vw, 40px)" }}>
              Institute in <span style={{ color: "#097D8A" }}>Salem</span>
            </h2>
          </Col>
          <Col>
            <p style={{ fontSize: "16px", marginTop: "20px" }}>
                Discover excellence and seize opportunities with Thoughtflows Medical Coding Academy in Salem.
            </p>
          </Col>
          <div className="d-flex justify-content-center justify-content-lg-start " >
          <Col className="cbe1-btn  " style={{maxWidth: "250px"}}>
          
          
            <Link to="/contact" className="button-animation " id="popup-contact" style={{maxWidth: "250px"}}> 
              Register Now
            </Link>
          </Col>
          </div>
        </Col>

        <Col lg={5} className="cbe1-banner-rht text-center order-2 order-lg-2" >
          <img src={cbe1banner} alt='bannersmall' style={{ maxWidth: "100%", height: "auto",marginBottom: "-90px"}} />
          {/* <video
            src={bannerVid}
            className="bannerVideo"
            autoPlay
            loop
            muted
            playsInline
            alt="bannervideo"
          /> */}
        </Col>
        <Col lg={1}></Col>
      </Row>
      <Container
        className="cbe1-counter mx-3 mx-md-auto"
        style={{
          background: "#fff",
          borderRadius: "10px",
          boxShadow: "0 3px 15px 0 rgba(0, 0, 0, 0.13)",
          padding: "20px 15px 10px",
          zIndex: 2,
          position: "relative",
          maxWidth: "calc(100% - 30px)",
        }}
      >
        <Row className="align-items-center">
          <Col lg={12}>
            <Row className="gy-4">
              <Col xs={6} md={3} className="text-center">
               
                <p
                  style={{
                    color: "#FFC100",
                    fontWeight: "700",
                    fontSize: "clamp(20px, 4vw, 30px)",
                    margin: 0,
                  }}
                >
                  <CountUp start={0} end={30000} separator="," />+
                </p>
                <p
                  style={{ 
                    fontWeight: "500", 
                    fontSize: "clamp(14px, 3vw, 20px)", 
                    marginTop: 0,
                    wordBreak: "break-word" 
                  }}
                >
                  Training
                </p>
              </Col>
              <Col xs={6} md={3} className="text-center">
         
                <p
                  style={{
                    color: "#F15BB5",
                    fontWeight: "700",
                    fontSize: "clamp(20px, 4vw, 30px)",
                    margin: 0,
                  }}
                >
                  <CountUp start={0} end={18000} separator="," />+
                </p>
                <p
                  style={{ 
                    fontWeight: "500", 
                    fontSize: "clamp(14px, 3vw, 20px)", 
                    marginTop: 0,
                    wordBreak: "break-word" 
                  }}
                >
                  Placement
                </p>
              </Col>
              <Col xs={6} md={3} className="text-center">
                <p
                  style={{
                    color: "#00BBFA",
                    fontWeight: "700",
                    fontSize: "clamp(20px, 4vw, 30px)",
                    margin: 0,
                  }}
                >
                  <CountUp start={0} end={20} separator="," />+
                </p>
                <p
                  style={{ 
                    fontWeight: "500", 
                    fontSize: "clamp(14px, 3vw, 20px)", 
                    marginTop: 0,
                    wordBreak: "break-word" 
                  }}
                >
                  Courses
                </p>
              </Col>
              <Col xs={6} md={3} className="text-center">
                {/* <img src={counter4img} alt="Branch Icon" className="mb-3" /> */}
                <p
                  style={{
                    color: "#01F6D5",
                    fontWeight: "700",
                    fontSize: "clamp(20px, 4vw, 30px)",
                    margin: 0,
                  }}
                >
                  <CountUp start={0} end={11} separator="," />+
                </p>
                <p
                  style={{ 
                    fontWeight: "500", 
                    fontSize: "clamp(14px, 3vw, 20px)", 
                    marginTop: 0,
                    wordBreak: "break-word" 
                  }}
                >
                  Branches
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SalemBanner;
