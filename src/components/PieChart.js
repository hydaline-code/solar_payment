import React from "react";
import {Chart, Pie} from "react-chartjs-2"
import { Chart as ChartJs, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from 'chartjs-plugin-datalabels'; 

ChartJs .register(ArcElement, Tooltip, Legend, ChartDataLabels);

const PieChart = ({ chartData }) => {

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      datalabels: {
        color: '#000', // Label color
        formatter: (value) => `${value}%`, // Format the label to show percentage
        anchor: 'end', // Position of the label
        align: 'start',
        offset: -10, // Distance of the label from the segment
        font: {
          weight: 'bold',
        },
      },
      legend: {
        display: true,
        position: 'right',
      },
    },
  };

  
  return (
    <div className="pie-chart-container">
      <Pie data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />
    </div>
  );
};

export default PieChart;