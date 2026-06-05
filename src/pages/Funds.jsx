import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  FaRupeeSign,
  FaDonate,
  FaWallet,
  FaChartLine,
  FaArrowUp,
  FaArrowDown,
} from "react-icons/fa";

function Funds() {
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
              Funds Management
            </h1>

            <p className="mb-0">
              Track donations, expenses and fund allocation
              across all NGO activities.
            </p>
          </div>

          {/* Statistics */}

          <div className="row g-4 mb-5">

            <div className="col-md-3">
              <div className="card border-0 shadow-lg">
                <div className="card-body text-center">

                  <FaDonate
                    size={40}
                    className="text-success mb-3"
                  />

                  <h2>₹5.6 Cr</h2>

                  <p>Total Donations</p>

                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card border-0 shadow-lg">
                <div className="card-body text-center">

                  <FaWallet
                    size={40}
                    className="text-primary mb-3"
                  />

                  <h2>₹3.2 Cr</h2>

                  <p>Available Balance</p>

                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card border-0 shadow-lg">
                <div className="card-body text-center">

                  <FaChartLine
                    size={40}
                    className="text-warning mb-3"
                  />

                  <h2>₹2.4 Cr</h2>

                  <p>Funds Utilized</p>

                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card border-0 shadow-lg">
                <div className="card-body text-center">

                  <FaRupeeSign
                    size={40}
                    className="text-danger mb-3"
                  />

                  <h2>450</h2>

                  <p>Total Donors</p>

                </div>
              </div>
            </div>

          </div>

          {/* Fund Allocation */}

          <div className="card border-0 shadow-lg mb-5">
            <div className="card-body">

              <h3 className="mb-4">
                Fund Allocation
              </h3>

              <div className="mb-4">

                <label className="fw-bold">
                  Healthcare (35%)
                </label>

                <div className="progress">
                  <div
                    className="progress-bar bg-danger"
                    style={{ width: "35%" }}
                  ></div>
                </div>

              </div>

              <div className="mb-4">

                <label className="fw-bold">
                  Education (25%)
                </label>

                <div className="progress">
                  <div
                    className="progress-bar bg-primary"
                    style={{ width: "25%" }}
                  ></div>
                </div>

              </div>

              <div className="mb-4">

                <label className="fw-bold">
                  Food Relief (20%)
                </label>

                <div className="progress">
                  <div
                    className="progress-bar bg-success"
                    style={{ width: "20%" }}
                  ></div>
                </div>

              </div>

              <div>

                <label className="fw-bold">
                  Emergency Support (20%)
                </label>

                <div className="progress">
                  <div
                    className="progress-bar bg-warning"
                    style={{ width: "20%" }}
                  ></div>
                </div>

              </div>

            </div>
          </div>

          {/* Recent Transactions */}

          <div className="card border-0 shadow-lg">
            <div className="card-body">

              <h3 className="mb-4">
                Recent Transactions
              </h3>

              <ul className="list-group">

                <li className="list-group-item d-flex justify-content-between">

                  <span>
                    <FaArrowUp className="text-success me-2" />
                    Donation Received
                  </span>

                  <strong className="text-success">
                    + ₹50,000
                  </strong>

                </li>

                <li className="list-group-item d-flex justify-content-between">

                  <span>
                    <FaArrowDown className="text-danger me-2" />
                    Medical Supplies Purchase
                  </span>

                  <strong className="text-danger">
                    - ₹20,000
                  </strong>

                </li>

                <li className="list-group-item d-flex justify-content-between">

                  <span>
                    <FaArrowUp className="text-success me-2" />
                    Corporate Donation
                  </span>

                  <strong className="text-success">
                    + ₹1,00,000
                  </strong>

                </li>

                <li className="list-group-item d-flex justify-content-between">

                  <span>
                    <FaArrowDown className="text-danger me-2" />
                    Education Program Funding
                  </span>

                  <strong className="text-danger">
                    - ₹35,000
                  </strong>

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

export default Funds;