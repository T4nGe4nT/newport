//React Imports
import { motion } from "framer-motion";

//Shad Imports

//Image Imports
// import DownArrow from "../assets/icons/down-arrow.png"

//CSS Imports
import "./styles/header.css"

//Component Imports



function Header() {
    const text = "Howdy! I'm Nich. Let me take you on a journey through my creations.".split(" ");

    return (
        <>
            <div className="header-container">
                <div className="anime-text">
                    {text.map((el, i) => (
                        <motion.span
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{
                                duration: 0.25,
                                delay: i / 10,
                            }}
                            key={i}
                        >
                            {el}{" "}
                        </motion.span>
                    ))}
                </div>
            </div>
            {/*<div className="down-arrow">*/}
            {/*    <img src={DownArrow} alt="Down Arrow"/>*/}
            {/*</div>*/}
        </>
    )
}


export default Header;
