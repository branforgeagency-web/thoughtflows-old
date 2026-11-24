import React, { useState } from 'react';

const cardData = [
    {
        id: 1,
        title: 'Practical, Real-World Training',
        description: 'Training approach focused on real clinical scenarios and actual medical records.',
    },
    {
        id: 2,
        title: 'Focus on Accuracy & Compliance',
        description: 'Deep emphasis on documentation quality, compliance standards, and audit readiness.',
    },
    {
        id: 3,
        title: 'Strong Healthcare Foundation',
        description: 'Build a solid foundation in healthcare workflows, coding systems, and clinical terminology.',
    },
    {
        id: 4,
        title: 'Dedicated Career Support',
        description: 'Get placement guidance, resume support, and interview preparation to launch your CDI career.',
    },
];

const WhyCDI = () => {
    const [hoveredId, setHoveredId] = useState(null);

    return (
        <>
            <div className='px-4'>
                <h2 className="text-center mt-3">Why Choose Thoughtflows for CDI Training?</h2>
            </div>
            <div className="why-cpc px-4 flex flex-wrap justify-center">
                {cardData.map((card) => (
                    <div
                        key={card.id}
                        className={`card col-lg-3 col-sm-12 ${hoveredId === card.id ? 'active' : ''}`}
                        onMouseEnter={() => setHoveredId(card.id)}
                        onMouseLeave={() => setHoveredId(null)}
                        style={{
                            transition: 'all 0.3s ease',
                            padding: '20px',
                            borderRadius: '10px',
                            margin: '10px',
                            cursor: 'pointer',
                            minHeight: '200px',
                            minWidth: '220px',
                            flex: '1 1 220px',
                            maxWidth: '280px',
                        }}
                    >
                        <div className="icon" style={{ display: 'flex', flexDirection: 'row', gap: '10px', alignItems: 'center' }}>
                            <h3 style={{ color: hoveredId === card.id ? 'white' : 'black' }}>{card.title}</h3>
                        </div>
                        <p style={{ color: hoveredId === card.id ? 'white' : 'black' }}>{card.description}</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default WhyCDI;
