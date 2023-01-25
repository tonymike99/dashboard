import "./SmallStatCards.css";
import { SmallStatCard } from "../index";

function SmallStatCards() {
  return (
    <div className="small-stat-cards">
      <SmallStatCard
        backgroundColor={"white"}
        textColor={"black"}
        icon={"fa-solid fa-table-cells-large"}
        iconColor={"#ddd"}
        title={"5"}
        subtitle={"Total Projects"}
      />
      <SmallStatCard
        backgroundColor={"white"}
        textColor={"black"}
        icon={"fa-regular fa-circle-check"}
        iconColor={"#ddd"}
        title={"1"}
        subtitle={"Completed"}
      />
      <SmallStatCard
        backgroundColor={"white"}
        textColor={"black"}
        icon={"fa-solid fa-rotate"}
        iconColor={"#ddd"}
        title={"3"}
        subtitle={"Ongoing"}
      />
      <SmallStatCard
        backgroundColor={"#ff748c"}
        textColor={"white"}
        icon={"fa-solid fa-triangle-exclamation"}
        iconColor={"red"}
        title={"1"}
        subtitle={"Delayed"}
      />
      <SmallStatCard
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

export default SmallStatCards;
