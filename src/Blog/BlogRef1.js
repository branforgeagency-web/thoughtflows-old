import React, { useState, useEffect, useRef } from 'react';
import blogImage from '../images/Blog/blog.jpg';
import postImage1 from '../images/Blog/medical-banner-with-doctor-working-laptop.jpg';
import postImage2 from '../images/Blog/medical-banner-with-doctor-wearing-goggles.jpg';
import postImage3 from '../images/Blog/health-wellness-digital-tablet-concept.jpg';
import postImage4 from '../images/Blog/medium-shot-smiley-woman-holding-clipboard.jpg';
import postImage5 from '../images/Blog/stomatolog-nurse-tooth-clinic-checking-patient-appointment-looking-computer-monitor-stomatology-assistant-teeth-doctor-discussing-reception-dental-office.jpg';
import postImage6 from '../images/Blog/manager-preparing-store-reopening.jpg';
import postImage7 from '../images/Blog/three-business-people-discussing-graph-points.jpg';
import postImage8 from '../images/Blog/vetri108/Ram Blog Banner (22).png';
import postImage9 from '../images/Blog/ai-coding/hero-banner.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

function BlogRef1() {
  const [showSidebar, setShowSidebar] = useState(false);
  const headerRef = useRef(null);

  const createSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9 ]/g, "") // Remove special characters
      .replace(/\s+/g, "-"); // Replace spaces with dashes
  };
  
  const postData = [
    {
      date: "September 27, 2022",
      title: "What is Medical Coding? Complete Guide for Beginners – Thoughtflows",
      Comments: "0",
      info: `Learn everything about medical coding: its importance, types, and career opportunities. Enroll with Thoughtflows Medical Coding Academy for expert training!`,
      image: postImage1,
      id: createSlug("What is Medical Coding? Complete Guide for Beginners – Thoughtflows"),
    },
    {
      date: "December 13, 2022",
      title: "Why Medical Coding is the Backbone of the Healthcare Industry",
      Comments: "0",
      info: `Learn why medical coding is vital for healthcare and how it offers job security—start your training at Thoughtflows Medical Coding Academy today!`,
      image: postImage2,
      id: createSlug("Why Medical Coding is the Backbone of the Healthcare Industry"),
    },
    {
      date: "January 2, 2023",
      title: "Top 5 Medical Coding Mistakes and How to Avoid Them for a Successful Career.",
      Comments: "0",
      info: `Discover the 5 most common medical coding mistakes that lead to claim denials and compliance issues. Learn actionable strategies to avoid errors and boost your coding accuracy today!`,
      image: postImage3,
      id: createSlug("Top 5 Medical Coding Mistakes and How to Avoid Them for a Successful Career."),
    },
    {
      date: "January 2, 2023",
      title: "How to Prepare for the CPC Exam: Expert Tips and Strategies for Success",
      Comments: "0",
      info: `Looking to pass the CPC exam? Discover expert tips, strategies, and essential study materials for acing the Certified Professional Coder exam. Learn how to create a study plan, master key topics, and improve your chances of success.`,
      image: postImage4,
      id: createSlug("How to Prepare for the CPC Exam: Expert Tips and Strategies for Success"),
    },
    {
      date: "January 2, 2023",
      title: "Exploring ICD-10-CM: Key Changes You Need to Know for Accurate Medical Coding",
      Comments: "0",
      info: `Stay updated on the latest ICD-10-CM changes and revisions for 2025. Learn key updates, new codes, and best practices to enhance your medical coding accuracy and compliance.`,
      image: postImage5,
      id: createSlug("Exploring ICD-10-CM: Key Changes You Need to Know for Accurate Medical Coding"),
    },
    {
      date: "January 2, 2023",
      title: "The Role of Medical Coders in Modern Healthcare: Essential Insights",
      Comments: "0",
      info: `Discover the vital role medical coders play in modern healthcare. Learn about their responsibilities, skills, impact on patient care, and how they contribute to billing, compliance, and research.`,
      image: postImage6,
      id: createSlug("The Role of Medical Coders in Modern Healthcare: Essential Insights"),
    },
    {
      date: "January 2, 2023",
      title: "Medical Coding Career Path: Opportunities and Growth in Healthcare",
      Comments: "0",
      info: `Explore the career path of medical coding professionals. Learn about job opportunities, career growth, salary outlook, and how to succeed in the dynamic field of medical coding.`,
      image: postImage7,
      id: createSlug("Medical Coding Career Path: Opportunities and Growth in Healthcare"),
    },
    {
      date: "July 05, 2026",
      title: "108 Free Scholarships for Future Medical Coders by ThoughtFlows",
      Comments: "0",
      info: `VETRI 108 by ThoughtFlows offers free Medical Coding scholarships, training, and placement support for graduates, freshers, and job seekers across Tamil Nadu.`,
      image: postImage8,
      id: "vetri-108-free-medical-coding-scholarships",
    },
    {
      date: "September 26, 2026",
      title: "Artificial Intelligence in Medical Coding: A Beginner's Guide",
      Comments: "0",
      info: `Explore how Artificial Intelligence (AI) is transforming Medical Coding. Learn about AI benefits, computer-assisted coding tools, human-AI collaboration, and how to prepare for an AI-empowered career.`,
      image: postImage9,
      id: createSlug("Artificial Intelligence in Medical Coding: A Beginner's Guide"),
    },
  ];


  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSidebar(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);
const PostCard = ({ post }) => {
  return (
    <div className="bg-white m-3 shadow-lg rounded-lg overflow-hidden max-w-sm mx-auto md:max-w-md lg:max-w-md">
      <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        {/* <p className="text-gray-500 text-sm">{post.date}</p> */}
        <h2 className="text-lg font-semibold mt-1">{post.title}</h2>
        <p className="text-gray-600 text-sm mt-2">{post.info}</p>
        <div className="mt-4 flex justify-between items-center">
          {/* <span className="text-gray-500 text-xs">Comments: {post.Comments}</span> */}
          <Link to={`/blog/${post.id}`}>
                <button style={{ fontFamily: 'Poppins, sans-serif',borderRadius:"4px" }}>Continue Reading</button>
              </Link>
        </div>
      </div>
    </div>
  );
};


return (
  <div className="p-10 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    {postData.slice().reverse().map((post) => (
      <PostCard key={post.id} post={post} />
    ))}
  </div>
);

  // return (
  //   <div>
  //     <div  style={{ display: "flex", justifyContent: "space-around", paddingTop: "100px", marginBottom: "-120px" }}>
  //       <div className=' d-flex flex-wrap' style={{ padding: "20px" }}>
  //         {postData.map((post, index) => (
  //           <div key={index} className='p-4 rounded-lg shadow-md' style={{ marginBottom: "100px" }}>
  //             <img src={post.image} alt={post.title} style={{ width: '500px', height: '160px', borderRadius: '8px', marginTop: "-85px", }} />
  //             <h3 className='text-xl font-bold mt-5'>{post.title}</h3>
  //             {/* <p className='text-gray-600'><strong>Date:</strong> {post.date}</p> */}
  //             {/* <p className='text-gray-600'><strong>Comments:</strong> {post.Comments}</p> */}
  //             <p className='mt-2' style={{width:"300px"}} >{post.info}</p>
  //             <Link to={`/blog${post.id}`}>
  //               <button style={{ fontFamily: 'Poppins, sans-serif' }}>Continue Reading</button>
  //             </Link>
  //           </div>
  //         ))}
  //       </div>

  //       {showSidebar && (
  //         <div
  //         // className='sidebar-container'
  //         //   style={{

  //         //     opacity: showSidebar ? 1 : 0,
  //         //   }}
  //         >
  //           <a href='https://www.facebook.com/Thoughtflowsacademy/' target='_blank'><FontAwesomeIcon icon={faFacebookF} style={{ fontSize: '24px', color: 'white' }} className='icon' /></a>
  //           <a href='https://x.com/i/flow/login?redirect_after_login=%2Fthouhtflows' target='_blank'><FontAwesomeIcon icon={faTwitter} style={{ fontSize: '24px', color: 'white' }} className='icon' /></a>
  //           <a href='https://www.linkedin.com/company/thoughtflows-medical-coding-academy/' target='_blank'><FontAwesomeIcon icon={faLinkedinIn} style={{ fontSize: '24px', color: 'white' }} className='icon' /></a>
  //           <a href='https://www.instagram.com/thought_flows/' target='_blank'><FontAwesomeIcon icon={faInstagram} style={{ fontSize: '24px', color: 'white' }} className='icon' /></a>

  //         </div>
  //       )}

  //     </div>
  //   </div>
  // );
}

export default BlogRef1;
