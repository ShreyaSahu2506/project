import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";

import {
  FaUsers,
  FaBoxes,
  FaCalendarAlt,
  FaRupeeSign,
} from "react-icons/fa";

function Dashboard() {
  const volunteerData = [
    { month: "Jan", volunteers: 40 },
    { month: "Feb", volunteers: 65 },
    { month: "Mar", volunteers: 90 },
    { month: "Apr", volunteers: 120 },
    { month: "May", volunteers: 150 },
    { month: "Jun", volunteers: 210 },
  ];

  const fundData = [
    { name: "Healthcare", value: 35 },
    { name: "Education", value: 25 },
    { name: "Food Relief", value: 20 },
    { name: "Emergency", value: 20 },
  ];

  const COLORS = [
    "#198754",
    "#0d6efd",
    "#ffc107",
    "#dc3545",
  ];

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

          {/* HERO SECTION */}

          <div
            className="p-5 rounded-4 text-white shadow-lg mb-5"
            style={{
              background:
                "linear-gradient(135deg,#0f766e,#14b8a6)",
            }}
          >
            <h1 className="fw-bold display-5">
              Welcome Back 👋
            </h1>

            <p className="fs-5 mt-3">
              Monitor NGOs, Volunteers,
              Resources, Funds and Events
              from one centralized platform.
            </p>
          </div>

          {/* KPI CARDS */}

          <div className="row g-4">

            <div className="col-lg-3 col-md-6">
              <div className="card border-0 shadow-lg h-100">
                <div className="card-body text-center">
                  <FaUsers
                    size={40}
                    className="text-success mb-3"
                  />
                  <h2 className="fw-bold">
                    320
                  </h2>
                  <p className="text-muted">
                    Active Volunteers
                  </p>
                  <small className="text-success">
                    ↑ 18% Growth
                  </small>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="card border-0 shadow-lg h-100">
                <div className="card-body text-center">
                  <FaBoxes
                    size={40}
                    className="text-primary mb-3"
                  />
                  <h2 className="fw-bold">
                    150
                  </h2>
                  <p className="text-muted">
                    Resources
                  </p>
                  <small className="text-primary">
                    Updated Today
                  </small>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="card border-0 shadow-lg h-100">
                <div className="card-body text-center">
                  <FaCalendarAlt
                    size={40}
                    className="text-warning mb-3"
                  />
                  <h2 className="fw-bold">
                    28
                  </h2>
                  <p className="text-muted">
                    Upcoming Events
                  </p>
                  <small className="text-warning">
                    Next Event: 3 Days
                  </small>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="card border-0 shadow-lg h-100">
                <div className="card-body text-center">
                  <FaRupeeSign
                    size={40}
                    className="text-danger mb-3"
                  />
                  <h2 className="fw-bold">
                    ₹5.6 Cr
                  </h2>
                  <p className="text-muted">
                    Total Funds
                  </p>
                  <small className="text-danger">
                    ↑ 12% Growth
                  </small>
                </div>
              </div>
            </div>

          </div>

          {/* CHARTS */}

          <div className="row mt-5 g-4">

            <div className="col-lg-8">

              <div className="card border-0 shadow-lg">
                <div className="card-body">

                  <h4 className="mb-4">
                    Volunteer Growth Analytics
                  </h4>

                  <ResponsiveContainer
                    width="100%"
                    height={350}
                  >
                    <LineChart
                      data={volunteerData}
                    >
                      <CartesianGrid strokeDasharray="3 3" />

                      <XAxis dataKey="month" />

                      <YAxis />

                      <Tooltip />

                      <Line
                        type="monotone"
                        dataKey="volunteers"
                        stroke="#198754"
                        strokeWidth={4}
                      />
                    </LineChart>
                  </ResponsiveContainer>

                </div>
              </div>

            </div>

            <div className="col-lg-4">

              <div className="card border-0 shadow-lg">
                <div className="card-body">

                  <h4 className="mb-4">
                    Fund Allocation
                  </h4>

                  <ResponsiveContainer
                    width="100%"
                    height={300}
                  >
                    <PieChart>
                      <Pie
                        data={fundData}
                        dataKey="value"
                        outerRadius={100}
                        label
                      >
                        {fundData.map(
                          (entry, index) => (
                            <Cell
                              key={index}
                              fill={
                                COLORS[index]
                              }
                            />
                          )
                        )}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>

                </div>
              </div>

            </div>

          </div>

          {/* ACTIVITY SECTION */}

          <div className="row mt-5 g-4">

            <div className="col-lg-6">

              <div className="card border-0 shadow-lg">
                <div className="card-body">

                  <h4 className="mb-4">
                    Recent Activities
                  </h4>

                  <ul className="list-group">

                    <li className="list-group-item">
                      ✅ Food Drive Completed
                    </li>

                    <li className="list-group-item">
                      👥 25 New Volunteers Joined
                    </li>

                    <li className="list-group-item">
                      🏥 Medical Camp Scheduled
                    </li>

                    <li className="list-group-item">
                      🤝 New NGO Registered
                    </li>

                  </ul>

                </div>
              </div>

            </div>

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
                      Education Support Drive
                    </li>

                    <li className="list-group-item">
                      Women Empowerment Workshop
                    </li>

                    <li className="list-group-item">
                      Health Awareness Camp
                    </li>

                  </ul>

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