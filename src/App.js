import "./App.css";
import {
  Header,
  StatCards,
  Charts,
  BudgetStatusHeader,
  BudgetStatusCards,
  TeamMood,
} from "./components/index";

function App() {
  return (
    <>
      <Header />
      <div className="section-1">
        <div>
          <StatCards />
          <Charts />
        </div>
        <TeamMood />
      </div>
      <div className="section-2">
        <BudgetStatusHeader />
        <BudgetStatusCards />
      </div>
    </>
  );
}

export default App;
