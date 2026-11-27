import React from "react";
import BranchStudentStories from "../common/BranchStudentStories";
import { mediaUrl } from '../../config/media';
const raja = mediaUrl("images/Testimonials/Rajasekhar (Salem).jpeg");
const keerthana = mediaUrl("images/Testimonials/Keerthana (Salem).png");
const priyanka = mediaUrl("images/Testimonials/Priyanka Suresh (Salem).jpeg");
const dhivya = mediaUrl("images/Testimonials/Dhivya (Salem).jpeg");
const sineka = mediaUrl("images/Testimonials/Sineka (Salem).jpeg");

const testimonials = [
  {
    image: `${raja}`,
    name: "RAJA SEKAR",
    title: "Student",
    rating: 5,
    review: "I'm Rajasekar, My Medical coding Journey. I'm thrilled to share my experience with the medical coding course! This course helped me to achieve my dream job and changed my life. The staffs were extremely friendly and supportive throughout the course. As an Engineering student I was impressed by structure approach to learning, which included weekly tests. What impressed me most was, They will conduct Fun games and activities helped us relax and enjoyable. I'm grateful for this course. It's a wonderful opportunity to fulfill a career. If anyone wants to do medical coding and related courses Thought flows institute will be the best option. Thought flows is the best medical coding training institute with 100% job assurance. Special thanks General Manager logeshwaran sir, HR Punitha madam and Ajay sir Placement team. Finally I have placed in Teleperformance company in Specialty Emergency Department at Chennai. Thank you for overall support....",
    avatar: `${raja}`
  },
  {
    image: `${keerthana}`,
    name: "KEERTHANA",
    title: "Student",
    rating: 5,
    review: "I am completed my AMCT course in Thoughts flow, Salem. Trainers and HR are very helpful to my career and full supportive. Now I am selected in vee healthtek in Salem. Thanks for giving this wonderful opportunity ☺️",
    avatar: `${keerthana}`
  },
  {
    image: `${priyanka}`,
    name: "PRIYANKA SURESH",
    title: "Student",
    rating: 5,
    review: "I highly recommend Thoughtflows salem branch for its exceptional instructors, supportive environment, and effective learning resources, making it an ideal choice for students seeking quality education.",
    avatar: `${priyanka}`
  },
  {
    image: `${dhivya}`,
    name: "DHIVYA",
    title: "Student",
    rating: 5,
    review: "Hii!!!😊 I'm Ms. Dhivya. I completed my CPC course(online) in Thoughtflows academy. I'm very glad to THANK🙏🏻 the entire team of Thoughtflows medical coding academy. My Special Heartfelt♥️ Thanks to HR Ms. DHARSHINI, my TRAINER Mrs. SINDHU mam💯 & Mr. BALA sir (Revision clz Trainer), Mr. Ajay sir from Talent Acquisition team. Trainers are highly knowledgeable, positive motivator, Friendly & Best supporter. With my trainer support & guidance i crack my exam easily with 94%😍. Online class was so smooth and enjoyable. I gain more valuable knowledge which is more useful to grow my career. They provide all the materials & Practice papers which is very useful to clear my exam so easily. Academy is providing High💯💯💯Quality Education to all the students. Very good academy to do Coding course & build your career too❣️❣️ higher. I suggest everyone to join & get a Good career advantage!!!!",
    avatar: `${dhivya}`
  },
  {
    image: `${sineka}`,
    name: "SINEKA",
    title: "Student",
    rating: 5,
    review: "Hi, I joined the AMCT course at ThoughtFlow medical academy, Salem. Their training and way of teaching are good. It's a great place for those who are willing to write the CPC exam. They also provide an app with tests for students as part of the training, and it's very helpful. The trainers and HR are friendly, and they trained us well. The atmosphere is good for studying, and they provide books during the course. I also got placed in my dream company with the help of their placement team. They also trained us for interviews. Thanks to ThoughtFlow for helping me through this training",
    avatar: `${sineka}`
  }
];

const SalemTestimonial = () => <BranchStudentStories testimonials={testimonials} />;

export default SalemTestimonial;
