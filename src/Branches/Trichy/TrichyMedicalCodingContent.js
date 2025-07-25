import React from "react";
import branch from "../../images/Branches/Radiology.jpg";

const MedicalCodingContent = () => {
    const sections = [
        {
            title: "Practical Training to Master Medical Coding Skills",
            description:
                "Hands-on learning is the cornerstone of our medical coding classes. Our students work on real medical records and engage in practical coding exercises and case studies.\nBy simulating real-world challenges, students develop the skills to interpret medical documentation and code with precision. This practical approach ensures graduates are prepared for medical coding jobs in hospitals, clinics, and insurance companies.",
            image: branch,
        },
        {
            title: "Recognized Certifications for Your Career Growth",
            description:
                "At Thoughtflows Medical Coding Training Academy, we prepare students for industry-recognized certifications, such as those offered by AAPC (American Academy of Professional Coders).\nOur medical coding certification program includes thorough exam preparation, helping students successfully achieve credentials that enhance their credibility and job prospects.\nWhether you're pursuing a medical coding certificate online or in-person, our programs are designed to elevate your career potential.",
            image: branch,
        },
        {
            title: "Empowering Careers in Medical Coding",
            description:
                "At Thoughtflows Medical Coding Training Centre, we empower students to excel both professionally and personally. Along with technical skills, we nurture essential soft skills such as communication and critical thinking, making our graduates well-rounded professionals.\nOur inclusive and supportive learning environment inspires students to overcome challenges and thrive in medical coding training courses.",
            image: branch,
        },
        {
            title: "Hear From Our Successful Alumni",
            description:
                "Our alumni’s success stories are a testament to the quality of medical coding education at Thoughtflows Medical Coding School. They have secured positions in prestigious healthcare organizations, insurance companies, and coding firms.\nWe celebrate their achievements through testimonials that inspire and motivate aspiring medical coders.",
            image: branch,
        },
        {
            title: "Enroll in Our Medical Coding Training Today!",
            description:
                "Are you ready to start your journey in medical coding? Join Thoughtflows Medical Coding Academy, the premier medical coding institute, to unlock your potential and secure a fulfilling career.\nWhether you're looking for medical coding online classes, in-person learning, or guidance on medical coding fees and duration, our admissions team is here to assist you.\nTake the first step towards becoming a certified medical coder by enrolling in our medical coding training program today. Let us guide you to a bright future in the healthcare industry!",
            image: branch,
        },
    ];

    return (
        <div className="bg-gray-100">
            {sections.map((section, index) => (
                <div
                    key={index}
                    className={`flex flex-col lg:flex-row ${
                        index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                    } items-center py-16 px-6 lg:px-16`}
                >
                    {/* Image Section */}
                    <div className="w-full lg:w-1/2">
                        <img
                            src={section.image}
                            alt={section.title}
                            className="w-full h-96 object-cover rounded-lg shadow-lg"
                        />
                    </div>
                    {/* Text Section */}
                    <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:px-12">
                        <h2 className="text-4xl font-bold text-primaryy mb-6">
                            {section.title}
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                            {section.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MedicalCodingContent;
