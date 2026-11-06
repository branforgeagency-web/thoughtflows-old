import React, { useEffect } from 'react'
import BlogBanner from './BlogBanner'
import BlogRef1 from './BlogRef1'
import Meta from '../Meta'
import './Blog.css'

const Blog = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="blog-theme-scope">
      <Meta
        title="ThoughtFlows Blog | Medical Coding Tips & Insights"
        description="Explore the ThoughtFlows blog for expert tips, industry insights, career guidance, and updates on medical coding and healthcare documentation."
        canonical="https://www.thoughtflows.in/blog"
      />
      <BlogBanner />
      <div id="blog-articles">
        <BlogRef1 />
      </div>
    </div>
  )
}

export default Blog
