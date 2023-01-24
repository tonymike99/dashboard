import "./SmallStatCard.css";

function SmallStatCard({
  backgroundColor,
  textColor,
  icon,
  iconColor,
  title,
  subtitle,
}) {
  return (
    <div
      className="card"
      style={{ backgroundColor: backgroundColor, color: textColor }}
    >
      <span className="top-left-badge" style={{ color: iconColor }}>
        <i className={`${icon} fa-2x`}></i>
      </span>

      <span className="small-stat-card-title"> {title}</span>
      <span className="small-stat-card-subtitle">{subtitle}</span>
    </div>
  );
}

export default SmallStatCard;
