import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { previousYearsData } from './previousYearsData';
import './Placements.css';

const YearlyPlacementList = () => {
    const { year } = useParams();
    const data = previousYearsData[year] || [];

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [year]);

    return (
        <div className="yearly-placements-page">
            <div className="container">
                <div className="back-link">
                    <Link to="/placements" className="btn-back">
                        <i className="fas fa-arrow-left"></i> Back to Placements
                    </Link>
                </div>
                
                <h1 className="year-title">{year} Placement Success Stories</h1>
                
                {data.length > 0 ? (
                    <div className="table-responsive">
                        <table className="placement-table">
                            <thead>
                                <tr>
                                    <th>S.NO</th>
                                    <th>Name</th>
                                    <th>Company Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((student, index) => (
                                    <tr key={index}>
                                        <td>{student.sno}</td>
                                        <td>{student.name}</td>
                                        <td>{student.company}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="no-data">
                        <p>No records found for the year {year}.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default YearlyPlacementList;
