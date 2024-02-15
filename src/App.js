import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/common/nav-bar/NavBar";
import Home from "./components/pages/home/Home";
import "./App.css";
function App() {
  return (
    <>
      <Router>
        <div class="w-100">
          <div class="container__page__global">
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
