import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Regulations from "./components/pages/regulations/Regulations";
import ExchangeDestinations from "./components/pages/exchange-destinations/ExchangeDestinations";
import SearchingForTransaction from "./components/pages/searching-for-transaction/SearchingForTransaction";
import Faq from "./components/pages/faq/Faq";
import KycAml from "./components/pages/kyc-aml/KycAml";
import Contacts from "./components/pages/contacts/Contacts";
import Profile from "./components/pages/profile/Profile";
import Footer from "./components/common/footer/Footer";
import Login from "./components/pages/auth/Login";
import Reg from "./components/pages/auth/Reg";
import "./App.css";
// eslint-disable-next-line no-unused-vars
import styles from "./components/common/nav-bar/nav_bar.module.scss";
function App() {
  return (
    <>
      <Router>
        <div className="w-100">
          <div className="container__page__global">
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
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/reg" element={<Reg />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </>
  );
}

export default App;
