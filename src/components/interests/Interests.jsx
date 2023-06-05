import React from "react";
import "./Interests.css"
import Interest from "./interest/Interest.jsx";
const Interests = () => {

    return (
        <>
            <h2 className="interests__heading">You might be interested</h2>
            <div className="interests__container">
                <Interest heading="Mobile apps development"></Interest>
                <Interest heading="Website development"></Interest>
                <Interest heading="SaaS"></Interest>

            </div>
        </>
    )

}

export default Interests