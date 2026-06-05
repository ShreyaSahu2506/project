import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  FaUsers,
  FaDonate,
  FaCalendarAlt,
  FaHandsHelping,
  FaArrowUp,
} from "react-icons/fa";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

function Dashboard() {
  const data = [
    { month: "Jan", funds: 120 },
    { month: "Feb", funds: 220 },
    { month: "Mar", funds: 180 },
    { month: "Apr", funds: 320 },
    { month: "May", funds: 400 },
    { month: "Jun", funds: 550 },
  ];

  return (
    <>
      <Navbar />

      <div
        className="container-fluid py-4"
        style={{
          background: "#f4f7fb",
          minHeight: "100vh",
        }}
      >
        <div className="container">

          {/* Welcome Banner */}

          <div
            className="p-5 text-white rounded-4 shadow-lg mb-5"
            style={{
              background:
                "linear-gradient(135deg,#0f766e,#14b8a6)",
            }}
          >
            <h1 className="fw-bold">
              Welcome to SAMANVAY Dashboard
            </h1>

            <p className="lead">
              Monitor volunteers, donations,
              events and resources from one place.
            </p>
          </div>

          {/* Stats Cards */}

          <div className="row g-4 mb-5">

            <div className="col-lg-3 col-md-6">
              <div className="card border-0 shadow-lg h-100">
                <div className="card-body">

                  <FaUsers
                    size={40}
                    className="text-primary mb-3"
                  />

                  <h2>5,240</h2>

                  <p className="text-muted">
                    Volunteers
                  </p>

                  <small className="text-success">
                    <FaArrowUp /> +12%
                  </small>

                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="card border-0 shadow-lg h-100">
                <div className="card-body">

                  <FaDonate
                    size={40}
                    className="text-success mb-3"
                  />

                  <h2>₹10 Cr+</h2>

                  <p className="text-muted">
                    Donations
                  </p>

                  <small className="text-success">
                    <FaArrowUp /> +18%
                  </small>

                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="card border-0 shadow-lg h-100">
                <div className="card-body">

                  <FaCalendarAlt
                    size={40}
                    className="text-warning mb-3"
                  />

                  <h2>38</h2>

                  <p className="text-muted">
                    Events
                  </p>

                  <small className="text-success">
                    <FaArrowUp /> +7%
                  </small>

                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="card border-0 shadow-lg h-100">
                <div className="card-body">

                  <FaHandsHelping
                    size={40}
                    className="text-danger mb-3"
                  />

                  <h2>102</h2>

                  <p className="text-muted">
                    NGO Partners
                  </p>

                  <small className="text-success">
                    <FaArrowUp /> +4%
                  </small>

                </div>
              </div>
            </div>

          </div>

          {/* Chart + Activities */}

          <div className="row g-4">

            {/* Chart */}

            <div className="col-lg-8">

              <div className="card border-0 shadow-lg">
                <div className="card-body">

                  <h4 className="mb-4">
                    Funds Growth
                  </h4>

                  <ResponsiveContainer
                    width="100%"
                    height={320}
                  >
                    <AreaChart data={data}>

                      <XAxis dataKey="month" />

                      <YAxis />

                      <Tooltip />

                      <Area
                        type="monotone"
                        dataKey="funds"
                        stroke="#0f766e"
                        fill="#14b8a6"
                      />

                    </AreaChart>
                  </ResponsiveContainer>

                </div>
              </div>

            </div>

            {/* Activities */}

            <div className="col-lg-4">

              <div className="card border-0 shadow-lg h-100">
                <div className="card-body">

                  <h4 className="mb-4">
                    Recent Activities
                  </h4>

                  <ul className="list-group">

                    <li className="list-group-item">
                      New NGO Registered
                    </li>

                    <li className="list-group-item">
                      ₹50,000 Donation Received
                    </li>

                    <li className="list-group-item">
                      Medical Camp Scheduled
                    </li>

                    <li className="list-group-item">
                      25 Volunteers Added
                    </li>

                    <li className="list-group-item">
                      Education Drive Completed
                    </li>

                  </ul>

                </div>
              </div>

            </div>

          </div>

          {/* Bottom Widgets */}

          <div className="row g-4 mt-4">

            {/* Upcoming Events */}

            <div className="col-lg-6">

              <div className="card border-0 shadow-lg">
                <div className="card-body">

                  <h4 className="mb-4">
                    Upcoming Events
                  </h4>

                  <ul className="list-group">

                    <li className="list-group-item">
                      Blood Donation Camp
                    </li>

                    <li className="list-group-item">
                      Healthcare Awareness Drive
                    </li>

                    <li className="list-group-item">
                      Education Support Program
                    </li>

                  </ul>

                </div>
              </div>

            </div>

            {/* Progress */}

            <div className="col-lg-6">

              <div className="card border-0 shadow-lg">
                <div className="card-body">

                  <h4 className="mb-4">
                    Monthly Goals
                  </h4>

                  <p>Volunteer Target</p>

                  <div className="progress mb-3">
                    <div
                      className="progress-bar bg-success"
                      style={{ width: "82%" }}
                    >
                      82%
                    </div>
                  </div>

                  <p>Fundraising Goal</p>

                  <div className="progress mb-3">
                    <div
                      className="progress-bar bg-primary"
                      style={{ width: "70%" }}
                    >
                      70%
                    </div>
                  </div>

                  <p>Events Completion</p>

                  <div className="progress">
                    <div
                      className="progress-bar bg-warning"
                      style={{ width: "90%" }}
                    >
                      90%
                    </div>
                  </div>

                </div>
              </div>

            </div>

          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default Dashboard;