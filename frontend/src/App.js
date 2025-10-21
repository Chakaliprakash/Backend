import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar"; // if you have one

function App() {
  return (
    <Router>
      <Navbar />

      {/* Hero Section */}
      
      <div className="text-center py-16 bg-gray-100">
        <h1 className="text-5xl font-bold">Prakash Chakali</h1>
        <p className="text-xl mt-2">Full Stack Java Developer | React & Spring Boot</p>
      </div>

      <Routes>
        <Route path="/" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
