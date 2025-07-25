import React from "react";
import branch from "../../images/Branches/image7 copy.png"; // Import your image here

const TrivandrumCard = () => {
  return (
    <div className="bg-third py-12 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Card 1 - Left Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-between">
          <h2 className="text-3xl font-bold mb-4 text-secondaryy">
            Delve into the Comprehensive Curriculum
          </h2>
          <p>
            Our medical coding academy in Trivandrum offers a focused program
            that covers essential topics like medical terminology, anatomy, and
            coding systems such as ICD-10 and CPT. We incorporate the latest
            industry trends to keep students updated in the evolving healthcare
            field. Our courses emphasize hands-on skills and modern techniques,
            preparing students for successful careers.
          </p>
          <img src={branch} className="w-20 mx-auto" alt="branch" />
        </div>

        {/* Card 2 - Right Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-between">
          <h2 className="text-3xl font-bold mb-4 text-secondaryy">
            Meet Our Esteemed Faculty Members
          </h2>
          <p>
            A team of highly competent and experienced faculty members leads
            teaching at our Trivandrum medical coding training institution. These
            experts bring a lot of real-world experience to the classroom,
            combining extensive topic knowledge and a strong desire to teach. They
            assist students in grasping the complexities of medical coding by
            providing personalised attention and mentoring. Their devotion
            guarantees that students at our Trivandrum medical coding coaching
            academy grow in their training and professions.
          </p>
          <img src={branch} className="w-20 mx-auto" alt="branch" />
        </div>
      </div>
    </div>
  );
};

export default TrivandrumCard;
