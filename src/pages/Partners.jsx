import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Partners() {
  return (
    <>
      <Navbar />

      <div className="container py-5">

        <h1 className="mb-4">Partner Organizations</h1>

        <div className="row g-4">

          <div className="col-md-4">
            <div className="card shadow p-4">
              <h4>UNICEF</h4>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow p-4">
              <h4>Red Cross</h4>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow p-4">
              <h4>WHO</h4>
            </div>
          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default Partners;