import React from 'react';
import training from '../../images/Courses/training.png';
import learning from '../../images/Courses/learning.png';
import classroom from '../../images/Courses/classroom.png';
import studyMaterial from '../../images/Courses/3d-model.png';
import certificate from '../../images/Courses/certificate.png';

const features = [
    { icon: classroom, title: 'Review Operative Reports', description: 'Analyzing surgical documentation to extract relevant details.' },
    { icon: studyMaterial, title: 'Assign Correct Codes', description: 'Applying CPT, ICD-10-CM, and HCPCS codes accurately.' },
    { icon: learning, title: 'Ensure Compliance', description: 'Following guidelines from entities like AAPC and CMS.' },
    { icon: training, title: 'Facilitate Reimbursement', description: 'Helping providers receive proper payment for services rendered.' },
];


const SurgeryFeatures = () => {
    return (
        <div className="bg-gradient-to-br from-[#0e929f] to-[#4da9b3] py-16 px-5 text-center text-white">
            <h2 className="text-3xl font-semibold mb-6">Key Responsibilities of Surgical Coders</h2>
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-screen-xl mx-auto mt-8">
                {features.map((feature, index) => (
                    <div key={index} className="max-w-xs mx-auto text-center">
                        <img src={feature.icon} alt={feature.title} className="w-12 h-12 mb-4 mx-auto" />
                        <p className="text-base">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>


    );
}

export default SurgeryFeatures;
