import React from "react";
import illustration_1_2 from "../../assets/img/ilustrations/ilustration_1_2.png"
import "./Illustration.css"

const Illustration = () => {

    return(
        <div>
            <img src={illustration_1_2} alt="Illustration" className="services__illustration"/>
        </div>
    )

}

export default Illustration