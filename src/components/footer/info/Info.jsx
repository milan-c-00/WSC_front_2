import "./Info.scss"
import logoText from "../../../assets/img/logo_text/logo_text_2.png"

const Info = () => {

    return (
        <>
            <a href="#"><img src={logoText} alt="Logo text" className="logo_text"/></a>

                <p className="footer__text-small footer__text-smaller">
                    Boulevard of St. Petar Cetinjski 56
                    <br/>
                    Podgorica, Montenegro
                    <br/>
                    <span className="white-line"></span>
                    info@amplitudo.me
                    <br/>
                    +382 20 223 244
                </p>
        </>
    )

}

export default Info