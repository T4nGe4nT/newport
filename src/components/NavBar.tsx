//React Imports
import { motion } from "motion/react";
import { useState } from "react";

//Shad Imports
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

//Image Imports
import Nich from "../assets/nich.gif";

//CSS Imports
import "./styles/navbar.css";

//Component Imports
import Hamburger from "../components/Hamburger";

function NavBar() {
    const [hamburgerOpen, setHamburgerOpen] = useState<boolean>(false);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen);
    };

    return (
        <div className="full-nav-container">
            <div className="navbar-container">
                <nav className="navbar">
                    <div className="avatar-container">
                        <Avatar>
                            <AvatarImage src={Nich} />
                            <AvatarFallback>NH</AvatarFallback>
                        </Avatar>
                    </div>
                    {/* Menu items */}
                    <div className={`button-container ${hamburgerOpen ? "show" : ""}`}>
                        {["Home", "Projects", "Interest", "Contact"].map((label) => (
                            <motion.div
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                key={label}
                            >
                                <Button variant="ghost">{label}</Button>
                            </motion.div>
                        ))}
                    </div>
                </nav>
                {/* Hamburger Menu */}
                <div className="hamburger" onClick={toggleHamburger}>
                    <Hamburger open={hamburgerOpen} />
                </div>
            </div>
            <Separator />
        </div>
    );
}

export default NavBar;
