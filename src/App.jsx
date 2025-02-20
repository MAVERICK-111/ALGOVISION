import "./App.css"
import "./index.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage";
import SortingAlgorithmPage from "./pages/SortingAlgorithmPage";
import SearchAlgorithmPage from "./pages/SearchAlgorithmPage";
import Sidebar from "./components/sidebar";
import useSwipe from "./components/swipe";

const App = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [algorithm, setAlgorithm] = useState("algorithm");
  const openSidebar = () => setShowSidebar(true);
  const closeSidebar = () => setShowSidebar(false);
  const { handleTouchStart, handleTouchEnd } = useSwipe(openSidebar, closeSidebar);
  return (
    <Router>
      <div className="relative">
        <Sidebar 
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
          handleTouchStart={handleTouchStart}
          handleTouchEnd={handleTouchEnd}
          setAlgorithm={setAlgorithm}
        />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sorts/:algorithm" element={<SortingAlgorithmPage setShowSidebar={setShowSidebar} showSidebar={showSidebar} setAlgorithm={setAlgorithm} algorithm={algorithm} />} />
          <Route path="/searches/:algorithm" element={<SearchAlgorithmPage setShowSidebar={setShowSidebar} showSidebar={showSidebar} setAlgorithm={setAlgorithm} algorithm={algorithm} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
