import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark sticky-top shadow"
      style={{
        background:
          "linear-gradient(135deg,#0f766e,#14b8a6)",
      }}
    >
      <div className="container">

        <Link
          className="navbar-brand fw-bold fs-2"
          to="/"
        >
          SAMANVAY
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto align-items-lg-center">

            <li className="nav-item">
              <Link className="nav-link" to="/">
                Overview
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">
                Dashboard
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/resources">
                Resources
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/volunteers">
                Volunteers
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/events">
                Events
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/funds">
                Funds
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/partners">
                Partners
              </Link>
            </li>

            <li className="nav-item ms-lg-3">
              <Link
                className="btn btn-light me-2"
                to="/login"
              >
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="btn btn-warning fw-bold"
                to="/register"
              >
                Register
              </Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;