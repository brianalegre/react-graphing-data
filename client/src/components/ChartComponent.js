// Import
import React, { useState, useEffect } from 'react'
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


export default function ChartComponent() {


    // useState to store data from API
    const [cdmData, setCdmData] = useState([]);

    // fetch data
    useEffect(() => {
        fetch('http://localhost:3001/api/cdmapi')
            .then((response) => response.json())
            .then((data) => {
                console.log('cdmapi', data)
                // Stringify data
                // Set data
                setCdmData(data)
            })
            .catch((err) => {
                console.log(err.message)
            })
    }, []);




    // const data = cdmData.map((item) => (
    //     <tbody key={item.system_id} className="bg-white divide-y divide-gray-200 text-center">
    //         <tr>
    //             <td className="px-6 py-4 whitespace-nowrap">
    //                 {item}
    //             </td>
    //         </tr>
    //     </tbody >
    // ))

    // Extract data for the chart
    const sequentialReadData_1MiB_Q8_T1 = cdmData.map((item) => item.Sequential_Read_1MiB_Q8_T1);
    const sequentialReadData_1MiB_Q1_T1 = cdmData.map((item) => item.Sequential_Write_1MiB_Q1_T1);
    const sequentialWrite_1MiB_Q8_T1 = cdmData.map((item) => item.Sequential_Write_1MiB_Q8_T1);
    const sequentialWrite_1MiB_Q1_T1 = cdmData.map((item) => item.Sequential_Write_1MiB_Q1_T1);

    // Process the data for the chart
    const chartData = {
        labels: cdmData.map((_, index) => `Test ${index + 1}`),
        datasets: [
            {
                label: 'Sequential_Read_1MiB_Q8_T1',
                data: sequentialReadData_1MiB_Q8_T1,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
            },
            {
                label: 'Sequential_Read_1MiB_Q1_T1',
                data: sequentialReadData_1MiB_Q1_T1,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 2,
            },
            {
                label: 'Sequential_Write_1MiB_Q8_T1',
                data: sequentialWrite_1MiB_Q8_T1,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 2,
            },
            {
                label: 'Sequential_Write_1MiB_Q1_T1',
                data: sequentialWrite_1MiB_Q1_T1,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 2,
            },
        ],
    };

    return (
        <div>
            <h1>Chart Example</h1>
            <Bar data={chartData} />
        </div>
    );
};