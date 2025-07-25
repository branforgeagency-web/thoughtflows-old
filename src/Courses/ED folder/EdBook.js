import React from 'react';
import training from '../../images/Courses/training.png';
import learning from '../../images/Courses/learning.png';
import classroom from '../../images/Courses/classroom.png';
import studyMaterial from '../../images/Courses/3d-model.png';

const features = [
    { icon: classroom, title: "AAPC’s Official CEDC Study Guide", description: "The comprehensive guide for ED coding." },
    { icon: studyMaterial, title: "CPT Professional", description: "Essential for coding procedures in the ED." },
    { icon: learning, title: "ICD-10-CM Coding Manual", description: "Used for coding diagnoses specific to ED services." },
    { icon: training, title: "HCPCS Level II Manual", description: "For coding services like medical supplies, equipment, and other non-physician services." }
];

const EdBook = () => {
    return (
        <div className="bg-gradient-to-br from-[#0e929f] to-[#4da9b3] py-16 px-5 text-center text-white">
            <h2 className="text-3xl font-semibold mb-6">Books Used</h2>
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-screen-xl mx-auto mt-8">
                {features.map((feature, index) => (
                    <div key={index} className="max-w-xs mx-auto text-center">
                        <img src={feature.icon} alt={feature.title} className="w-12 h-12 mb-4 mx-auto" />
                        <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                        <p className="text-base font-light">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default EdBook;
