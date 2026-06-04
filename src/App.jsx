import { BrowserRouter, Routes, Route } from "react-router-dom";

import Overview from "./pages/Overview";
import Dashboard from "./pages/Dashboard";
import Resources from "./pages/Resources";
import Volunteers from "./pages/Volunteers";
import Events from "./pages/Events";
import Funds from "./pages/Funds";
import Partners from "./pages/Partners";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Overview />} />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/resources"
          element={<Resources />}
        />

        <Route
          path="/volunteers"
          element={<Volunteers />}
        />

        <Route
          path="/events"
          element={<Events />}
        />

        <Route
          path="/funds"
          element={<Funds />}
        />

        <Route
          path="/partners"
          element={<Partners />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;