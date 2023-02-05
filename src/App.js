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
      <StatCards />
      <Charts />
      <BudgetStatusHeader />
      <BudgetStatusCards />
      <TeamMood />
    </>
  );
}

export default App;
