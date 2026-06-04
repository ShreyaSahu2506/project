import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Resources() {
  return (
    <>
      <Navbar />

      <div className="container py-5">
        <h1 className="mb-4">Resources Management</h1>

        <div className="card shadow p-4">
          <h4>Available Resources</h4>

          <ul className="list-group mt-3">
            <li className="list-group-item">Food Supplies</li>
            <li className="list-group-item">Medical Kits</li>
            <li className="list-group-item">Educational Materials</li>
            <li className="list-group-item">Transport Vehicles</li>
          </ul>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Resources;