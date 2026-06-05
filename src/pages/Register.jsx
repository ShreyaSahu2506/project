import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaUserPlus,
} from "react-icons/fa";

function Register() {
  return (
    <>
      <Navbar />

      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          minHeight: "85vh",
          background:
            "linear-gradient(135deg,#0f766e,#14b8a6)",
        }}
      >
        <div
          className="card border-0 shadow-lg"
          style={{
            width: "500px",
            borderRadius: "25px",
          }}
        >
          <div className="card-body p-5">

            <div className="text-center mb-4">

              <h1 className="fw-bold text-success">
                SAMANVAY
              </h1>

              <p className="text-muted">
                Create Your Account
              </p>

            </div>

            <form>

              <div className="mb-3">

                <label className="form-label">
                  Full Name
                </label>

                <div className="input-group">

                  <span className="input-group-text">
                    <FaUser />
                  </span>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Full Name"
                  />

                </div>

              </div>

              <div className="mb-3">

                <label className="form-label">
                  Email
                </label>

                <div className="input-group">

                  <span className="input-group-text">
                    <FaEnvelope />
                  </span>

                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter Email"
                  />

                </div>

              </div>

              <div className="mb-3">

                <label className="form-label">
                  Password
                </label>

                <div className="input-group">

                  <span className="input-group-text">
                    <FaLock />
                  </span>

                  <input
                    type="password"
                    className="form-control"
                    placeholder="Create Password"
                  />

                </div>

              </div>

              <div className="mb-4">

                <label className="form-label">
                  Confirm Password
                </label>

                <div className="input-group">

                  <span className="input-group-text">
                    <FaLock />
                  </span>

                  <input
                    type="password"
                    className="form-control"
                    placeholder="Confirm Password"
                  />

                </div>

              </div>

              <button
                className="btn btn-success w-100 py-2"
              >
                <FaUserPlus className="me-2" />
                Register
              </button>

            </form>

            <div className="text-center mt-4">

              <small>
                Already have an account?
              </small>

              <br />

              <a
                href="/login"
                className="text-success fw-bold text-decoration-none"
              >
                Login Here
              </a>

            </div>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Register;