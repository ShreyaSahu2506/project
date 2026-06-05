import { Link } from "react-router-dom";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaHeart,
} from "react-icons/fa";

function Footer() {
  return (
    <footer
      className="text-white mt-5"
      style={{
        background:
          "linear-gradient(135deg,#0b4f4a,#0f766e)",
      }}
    >
      <div className="container py-5">

        <div className="row g-5">

          {/* Brand Section */}

          <div className="col-lg-4">

            <h2 className="fw-bold mb-3">
              SAMANVAY
            </h2>

            <p className="text-light">
              A unified NGO coordination platform
              connecting volunteers, donors,
              NGOs and resources to maximize
              social impact.
            </p>

            <div className="d-flex gap-3 mt-4">

              <a
                href="#"
                className="text-white fs-4"
              >
                <FaGithub />
              </a>

              <a
                href="#"
                className="text-white fs-4"
              >
                <FaLinkedin />
              </a>

              <a
                href="#"
                className="text-white fs-4"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="text-white fs-4"
              >
                <FaEnvelope />
              </a>

            </div>

          </div>

          {/* Quick Links */}

          <div className="col-lg-4">

            <h4 className="mb-4">
              Quick Links
            </h4>

            <ul className="list-unstyled">

              <li className="mb-2">
                <Link
                  to="/"
                  className="text-white text-decoration-none"
                >
                  Overview
                </Link>
              </li>

              <li className="mb-2">
                <Link
                  to="/dashboard"
                  className="text-white text-decoration-none"
                >
                  Dashboard
                </Link>
              </li>

              <li className="mb-2">
                <Link
                  to="/resources"
                  className="text-white text-decoration-none"
                >
                  Resources
                </Link>
              </li>

              <li className="mb-2">
                <Link
                  to="/volunteers"
                  className="text-white text-decoration-none"
                >
                  Volunteers
                </Link>
              </li>

              <li className="mb-2">
                <Link
                  to="/events"
                  className="text-white text-decoration-none"
                >
                  Events
                </Link>
              </li>

              <li className="mb-2">
                <Link
                  to="/funds"
                  className="text-white text-decoration-none"
                >
                  Funds
                </Link>
              </li>

              <li className="mb-2">
                <Link
                  to="/partners"
                  className="text-white text-decoration-none"
                >
                  Partners
                </Link>
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div className="col-lg-4">

            <h4 className="mb-4">
              Contact Us
            </h4>

            <p>
              📧 support@samanvay.org
            </p>

            <p>
              📞 +91 9876543210
            </p>

            <p>
              📍 Lucknow, Uttar Pradesh, India
            </p>

            <div
              className="mt-4 p-3 rounded"
              style={{
                background:
                  "rgba(255,255,255,0.1)",
              }}
            >
              <strong>
                NGO Coordination System
              </strong>

              <br />

              Connecting People,
              Resources & Impact.
            </div>

          </div>

        </div>

        <hr
          className="my-4"
          style={{
            borderColor:
              "rgba(255,255,255,0.3)",
          }}
        />

        <div className="row align-items-center">

          <div className="col-md-6">

            <p className="mb-0">
              © 2026 SAMANVAY.
              All Rights Reserved.
            </p>

          </div>

          <div className="col-md-6 text-md-end mt-3 mt-md-0">

            <p className="mb-0">
              Made with{" "}
              <FaHeart
                className="text-danger"
              />{" "}
              for Social Impact
            </p>

          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;