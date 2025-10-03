import { Link } from "react-router-dom";
import Logo from "./IYNS_lgo.png";
import "./navbar.css";

function Navbar() {
  return (
    <div className="container-fluid" id="navbar">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" id="logo">
            <img
              src={Logo}
              alt="Logo"
              className="align-text-top"
              style={{ width: "77px", height: "90px" }}
            />
          </Link>

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
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">Exclusive</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">Activities</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">Events</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
            </ul>
            <Link to="/membership">
              <button className="btn btn-primary" id="member-button">
                Become a Member
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
