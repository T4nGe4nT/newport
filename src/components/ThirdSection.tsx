// React imports
import { motion } from "framer-motion";



import tsData from "../assets/js/ThirdSectionData.ts"

import "./styles/sharedsection.css"


interface TsDataItem {
    id: number;
    image: string;
    text: string;
    alt: string;
}

function ThirdSection() {
    return (
        <div className="section-container">
            <div className="section-inner-container">
                {tsData.map((item: TsDataItem, index) => (
                    <div className="content reverse-layout" key={item.id}>
                        <div className="card-container">
                            <motion.div
                                className="text-container"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }} // Trigger animation when 50% is visible
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
                                }}
                            >
                                {item.text.split(" ").map((word, i) => (
                                    <motion.span
                                        key={`${index}-${i}`}
                                        variants={{
                                            hidden: { opacity: 0, y: 10 },
                                            visible: { opacity: 1, y: 0 },
                                        }}
                                        style={{ display: "inline-block", marginRight: "0.2rem" }}
                                    >
                                        {word}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </div>
                        <motion.img
                            className="img"
                            src={item.image}
                            alt={item.alt}
                            initial={{ opacity: 0 }} // Start invisible
                            whileInView={{ opacity: 1 }} // Fade in when visible
                            viewport={{ once: true, amount: 0.5 }} // Trigger when 50% is visible
                            transition={{ duration: 1 }} // Adjust fade-in duration
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ThirdSection;


