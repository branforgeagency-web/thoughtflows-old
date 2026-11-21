
import React from 'react';
import './Placements.css';
import { placementData } from './placementData';
import PlacementsCompanies from './PlacementsCompanies';
import HandDrawnTitleReveal from './HandDrawnTitleReveal';
import CoverflowCarousel from './CoverflowCarousel';
import { Link } from 'react-router-dom';
import Meta from '../Meta';

const Placements = () => {

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

            {/* Placed Students 3D Coverflow Carousel */}
            <CoverflowCarousel heading="Our Placed Students" />

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
