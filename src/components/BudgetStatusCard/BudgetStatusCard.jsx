import "./BudgetStatusCard.css";

function BudgetStatusCard({
  title,
  subtitle,
  totalBudget,
  profitability,
  actualHours,
  soldHours,
}) {
  return (
    <div className="budget-status-card">
      <div>
        <div className="text-medium bold">{title}</div>
        <div className="text-small gray">{subtitle}</div>
        <img
          className="budget-status-picture top-right-badge"
          src="https://i.pravatar.cc/35?img=10"
          alt="woman"
        />
      </div>

      <div>
        <div className="light-gray">
          Total Budget <span className="gray">{totalBudget} €</span>
        </div>
        <div className="light-gray">
          Profitability (100%){" "}
          <span
            className={
              parseFloat(profitability.replace(/,/g, "")) < 0
                ? "red bold"
                : "gray"
            }
          >
            {profitability} €
          </span>
        </div>
      </div>

      <div
        className={
          parseFloat(profitability.replace(/,/g, "")) < 0
            ? "bg-red progress-value"
            : "bg-gray progress-value"
        }
      ></div>

      <div className="progress-value-text gray">
        <span>Actual hours: {actualHours}</span>
        {parseFloat(profitability.replace(/,/g, "")) < 0 ? (
          <span className={"red bold"}>
            {soldHours - actualHours} hours over Budget!
          </span>
        ) : (
          <span>{soldHours} sold hours</span>
        )}
      </div>
    </div>
  );
}

export default BudgetStatusCard;
