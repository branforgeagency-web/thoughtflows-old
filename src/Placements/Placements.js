
import React from 'react';
import './Placements.css';
import { placementData } from './placementData';
import PlacementsCompanies from './PlacementsCompanies';
import HandDrawnTitleReveal from './HandDrawnTitleReveal';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';
import Meta from '../Meta';

const Placements = () => {
    // placementData currently only exports a flat `students` array (all
    // placed in 2025). `students2026` / `students2025` aren't populated yet,
    // so fall back safely instead of crashing on `.length` of undefined.
    const students2026 = placementData.students2026 || [];
    const students2025 = placementData.students2025 || placementData.students || [];

    // Split 2026 students
    const midpoint2026 = Math.ceil(students2026.length / 2);
    const firstRowStudents2026 = students2026.slice(0, midpoint2026);
    const secondRowStudents2026 = students2026.slice(midpoint2026);

    // Split 2025 students
    const midpoint2025 = Math.ceil(students2025.length / 2);
    const firstRowStudents2025 = students2025.slice(0, midpoint2025);
    const secondRowStudents2025 = students2025.slice(midpoint2025);

    return (
        <div className="placements-page">
            <Meta
                title="Medical Coding Placements | ThoughtFlows Academy"
                description="Explore ThoughtFlows placement success stories. Our medical coding graduates are placed in top hospitals and healthcare companies across India."
                canonical="https://www.thoughtflows.in/placements"
            />
            {/* Banner Section */}
            <section className="placements-hero">
                <HandDrawnTitleReveal
                    category="Placement Success"
                    title={placementData.banner.title}
                    subtitle={placementData.banner.subtitle}
                    strokeColor="#0b3a66"
                    headingLevel="h1"
                />
            </section>

            {/* Introduction Section */}
            <section className="placements-intro">
                <div className="container">
                    <h2 className="placements-intro-title">{placementData.introduction.title}</h2>
                    <p className="placements-intro-text">{placementData.introduction.text}</p>
                </div>
            </section>

            {/* Placed Students Section */}
            <section className="placements-students">
                <h2 className="section-title">Our Placed Students</h2>
                <div className="students-marquee-container">

                    {/* Row 1 - Left Direction (2026) */}
                    {firstRowStudents2026.length > 0 && (
                        <div className="students-marquee-row relative-row" style={{ marginBottom: '30px' }}>
                            <div className="year-badge badge-right">
                                <div className="year-badge-inner">2026</div>
                            </div>
                            <Marquee gradient={true} speed={70} direction="left" gradientColor={[255, 255, 255]}>
                                {firstRowStudents2026.map((student, index) => (
                                    <div className="student-card" key={`row1-${student.id}-${index}`} style={{ margin: '0 10px' }}>
                                        <div className="student-card-image-wrapper">
                                            <img src={student.image} alt="Placement" className="student-card-image" />
                                        </div>
                                    </div>
                                ))}
                            </Marquee>
                        </div>
                    )}

                    {/* Row 2 - Right Direction (2026) */}
                    {secondRowStudents2026.length > 0 && (
                        <div className="students-marquee-row relative-row" style={{ marginBottom: '30px' }}>
                            <div className="year-badge badge-left">
                                <div className="year-badge-inner">2026</div>
                            </div>
                            <Marquee gradient={true} speed={70} direction="right" gradientColor={[255, 255, 255]}>
                                {secondRowStudents2026.map((student, index) => (
                                    <div className="student-card" key={`row2-${student.id}-${index}`} style={{ margin: '0 10px' }}>
                                        <div className="student-card-image-wrapper">
                                            <img src={student.image} alt="Placement" className="student-card-image" />
                                        </div>
                                    </div>
                                ))}
                            </Marquee>
                        </div>
                    )}

                    {/* Row 3 - Left Direction (2025) */}
                    <div className="students-marquee-row relative-row" style={{ marginBottom: '30px' }}>
                        <div className="year-badge badge-right">
                            <div className="year-badge-inner">2025</div>
                        </div>
                        <Marquee gradient={true} speed={70} direction="left" gradientColor={[255, 255, 255]}>
                            {firstRowStudents2025.map((student, index) => (
                                <div className="student-card" key={`row3-${student.id}-${index}`} style={{ margin: '0 10px' }}>
                                    <div className="student-card-image-wrapper">
                                        <img src={student.image} alt="Placement" className="student-card-image" />
                                    </div>
                                </div>
                            ))}
                        </Marquee>
                    </div>

                    {/* Row 4 - Right Direction (2025) */}
                    <div className="students-marquee-row relative-row">
                        <div className="year-badge badge-left">
                            <div className="year-badge-inner">2025</div>
                        </div>
                        <Marquee gradient={true} speed={70} direction="right" gradientColor={[255, 255, 255]}>
                            {secondRowStudents2025.map((student, index) => (
                                <div className="student-card" key={`row4-${student.id}-${index}`} style={{ margin: '0 10px' }}>
                                    <div className="student-card-image-wrapper">
                                        <img src={student.image} alt="Placement" className="student-card-image" />
                                    </div>
                                </div>
                            ))}
                        </Marquee>
                    </div>

                </div>
            </section>

            {/* Yearly Records Navigation Section */}
            <section className="yearly-records-nav">
                <div className="container text-center">
                    <h2 className="section-title">Previous Year Placements</h2>
                    <p className="yearly-nav-subtitle">Explore our success stories from previous years</p>
                    <div className="yearly-links-container">
                        <Link to="/placements/2024" className="yearly-link-card">
                            <span className="year-value">2024</span>
                            <span className="record-count">Success Stories</span>
                        </Link>
                        <Link to="/placements/2023" className="yearly-link-card">
                            <span className="year-value">2023</span>
                            <span className="record-count">Success Stories</span>
                        </Link>
                        <Link to="/placements/2022" className="yearly-link-card">
                            <span className="year-value">2022</span>
                            <span className="record-count">Success Stories</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Companies Section */}
            <section className="placements-companies">
                <h2 className="section-title">Where Do Our Students Work?</h2>
                <PlacementsCompanies />
            </section>

        </div>
    );
};

export default Placements;
