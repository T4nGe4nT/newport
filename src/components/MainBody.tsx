//React imports

//Shad Imports
import { Separator } from "@/components/ui/separator";


//CSS Imports
import "./styles/mainbody.css"

//Component Imports
import NavBar from "./NavBar"
import Header from "./Header"
import AboutMe from "./AboutMe"
import FirstSection from "@/components/FirstSection.tsx";
import SecondSection from "@/components/SecondSection.tsx";
import ThirdSection from "@/components/ThirdSection.tsx";
import Footer from "@/components/Footer.tsx"


function MainBody() {
    return (
        <>
            <div className="mb-navbar">
                <NavBar/>
            </div>
            <div className="hero-header">
                <Header/>
            </div>
            <div className="about-divider">
                <AboutMe/>
            </div>
            <div className="body-wrapper">
                <div className="first-section">
                    <FirstSection/>
                </div>
                <Separator/>
                <div className="second-section">
                    <SecondSection/>
                </div>
                <Separator/>
                <div className="third-section">
                    <ThirdSection/>
                </div>
            </div>
            <div className="footer-main-container">
                <Footer/>
            </div>
        </>
    );
}

export default MainBody;
