import React from "react";
import "./Info.css"
import logoText from "../../../assets/img/logo_text/logo_text_2.png"

const Info = () => {

    return (
        <>
            <img src={logoText} alt="Logo text" className="logo_text"/>

                <p className="footer__text-small footer__text-smaller">
                    Boulevard of St. Petar Cetinjski 56
                    <br/>
                    Podgorica, Montenegro
                    <br/>
                    <div className="white-line"></div>
                    info@amplitudo.me
                    <br/>
                    +382 20 223 244
                </p>
        </>
    )

}

export default Info