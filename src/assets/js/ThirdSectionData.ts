//Image Imports
import Sand from "../../assets/sand.jpg"


interface TsDataItem {
    id: number;
    image: string;
    text: string;
    alt: string;
}

const tsdata: TsDataItem[] = [
    {
        id: 1,
        image: Sand,
        text: "I have a passion for surfing and exploring the ocean, and being outdoors is always a great experience for me. I also enjoy working with my hands, constantly seeking new ways to express my creativity. Technology fascinates me as well—it's incredible how quickly it's advancing, and it never ceases to amaze me.",
        alt: ""
    }
]


export default tsdata;