import React from 'react';
import bgcoaching from '../images/Group711.png';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import grp1 from '../images/Maskgroup1.png';
import grp2 from '../images/Maskgroup2.png';
import grp3 from '../images/Maskgroup3.png';
import grp4 from '../images/hands-on.png'
import grp5 from '../images/Asset 1Motor icons.png'

const Coaching = () => {
    const cardData = [
        {
            img: grp1,
            title: "Industry-Leading Medical Coding Training",
            text: "Thoughtflows Medical Coding Academy offers expert-led training across all coding specialties, ensuring you gain the latest skills and knowledge for a successful healthcare career.",
            link: "/contact"
        },
        {
            img: grp2,
            title: "Flexible Learning Options",
            text: "Weprovide both online and offline classes with various batch timings, allowing you to pursue certification at your convenience, whether you're a student or a working professional.",
            link: "/contact"
        },
        {
            img: grp3,
            title: "Guaranteed Job Placement & Career Support",
            text: "With 100% job placement assistance, personalized career coaching, and interview prep, Thoughtflows helps you secure a job quickly after certification.",
            link: "/contact"
        },
        {
            img: grp4,
            title: "Hands-On Real-World Coding Experience",
            text: "Gain practical experience through case studies, coding exercises, and mock exams to bridge the gap between theory and real-world application.",
            link: "/contact"
        },
        {
            img: grp5,
            title: "Updated, Industry-Approved Curriculum",
            text: "Our curriculum is regularly updated to align with the latest coding standards and guidelines, ensuring you're well-prepared for certification exams and your career in healthcare.",
            link: "/contact"
        }
    ];

    return (
        <div
            className="coaching-section"
            style={{
                backgroundImage: `url(${bgcoaching})`,
                backgroundSize: '10% 24%',
                backgroundPosition: 'right top',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div className="col-lg-12 text-center mb-4">
                <h5>BEST COACHING</h5>
                <h2>Why Choose Thoughtflows Medical Coding Academy?</h2>
            </div>
            <div className="container mt-5">
                <Row xs={1} md={3} className="g-4">
                    {cardData.map((card, idx) => (
                        <Col key={idx}>
                            <Card style={{ borderRadius: '15px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', textAlign: 'center', marginTop: '80px' }}>
                                <Card.Img variant="top" src={card.img} style={{ width: '200px', margin: '-80px auto 0px auto' }} />
                                <Card.Body>
                                    <Card.Title style={{ fontWeight: '500', marginTop: '20px' }}>{card.title}</Card.Title>
                                    <Card.Text style={{ fontSize: '16px', color: '#555', marginTop: '15px' }}>{card.text}</Card.Text>
                                    <Card.Link href={card.link} style={{ color: '#00797F', fontWeight: 'bold', textDecoration: 'none', marginTop: '30px' }}>
                                        Learn More <span style={{ fontSize: '20px', marginLeft: '5px', fontFamily: 'Poppins' }}>→</span>
                                    </Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
};

export default Coaching;