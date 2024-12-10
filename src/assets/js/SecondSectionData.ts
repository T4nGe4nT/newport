// Image Imports
import Cumulu from "../projects/cumuluCastani.gif";
import Repay from "../projects/repaydemo.gif";
import ToDo from "../projects/ToDoani.gif";


// Define the Type for Data Items
export interface SsDataItem {
    id: number;
    title: string;
    image: string;
    text: string;
    alt: string;
}

// Define the Data Array
const ssData: SsDataItem[] = [
    {
        id: 1,
        title: "ReP4y",
        image: Repay,
        text: "Repay - A payment demo project.",
        alt: "Repay Project Demo",
    },
    {
        id: 2,
        title: "CumuluCast",
        image: Cumulu,
        text: "CumuluCast - A weather forecasting app.",
        alt: "CumuluCast Project",
    },
    {
        id: 3,
        title: "To-Do List",
        image: ToDo,
        text: "ToDoList - An intuitive task management tool.",
        alt: "ToDo List Project",
    },

];

export default ssData;

export class ssDataItem {
    image: string | undefined;
    id: React.Key | null | undefined;
}