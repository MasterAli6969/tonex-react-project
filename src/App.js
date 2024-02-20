import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/common/nav-bar/NavBar";
import Home from "./components/pages/home/Home";
import Footer from "./components/common/footer/Footer";
import Regulations from "./components/pages/regulations/Regulations";
import ExchangeDestinations from "./components/pages/exchange-destinations/ExchangeDestinations";
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
              <Route path="/regulations" element={<Regulations />} />
              <Route
                path="/exchange-destinations"
                element={<ExchangeDestinations />}
              />
            </Routes>
          </div>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
