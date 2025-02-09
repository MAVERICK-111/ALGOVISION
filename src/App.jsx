import "./App.css"
import "./index.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage";
import AlgorithmPage from "./pages/AlgorithmPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:algorithm" element={<AlgorithmPage />} />
      </Routes>
    </Router>
  );
};

export default App;
