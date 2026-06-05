import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  FaUsers,
  FaSearch,
  FaUserCheck,
  FaUserClock,
  FaAward,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Volunteers() {
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
              Volunteer Management
            </h1>

            <p className="mb-0">
              Manage, monitor and coordinate volunteers
              across different NGO activities.
            </p>
          </div>

          {/* Search */}

          <div className="card border-0 shadow-lg mb-5">
            <div className="card-body">
              <div className="input-group">

                <span className="input-group-text">
                  <FaSearch />
                </span>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Volunteers..."
                />

              </div>
            </div>
          </div>

          {/* Statistics */}

          <div className="row g-4 mb-5">

            <div className="col-md-3">
              <div className="card border-0 shadow-lg">
                <div className="card-body text-center">
                  <FaUsers
                    size={40}
                    className="text-primary mb-3"
                  />
                  <h2>320</h2>
                  <p>Total Volunteers</p>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card border-0 shadow-lg">
                <div className="card-body text-center">
                  <FaUserCheck
                    size={40}
                    className="text-success mb-3"
                  />
                  <h2>280</h2>
                  <p>Active Volunteers</p>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card border-0 shadow-lg">
                <div className="card-body text-center">
                  <FaUserClock
                    size={40}
                    className="text-warning mb-3"
                  />
                  <h2>40</h2>
                  <p>Pending Approval</p>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card border-0 shadow-lg">
                <div className="card-body text-center">
                  <FaAward
                    size={40}
                    className="text-danger mb-3"
                  />
                  <h2>15</h2>
                  <p>Team Leaders</p>
                </div>
              </div>
            </div>

          </div>

          {/* Volunteer Cards */}

          <div className="row g-4">

            <div className="col-lg-4">
              <div className="card border-0 shadow-lg h-100">
                <div className="card-body">

                  <h4>Rahul Sharma</h4>

                  <p className="text-muted">
                    Field Coordinator
                  </p>

                  <p>
                    <FaMapMarkerAlt className="me-2" />
                    Lucknow
                  </p>

                  <span className="badge bg-success me-2">
                    Active
                  </span>

                  <span className="badge bg-primary">
                    Leadership
                  </span>

                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card border-0 shadow-lg h-100">
                <div className="card-body">

                  <h4>Priya Singh</h4>

                  <p className="text-muted">
                    Medical Volunteer
                  </p>

                  <p>
                    <FaMapMarkerAlt className="me-2" />
                    Kanpur
                  </p>

                  <span className="badge bg-success me-2">
                    Active
                  </span>

                  <span className="badge bg-danger">
                    Healthcare
                  </span>

                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card border-0 shadow-lg h-100">
                <div className="card-body">

                  <h4>Amit Verma</h4>

                  <p className="text-muted">
                    Education Volunteer
                  </p>

                  <p>
                    <FaMapMarkerAlt className="me-2" />
                    Varanasi
                  </p>

                  <span className="badge bg-success me-2">
                    Active
                  </span>

                  <span className="badge bg-warning text-dark">
                    Education
                  </span>

                </div>
              </div>
            </div>

          </div>

          {/* Recent Activities */}

          <div className="card border-0 shadow-lg mt-5">
            <div className="card-body">

              <h3 className="mb-4">
                Recent Volunteer Activities
              </h3>

              <ul className="list-group">

                <li className="list-group-item">
                  ✅ Rahul Sharma completed Food Drive
                </li>

                <li className="list-group-item">
                  ✅ Priya Singh joined Medical Camp
                </li>

                <li className="list-group-item">
                  ✅ Amit Verma organized Education Workshop
                </li>

                <li className="list-group-item">
                  ✅ 12 New Volunteers Registered
                </li>

              </ul>

            </div>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default Volunteers;