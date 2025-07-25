

import React from 'react';
import num1 from "../../images/Courses/number-1.png";
import num2 from "../../images/Courses/number-2.png";

const EligibleData = [
    {
        "id": 1,
        "title": "Expert Trainers",
        "description": "Learn from AAPC-certified instructors with real-world experience."
    },
    {
        "id": 2,
        "title": "Comprehensive Curriculum",
        "description": "Thoughtflows offers in-depth, updated training that covers the entire COC exam syllabus."
    },
    {
        "id": 3,
        "title": "Flexibility",
        "description": " Choose from weekday or weekend batches."
    },
    {
        "id": 4,
        "title": "Hands-on Learning",
        "description": "Enjoy interactive sessions using PowerPoint presentations, case studies, and video tutorials."
    },

];

function COCTrainning() {
    return (
        <div className="py-12  px-6 lg:px-32 bg-gradient-to-br from-[#0e929f] to-[#4da9b3] text-white">
            <h2 className="text-3xl font-semibold text-left mb-4">COC Training at Thoughtflows </h2>
            <p className="text-left text-lg mb-6">
                At Thoughtflows Medical Coding Academy, we provide high-quality Certified Outpatient Coder (COC) training, designed for both beginners and professionals.
            </p>



            <h3 className="text-2xl font-semibold mb-4 underline decoration-2 underline-offset-4">
                Why Opt for COC Training at Thoughtflows?
            </h3>
            <ul className="space-y-6">
                {EligibleData.map((item) => (
                    <li key={item.id} className="flex items-start space-x-4">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center text-primaryy font-bold border border-pritext-primaryy bg-white">
                            {item.id}
                        </div>
                        <div>
                            <h4 className="text-xl font-semibold">{item.title}</h4>
                            <p className="text-ms mt-2 text-gray-100">{item.description}</p>
                        </div>
                    </li>
                ))}
            </ul>

          
        </div>
    );
}

export default COCTrainning;
