import React from 'react';
import gif1 from '../images/gif3.gif'
import gif2 from '../images/gif1.gif'
import gif3 from '../images/gif2.gif'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'

const GifSection = () => {
    return (
        <Row className='gif-section' style={{paddingBlock:"60px"}}>
            <Col lg={4} md={12} className='section-1 justify-content-center'>
                <img src={gif1} alt='gif1' className='gif1' />
                <p>Get Personalized Learning<br/> Approach</p>
            </Col>
            <Col lg={4} md={12} className='section-1 justify-content-center'>
                <img src={gif2} alt='gif2' className='gif2' />
                <p>Robust Industry Connections for Placement</p>
            </Col>
            <Col lg={4} md={12} className='section-1 justify-content-center'>
                <img src={gif3} alt='gif3' className='gif3' />
                <p>8+ Years of Experience</p>
            </Col>
        </Row>

    )
}

export default GifSection