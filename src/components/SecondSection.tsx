// Shad Import
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel.tsx";

// Data imports
import ssData, { ssDataItem } from "../assets/js/SecondSectionData.ts";

// CSS Imports
import "./styles/secondsection.css";

function SecondSection() {
    return (
        <>
            <div className="car-container">
                <div className="car-title">
                    <h2></h2>
                </div>
                <Carousel className="car-content">
                    <CarouselContent >
                        {ssData.map((item: ssDataItem, index) => (
                            <CarouselItem key={item.id} >
                                <img src={item.image} alt={`Item ${index}`} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="car-desription">
                        <p></p>
                    </div>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </>
    );
}

export default SecondSection;
