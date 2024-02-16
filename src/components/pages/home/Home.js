import React from "react";
import Header from "./header/Header";
import Exchanger from "./exchanger/Exchanger";
import Tabs from "./tabs/Tabs";
import Tablets from "./tablets/Tablets";
import WhyWe from "./why-we/WhyWe";
import FeedbackSlider from "./feedback-slider/FeedbackSlider";
function Home() {
  return (
    <>
      <div class="row">
        <Header />
        <Exchanger />
        <Tabs />
        <Tablets />
        <WhyWe />
        <FeedbackSlider />
      </div>
    </>
  );
}
export default Home;
