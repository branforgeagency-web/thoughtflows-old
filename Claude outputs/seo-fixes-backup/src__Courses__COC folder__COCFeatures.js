import React from 'react'
import { Row } from 'react-bootstrap';
import { mediaUrl } from '../../config/media';
const excellenceimg = mediaUrl('images/Courses/excellence.png');
const careeradv = mediaUrl('images/Courses/career-advancement.png');
const handson = mediaUrl('images/Courses/hands-on-experience.png');

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