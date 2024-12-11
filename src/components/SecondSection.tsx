import { useState } from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi, // Import the correct type
} from "@/components/ui/carousel.tsx";
import ssData, { SsDataItem } from "../assets/js/SecondSectionData.ts";
import "./styles/secondsection.css";

function SecondSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Callback for when the slide changes
    const handleSelect = (api: CarouselApi) => {
        if (!api) return; // Ensure api is defined
        setCurrentIndex(api.selectedScrollSnap());
    };

    return (
        <div className="car-container">
            {/* Display Title */}
            <div className="car-title">
                <h2>{ssData[currentIndex]?.title}</h2>
            </div>

            <Carousel
                opts={{ loop: true }}
                setApi={(api) => {
                    if (api) {
                        api.on("select", () => handleSelect(api));
                    }
                }}
                className="car-content"
            >
                {/* Carousel Items */}
                <CarouselContent>
                    {ssData.map((item: SsDataItem) => (
                        <CarouselItem key={item.id}>
                            <img src={item.image} alt={item.alt} />
                        </CarouselItem>
                    ))}
                </CarouselContent>

                {/* Display Description */}
                <div className="car-description">
                    <p>{ssData[currentIndex]?.text}</p>
                </div>

                {/* Navigation Controls */}
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
}

export default SecondSection;
