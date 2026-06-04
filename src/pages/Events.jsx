import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Events() {
  return (
    <>
      <Navbar />

      <div className="container py-5">
        <h1 className="mb-4">Events</h1>

        <div className="row g-4">

          <div className="col-md-4">
            <div className="card shadow p-3">
              <h4>Health Camp</h4>
              <p>Lucknow</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow p-3">
              <h4>Food Distribution</h4>
              <p>Kanpur</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow p-3">
              <h4>Education Drive</h4>
              <p>Varanasi</p>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default Events;