import Logo from "./IYNS_lgo.png";
import "./navbar.css";

function Navbar() {
  return (
    <div className="container-fluid" id="navbar">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#hero_section" id="logo">
            <img
              src={Logo}
              alt="Logo"
              className="align-text-top"
              style={{ width: "77px", height: "90px" }}
            />
          </a>

          {/* Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsible Nav Items */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">Home</li>
              <li className="nav-item">About Us</li>
              <li className="nav-item">Exclusive</li>
              <li className="nav-item">Activities</li>
              <li className="nav-item">Events</li>
              <li className="nav-item">Contact</li>
            </ul>
            <button className="btn btn-primary" id="member-button">
              Become a Member
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
