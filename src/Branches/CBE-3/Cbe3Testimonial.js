import React from "react";
import BranchStudentStories from "../common/BranchStudentStories";
import { mediaUrl } from '../../config/media';
const logeswari = mediaUrl("images/Testimonials/Logeswari Boopathi (Gandhipuram).jpeg");
const swathi = mediaUrl("images/Testimonials/Swathi Hari (Gandhipuram).jpeg");

const testimonials = [
  {
    image: `${logeswari}`,
    name: "LOGESWARI BOOPATHI",
    title: "Student",
    rating: 5,
    review: "My experience on (AMCT) course at Thought flows medical Coding centre Gandhipuram Branch was really a good experience. Being with a non life science background I thought it would be difficult for me to catch up with anatomy and coding guidelines at very first day. With the support of trainers and their guidance make me to fit strong and I'm now much better in dealing with it. Day by day moulding our knowledge with the tests given in thoughtflows app, a detailed and clear explanations were given on topics or mistakes( in test ) whenever we needed. A complete support system are given from trainers and HR side. Best place to gain knowledge on subject and are highly recommend. Thanks for your support.",
    avatar: `${logeswari}`
  },
  {
    image: `${swathi}`,
    name: "SWATHI HARI",
    title: "Student",
    rating: 5,
    review: "I have joined online class in thoughtflows thru HR prabhu he gave great support for onboarding till setting up account on app also the institute provides job placement my trainer is sindhuja online trainer from hyderabad she taught me very well explaining every topics clearly and took time to make everyone understand .after class if we ask for any doubt she clears the doubt immediately without take days and hours to reply the students she is very calm and knowledgeable trainer My classes are completed looking forward for a post course support same as like so far.",
    avatar: `${swathi}`
  }
];

const Cbe3Testimonial = () => <BranchStudentStories testimonials={testimonials} />;

export default Cbe3Testimonial;
