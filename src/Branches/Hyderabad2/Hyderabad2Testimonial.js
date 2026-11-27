import React from "react";
import BranchStudentStories from "../common/BranchStudentStories";
import { mediaUrl } from '../../config/media';
const yamini = mediaUrl("images/Testimonials/Yamini ( DILSUKHNAGAR HYD ).jpeg");
const manisha = mediaUrl("images/Testimonials/MANISHA ( DILSUKHNAGAR HYD ).jpeg");
const nemmadi1 = mediaUrl("images/Testimonials/Nemmadi Udaychinna ( DILSUKHNAGAR HYD ).jpeg");
const madura = mediaUrl("images/Testimonials/MADHURA ( DILSUKHNAGAR HYD ).jpeg");
const shivakrishna = mediaUrl("images/man.png");
const nagalaxmi = mediaUrl("images/man.png");


const testimonials = [
  {
    image: `${yamini}`,
    name: "YAMINI",
    title: "Student",
    rating: 5,
    review: "Today I completed my Medical Coding Certification CPC with [86%] from Thought Flows, Dilsukhnagar, and I'm extremely satisfied with the quality of training and support I received throughout the course. The institute offers a well-structured curriculum that combines both theory and practical training, making it ideal for anyone aiming to build a successful career in medical coding. A special mention to our trainer, Pooja ma'am, whose teaching style made a huge difference. She is not only highly knowledgeable but also incredibly patient and approachable. Her ability to break down complex coding concepts into simple, easy-to- understand lessons helped us grasp the material with confidence. Pooja ma'am was always available to clarify doubts and went the extra mile to ensure every student kept up with the lessons. The faculty at Thought Flows is equally supportive and professional. From regular assessments to mock exams and one-on-one guidance, the learning experience was comprehensive and career-focused. The institute also provides excellent support for exam preparation and job placement assistance. I wholeheartedly recommend Thought Flows, Dilsukhnagar to anyone looking to get certified in medical coding. With expert trainers like Pooja ma'am, Mounika ma'am and a committed faculty team, you're in great hands for a strong start in your medical coding journey.",
    avatar: `${yamini}`
  },
  {
    image: `${manisha}`,
    name: "MANISHA",
    title: "Student",
    rating: 5,
    review: "I have recently completed my CPC training in thought flows. The trainers Manoj sir & Pavitra mam are knowledgeable & supportive. The way they teaches us the complex one can also easily understand.Tqsm throught flows",
    avatar: `${manisha}`
  },
  {
    image: `${nemmadi1}`,
    name: "NEMMADI UDAYCHINNA",
    title: "Student",
    rating: 5,
    review: "I had an excellent experience at Thought flows medical coding academy where the dedicated faculty provided comprehensive instruction and a supportive learning environment. The curriculum was well-structured, incorporating both theoretical knowledge and practical applications, which significantly enhanced my skills. I particularly appreciated the personalized attention from the teachers, who were always available to answer questions and guide me through challenges. Overall, I highly recommend Thought flows to anyone seeking quality education in thought flows medical coding academy At Dilsukhnagar …",
    avatar: `${nemmadi1}`
  },
  {
    image: `${madura}`,
    name: "MADHURA",
    title: "Student",
    rating: 5,
    review: "Thoughtflows Medical Coding Academy In Dilsukhnagar Branch Better institution for coding Better trainers and good faculty, supporting the students and motivate. ( HR Gayathri mam was friendly and helpful doubts so thank you so much mam) Good teaching and explain very well. Thank you so much My Trainer Pooja Mam",
    avatar: `${madura}`
  },
  {
    image: `${shivakrishna}`,
    name: "V.SHIVA KRISHNA",
    title: "Student",
    rating: 5,
    review: "Best medical coding academy in Dilsukhnagar With friendly and experienced trainer. I personally recommend this to those who are willing to choose best coaching centre Thank you...!",
    avatar: `${shivakrishna}`
  }
];

const Hyderabad2Testimonial = () => <BranchStudentStories testimonials={testimonials} />;

export default Hyderabad2Testimonial;
