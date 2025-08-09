import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col items-center py-26">
      <div className="flex flex-col text-center mb-[5rem] justify-center w-[30rem] h-[10rem]">
        <h1 className="font-semibold text-[1.8rem] py-2">Charges</h1>
        <p className="tracking-wide text-[1.2rem] text-gray-500">
          List of all charges and taxes
        </p>
      </div>
      <div className="flex flex-wrap xl:flex-nowrap justify-center   w-full">
        <div className="flex m-5 w-[340px] flex-col justify-start items-center">
          <img
            className="h-[16rem] w-[17rem]"
            src="media/images/pricing0.svg"
            alt=""
          />
          <h1 className="font-semibold text-[1.8rem] pb-4">
            Free equity delivery
          </h1>
          <p className="text-center py-2 text-gray-500 ">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="flex m-5 w-[340px] flex-col justify-start items-center">
          <img
            className="h-[16rem] w-[17rem]"
            src="media/images/pricing0.svg"
            alt=""
          />
          <h1 className="font-semibold text-[1.8rem] pb-4">
            Intraday and F&O trades
          </h1>
          <p className="text-center py-2 text-gray-500 ">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="flex m-5 w-[340px] flex-col justify-start items-center">
          <img
            className="h-[16rem] w-[17rem]"
            src="media/images/pricing0.svg"
            alt=""
          />
          <h1 className="font-semibold text-[1.8rem] pb-4">Free direct MF</h1>
          <p className="text-center py-2 text-gray-500 ">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
