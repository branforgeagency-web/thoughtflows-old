import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import Kamale from '../images/Kamale.G.png'
import SUGANYA from '../images/SUGANYA.G.png'
import Ramya from '../images/Ramya senthilkumar.png'
import Vidhya from '../images/Vidhya .K.png'
import Rino from '../images/Rino.png'

const testimonials = [
    {
        image: `${Kamale}`,
        name: "KAMALE.G",
        title: "Student",
        rating: 5,
        review: "Thoughtflows is one of the best place to grab a huge knowledge about medical coding. I've had a great guidance by my hr Reshma mam and special thanks to radika mam and keerthi mam.I'm really thankful for all the staffs who are made me to get in reputed company.Other activities conducted by the academy helped to engage ourselves and gain confidence.Thank you for the entire team.Best academy to kick start your career.Thank you…",
        avatar: `${Kamale}`
    },
{
    image: `${SUGANYA}`,
        name: "SUGANYA.G",
            title: "Student",
                rating: 5,
                    review: "Thoughtflow institute is best to learn medical coding, and the trainer teaching the class is veryyyy well. Best platform to learn medical coding. And all the trainers are speaking likefriendly. And the thoughtflow provide daily practice questions in own app. It is very useful to us.And the platform also contains daily syllabus , etc .",
                         avatar: `${SUGANYA}`,
    },
{
    image: `${Ramya}`,
        name: "RAMYA SENTHILKUMAR",
            title: "Student",
                rating: 5,
                    review: "I recently completed my CPC certificate with 95% with the help of Thought Medical Coding Academy, and I highly recommend it to anyone pursuing a career in medical coding. They provide detailed study materials, conduct regular mock tests, and offer thorough exam preparation, which greatly helped me feel confident about the CPC exam.My trainer Keerthi mam, Keerthana,pooja mam and also my HR sindhu was very approachable and create a friendly atmosphere, making learning both effective and enjoyable. Thank you.",
                        avatar: `${Ramya}`,
    },
{
    image: `${Vidhya}`,
        name: "VIDHYA K",
            title: "Student",
                rating: 5,
                    review: "It was a good decision that i made by joining THOUGHTFLOWS as a student. The course content is very well explained that even a beginner like me could understand it very easily. A special mention to the HR Reshma mam and trainers Pooja and Ezhil mam for clearing my doubts and helping me out whenever i was stuck. I cleared CPC with 92% Thankyou! Overall a good experience.",
                        avatar: `${Vidhya}`,
    },
{
    image: `${Rino}`,
        name: "RINO",
            title: "Student",
                rating: 5,
                    review: "I'm Rino R , I completed the medical coding course in Thought Flows accademy in Trivandrum. I completed my Bachelor degree in Bsc chemistry. I passed CPC with 89%. Thank you Thought Flows for the guidance and special thanks to my trainers , Aleena mam and vaishna mam for the valuable support to crack CPC exam . Thank you to Anakha mam and Aiswarya mam for daily motivation to me . Special thanks to Gokul sir for the great support. Thank you Thought Flows.",
                        avatar: `${Rino}`,
    },
];

const GoogleRev = () => {
    return (
        <>
            <div
                className="google-rev text-center text-lg-start"
                style={{
                    backgroundColor: '#E5F8F9',
                    padding: '60px 0px 180px 0px'
                }}
            >
                <Container>
                    <Row className="align-items-center">
                        <Col lg={5} className="mb-4">
                            <span className="google-rev-hashtag">#StudentReviews</span>
                            <h5>OUR TESTIMONIALS</h5>
                            <h2>Hear from Our <br /> Successful Candidates</h2>
                            <p className="text-muted">Don't just take our word for it. Hear from our successful candidates who have gone on to have successful careers in medical coding.</p>
                        </Col>

                        <Col lg={7} style={{ position: "relative" }}>
                            <div className="google-rev-watermark">REVIEWS&nbsp;&nbsp;REVIEWS</div>
                            <Carousel indicators={true} controls={true} interval={3000}>
                                {testimonials.map((testimonial, index) => (
                                    <Carousel.Item key={index} style={{ marginTop: '20px' }}>
                                        <div className="review-bubble-wrap">
                                            <div className="review-bubble-card">
                                                <div className="star-rating">
                                                    {[...Array(testimonial.rating)].map((star, i) => (
                                                        <span key={i} className="star text-warning">&#9733;</span>
                                                    ))}
                                                </div>
                                                <p>{testimonial.review}</p>
                                            </div>
                                            <div className="review-avatar-row">
                                                <div className="review-avatar-ring">
                                                    <img src={testimonial.avatar} alt={testimonial.name} />
                                                </div>
                                                <h5>{testimonial.name}</h5>
                                            </div>
                                        </div>
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default GoogleRev;
