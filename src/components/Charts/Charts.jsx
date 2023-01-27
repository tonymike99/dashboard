import "./Charts.css";
import { BudgetChart, LineChart } from "../index";

function Charts() {
  return (
    <div className="charts">
      <LineChart />
      <BudgetChart />
    </div>
  );
}

export default Charts;
