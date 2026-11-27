import React from "react";
import BranchStudentStories from "../common/BranchStudentStories";
import { mediaUrl } from '../../config/media';
const sushmitha = mediaUrl("images/Testimonials/Sushmitha ( TIRUPATI ).jpeg");
const gowthami = mediaUrl("images/Testimonials/Gowthami ( TIRUPATI ).jpeg");
const ruchitha = mediaUrl("images/man.png");
const hemala = mediaUrl("images/Testimonials/Hemalatha ( TIRUPATI ).jpeg");
const shoba = mediaUrl("images/Testimonials/Shoba ( TIRUPATI ).jpeg");

const testimonials = [
  {
    image: `${sushmitha}`,
    name: "SUSHMITHA",
    title: "Student",
    rating: 5,
    review: "I loved attending this institute!! The faculty were talented and inspiring.. and the faculty were top-notch. I gained valuable skills and confidence in my artistic abilities..",
    avatar: `${sushmitha}`
  },
  {
    image: `${gowthami}`,
    name: "GOWTHAMI",
    title: "Student",
    rating: 5,
    review: "Am very grateful to thoughts flow of medical coding in tirupati branch.. Mainly trainer Prasanna mam, and Hrs they encourage us in everything... Thanks to thoughts flow",
    avatar: `${gowthami}`
  },
  {
    image: `${ruchitha}`,
    name: "RUCHITHA VALLAKATI",
    title: "Student",
    rating: 5,
    review: "Amazing institute with excellent infrastructure and great teaching methods. finally a fantastic place to learn.",
    avatar: `${ruchitha}`
  },
  {
    image: `${hemala}`,
    name: "HEMALATHA",
    title: "Student",
    rating: 5,
    review: "Am very grateful to though flow academy in tirupati branch to take cpc course. mainly to trainer prasana mam. clarification of my doubts in every topic. the way mam explanations is to good to us.",
    avatar: `${hemala}`
  },
  {
    image: `${shoba}`,
    name: "SHOBA",
    title: "Student",
    rating: 5,
    review: "Thoughtflows is very best Institute for cracking cpc exam and contains all facilities of medical coding. It is very very good Institute with highly qualified trainers, responsible regional managers and highly supportive hr madams. Choose thought flows for career growth in the field of medical coding.",
    avatar: `${shoba}`
  }
];

const TirupathiTestimonial = () => <BranchStudentStories testimonials={testimonials} />;

export default TirupathiTestimonial;
