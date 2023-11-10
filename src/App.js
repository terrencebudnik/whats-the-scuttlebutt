import React from "react";
import { AuthProvider } from "./firebase/firebaseAuth"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Banner from "./components/Banner";
import Home from "./pages/Home";
import Scuttlebutt from "./pages/Scuttlebutt";
import Results from "./pages/Results";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">

      <Router>
        <AuthProvider>
          <Banner />
          <Routes>
            {/* <Route path="/" element={<WelcomePage />} /> */}
            <Route path="/" element={<Home />} />
            <Route path="/scuttlebutt" element={<Scuttlebutt />} />
            <Route path="/results" element={<Results />} />
          </Routes>
          <Footer />
        </AuthProvider>
      </Router>
   
    </div>
  );
}

export default App;
