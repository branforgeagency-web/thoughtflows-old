import React from 'react'
import { Row } from 'react-bootstrap';
import excellenceimg from '../../images/Courses/excellence.png'
import careeradv from '../../images/Courses/career-advancement.png'
import handson from '../../images/Courses/hands-on-experience.png'

const COCFeatures = () => {
  return (
    <>
    <div><h2 className='text-center mt-3'>Key Features</h2></div>
    <Row className='why-cpc' xs={1} md={3}>
        <div className='card col-lg-3 col-sm-12'>
            <div className='icon'>
                <img alt="" src={excellenceimg} />
            </div>
            <h3>COC Excellence</h3>
            <p>Mock up test will be provided to understand and get the hint to pass the CIC Exam.</p>
        </div>
        <div className='card active col-lg-3 col-sm-12'>
            <div className='icon'>
                <img alt="" src={careeradv}/>
            </div>
            <h3>Career Advancement</h3>
            <p className='text-light'> Free Re-Training for those who have doubts or missed any sessions.</p>
        </div>
        <div className='card col-lg-3 col-sm-12'>
            <div className='icon'>
                <img alt="" src={handson} />
            </div>
            <h3>Hands-On Success</h3>
            <p>Course Completion Certificate.</p>
        </div>
    </Row>
</>
  )
}

export default COCFeatures