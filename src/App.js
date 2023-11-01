import React from "react";
import { AuthProvider } from "./AuthProvider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import Scuttlebutt from "./pages/Scuttlebutt";
import Results from "./pages/Results";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            {/* <Route path="/" element={<WelcomePage />} /> */}
            <Route path="/home" element={<Home />} />
            <Route path="/scuttlebutt" element={<Scuttlebutt />} />
            <Route path="/results" element={<Results />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
