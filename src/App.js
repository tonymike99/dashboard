import "./App.css";
import {
  Header,
  SmallStatCards,
  BudgetChart,
  LineChart,
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
    </>
  );
}

export default App;
