import React from "react";
import Nandhini from '../../images/Trivandrum/nandhini.png'
import Karthika from '../../images/Trivandrum/Karthika.png'
import Archana from '../../images/Trivandrum/Dr.Archana.png'
import Meenu from '../../images/Trivandrum/Meenu.png'
import Shemeema from '../../images/Trivandrum/Shemeema.png'
import Saravana from '../../images/Trivandrum/Saravana.png'
import kamale from "../../images/Kamale.G.png"
import SUGANYA from '../../images/SUGANYA.G.png'
import Ramya from '../../images/Ramya senthilkumar.png'
import Vidhya from '../../images/Vidhya .K.png'
import Rino from '../../images/Rino.png'
import muhsina from '../../images/Muhsina Surmi.png'
import nemmadi from '../../images/Nemmadi Udaychinna.png'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

const testimonials =  [
  {
    name: "Kamale.G",
    image: `${kamale}`,
    text: "Thoughtflows is one of the best places to grab a huge knowledge about medical coding. I've had a great guidance by my HR Reshma mam and special thanks to Radika mam and Keerthi mam. I'm really thankful for all the staffs who made me get into a reputed company. Other activities conducted by the academy helped to engage ourselves and gain confidence. Thank you for the entire team. Best academy to kick-start your career. Thank you…"
  },
  {
    name: "SUGANYA.G",
    image: `${SUGANYA}`,
    text: "Thoughtflow institute is best to learn medical coding, and the trainer teaching the class is very well. Best platform to learn medical coding. All the trainers are friendly. Thoughtflow provides daily practice questions in its own app, which is very useful. The platform also contains daily syllabus, etc."
  },
  {
    name: "Ramya Senthilkumar",
    image: `${Ramya}`,
    text: "I recently completed my CPC certificate with 95% with the help of Thought Medical Coding Academy, and I highly recommend it to anyone pursuing a career in medical coding. They provide detailed study materials, conduct regular mock tests, and offer thorough exam preparation, which greatly helped me feel confident about the CPC exam. My trainer Keerthi mam, Keerthana, Pooja mam, and my HR Sindhu were very approachable and created a friendly atmosphere, making learning both effective and enjoyable. Thank you."
  },
  {
    name: "Vidhya.K",
    image: `${Vidhya}`,
    text: "It was a good decision that I made by joining THOUGHTFLOWS as a student. The course content is very well explained, even a beginner like me could understand it easily. A special mention to HR Reshma mam and trainers Pooja and Ezhil mam for clearing my doubts and helping me whenever I was stuck. I cleared CPC with 92%. Thank you! Overall, a good experience."
  },
  {
    name: "Muhsina Surmi",
    image: `${muhsina}`,
    text: "My name is Muhsina, I completed the Medical Coding course at Thought Flows Institute and was thoroughly impressed with the quality of instruction and course materials. Thanks to the solid foundation I gained, I was able to crack CPC exam shortly after finishing the course. I highly recommend this program to anyone looking to start a career in the field! Thank you Thought Flows."
  },
  {
    name: "Rino",
    image: `${Rino}`,
    text: "I'm Rino R, I completed the medical coding course in Thought Flows Academy in Trivandrum. I completed my Bachelor's degree in BSc Chemistry. I passed CPC with 89%. Thank you Thought Flows for the guidance and special thanks to my trainers, Aleena mam and Vaishna mam, for the valuable support to crack CPC exam. Thank you to Anakha mam and Aiswarya mam for daily motivation. Special thanks to Gokul sir for the great support. Thank you Thought Flows."
  },
  {
    name: "Nemmadi Udaychinna",
    image: `${nemmadi}`,
    text: "I had an excellent experience at Thought Flows Medical Coding Academy where the dedicated faculty provided comprehensive instruction and a supportive learning environment. The curriculum was well-structured, incorporating both theoretical knowledge and practical applications, which significantly enhanced my skills. I particularly appreciated the personalized attention from the teachers, who were always available to answer questions and guide me through challenges. Overall, I highly recommend Thought Flows to anyone seeking quality education in medical coding."
  }
];

// Cbe1Testi
const Cbe1Testi = () => {
  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-10 sm:py-26 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <h2 className="text-center font-bold text-5xl text-primaryy pb-5">What Our Students Says</h2>
        <Swiper pagination={true} modules={[EffectFade, Pagination, Autoplay]} className="mySwiper ">
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <figure className="text-center">
                <blockquote className="text-lg/6 font-light text-gray-900 sm:text-xl/7">
                  <p>{testimonial.text}</p>
                </blockquote>
                <figcaption className="mt-6 flex flex-col items-center">
                  <img
                    alt={testimonial.name}
                    src={testimonial.image}
                    className="mx-auto h-20 w-20 rounded-full object-cover"
                  />
                  <div className="m-4  text-base font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                </figcaption>
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Cbe1Testi;
