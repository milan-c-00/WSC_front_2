import React from "react";
import "./Footer.css"
import map from "../../assets/img/map/map_2.png"
import Contact from "./contact/Contact.jsx";
import Tooltip from "./tooltip/Tooltip.jsx";
import Info from "./info/Info.jsx";
import Socials from "./socials/Socials.jsx";

const Footer = () => {

    return (
        <div className="footer">
            <Tooltip></Tooltip>
            <img src={map} alt="World map" className="footer__img"/>
            <div className="container-50">
                <Contact></Contact>
                <Info></Info>
                <Socials></Socials>
            </div>
        </div>
    )

}

export default Footer