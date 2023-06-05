import React from "react";
import "./Nav.css"
import logo_2 from "../../assets/img/logo/logo_2.png"

const Nav = () => {

    return (
        <div>
            <nav className="nav">
                <div className="nav__logo">
                    <img src={logo_2} alt="Amplitudo logo" className="nav__logo__img"/>
                </div>
                <ul className="nav__links">
                    <li className=""><a href="https://www.amplitudo.me" target="_blank" className="nav__link">Home</a>
                    </li>
                    <li className=""><a href="#" className="nav__link nav__link-active ">Services</a></li>
                    <li><a href="#" className="nav__link">StartUp</a></li>
                    <li><a href="career.html" className="nav__link">Career</a></li>
                    <li><a href="company.html" className="nav__link">Company</a></li>
                    <li><a href="blog.html" className="nav__link">Blog</a></li>
                    <li><a href="" className="nav__link nav__link__lang">cg</a></li>
                </ul>

                <input type="checkbox" id="menu-toggle" hidden/>
                    <label htmlFor="menu-toggle" className="menu-btn">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>

                    <ul className="menu">
                        <li className=""><a href="https://www.amplitudo.me" className="nav__link">Home</a></li>
                        <li className=""><a href="#" className="nav__link">Services</a></li>
                        <li><a href="#" className="nav__link">StartUp</a></li>
                        <li><a href="#" className="nav__link">Career</a></li>
                        <li><a href="#" className="nav__link">Company</a></li>
                        <li><a href="#" className="nav__link nav__link-active ">Blog</a></li>
                        <li><a href="" className="nav__link nav__link__lang">cg</a></li>
                    </ul>
            </nav>
        </div>
    )

}

export default Nav