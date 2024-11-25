//Image imports
import Nich from "../../assets/nich.gif"


interface FsDataItem {
    id: number;
    image: string;
    text: string;
    alt: string;
}

 const fsData: FsDataItem[]  = [
    {
        id: 1,
        image: Nich,
        text: "From the surfboard factory to the tech office space, I like to spend my time working on the things that spark my passions. Creating and exploring as many areas of the world as I can find. Always striving to problem solve, and never afraid of a challenge. Let me share a bit of myself with you. Browse through some of my favorite works and interests. Let me know what you think.",
        alt: "Picture of Nick"
    },
];

export default fsData;