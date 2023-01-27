import "./Chart.css";
import React from "react";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

function LineChart() {
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const labels = [
    "19 June",
    "20 June",
    "21 June",
    "22 June",
    "23 June",
    "24 June",
    "25 June",
    "",
  ];

  const data = {
    labels,
    datasets: [
      {
        fill: false,
        label: "Total Revenue",
        data: [0, 1000, 3300, 3200, 4100, 5250, 6200, 6200],
        borderColor: "red",
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="chart line-chart">
      <div className="chart-header">
        <span>Total Revenue</span>
        <div>
          <span className="gray">Month</span>
          <input
            type="range"
            name="range-slider"
            id="range-slider"
            min="1"
            max="100"
            value="100"
            className="range-slider"
          />
          <span>Week</span>
        </div>
      </div>
      <Line options={options} data={data} />
    </div>
  );
}

export default LineChart;
