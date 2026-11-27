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

const testimonials = [
  {
    image: `${kamale}`,
    name: "RAVI (VIZAG)",
    title: "Student",
    rating: 5,
    review: "Thoughtflows Vizag branch provides excellent medical coding training with experienced faculty. The course structure is well-designed and the practical approach to learning helped me understand complex coding concepts easily. The placement support is outstanding.",
    avatar: `${kamale}`
  },
  {
    image: `${SUGANYA}`,
    name: "PADMA (VIZAG)",
    title: "Student",
    rating: 5,
    review: "I completed my CPC course at Thoughtflows Vizag and it was a life-changing experience. The trainers are highly qualified and provide individual attention to each student. The study materials and practice tests are very helpful for exam preparation.",
    avatar: `${SUGANYA}`
  },
  {
    image: `${Ramya}`,
    name: "SITA (VIZAG)",
    title: "Student",
    rating: 5,
    review: "The faculty at Thoughtflows Vizag is exceptional. They make complex medical coding concepts easy to understand. The institute provides excellent career guidance and placement support. I highly recommend this institute to anyone interested in medical coding.",
    avatar: `${Ramya}`
  },
  {
    image: `${Vidhya}`,
    name: "GAYATRI (VIZAG)",
    title: "Student",
    rating: 5,
    review: "Thoughtflows Vizag offers the best medical coding training in the city. The course curriculum is comprehensive and industry-relevant. The trainers are very supportive and the learning environment is excellent. I got placed in a top healthcare company after completing the course.",
    avatar: `${Vidhya}`
  },
  {
    image: `${muhsina}`,
    name: "KAVITHA (VIZAG)",
    title: "Student",
    rating: 5,
    review: "I joined the AMCT course at Thoughtflows Vizag and it was the best decision of my career. The trainers are experienced and the course structure is well-designed. The placement team helped me secure a job in a reputed healthcare company.",
    avatar: `${muhsina}`
  }
];

const VizagTestimonial = () => <BranchStudentStories testimonials={testimonials} />;

export default VizagTestimonial;
