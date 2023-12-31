// Import
import React, { useState, useEffect } from 'react';
import ChartComponent from './components/ChartComponent';


// Main
function App() {

  // // useState to store data from API
  // const [cdmData, setCdmData] = useState([]);

  // // fetch data
  // useEffect(() => {
  //   fetch('http://localhost:3001/api/cdmapi')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log('cdmapi', data)
  //       // Stringify data
  //       const stringifyData = JSON.stringify(data)
  //       // Parse data
  //       const parseData = JSON.parse(stringifyData)

  //       // Set data

  //       setCdmData(parseData)
  //     })
  //     .catch((err) => {
  //       console.log(err.message)
  //     })
  // }, []);

  return (
    <div>
      <ChartComponent/>
    </div>
  )
}

// Export
export default App;


// import { Bar } from "react-chartjs-2";
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// const App = () => {
//   const data = {
//     labels: ["Item 1", "Item 2"],
//     datasets: [
//       {
//         label: "Item 1",
//         data: [82, 100],
//         borderColor: "black",
//         backgroundColor: "rgba(255, 99, 132, 0.5)",
//       },
//       {
//         label: "Item 2",
//         data: [40, 80],
//         borderColor: "black",
//         backgroundColor: "rgba(53, 162, 235, 0.5)",
//       },
//     ],
//   };
//   return (
//     <Bar
//       data={data}
//       options={{
//         responsive: true,
//       }}
//     />
//   );
// };

// // Export 
// export default App;
