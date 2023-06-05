import React from "react";
import paperPlane from "../../../assets/img/logo_text/Group 420@2x.png"
import "./Contact.css"

const Contact = () => {

    return (
        <>
            <p className="contact__text-small">Interested in our services?</p>
            <div className="contact__text-big">
                <a href="#" className="contact__text-link">&nbsp;contact us&nbsp;</a>
                <img className="paper-plane" src={paperPlane} alt="Paper plane decor"/>
            </div>
        </>
    )

}

export default Contact