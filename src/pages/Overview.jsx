import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Overview() {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}

      <section
        className="text-white d-flex align-items-center"
        style={{
          minHeight: "90vh",
          background:
            "linear-gradient(135deg,#0f766e,#14b8a6)",
        }}
      >
        <div className="container">

          <div className="row align-items-center">

            <div className="col-lg-6">

              <h1 className="display-2 fw-bold">
                SAMANVAY
              </h1>

              <h3 className="mb-4">
                NGO Coordination Operating System
              </h3>

              <p className="fs-5">
                Connecting NGOs, Volunteers,
                Donors and Resources through
                one unified digital platform.
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

              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="NGO"
                className="img-fluid"
                style={{
                  maxHeight: "400px",
                }}
              />

            </div>

          </div>

        </div>
      </section>

      {/* STATS */}

      <section className="container py-5">

        <div className="row g-4 text-center">

          <div className="col-md-3">
            <div className="card shadow border-0 p-4">
              <h1 className="text-success">
                320+
              </h1>
              <h5>Volunteers</h5>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card shadow border-0 p-4">
              <h1 className="text-primary">
                150+
              </h1>
              <h5>Resources</h5>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card shadow border-0 p-4">
              <h1 className="text-warning">
                28+
              </h1>
              <h5>Events</h5>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card shadow border-0 p-4">
              <h1 className="text-danger">
                ₹5.6 Cr
              </h1>
              <h5>Funds Managed</h5>
            </div>
          </div>

        </div>

      </section>

      {/* FEATURES */}

      <section
        className="py-5"
        style={{
          background: "#f8f9fa",
        }}
      >
        <div className="container">

          <h2 className="text-center fw-bold mb-5">
            Platform Features
          </h2>

          <div className="row g-4">

            <div className="col-md-4">
              <div className="card shadow h-100 border-0">
                <div className="card-body text-center">
                  <h3>📦</h3>
                  <h4>Resource Management</h4>
                  <p>
                    Track food, medicine,
                    transport and relief resources.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow h-100 border-0">
                <div className="card-body text-center">
                  <h3>👥</h3>
                  <h4>Volunteer Network</h4>
                  <p>
                    Manage and coordinate volunteers
                    across multiple NGOs.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow h-100 border-0">
                <div className="card-body text-center">
                  <h3>📅</h3>
                  <h4>Event Management</h4>
                  <p>
                    Organize campaigns,
                    awareness drives and programs.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* WHY SAMANVAY */}

      <section className="container py-5">

        <h2 className="text-center fw-bold mb-5">
          Why SAMANVAY?
        </h2>

        <div className="row g-4">

          <div className="col-md-4">
            <div className="card border-0 shadow p-4">
              <h4>Unified Platform</h4>
              <p>
                One system for NGOs,
                volunteers and donors.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 shadow p-4">
              <h4>Real-Time Analytics</h4>
              <p>
                Track impact, resources
                and activities instantly.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 shadow p-4">
              <h4>Scalable Solution</h4>
              <p>
                Suitable for local NGOs
                and national organizations.
              </p>
            </div>
          </div>

        </div>

      </section>

      {/* CTA */}

      <section
        className="text-center text-white py-5"
        style={{
          background:
            "linear-gradient(135deg,#0f766e,#14b8a6)",
        }}
      >
        <div className="container">

          <h2 className="fw-bold">
            Ready To Transform NGO Operations?
          </h2>

          <p className="mt-3">
            Join the future of NGO coordination.
          </p>

          <button className="btn btn-light btn-lg mt-2">
            Join SAMANVAY
          </button>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Overview;