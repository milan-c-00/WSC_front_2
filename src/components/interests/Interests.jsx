import interestsStyle from "./Interests.module.scss"
import Interest from "./interest/Interest.jsx";
const Interests = () => {

    return (
        <>
            <h2 className={interestsStyle.heading}>You might be interested</h2>
            <div className={interestsStyle.interests__container}>
                <Interest heading="Mobile apps development"/>
                <Interest heading="Website development"/>
                <Interest heading="SaaS"/>

            </div>
        </>
    )

}

export default Interests