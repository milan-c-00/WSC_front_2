import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Heading from "./components/heading/Heading.jsx";
import Nav from "./components/nav/Nav.jsx";
import Illustration from "./components/illustration/Illustration.jsx";
import Text from "./components/text/Text.jsx";
import Products from "./components/products/Products.jsx";
import ContactBanner from "./components/contact-banner/ContactBanner.jsx";
import Interests from "./components/interests/Interests.jsx";
import Footer from "./components/footer/Footer.jsx";

function App() {

    return(
        <div>
            <Nav></Nav>
            <div className="main">
                <Heading></Heading>
                <Illustration></Illustration>
                <Text></Text>
                <Products></Products>
                <ContactBanner></ContactBanner>
                <Interests></Interests>
                <Footer></Footer>
            </div>

        </div>
    )
}

export default App
