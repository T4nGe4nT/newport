//React Imports
import { motion } from "motion/react";
import { useState } from "react";

//Shad Imports
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

//Image Imports
import Nich from "../assets/nich.gif";

//CSS Imports
import "./styles/navbar.css";

//Component Imports
import Hamburger from "../components/Hamburger";
import ContactDialog from "@/components/ContactDialog.tsx";

function NavBar() {
    const [hamburgerOpen, setHamburgerOpen] = useState<boolean>(false);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen);
    };

    const handleAvatarClick = () => {
        const headerElement = document.getElementById("header");
        if (headerElement) {
            headerElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <div className="full-nav-container">
            <div className="navbar-container">
                <nav className="navbar">
                    <div className="avatar-container">
                        <motion.div
                            whileHover={{scale: 1.2}}
                            whileTap={{scale: 0.9}}
                            transition={{type: "spring", stiffness: 400, damping: 17}}
                            onClick={handleAvatarClick}
                            style={{cursor: "pointer"}}
                        >
                            <Avatar>
                                <AvatarImage src={Nich}/>
                                <AvatarFallback>NH</AvatarFallback>
                            </Avatar>
                        </motion.div>
                    </div>
                    <div className={`button-container ${hamburgerOpen ? "show" : ""}`}>
                        <motion.div
                            whileHover={{scale: 1.2}}
                            whileTap={{scale: 0.9}}
                            transition={{type: "spring", stiffness: 400, damping: 17}}
                            onClick={handleAvatarClick}
                            style={{cursor: "pointer"}}
                        >
                                <ContactDialog/>
                        </motion.div>
                    </div>
                </nav>
                <div className="hamburger" onClick={toggleHamburger}>
                    <Hamburger open={hamburgerOpen}/>
                </div>
            </div>
            <Separator/>
        </div>
    );
}

export default NavBar;
