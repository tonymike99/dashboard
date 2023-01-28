import "./BudgetStatusHeader.css";
import { Button } from "../index";

function BudgetStatusHeader() {
  return (
    <div className="budget-status-header">
      <span className="budget-status-title">Budget status</span>

      <Button
        icon={"fa-solid fa-plus"}
        title={"Add New Project"}
        isOutlined={false}
      />
      <Button
        icon={"fa-solid fa-download"}
        title={"Download report"}
        isOutlined={true}
      />
      <Button
        icon={"fa-regular fa-calendar"}
        title={"dd/mm/yyyy - dd/mm/yyyy"}
        isOutlined={true}
      />
      <Button icon={"fa-solid fa-filter"} title={"Filter"} isOutlined={true} />
    </div>
  );
}

export default BudgetStatusHeader;
