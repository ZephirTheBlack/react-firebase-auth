import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./components/Inicio.jsx"
import Login from "./components/Login";
import Menu from "./components/Menu";
import Admin from "./components/Admin"

function App() {
  return (
    <div className="container">
      
      <Router>
        <Menu></Menu>
        <Routes>
          <Route exact path="/" element={<Inicio />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
