import "./Chart.css";
import React from "react";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

Chart.register(ArcElement, Tooltip, Legend);

function BudgetChart() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          usePointStyle: true,
        },
      },
    },
  };

  const data = {
    labels: ["Under Budget", "On Budget", "Over Budget"],
    datasets: [
      {
        label: "Budget Percentage",
        data: [48, 33, 19],
        backgroundColor: [
          "rgba(40,219,197,255)",
          "rgba(127,138,204,255)",
          "rgba(211,6,29,255)",
        ],
      },
    ],
  };

  return (
    <div className="chart budget-chart">
      <div className="chart-header">
        <span>Budget</span>
        <div>
          <span className="gray">Profitability</span>
          <input
            type="range"
            name="range-slider"
            id="range-slider"
            min="1"
            max="100"
            value="100"
            className="range-slider"
          />
          <span>Status</span>
        </div>
      </div>
      <Doughnut options={options} data={data} />
    </div>
  );
}

export default BudgetChart;
