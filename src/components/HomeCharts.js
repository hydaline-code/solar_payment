import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the required components for ChartJS
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Create the CustomChart component
const TraficChart = ({ title, chartData }) => {
  return (
    <div className="chart-container">
      <h2>{title}</h2>
      <Bar data={chartData} />
    </div>
  );
};

export default TraficChart;
