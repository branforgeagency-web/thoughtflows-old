import React from 'react'
import { Form } from 'react-bootstrap'

const RegisterPopupForm = () => {
    return (
        <>
            <div class="cd-popup contact" role="alert">
                <Form name="contactform" id="contactform" class="contact-form">
                    <div class="cd-popup-container" style="">
                        <p style="">
                            <a href="" class="cd-popup-close cd-close-button">
                                <i class="fa fa-times" style="pointer-events:none;"></i>
                            </a>
                        </p>

                        <div class="name">
                            <label for="name">Name</label>
                            <input type="text" id="name" name="name" />
                        </div>
                        <div class="email">
                            <label for="email">Email</label>
                            <input type="text" id="email" name="email" />
                        </div>
                        <div class="message">
                            <label for="message">Message</label>
                            <textarea name="message" id="message"></textarea>
                        </div>

                        <div style="text-align:left">
                            <input type="checkbox" id="human" name="human" />
                            <label for="human">I am a human and not a robot.</label>
                        </div>

                        <div class="submit">
                            <p class="user-message" id="contactblurb"> Questions, suggestions, and general comments are all welcome!</p>
                            <input type="submit" name="submit" id="submit" value="Send" />
                        </div>
                    </div>
                </Form>
            </div>
            <div class="cd-popup notification" role="alert">
                <div class="cd-popup-container">
                    <a href="" class="cd-popup-close cd-close-button"><i class="fa fa-times" style="pointer-events:none;"></i></a>
                    <p>
                        <h3 id="notification-text">Thanks for getting in touch!</h3>
                    </p>
                </div>
            </div>
        </>
    )
}

export default RegisterPopupForm