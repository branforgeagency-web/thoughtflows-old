import React from 'react';
import passion from '../../images/Branches/motivation.png';
import loyalty from '../../images/Branches/customer-loyalty.png';
import commitment from '../../images/Branches/deal.png';
import responsibility from '../../images/Branches/norms.png';
import consistency from '../../images/Branches/consistency.png';
import creativity from '../../images/Branches/solution.png';

const PuneCore = () => {
  return (
    <div className="cbe1-features-container">
      <h2>What Sets Thoughtflows Apart?</h2>
      <div className="features-grid">
        <div className="feature-card purple">
          <img src={passion} alt='Grow your skills' />
          <h3>Grow Your Skills at Every Stage</h3>
          <p>
            Feeling stressed about your future after completing your degree? Maybe it’s time to consider a career in medical coding. As a medical coder, you will work in the medical field, but you will have no direct contact with patients, and you will have an opportunity to build a successful career in the field of your interest. Thoughtflows offers medical coding classes in Pune. The instructors at Thoughtflows are US certified medical coders, and they teach the correct methods of medical coding. Students will learn documentation and case detailing. Students will get the opportunity to get one on one help with the instructors. Interested? You should sign up for the next available class!
          </p>
        </div>
        <div className="feature-card dark">
          <img src={loyalty} alt='Experienced coders' />
          <h3>Learn from Coders Who've Done the Work</h3>
          <p>
            I have noticed many people post the same question: are your trainers teachers? As mentioned before, our trainers are 100% coders, and yes, they have classroom experience, but that’s not the focus of their career. We ensure our trainers share their knowledge and experience with the students. Audit expectations are something that are rarely, if ever, mentioned in textbooks; therefore, the information our trainers provide is extremely valuable. Because our trainers work one on one with students, they have the opportunity to provide critical, objective feedback on students’ coding. The goal of our trainers is to make students successful and help them find the same in their career.
          </p>
        </div>
        <div className="feature-card purple">
          <img src={commitment} alt='Job-focused curriculum' />
          <h3>A Curriculum Built Around Real Jobs</h3>
          <p>
            I see a lot of questions asking if trainers are teachers. Actually, teachers and trainers are two different things. Trainers, in this case, are certified coders who have worked with charts in the US healthcare stream. This gives them a competitive edge over others when they deliver classes to medical coding students. This is because they are able to show students shortcuts and examples of mistakes that got their peers audited. Above all, this edge gives them an opportunity to educate students on what authors of textbooks fail to capture. This is why a lot of students refer to trainers as teacher-fighters. Most of the students who sign up for these classes gain a lot because the trainers clearly have the interest of the students at heart. The trainers at these classes are seasoned professionals who have the interest of the students at heart because they always prepare the students for job placements.
          </p>
        </div>
        <div className="feature-card dark">
          <img src={responsibility} alt='Fair fee' />
          <h3>Quality Training at a Fair Fee</h3>
          <p>
            Many have asked if trainers are teachers. While I don’t believe that trainers are teachers, I will say that many teachers can learn a lot from trainers. Most trainers are coders who have worked in healthcare. They used their knowledge and experience to create curriculum that provides medical coding students with real-world insights including most common errors and how to code for various audits. Students are given personalized feedback to help clarify any doubts. Teaching is a passion for all the trainers. Students trust these trainers to help them with their future and to provide them the necessary skills for their career in medical coding.
          </p>
        </div>
        <div className="feature-card purple">
          <img src={consistency} alt='Job-ready training' />
          <h3>Training That Makes You Job-Ready</h3>
          <p>
            I have seen a lot of people ask is a trainer a teacher? A trainer is a coder who works with charts from different clients in the U.S. health care system. The trainer analyzes the clients and brings insights to students on potential pitfalls and expectations of audits. Students have an opportunity to clear their doubts. Students are given a lot of individualized attention and honest feedback on their coding. The trainers are passionate about their students and want the best for them. The class is very interactive. The trainers have a strong command of the subject matter. The trainers provide opportunities for students to interact with one another in and out of class.
          </p>
        </div>
        <div className="feature-card dark">
          <img src={creativity} alt='Flexible class timings' />
          <h3>Class Timings That Fit Your Life</h3>
          <p>
            There is a common question: is a trainer a teacher? A trainer, in this case, is an employee of a coding company. They work with various clients in the U.S. health care system. Trainers review clients and provide information to coding students about potential problems and concerns for the clients, as well as expectations for the clients’ audits. Of course, students have an opportunity to review and discuss their coding with the trainers. Students receive individual feedback for coding samples, and this feedback is provided in a clear, direct manner. This course provides many opportunities for students to practice and interact with each other. The trainers are passionate and caring for students. Both trainers have ample, and many years of, experience in the industry, and they share best practices with the students. They both motivate and care for students as individuals and want the best for them.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PuneCore;
