import React from "react";
import {Chart, Pie} from "react-chartjs-2"
import { Chart as ChartJs, ArcElement, Tooltip, Legend } from "chart.js";

ChartJs .register(ArcElement, Tooltip, Legend);

const PieChart = ({ chartData }) => {
  return (
    <div className="pie-chart-container">
      <Pie data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />
    </div>
  );
};

export default PieChart;