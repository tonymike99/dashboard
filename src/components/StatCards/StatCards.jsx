import "./StatCards.css";
import { StatCard } from "../index";

function StatCards() {
  return (
    <div className="stat-cards">
      <StatCard
        backgroundColor={"white"}
        textColor={"black"}
        icon={"fa-solid fa-table-cells-large"}
        iconColor={"#ddd"}
        title={"5"}
        subtitle={"Total Projects"}
      />
      <StatCard
        backgroundColor={"white"}
        textColor={"black"}
        icon={"fa-regular fa-circle-check"}
        iconColor={"#ddd"}
        title={"1"}
        subtitle={"Completed"}
      />
      <StatCard
        backgroundColor={"white"}
        textColor={"black"}
        icon={"fa-solid fa-rotate"}
        iconColor={"#ddd"}
        title={"3"}
        subtitle={"Ongoing"}
      />
      <StatCard
        backgroundColor={"#ff748c"}
        textColor={"white"}
        icon={"fa-solid fa-triangle-exclamation"}
        iconColor={"red"}
        title={"1"}
        subtitle={"Delayed"}
      />
      <StatCard
        backgroundColor={"white"}
        textColor={"black"}
        icon={"fa-solid fa-user-group"}
        iconColor={"#ddd"}
        title={"5"}
        subtitle={"Employees"}
      />
    </div>
  );
}

export default StatCards;
