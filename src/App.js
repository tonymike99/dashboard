import "./App.css";
import {
  Header,
  SmallStatCards,
  BudgetChart,
  LineChart,
  BudgetStatusCards,
} from "./components/index";

function App() {
  return (
    <>
      <Header />
      <SmallStatCards />
      <div className="charts">
        <LineChart />
        <BudgetChart />
      </div>
      <BudgetStatusCards />
    </>
  );
}

export default App;
