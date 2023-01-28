import "./App.css";
import {
  Header,
  SmallStatCards,
  Charts,
  BudgetStatusHeader,
  BudgetStatusCards,
} from "./components/index";

function App() {
  return (
    <>
      <Header />
      <SmallStatCards />
      <Charts />
      <BudgetStatusHeader />
      <BudgetStatusCards />
    </>
  );
}

export default App;
