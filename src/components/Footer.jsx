function Footer() {
  return (
    <footer
      className="text-white mt-5"
      style={{
        background:
          "linear-gradient(135deg,#0f766e,#14b8a6)",
      }}
    >
      <div className="container py-4">

        <div className="row">

          <div className="col-md-4">
            <h3 className="fw-bold">
              SAMANVAY
            </h3>

            <p>
              NGO Coordination Operating System
              connecting NGOs, Volunteers,
              Donors and Resources.
            </p>
          </div>

          <div className="col-md-4">
            <h5>Quick Links</h5>

            <ul className="list-unstyled">

              <li>Overview</li>

              <li>Dashboard</li>

              <li>Resources</li>

              <li>Events</li>

            </ul>
          </div>

          <div className="col-md-4">
            <h5>Contact</h5>

            <p>
              📧 support@samanvay.org
            </p>

            <p>
              📞 +91 9876543210
            </p>

            <p>
              📍 Lucknow, India
            </p>
          </div>

        </div>

        <hr />

        <div className="text-center">
          © 2026 SAMANVAY | All Rights Reserved
        </div>

      </div>
    </footer>
  );
}

export default Footer;