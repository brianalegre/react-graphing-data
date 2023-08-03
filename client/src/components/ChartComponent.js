import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


export default function ChartComponent({ cdmData }) {

    // const data = cdmData.map((item) => (
    //     <div>
    //         <p>{item}</p>
    //     </div>
    // ))

    const inventoryData = cdmData.map((item) => (
        <tbody key={item.system_id} className="bg-white divide-y divide-gray-200 text-center">
            <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                    {item}
                </td>
            </tr>
        </tbody >
    ))

    return (
        <div>
            {/* {data} */}
            {inventoryData}
        </div>
    )

}