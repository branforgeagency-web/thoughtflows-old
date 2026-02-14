
import React from 'react';
import './Placements.css';
import { placementData } from './placementData';
import PlacementsCompanies from './PlacementsCompanies';
import DiscountBanner from './DiscountBanner';
import Marquee from 'react-fast-marquee';

const Placements = () => {
    // Split students into two halves
    const midpoint = Math.ceil(placementData.students.length / 2);
    const firstRowStudents = placementData.students.slice(0, midpoint);
    const secondRowStudents = placementData.students.slice(midpoint);

    return (
        <div className="placements-page">
            {/* Banner Section */}
            <section className="placements-banner">
                <div className="placements-banner-content">
                    <h1 className="placements-banner-title">{placementData.banner.title}</h1>
                    <p className="placements-banner-subtitle">{placementData.banner.subtitle}</p>
                </div>
                <div className="placements-banner-overlay"></div>
            </section>

            {/* Introduction Section */}
            <section className="placements-intro">
                <div className="container">
                    <p className="placements-intro-text">{placementData.introduction.text}</p>
                </div>
            </section>

            {/* Placed Students Section */}
            <section className="placements-students">
                <h2 className="section-title">Our Placed Students</h2>
                <div className="students-marquee-container">

                    {/* Row 1 - Left Direction */}
                    <div className="students-marquee-row" style={{ marginBottom: '10px' }}>
                        <Marquee gradient={true} speed={70} direction="left" gradientColor={[255, 255, 255]}>
                            {firstRowStudents.map((student, index) => (
                                <div className="student-card" key={`row1-${student.id}-${index}`} style={{ margin: '0 10px' }}>
                                    <div className="student-card-image-wrapper">
                                        <img src={student.image} alt={student.name} className="student-card-image" />
                                    </div>
                                    <div className="student-card-info">
                                        <h3 className="student-name">{student.name}</h3>
                                        <p className="student-designation">{student.designation}</p>
                                        <p className="student-company">{student.company}</p>
                                    </div>
                                </div>
                            ))}
                        </Marquee>
                    </div>

                    {/* Row 2 - Right Direction */}
                    <div className="students-marquee-row">
                        <Marquee gradient={true} speed={70} direction="right" gradientColor={[255, 255, 255]}>
                            {secondRowStudents.map((student, index) => (
                                <div className="student-card" key={`row2-${student.id}-${index}`} style={{ margin: '0 10px' }}>
                                    <div className="student-card-image-wrapper">
                                        <img src={student.image} alt={student.name} className="student-card-image" />
                                    </div>
                                    <div className="student-card-info">
                                        <h3 className="student-name">{student.name}</h3>
                                        <p className="student-designation">{student.designation}</p>
                                        <p className="student-company">{student.company}</p>
                                    </div>
                                </div>
                            ))}
                        </Marquee>
                    </div>

                </div>
            </section>

            {/* Companies Section */}
            <section className="placements-companies">
                <h2 className="section-title">Where Do Our Students Work?</h2>
                <PlacementsCompanies />
            </section>

            {/* CTA Section - Discount Banner */}
            <DiscountBanner />
        </div>
    );
};

export default Placements;
