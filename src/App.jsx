import "./App.css"
import "./index.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage";
import AlgorithmPage from "./pages/AlgorithmPage";
import Sidebar from "./components/sidebar";
import useSwipe from "./components/swipe";

const App = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const openSidebar = () => setShowSidebar(true);
  const closeSidebar = () => setShowSidebar(false);
  const { handleTouchStart, handleTouchEnd } = useSwipe(openSidebar, closeSidebar);
  return (
    <Router>
      <div className="relative">
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} handleTouchStart={handleTouchStart} handleTouchEnd={handleTouchEnd}/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:algorithm" element={<AlgorithmPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
