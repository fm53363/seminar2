import Navbar from "./components/Navbar/Navbar";
import Sales from "./components/Sales/Sales";
import Home from "./components/Home/Home";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const navLinks = [
    { label: "Croatia", path: "/croatia", server: "hr" },
    { label: "Slovenia", path: "/slovenia", server: "slo" },
  ];

  return (
    <div className="container">
      <Router>
        <div>
          <Navbar links={navLinks} />
          <hr></hr>
          <Routes>
            <Route path="/" element={<Home />} /> {}
            <Route
              exact
              path="/croatia"
              element={<Sales country="Croatia" server="hr" />}
            />
            <Route
              exact
              path="/slovenia"
              element={<Sales country="Slovenia" server="slo" />}
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
}
export default App;
