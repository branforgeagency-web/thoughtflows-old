import React from "react";
import BranchStudentStories from "../common/BranchStudentStories";
import { mediaUrl } from '../../config/media';
const kamale = mediaUrl("images/Kamale.G.png");
const SUGANYA = mediaUrl('images/SUGANYA.G.png');
const Ramya = mediaUrl('images/Ramya senthilkumar.png');
const Vidhya = mediaUrl('images/Vidhya .K.png');
const Rino = mediaUrl('images/Rino.png');
const muhsina = mediaUrl('images/Muhsina Surmi.png');
const nemmadi = mediaUrl('images/Nemmadi Udaychinna.png');
const geethasri = mediaUrl("images/Testimonials/Geethasri (Hopes).jpeg");
const vijayakumar = mediaUrl("images/Testimonials/Vijayakumar (Hopes).jpeg");
const gopika = mediaUrl("images/Testimonials/Gopika (Hopes).jpeg");
const shanmugapriyan = mediaUrl("images/Testimonials/Shanmugappriyan (Hopes).jpeg");
const mohan = mediaUrl("images/man.png");
// import mohan from "../../images/Testimonials/Mohan (Hopes).jpeg"

const testimonials = [
  {
    image: `${mohan}`,
    name: "MOHAN",
    title: "Student",
    rating: 5,
    review: "I had a great experience in thought flows accademy.They gave me a wonderful knowledge in medical Coding system and also helps to clear cpc exam with a wonderful guidance. They help candidates like how to perform in the interview and how to Crack the interview.so, finally thanks thought flows accademy and their staff.",
    avatar: `${mohan}`
  },
  {
    image: `${geethasri}`,
    name: "GEETHASRI",
    title: "Student",
    rating: 5,
    review: "The Best Coding Institution for Medical Coding. Trainers really supported us to get clear knowledge about the coding concepts which is now very much helpful in our training period in the company. Really thanks to Thoughtflows for guiding us throughout the journey.",
    avatar: `${geethasri}`
  },
  {
    image: `${vijayakumar}`,
    name: "VIJAYAKUMAR",
    title: "Student",
    rating: 5,
    review: "Thought flows medical academy gave me a strong medical coding foundation. The instructors were knowledgeable and supportive. The curriculum was comprehensive, and I passed my certification exam. I landed my first coding job quickly thanks to their training. Highly recommend this academy!",
    avatar: `${vijayakumar}`
  },
  {
    image: `${gopika}`,
    name: "GOPIKA",
    title: "Student",
    rating: 5,
    review: "I have completed my advance medical coding training at thought flow medical coding Academy in hopes.And I got job from logix health services.This institute gives excellent teaching methods, knowledgeable and supportive faculty, and a conducive learning environment.They explain complex topics clearly and are always patient with questions, ensuring everyone understands.Thank you to though flows☺️",
    avatar: `${gopika}`
  },
  {
    image: `${shanmugapriyan}`,
    name: "SHANMUGAPPRIYAN",
    title: "Student",
    rating: 5,
    review: "Thoughtflow is one of the best medical coding institute. Privileged and highly skilled faculty and administions. A good organization highly recommend and supported me well by cracking my CPC exam... Especially their training,study materials, practice exam and mocks are really worth....I would like highly recommend... classes are really worth... It has been delightful. Thanks to trainer pavithra mam and HR sruthi.",
    avatar: `${shanmugapriyan}`
  }
];

const Cbe2Testimonial = () => <BranchStudentStories testimonials={testimonials} />;

export default Cbe2Testimonial;
