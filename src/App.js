import "./App.css";
import {
  Header,
  SmallStatCards,
  Charts,
  BudgetStatusCards,
} from "./components/index";

function App() {
  return (
    <>
      <Header />
      <SmallStatCards />
      <Charts />
      <BudgetStatusCards />
    </>
  );
}

export default App;
