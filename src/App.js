import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/common/nav-bar/NavBar";
import Home from "./components/pages/home/Home";
import Footer from "./components/common/footer/Footer";
import Regulations from "./components/pages/regulations/Regulations";
import ExchangeDestinations from "./components/pages/exchange-destinations/ExchangeDestinations";
import SearchingForTransaction from "./components/pages/searching-for-transaction/SearchingForTransaction";
import Faq from "./components/pages/faq/Faq";
import KycAml from "./components/pages/kyc-aml/KycAml";
import Contacts from "./components/pages/contacts/Contacts";
import Profile from "./components/pages/profile/Profile";
import "./App.css";
function App() {
  return (
    <>
      <Router>
        <div className="w-100">
          <div className="container__page__global">
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/regulations" element={<Regulations />} />
              <Route
                path="/exchange-destinations"
                element={<ExchangeDestinations />}
              />
              <Route
                path="/searching-for-transaction"
                element={<SearchingForTransaction />}
              />
              <Route path="/faq" element={<Faq />} />
              <Route path="/kyc-aml" element={<KycAml />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
