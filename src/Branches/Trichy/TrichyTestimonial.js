import React from "react";
import BranchStudentStories from "../common/BranchStudentStories";
import { mediaUrl } from '../../config/media';
const dharshini = mediaUrl("images/Testimonials/Dharshini (Trichy).jpeg");
// import vijay from "../../images/Testimonials/Abhiram Reddy ( Ameerpet HYD ).jpeg"
// import rithika from "../../images/Testimonials/Abhiram Reddy ( Ameerpet HYD ).jpeg"
// import praveen from "../../images/Testimonials/Priyanka Suresh (Salem).jpeg"
// import ramya from "../../images/Testimonials/Ramana ( Ameerpet HYD ).jpeg"
// import krishnaveni from "../../images/Testimonials/Keerthana (Salem).png"


const testimonials = [
  {
    image: `${dharshini}`,
    name: "DHARSHINI",
    title: "Student",
    rating: 5,
    review: "Best medical coding academy in Trichy.....I learned lot of knowledge from this academy. Well teaching trainers..they are very polite and calm. If any problems....they immediately respond and solve it",
    avatar: `${dharshini}`
    },
  // {
  //   image: `${vijay}`,
  //   name: "VIJAY",
  //   title: "Student",
  //   rating: 5,
  //   review: "Best medical coding academy in Trichy.....I learned lot of knowledge from this academy. Well teaching trainers..they are very polite and calm. If any problems....they immediately respond and solve it",
  //   avatar: `${vijay}`
  // },
  // {
  //   image: `${rithika}`,
  //   name: "RITHIKA",
  //   title: "Student",
  //   rating: 5,
  //   review: "Best medical coding academy in Trichy.....I learned lot of knowledge from this academy. Well teaching trainers..they are very polite and calm. If any problems....they immediately respond and solve it",
  //   avatar: `${rithika}`
  // },
  // {
  //   image: `${praveen}`,
  //   name: "PRAVEEN",
  //   title: "Student",
  //   rating: 5,
  //   review: "Best medical coding academy in Trichy.....I learned lot of knowledge from this academy. Well teaching trainers..they are very polite and calm. If any problems....they immediately respond and solve it",
  //   avatar: `${praveen}`
  // },
  // {
  //   image: `${ramya}`,
  //   name: "RAMYA",
  //   title: "Student",
  //   rating: 5,
  //   review: "Best medical coding academy in Trichy.....I learned lot of knowledge from this academy. Well teaching trainers..they are very polite and calm. If any problems....they immediately respond and solve it",
  //   avatar: `${ramya}`
  // },
  // {
  //   image: `${krishnaveni}`,
  //   name: "KRISHNAVENI",
  //   title: "Student",
  //   rating: 5,
  //   review: "Best medical coding academy in Trichy.....I learned lot of knowledge from this academy. Well teaching trainers..they are very polite and calm. If any problems....they immediately respond and solve it",
  //   avatar: `${krishnaveni}`
  // },
];

const TrichyTestimonial = () => <BranchStudentStories testimonials={testimonials} />;

export default TrichyTestimonial;
