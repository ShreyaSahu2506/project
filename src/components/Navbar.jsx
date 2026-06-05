import { Link } from "react-router-dom";
import { FaHandsHelping } from "react-icons/fa";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark sticky-top"
      style={{
        background: "rgba(15,118,110,0.95)",
        backdropFilter: "blur(12px)",
        boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
      }}
    >
      <div className="container">

        {/* Logo */}

        <Link
          className="navbar-brand fw-bold d-flex align-items-center"
          to="/"
        >
          <FaHandsHelping
            className="me-2"
            size={28}
          />

          <span
            style={{
              letterSpacing: "1px",
              fontSize: "1.7rem",
            }}
          >
            SAMANVAY
          </span>
        </Link>

        {/* Mobile Toggle */}

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}

        <div
          className="collapse navbar-collapse"
          id="navbarNav"
        >
          <ul className="navbar-nav mx-auto">

            <li className="nav-item">
              <Link className="nav-link px-3" to="/">
                Overview
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link px-3" to="/dashboard">
                Dashboard
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link px-3" to="/resources">
                Resources
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link px-3" to="/volunteers">
                Volunteers
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link px-3" to="/events">
                Events
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link px-3" to="/funds">
                Funds
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link px-3" to="/partners">
                Partners
              </Link>
            </li>

          </ul>

          {/* Right Side Buttons */}

          <div className="d-flex">

            <Link
              to="/login"
              className="btn btn-outline-light me-2"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="btn btn-warning fw-bold"
            >
              Get Started
            </Link>

          </div>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;