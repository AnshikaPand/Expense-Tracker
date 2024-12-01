import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import "../index.css";

// Register required Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ expenses }) => {
  // Aggregate the data by expense category
  const categoryTotals = expenses.reduce((acc, expense) => {
    acc[expense.name] = (acc[expense.name] || 0) + expense.amount;
    return acc;
  }, {});

  // Prepare data for the Pie Chart
  const labels = Object.keys(categoryTotals); 
  const data = Object.values(categoryTotals); 

  // Chart.js configuration
  const chartData = {
    labels: labels,
    datasets: [
      {
      
        data: data,
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (

    <div className="pie-chart">
      
      <Pie data={chartData} />
    </div>
  );
};

export default PieChart;
