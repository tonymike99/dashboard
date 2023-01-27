import "./BudgetStatusCards.css";
import { BudgetStatusCard } from "../index";
import budgetStatusData from "../../data/budgetStatusData";

function BudgetStatusCards() {
  return (
    <div className="budget-status-cards">
      {budgetStatusData.map(
        ({
          title,
          subtitle,
          totalBudget,
          profitability,
          actualHours,
          soldHours,
        }) => (
          <BudgetStatusCard
            title={title}
            subtitle={subtitle}
            totalBudget={totalBudget}
            profitability={profitability}
            actualHours={actualHours}
            soldHours={soldHours}
          />
        )
      )}
    </div>
  );
}

export default BudgetStatusCards;
