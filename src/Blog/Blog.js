import React, {useEffect} from 'react'
import BlogBanner from './BlogBanner'
import Blogs from './Blogs'
import BlogRef1 from './BlogRef1'

const Blog = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
 
    <>
    <BlogBanner />
    <BlogRef1 />
    
    
    
    </>
  )
}

export default Blog