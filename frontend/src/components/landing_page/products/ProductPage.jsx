import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

const ProductPage = () => {
  return (
    <div className="ml-[10vw] mr-[10vw] mt-[16vh]">
      <Hero />
      <LeftSection
        P_img={"media/images/kite.png"}
        P_name={"Kite"}
        P_desc={
          "Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        }
        Link_1={"Try demo"}
        Link_2={"Learn more"}
        L1_url={"https://kite-demo.zerodha.com/dashboard"}
        L2_url={"https://zerodha.com/products/kite"}
      />
      <RightSection
        P_img={"media/images/console.png"}
        P_name={"Console"}
        P_desc={
          "The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        }
        Link_1={"Learn more"}
        L1_url={"https://zerodha.com/products/console"}
      />

      <LeftSection
        P_img={"media/images/coin.png"}
        P_name={"Coin"}
        P_desc={
          "Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        }
        Link_1={"Coin"}
        L1_url={"https://coin.zerodha.com/"}
      />

      <RightSection
        P_img={"media/images/kiteconnect.png"}
        P_name={"Kite Connect API"}
        P_desc={
          "Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        }
        Link_1={"Kite Connect"}
        L1_url={"https://zerodha.com/products/api/"}
      />

      <LeftSection
        P_img={"media/images/varsity.png"}
        P_name={"Varsity mobile"}
        P_desc={
          "An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        }
      />

      <Universe />
    </div>
  );
};

export default ProductPage;
