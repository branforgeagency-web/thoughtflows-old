


import React from 'react';
import { Row } from 'react-bootstrap';
import excellenceimg from '../../images/Courses/excellence.png';
import careeradv from '../../images/Courses/career-advancement.png';
import handson from '../../images/Courses/hands-on-experience.png';

const cardData = [
    {
        id: 1,
        // image: excellenceimg,
        title: 'Assigning appropriate E/M levels for emergency visits',
        // description: 'The rise of value-based care models and Medicare Advantage plans has increased the need for skilled risk adjustment coders. Healthcare organizations seek professionals who can ensure accurate reporting of chronic conditions and risk scores.',
        className: 'col-lg-3 col-sm-12',
        headingClass: 'text-black'
    },
    {
        id: 2,
        // image: careeradv,
        title: 'Accurately coding procedures and treatments provided in emergency settings',
        // description: 'CRC certification opens doors to specialized roles such as <strong>risk adjustment coder, compliance auditor, and HCC coder</strong>, offering pathways for promotions and higher salary potential.',
        className: 'col-lg-3 col-sm-12 active',
        descriptionClass: 'text-light',
        headingClass: 'text-white'
    },
    {
        id: 3,
        // image: handson,
        title: 'Ensuring compliance with coding regulations and payer policies',
        // description: 'CRC-certified coders help healthcare providers receive appropriate reimbursements by ensuring that patient risk profiles are documented correctly. This directly impacts revenue integrity for healthcare organizations.',
        className: 'col-lg-3 col-sm-12',
        headingClass: 'text-black'
    },
    {
        id: 4,
        // image: careeradv,
        title: 'Improving reimbursement accuracy through proper documentation and coding',
        // description: 'CRC certification opens doors to specialized roles such as <strong>risk adjustment coder, compliance auditor, and HCC coder</strong>, offering pathways for promotions and higher salary potential.',
        className: 'col-lg-3 col-sm-12 active',
        descriptionClass: 'text-light',
        headingClass: 'text-white'
    },
    
];

const WHYCRC = () => {
    return (
        <>
            <div><h2 className=" px-4 text-center mt-3">Roles of a CPB</h2></div>

            <Row className="why-cpc px-4" xs={1} md={3}>
                {cardData.map((card) => (
                    <div 
                        key={card.id} 
                        className={`card ${card.className} transition-all duration-700 ease-in-out transform hover:scale-105 hover:shadow-xl hover:border-[#14aeba] cursor-pointer`}
                        style={{
                            transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                        }}
                    >
                        <div className="icon" style={{ 
                            display: 'flex', 
                            flexDirection: 'row', 
                            gap: '10px', 
                            alignItems: 'center',
                            transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                        }}>
                            {/* <img src={card.image} alt={card.title} /> */}
                            <h3 
                                className={`${card.headingClass} transition-all duration-700`}
                                style={{
                                    transition: 'color 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                                }}
                            >
                                {card.title}
                            </h3>
                        </div>

                        {/* <p className={card.descriptionClass} dangerouslySetInnerHTML={{ __html: card.description }} /> */}
                    </div>
                ))}
            </Row>
        </>
    );
};

export default WHYCRC;

