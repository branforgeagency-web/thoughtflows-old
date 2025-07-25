import React from 'react'
import bannerImage from '../images/homebannerbg.png'
import bannergif from '../images/homebannerGif.gif'
import bannersmall from '../images/Group11.png'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import homevideo from '../images/new.webm'

const HomeBanner = () => {
    return (
        <Row >
            <Col xs={12} className='p-0'>
                <video 
                    autoPlay 
                    muted 
                    loop 
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                    }}
                >
                    <source src={homevideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </Col>
        </Row>
    )
}

export default HomeBanner