import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  FaUsers,
  FaDonate,
  FaHandsHelping,
  FaGlobe,
  FaArrowRight,
  FaChartLine,
} from "react-icons/fa";

function Overview() {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}

      <section
        className="text-white"
        style={{
          background:
            "linear-gradient(135deg,#0f766e,#14b8a6)",
          minHeight: "90vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="container">

          <div className="row align-items-center">

            <div className="col-lg-6">

              <h1
                className="fw-bold"
                style={{
                  fontSize: "4rem",
                }}
              >
                SAMANVAY
              </h1>

              <h3 className="mb-4">
                NGO Coordination Operating System
              </h3>

              <p
                className="lead"
                style={{
                  maxWidth: "600px",
                }}
              >
                Bringing NGOs, Volunteers, Donors,
                Resources and Communities together
                on a single digital platform.
              </p>

              <div className="mt-4">

                <button className="btn btn-light btn-lg me-3">
                  Get Started
                </button>

                <button className="btn btn-outline-light btn-lg">
                  Learn More
                </button>

              </div>

            </div>

            <div className="col-lg-6 text-center">

              <div
                className="p-5 rounded-4 shadow-lg"
                style={{
                  background:
                    "rgba(255,255,255,0.15)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <FaGlobe size={120} />

                <h3 className="mt-4">
                  Connecting Social Impact
                </h3>

                <p>
                  One Platform • Unlimited Reach
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* IMPACT STATS */}

      <section className="py-5 bg-light">

        <div className="container">

          <div className="row g-4">

            <div className="col-md-3">

              <div className="card border-0 shadow-lg text-center h-100">
                <div className="card-body">

                  <FaUsers
                    size={50}
                    className="text-primary mb-3"
                  />

                  <h2>5000+</h2>

                  <p>Volunteers</p>

                </div>
              </div>

            </div>

            <div className="col-md-3">

              <div className="card border-0 shadow-lg text-center h-100">
                <div className="card-body">

                  <FaDonate
                    size={50}
                    className="text-success mb-3"
                  />

                  <h2>₹10 Cr+</h2>

                  <p>Funds Managed</p>

                </div>
              </div>

            </div>

            <div className="col-md-3">

              <div className="card border-0 shadow-lg text-center h-100">
                <div className="card-body">

                  <FaHandsHelping
                    size={50}
                    className="text-warning mb-3"
                  />

                  <h2>100+</h2>

                  <p>NGO Partners</p>

                </div>
              </div>

            </div>

            <div className="col-md-3">

              <div className="card border-0 shadow-lg text-center h-100">
                <div className="card-body">

                  <FaChartLine
                    size={50}
                    className="text-danger mb-3"
                  />

                  <h2>50K+</h2>

                  <p>Lives Impacted</p>

                </div>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* FEATURES */}

      <section className="py-5">

        <div className="container">

          <div className="text-center mb-5">

            <h2 className="fw-bold">
              Platform Features
            </h2>

            <p className="text-muted">
              Everything NGOs need in one place
            </p>

          </div>

          <div className="row g-4">

            <div className="col-md-4">

              <div className="card border-0 shadow-lg h-100">
                <div className="card-body">

                  <h4>
                    Volunteer Management
                  </h4>

                  <p>
                    Register, monitor and coordinate
                    volunteers efficiently.
                  </p>

                </div>
              </div>

            </div>

            <div className="col-md-4">

              <div className="card border-0 shadow-lg h-100">
                <div className="card-body">

                  <h4>
                    Resource Tracking
                  </h4>

                  <p>
                    Manage food, medical and
                    educational resources.
                  </p>

                </div>
              </div>

            </div>

            <div className="col-md-4">

              <div className="card border-0 shadow-lg h-100">
                <div className="card-body">

                  <h4>
                    Fund Monitoring
                  </h4>

                  <p>
                    Track donations and utilization
                    transparently.
                  </p>

                </div>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* HOW IT WORKS */}

      <section
        className="py-5 text-white"
        style={{
          background:
            "linear-gradient(135deg,#0f766e,#14b8a6)",
        }}
      >
        <div className="container">

          <h2 className="text-center mb-5">
            How SAMANVAY Works
          </h2>

          <div className="row text-center">

            <div className="col-md-3">

              <h1>1</h1>

              <h5>Register</h5>

              <p>
                NGOs & Volunteers Join
              </p>

            </div>

            <div className="col-md-3">

              <h1>2</h1>

              <h5>Connect</h5>

              <p>
                Find Resources & Support
              </p>

            </div>

            <div className="col-md-3">

              <h1>3</h1>

              <h5>Collaborate</h5>

              <p>
                Manage Events & Activities
              </p>

            </div>

            <div className="col-md-3">

              <h1>4</h1>

              <h5>Impact</h5>

              <p>
                Deliver Real Results
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-5 bg-light">

        <div className="container">

          <div className="card border-0 shadow-lg">

            <div className="card-body text-center p-5">

              <h2 className="fw-bold">
                Ready to Make a Difference?
              </h2>

              <p className="lead">
                Join the growing SAMANVAY network
                and help create social impact.
              </p>

              <button className="btn btn-success btn-lg">
                Join Now
                <FaArrowRight className="ms-2" />
              </button>

            </div>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Overview;