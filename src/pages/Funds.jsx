import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Funds() {
  return (
    <>
      <Navbar />

      <div className="container py-5">

        <h1 className="mb-4">Funds Management</h1>

        <div className="card shadow p-4">
          <h3>Total Funds</h3>
          <h1 className="text-success">₹5,60,00,000</h1>

          <hr />

          <p>NGO Contributions : ₹3 Cr</p>
          <p>Government Grants : ₹1.5 Cr</p>
          <p>Donations : ₹1.1 Cr</p>
        </div>

      </div>

      <Footer />
    </>
  );
}

export default Funds;