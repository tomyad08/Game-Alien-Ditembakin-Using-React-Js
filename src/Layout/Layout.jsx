import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Game from "../Game/Game";
import LandingPage from "../LandingPage/LandingPage";

const Layout = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/game-in" element={<Game />} />
        </Routes>
      </Router>
    </div>
  );
};
export default Layout;
