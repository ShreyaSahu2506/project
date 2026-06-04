import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Volunteers() {
  return (
    <>
      <Navbar />

      <div className="container py-5">
        <h1 className="mb-4">Volunteer Management</h1>

        <div className="card shadow p-4">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Role</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Rahul Sharma</td>
                <td>Coordinator</td>
                <td>Active</td>
              </tr>

              <tr>
                <td>Priya Singh</td>
                <td>Field Worker</td>
                <td>Active</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Volunteers;