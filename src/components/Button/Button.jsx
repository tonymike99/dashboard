import "./Button.css";

function Button({ icon, title, isOutlined }) {
  return (
    <button
      className={isOutlined ? "button button-outlined" : "button button-solid"}
    >
      <span>
        <i className={`${icon}`}></i>
      </span>
      {"  " + title}
    </button>
  );
}

export default Button;
