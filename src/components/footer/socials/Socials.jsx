import React from "react";
import facebook from "../../../assets/img/facebook_white.svg"
import behance from "../../../assets/img/behance_white.svg"
import instagram from "../../../assets/img/instagram_white.svg"
import linkedIn from "../../../assets/img/linkedin_white.svg"
import twitter from "../../../assets/img/twitter_white.svg"
import "./Socials.css"

const Socials = () => {

    return (
        <div>
            <p className="footer__text-small footer__text-smaller mt-0">
                Follow us on social media
            </p>
            <div className="socials">
                <a href="https://www.amplitudo.me" target="_blank" className="icon">
                    <img src={facebook} alt="Facebook logo"/>
                </a>
                <a href="https://www.amplitudo.me" target="_blank" className="icon">
                    <img src={instagram} alt="Instagram logo"/>
                </a>
                <a href="https://www.amplitudo.me" target="_blank" className="icon">
                    <img src={linkedIn} alt="Linkedin logo"/>
                </a>
                <a href="https://www.amplitudo.me" target="_blank" className="icon">
                    <img src={twitter} alt="Twitter logo"/>
                </a>
                <a href="https://www.amplitudo.me" target="_blank" className="icon">
                    <img src={behance} alt="Behance logo"/>
                </a>

            </div>
            <p className="footer__text-small footer__text-smaller mb-0">
                © All rights reserved 2019 Amplitudo Ltd.
            </p>
        </div>
    )

}

export default Socials