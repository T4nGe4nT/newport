// Image Imports
import Cumulu from "../projects/CumuluCast.png";
import Repay from "../projects/repaydemo.gif";
import ToDo from "../projects/ToDoList.png";
import Resto from "../projects/Restro.png";

// Define the Type for Data Items
export interface SsDataItem {
    id: number;
    image: string;
    text: string;
    alt: string;
}

// Define the Data Array
const ssData: SsDataItem[] = [
    {
        id: 1,
        image: Repay,
        text: "Repay - A payment demo project.",
        alt: "Repay Project Demo",
    },
    {
        id: 2,
        image: Cumulu,
        text: "CumuluCast - A weather forecasting app.",
        alt: "CumuluCast Project",
    },
    {
        id: 3,
        image: ToDo,
        text: "ToDoList - An intuitive task management tool.",
        alt: "ToDo List Project",
    },
    {
        id: 4,
        image: Resto,
        text: "Restro - A restaurant management system.",
        alt: "Restro Project",
    },
];

export default ssData;

export class ssDataItem {
    image: string | undefined;
    id: React.Key | null | undefined;
}