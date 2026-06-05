import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  FaHandshake,
  FaBuilding,
  FaGlobe,
  FaUsers,
  FaAward,
  FaCheckCircle,
} from "react-icons/fa";

function Partners() {
  return (
    <>
      <Navbar />

      <div
        className="container-fluid py-5"
        style={{
          background: "#f4f7fb",
          minHeight: "100vh",
        }}
      >
        <div className="container">

          {/* Hero Section */}

          <div
            className="p-5 rounded-4 text-white shadow-lg mb-5"
            style={{
              background:
                "linear-gradient(135deg,#0f766e,#14b8a6)",
            }}
          >
            <h1 className="fw-bold">
              Partnership Network
            </h1>

            <p className="mb-0">
              Collaborating with NGOs, corporations,
              institutions and volunteers to maximize impact.
            </p>
          </div>

          {/* Statistics */}

          <div className="row g-4 mb-5">

            <div className="col-md-3">
              <div className="card border-0 shadow-lg">
                <div className="card-body text-center">

                  <FaHandshake
                    size={40}
                    className="text-success mb-3"
                  />

                  <h2>48</h2>
                  <p>Active Partners</p>

                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card border-0 shadow-lg">
                <div className="card-body text-center">

                  <FaBuilding
                    size={40}
                    className="text-primary mb-3"
                  />

                  <h2>22</h2>
                  <p>Corporate Partners</p>

                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card border-0 shadow-lg">
                <div className="card-body text-center">

                  <FaGlobe
                    size={40}
                    className="text-warning mb-3"
                  />

                  <h2>12</h2>
                  <p>NGO Networks</p>

                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card border-0 shadow-lg">
                <div className="card-body text-center">

                  <FaUsers
                    size={40}
                    className="text-danger mb-3"
                  />

                  <h2>5000+</h2>
                  <p>People Impacted</p>

                </div>
              </div>
            </div>

          </div>

          {/* Partner Cards */}

          <div className="row g-4">

            <div className="col-lg-4">
              <div className="card border-0 shadow-lg h-100">
                <div className="card-body">

                  <h4>Healthcare Foundation</h4>

                  <p className="text-muted">
                    Medical Support Partner
                  </p>

                  <p>
                    Provides healthcare resources,
                    medical camps and emergency support.
                  </p>

                  <span className="badge bg-success">
                    Active Partner
                  </span>

                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card border-0 shadow-lg h-100">
                <div className="card-body">

                  <h4>Education First</h4>

                  <p className="text-muted">
                    Education Partner
                  </p>

                  <p>
                    Supports learning programs,
                    scholarships and digital education.
                  </p>

                  <span className="badge bg-primary">
                    Strategic Partner
                  </span>

                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card border-0 shadow-lg h-100">
                <div className="card-body">

                  <h4>Community Relief Trust</h4>

                  <p className="text-muted">
                    Disaster Relief Partner
                  </p>

                  <p>
                    Helps coordinate emergency response
                    and relief operations.
                  </p>

                  <span className="badge bg-warning text-dark">
                    Featured Partner
                  </span>

                </div>
              </div>
            </div>

          </div>

          {/* Achievements */}

          <div className="card border-0 shadow-lg mt-5">
            <div className="card-body">

              <h3 className="mb-4">
                Partnership Achievements
              </h3>

              <ul className="list-group">

                <li className="list-group-item">
                  <FaCheckCircle className="text-success me-2" />
                  5,000+ beneficiaries supported
                </li>

                <li className="list-group-item">
                  <FaCheckCircle className="text-success me-2" />
                  ₹10 Cr+ resources mobilized
                </li>

                <li className="list-group-item">
                  <FaCheckCircle className="text-success me-2" />
                  100+ collaborative events organized
                </li>

                <li className="list-group-item">
                  <FaCheckCircle className="text-success me-2" />
                  48 active organizations connected
                </li>

              </ul>

            </div>
          </div>

          {/* CTA */}

          <div
            className="text-center text-white p-5 rounded-4 shadow-lg mt-5"
            style={{
              background:
                "linear-gradient(135deg,#0f766e,#14b8a6)",
            }}
          >
            <FaAward size={50} className="mb-3" />

            <h2>
              Become a Partner
            </h2>

            <p>
              Join SAMANVAY and help create
              a stronger social impact network.
            </p>

            <button className="btn btn-light btn-lg">
              Partner With Us
            </button>

          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default Partners;