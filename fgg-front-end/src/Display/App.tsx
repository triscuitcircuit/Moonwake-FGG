// This application and its routes to other pages

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "../components/Navbar";
import HomeDemo from "../components/Home-Demo";
import CreatureCreator from "../pages/creature-creator";
import CreatureDatabase from "../pages/creature-database";
import SearchAndFilter from "../pages/search_and_filter";
import {Footer} from "../components/Footer";

function App() {
  return (
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <div style={{ flex: 1 }}>
              <Router>
                  <Nav />
                  {/* Routes to the different pages in the application */}
                  <Routes>
                      <Route path="/" element={<HomeDemo />} />
                      <Route path="/creature-creator" element={<CreatureCreator />} />
                      <Route path="/creature-database" element={<CreatureDatabase searchQuery={''} />} />
                      <Route path="/search_and_filter" element={<SearchAndFilter />} />
                  </Routes>
              </Router>
          </div>
          <Footer clientLogo={"./logo.png"} yourLogo={"./moonwake_logo.png"} />
      </div>
  );
}

export default App;
