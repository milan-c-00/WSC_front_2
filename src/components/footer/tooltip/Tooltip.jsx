import React from "react";
import "./Tooltip.css"
import logoRound from "../../../assets/img/logo_round/logo_round_2.png"

const Tooltip = () => {

    return (
        <>
            <p className="white-box footer__text-dark">

                <img src={logoRound} alt="Logo" className="logo-round"/>
                    Hello from the center of the world! 😇
            </p>

            <div>
                <div className="green-dot"></div>
            </div>
        </>
    )

}

export default Tooltip