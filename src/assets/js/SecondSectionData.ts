//Image Imports
import Cumulu from "../projects/CumuluCast.png"
import Repay from "../projects/repaydemo.gif"
import ToDo from"../projects/ToDoList.png"
import Resto from "../projects/Restro.png"

interface SsDataItem {
    id: number,
    image: string,
    text: string,
    alt: string,
}


const ssData: SsDataItem[] =[
    {
        id: 1,
        image: Repay,
        text: "",
        alt: "",
    },
    {
        id: 2,
        image: Cumulu,
        text: "",
        alt: "",
    },
    {
        id: 3,
        image: ToDo,
        text: "",
        alt: "",
    },
    {
        id: 4,
        image: Resto,
        text: "",
        alt: "",
    }

]

export default ssData;