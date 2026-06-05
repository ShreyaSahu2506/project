import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  FaBoxOpen,
  FaSearch,
  FaTruck,
  FaHospital,
  FaBook,
  FaCheckCircle,
} from "react-icons/fa";

function Resources() {
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

          {/* Header */}

          <div
            className="p-5 rounded-4 text-white shadow-lg mb-5"
            style={{
              background:
                "linear-gradient(135deg,#0f766e,#14b8a6)",
            }}
          >
            <h1 className="fw-bold">
              Resource Management
            </h1>

            <p className="mb-0">
              Track, manage and distribute NGO
              resources efficiently.
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
                  placeholder="Search Resources..."
                />

              </div>

            </div>
          </div>

          {/* Statistics */}

          <div className="row g-4 mb-5">

            <div className="col-md-3">
              <div className="card border-0 shadow-lg">
                <div className="card-body text-center">
                  <FaBoxOpen
                    size={40}
                    className="text-primary mb-3"
                  />
                  <h2>150</h2>
                  <p>Total Resources</p>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card border-0 shadow-lg">
                <div className="card-body text-center">
                  <FaTruck
                    size={40}
                    className="text-success mb-3"
                  />
                  <h2>45</h2>
                  <p>Transport Units</p>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card border-0 shadow-lg">
                <div className="card-body text-center">
                  <FaHospital
                    size={40}
                    className="text-danger mb-3"
                  />
                  <h2>60</h2>
                  <p>Medical Kits</p>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card border-0 shadow-lg">
                <div className="card-body text-center">
                  <FaBook
                    size={40}
                    className="text-warning mb-3"
                  />
                  <h2>120</h2>
                  <p>Education Kits</p>
                </div>
              </div>
            </div>

          </div>

          {/* Resource Cards */}

          <div className="row g-4">

            <div className="col-md-4">
              <div className="card border-0 shadow-lg h-100">
                <div className="card-body">

                  <h4>
                    Medical Supplies
                  </h4>

                  <p>
                    First aid kits, medicines,
                    emergency health equipment.
                  </p>

                  <span className="badge bg-success">
                    Available
                  </span>

                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card border-0 shadow-lg h-100">
                <div className="card-body">

                  <h4>
                    Food Packages
                  </h4>

                  <p>
                    Emergency food relief kits
                    ready for distribution.
                  </p>

                  <span className="badge bg-success">
                    Available
                  </span>

                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card border-0 shadow-lg h-100">
                <div className="card-body">

                  <h4>
                    Educational Materials
                  </h4>

                  <p>
                    Books, notebooks and learning
                    resources for students.
                  </p>

                  <span className="badge bg-success">
                    Available
                  </span>

                </div>
              </div>
            </div>

          </div>

          {/* Recent Distribution */}

          <div className="card border-0 shadow-lg mt-5">
            <div className="card-body">

              <h3 className="mb-4">
                Recent Resource Distribution
              </h3>

              <ul className="list-group">

                <li className="list-group-item">
                  <FaCheckCircle className="text-success me-2" />
                  50 Food Kits delivered to Lucknow
                </li>

                <li className="list-group-item">
                  <FaCheckCircle className="text-success me-2" />
                  25 Medical Kits delivered to Kanpur
                </li>

                <li className="list-group-item">
                  <FaCheckCircle className="text-success me-2" />
                  100 Books distributed in Varanasi
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

export default Resources;