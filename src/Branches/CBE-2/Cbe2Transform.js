import React from 'react'
import { Link } from 'react-router-dom'

const Cbe2Transform = () => {
    return (
        <>
            <div class="join-thoughtflows">
                <div class="join-thoughtflows-container">
                    <div class="join-thoughtflows-text">
                        <h2>Enroll for a Bright Future</h2>
                        <p>Join Thoughtflows Medical Coding Academy in Coimbatore today and pave the way for a bright future in medical coding. Our expert training programs are designed to equip you with the necessary skills and knowledge to excel in this field. With our industry-experienced instructors, state-of-the-art facilities, and hands-on learning opportunities, you can be confident in receiving the highest quality education. Don't miss out on the opportunity to kick-start your career with the best medical coding training in Coimbatore.</p>
                        <div className='cbe2-btn'>
                            <Link class=" button-animation" to="/contact"> 
                                Register Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cbe2Transform