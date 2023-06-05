import React from "react";
import "./ContactBanner.css"
import parrotImage from "../../assets/img/parrot/parrot_2.png"

const ContactBanner = () => {

    return (
        <div className="contact__banner">
            <h1 className="contact__banner__heading">Like what you see?</h1>
            <p className="contact__banner__text">Let&apos;s talk about it.</p>
            <div className="contact__banner__link-container">
                <a href="#" className="contact__banner__link">contact us</a>
            </div>
            <img src={parrotImage} alt="Parrot image" className="contact__banner__parrot"/>
        </div>
    )

}

export default ContactBanner