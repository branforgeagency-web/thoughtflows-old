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
//                   <CountUp start={0} end={25000} separator="," />+
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
          minHeight: "85vh",
          height: "auto",
          alignItems: "center",
          padding: "20px 0 40px 0",
          marginTop: "0px",
          margin: 0
        }}
      >
        <Col lg={1} xs={0}></Col>
        <Col lg={3} md={4} xs={12} className='cbe1-banner-lft px-4 mb-4 mb-lg-0 d-flex flex-column justify-content-lg-start justify-content-center align-items-lg-start align-items-center'>
          <Col className='cbe1-banner-heading'>
            <h2 style={{ 
              fontSize: 'clamp(28px, 5vw, 40px)',
              lineHeight: '1.2'
            }}>Medical Coding </h2>
            <h2 style={{ 
              fontSize: 'clamp(28px, 5vw, 40px)',
              lineHeight: '1.2'
            }}>Institute in <span style={{ color: '#097D8A' }}>Salem</span></h2>
          </Col>
          <Col>
            <p style={{ 
              fontSize: 'clamp(14px, 3vw, 16px)', 
              marginTop: '20px',
              maxWidth: '600px'
            }}>Discover excellence and seize opportunities with Thoughtflows Medical Coding Academy in Salem.</p>
          </Col>
          <Col className='cbe1-btn '>
            <Link to="/contact" className=" button-animation d">
              Register Now
            </Link>
          </Col>
        </Col>

        <Col lg={7} md={8} xs={12} className='cbe1-banner-rht' style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          paddingTop: '0'
        }}>
          <img 
            src={cbe1banner} 
            alt='bannergif' 
            className='bannergif banner-appear'
            style={{
              width: '884px',
              height: '420px',
              objectFit: 'contain'
            }}
          />
        </Col>
        <Col lg={1} xs={0}></Col>
      </Row>
      <Container fluid className='cbe1-counter px-3'
        style={{
          background: '#fff',
          borderRadius: 'clamp(15px, 3vw, 80px)',
          boxShadow: '0 3px 15px 0 rgba(0, 0, 0, 0.13)',
          marginTop: '-40px',
          padding: 'clamp(15px, 3vw, 30px)',
          zIndex: 2,
          position: 'relative',
          maxWidth: '95%',
          margin: 'clamp(-30px, -4vw, -40px) auto 0'
        }}>
        <Row className="align-items-center">
          <Col lg={12}>
            <Row className="gy-4 gx-3">
              <Col xs={6} sm={6} md={3} lg={3} className="text-center">
                <div className="counter-item" style={{ padding: 'clamp(8px, 2vw, 15px)' }}>
                  <p style={{ 
                    color: '#FFC100', 
                    fontWeight: '700', 
                    fontSize: 'clamp(18px, 3.5vw, 30px)', 
                    margin: 0,
                    lineHeight: '1.2'
                  }}>
                    <CountUp start={0} end={30000} separator="," />+
                  </p>
                  <p style={{ 
                    fontWeight: '500', 
                    fontSize: 'clamp(12px, 2.5vw, 18px)', 
                    marginTop: '5px',
                    lineHeight: '1.2'
                  }}>Training</p>
                </div>
              </Col>
              <Col xs={6} sm={6} md={3} lg={3} className="text-center">
                <div className="counter-item" style={{ padding: 'clamp(8px, 2vw, 15px)' }}>
                  <p style={{ 
                    color: '#F15BB5', 
                    fontWeight: '700', 
                    fontSize: 'clamp(18px, 3.5vw, 30px)', 
                    margin: 0,
                    lineHeight: '1.2'
                  }}>
                    <CountUp start={0} end={25000} separator="," />+
                  </p>
                  <p style={{ 
                    fontWeight: '500', 
                    fontSize: 'clamp(12px, 2.5vw, 18px)', 
                    marginTop: '5px',
                    lineHeight: '1.2'
                  }}>Placement</p>
                </div>
              </Col>
              <Col xs={6} sm={6} md={3} lg={3} className="text-center">
                <div className="counter-item" style={{ padding: 'clamp(8px, 2vw, 15px)' }}>
                  <p style={{ 
                    color: '#00BBFA', 
                    fontWeight: '700', 
                    fontSize: 'clamp(18px, 3.5vw, 30px)', 
                    margin: 0,
                    lineHeight: '1.2'
                  }}>
                    <CountUp start={0} end={49} separator="," />+
                  </p>
                  <p style={{ 
                    fontWeight: '500', 
                    fontSize: 'clamp(12px, 2.5vw, 18px)', 
                    marginTop: '5px',
                    lineHeight: '1.2'
                  }}>Courses</p>
                </div>
              </Col>
              <Col xs={6} sm={6} md={3} lg={3} className="text-center">
                <div className="counter-item" style={{ padding: 'clamp(8px, 2vw, 15px)' }}>
                  <p style={{ 
                    color: '#01F6D5', 
                    fontWeight: '700', 
                    fontSize: 'clamp(18px, 3.5vw, 30px)', 
                    margin: 0,
                    lineHeight: '1.2'
                  }}>
                    <CountUp start={0} end={12} separator="," />+
                  </p>
                  <p style={{ 
                    fontWeight: '500', 
                    fontSize: 'clamp(12px, 2.5vw, 18px)', 
                    marginTop: '5px',
                    lineHeight: '1.2'
                  }}>Branches</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SalemBanner;
