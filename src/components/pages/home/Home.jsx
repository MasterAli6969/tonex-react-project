import Header from "./header/Header";
import ExchangerHeader from "./exchanger-header/ExchangerHeader";
import Tabs from "./tabs/Tabs";
import Tablets from "./tablets/Tablets";
import WhyWe from "./why-we/WhyWe";
import FeedbackSlider from "./feedback-slider/FeedbackSlider";
import NavBar from "../../common/nav-bar/NavBar";
import CryptoneXNavLogo from "../../../assets/img/CryptoneXNavLogo.png";
function Home() {
  return (
    <>
      <NavBar logo={CryptoneXNavLogo} />
      <div className="row">
        <Header />
        <ExchangerHeader />
        <Tabs />
        <Tablets />
        <WhyWe />
        <FeedbackSlider />
      </div>
    </>
  );
}
export default Home;
