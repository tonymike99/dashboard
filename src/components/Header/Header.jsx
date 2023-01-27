import "./Header.css";

function Header() {
  return (
    <header className="header">
      <span className="app-name">HOURS</span>
      <nav className="navbar">
        <a href="/">Dashboard</a>
        <a href="/">Projects</a>
        <a href="/">Team</a>
        <a href="/">Clients</a>
        <a href="/">Time</a>
        <a href="/">Reports</a>
      </nav>
      <div className="settings">
        <span>
          <i className="fa-regular fa-bell fa-2x"></i>
        </span>
        <img
          className="display-picture"
          src="https://i.pravatar.cc/35?img=1"
          alt="woman"
        />
        <span>Mario</span>
        <span>
          <i className="fa-solid fa-chevron-down fa-lg"></i>
        </span>
      </div>
    </header>
  );
}

export default Header;
