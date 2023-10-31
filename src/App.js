import React from "react";
import { AuthProvider } from "./AuthProvider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import HomePage from "./pages/HomePage";
import ScuttlebuttPage from "./pages/ScuttlebuttPage";
import ResultsPage from "./pages/ResultsPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/scuttlebutt" element={<ScuttlebuttPage />} />
            <Route path="/results" element={<ResultsPage />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
