import React from "react";
import homeblogImg1 from '../images/homeblog1.jpeg'

const articles = [
  {
    category: "SCIENCE",
    title: "Crafting Effective Learning Guide Line",
    date: "15 Nov, 2023",
    comments: "0",
    description: "Consectetur adipisicing elit, sed do eiusmod tempor inc...",
    image: `${homeblogImg1}`
  },
  {
    category: "TECHNOLOGY",
    title: "Exploring Learning Landscapes in Academic",
    date: "14 Nov, 2023",
    comments: "3",
    description: "Consectetur adipisicing elit, sed do eiusmod tempor inc id...",
    image: `${homeblogImg1}`
  },
  {
    category: "LEARNING",
    title: "Voices from the Learning Education Hub",
    date: "13 Nov, 2023",
    comments: "0",
    description: "Consectetur adipisicing elit, sed do eiusmod tempor inc...",
    image:  `${homeblogImg1}`
  },
];

const HomeBlog = () => {
  return (
    <div className="home-blog-container">
      <div className="col-lg-12 text-center mb-4">
                <h5>LATEST ARTICLE</h5>
                <h2>Get News with EduBlink</h2>
            </div>
      <div className="home-blog-cards">
        {articles.map((article, index) => (
          <div key={index} className="home-blog-card">
            <div
              className="home-blog-image"
              style={{ backgroundImage: `url(${article.image})` }}
            ></div>
            <div className="home-blog-content">
              <span className="home-blog-category">{article.category}</span>
              <h3 className="home-blog-heading">{article.title}</h3>
              <div className="home-blog-meta">
                <span className="home-blog-date">{article.date}</span>
                <span className="home-blog-comments">Com {article.comments}</span>
              </div>
              <p className="home-blog-description">{article.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeBlog;
