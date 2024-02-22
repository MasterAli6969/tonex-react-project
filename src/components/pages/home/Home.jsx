import Header from "./header/Header";
import ExchangerHeader from "./exchanger-header/ExchangerHeader";
import Tabs from "./tabs/Tabs";
import Tablets from "./tablets/Tablets";
import WhyWe from "./why-we/WhyWe";
import FeedbackSlider from "./feedback-slider/FeedbackSlider";
function Home() {
  return (
    <>
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
