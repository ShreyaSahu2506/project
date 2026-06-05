import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  FaCalendarAlt,
  FaUsers,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaClock,
  FaSearch,
} from "react-icons/fa";

function Events() {
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
              Event Management
            </h1>

            <p className="mb-0">
              Plan, organize and monitor NGO events
              and community programs efficiently.
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
                  placeholder="Search Events..."
                />

              </div>
            </div>
          </div>

          {/* Statistics */}

          <div className="row g-4 mb-5">

            <div className="col-md-3">
              <div className="card border-0 shadow-lg">
                <div className="card-body text-center">
                  <FaCalendarAlt
                    size={40}
                    className="text-primary mb-3"
                  />
                  <h2>28</h2>
                  <p>Total Events</p>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card border-0 shadow-lg">
                <div className="card-body text-center">
                  <FaClock
                    size={40}
                    className="text-warning mb-3"
                  />
                  <h2>8</h2>
                  <p>Upcoming Events</p>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card border-0 shadow-lg">
                <div className="card-body text-center">
                  <FaCheckCircle
                    size={40}
                    className="text-success mb-3"
                  />
                  <h2>20</h2>
                  <p>Completed Events</p>
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
                  <h2>1250</h2>
                  <p>Total Participants</p>
                </div>
              </div>
            </div>

          </div>

          {/* Event Cards */}

          <div className="row g-4">

            <div className="col-lg-4">
              <div className="card border-0 shadow-lg h-100">
                <div className="card-body">

                  <h4>
                    Blood Donation Camp
                  </h4>

                  <p className="text-muted">
                    Community Health Initiative
                  </p>

                  <p>
                    <FaMapMarkerAlt className="me-2" />
                    Lucknow
                  </p>

                  <p>
                    <FaUsers className="me-2" />
                    150 Participants
                  </p>

                  <span className="badge bg-warning text-dark">
                    Upcoming
                  </span>

                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card border-0 shadow-lg h-100">
                <div className="card-body">

                  <h4>
                    Education Drive
                  </h4>

                  <p className="text-muted">
                    School Support Program
                  </p>

                  <p>
                    <FaMapMarkerAlt className="me-2" />
                    Kanpur
                  </p>

                  <p>
                    <FaUsers className="me-2" />
                    220 Participants
                  </p>

                  <span className="badge bg-success">
                    Completed
                  </span>

                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card border-0 shadow-lg h-100">
                <div className="card-body">

                  <h4>
                    Women Empowerment Workshop
                  </h4>

                  <p className="text-muted">
                    Skill Development Program
                  </p>

                  <p>
                    <FaMapMarkerAlt className="me-2" />
                    Varanasi
                  </p>

                  <p>
                    <FaUsers className="me-2" />
                    180 Participants
                  </p>

                  <span className="badge bg-primary">
                    Registration Open
                  </span>

                </div>
              </div>
            </div>

          </div>

          {/* Event Timeline */}

          <div className="card border-0 shadow-lg mt-5">
            <div className="card-body">

              <h3 className="mb-4">
                Upcoming Schedule
              </h3>

              <ul className="list-group">

                <li className="list-group-item">
                  📅 12 Aug - Blood Donation Camp
                </li>

                <li className="list-group-item">
                  📅 18 Aug - Healthcare Awareness Drive
                </li>

                <li className="list-group-item">
                  📅 24 Aug - Education Support Program
                </li>

                <li className="list-group-item">
                  📅 30 Aug - Women Empowerment Workshop
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

export default Events;