import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "../components/Home";
import Admin from "../components/Admin";
import Register from "../components/Register";
import Navbar from "../components/Navbar";


function App() {
  return (
    <div className="App">
      <Navbar />
        <Container className="mb-4">
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/Admin" element={<Admin />} />
            <Route path="/Register" element={<Register />} />
          </Routes>
        </Container>
    </div>
  )
}

export default App;
