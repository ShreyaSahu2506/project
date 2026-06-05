import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { loginUser } from "../services/authService";

import {
  FaEnvelope,
  FaLock,
  FaSignInAlt,
} from "react-icons/fa";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");

      const response = await loginUser(formData);

      console.log(response.data);

      if (response.data?.token) {
        localStorage.setItem(
          "token",
          response.data.token
        );
      }

      alert("Login Successful ✅");
      navigate("/dashboard");

    } catch (err) {
      console.error(err);

      setError(
        err?.response?.data?.message ||
        "Invalid email or password"
      );
    } finally {
      setLoading(false);
    }
  };

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
            width: "420px",
            borderRadius: "25px",
          }}
        >
          <div className="card-body p-5">

            <div className="text-center mb-4">
              <h1 className="fw-bold text-success">
                SAMANVAY
              </h1>

              <p className="text-muted">
                Welcome Back
              </p>
            </div>

            {error && (
              <div className="alert alert-danger">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>

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
                    name="email"
                    className="form-control"
                    placeholder="Enter Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="form-label">
                  Password
                </label>

                <div className="input-group">
                  <span className="input-group-text">
                    <FaLock />
                  </span>

                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Enter Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-success w-100 py-2"
                disabled={loading}
              >
                <FaSignInAlt className="me-2" />

                {loading
                  ? "Logging in..."
                  : "Login"}
              </button>

            </form>

            <div className="text-center mt-4">
              <small>
                Don't have an account?
              </small>

              <br />

              <Link
                to="/register"
                className="text-success fw-bold text-decoration-none"
              >
                Create Account
              </Link>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Login;