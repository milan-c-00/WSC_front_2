import React from "react";
import "./Interest.css"
import illustration from "../../../assets/img/ilustrations/ilustration_1_2.png";
const Interest = ({heading}) => {

    return (
        <div className="interest">
            <img src={illustration} className="interest__image"/>
            <h3 className="interest__heading">{heading}</h3>
        </div>
    )

}

export default Interest