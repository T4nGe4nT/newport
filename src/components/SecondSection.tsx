//Shad Imports
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

//CSS Import
import "./styles/secondsection.css";

//Data Import
import ssData from "../assets/js/SecondSectionData.ts";
import { motion } from "framer-motion";

function SecondSection() {
    return (
        <>
            <div className="carousel-container">
                <div className="carousel-item">
                    <Carousel>
                        <CarouselContent>
                            {ssData.map((item, index) => {
                                console.log(`Rendering slide: ${index}`, item);
                                return (
                                    <CarouselItem key={item.id}>
                                        <div className="carousel-item-content">
                                            <motion.img
                                                className="img-carousel"
                                                src={item.image}
                                                alt={item.alt || `Slide ${index + 1}`}
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                viewport={{ once: true, amount: 0.5 }}
                                                transition={{ duration: 1 }}
                                            />
                                            <div className="carousel-text">
                                                {item.text || `Slide ${index + 1} description`}
                                            </div>
                                        </div>
                                    </CarouselItem>
                                );
                            })}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </div>
        </>
    );
}

export default SecondSection;
