import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import blog1 from "../images/Blog/blog.jpg"

function BlogBanner() {
  return (
    <section>
    <div style={{ position: 'relative' }}>
      <img src={blog1} style={{ width: '100%', height: "400px", objectFit: "cover", filter: "brightness(0.7)" }} alt="blog banner" />
      <h1 style={{ 
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
        fontSize: '48px',
        fontWeight: 'bold',
        textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
      }}>
        Blog 
      </h1>
    </div>
 
       
           
 
     
  </section>
  )
}

export default BlogBanner