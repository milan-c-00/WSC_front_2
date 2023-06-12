import './App.scss'
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
            <Nav/>
            <div className="main">
                <Heading/>
                <Illustration/>
                <Text/>
                <Products></Products>
                <ContactBanner/>
                <Interests></Interests>
                <Footer></Footer>
            </div>

        </div>
    )
}

export default App
