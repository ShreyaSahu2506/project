import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Login() {
  return (
    <>
      <Navbar />

      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          minHeight: "80vh",
          background: "#f4f7fb",
        }}
      >
        <div
          className="card shadow-lg border-0 p-4"
          style={{ width: "400px" }}
        >
          <h2 className="text-center mb-4">
            Login
          </h2>

          <form>

            <div className="mb-3">
              <label className="form-label">
                Email
              </label>

              <input
                type="email"
                className="form-control"
                placeholder="Enter Email"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">
                Password
              </label>

              <input
                type="password"
                className="form-control"
                placeholder="Enter Password"
              />
            </div>

            <button
              className="btn btn-success w-100"
            >
              Login
            </button>

          </form>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default Login;