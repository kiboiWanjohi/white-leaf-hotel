import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Homepage from "./components/Homepage";
import Hotel from "./components/Hotel";
import Restaurant from "./components/Restaurant";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/Homepage" element={<Homepage />} />
          <Route path="/Hotel" element={<Hotel />} />
          <Route path="/Restaurant" element={<Restaurant />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
