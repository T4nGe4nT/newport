import { useState } from "react";
import { motion } from "framer-motion";

//CSS Import
import "./styles/secondsection.css";

//Data Import
import ssData from "../assets/js/SecondSectionData.ts";

function SecondSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextItem = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % ssData.length);
    };

    const prevItem = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex - 1 + ssData.length) % ssData.length
        );
    };

    return (
        <div className="carousel-container">
            <div className="carousel-item">
                {ssData.map((item, index) => (
                    <div
                        key={item.id}
                        className={`carousel-item-content ${
                            index === currentIndex ? "active" : "inactive"
                        }`}
                    >
                        {index === currentIndex && (
                            <>
                                <motion.img
                                    className="img-carousel"
                                    src={item.image}
                                    alt={item.alt || `Slide ${index + 1}`}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                />
                                <div className="carousel-text">
                                    {item.text || `Slide ${index + 1} description`}
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
            <div className="carousel-controls">
                <button onClick={prevItem} className="prev-button">
                    Previous
                </button>
                <button onClick={nextItem} className="next-button">
                    Next
                </button>
            </div>
        </div>
    );
}

export default SecondSection;
