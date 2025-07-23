import React from "react";

const Team = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-[5vh]">
      <h1 className="text-[1.7rem] font-semibold text-[var(--hx)] py-4 my-4 mb-[50px]">
        People
      </h1>
      <div className="flex flex-col">
        <div className="flex flex-col md:flex-row mx-auto items-start w-[80%] pb-[100px]">
          <div className="flex flex-col flex-1 overflow-hidden min-w-[300px] items-center gap-2">
            <img
              src="media/images/nithinKamath.jpg"
              alt="CEO_img"
              className="h-[300px] w-[300px] rounded-[50%] flex-shrink-0"
            />
            <p className="text-xl">Nithin Kamath</p>
            <p className="font-light">Founder, CEO</p>
          </div>

          <div className="flex flex-1/6 flex-col w-[70%] items-center md:items-start gap-y-6 pt-3 pl-3">
            <p className="text-[1.1rem]">
              Nithin bootstrapped and founded Zerodha in 2010 to overcome the
              hurdles he faced during his decade long stint as a trader. Today,
              Zerodha has changed the landscape of the Indian broking industry.
            </p>
            <p className="text-[1.1rem]">
              He is a member of the SEBI Secondary Market Advisory Committee
              (SMAC) and the Market Data Advisory Committee (MDAC).
            </p>
            <p className="text-[1.1rem]">Playing basketball is his zen.</p>
            <p className="text-[1.1rem]">
              Connect on Homepage / TradingQnA / Twitter
            </p>
          </div>
        </div>
        

        <div className="flex flex-wrap items-center justify-center w-full">
          <div className="flex gap-[100px] my-12 py-8 w-full flex-wrap mx-auto items-center justify-center">
            <img
              src="media/images/nithinKamath.jpg"
              alt="CEO_img"
              className="h-[220px] mx-8 my-10 w-[220px] rounded-[50%] "
            />{" "}
            <img
              src="media/images/nithinKamath.jpg"
              alt="CEO_img"
              className="h-[220px] mx-8 my-10 w-[220px] rounded-[50%] "
            />{" "}
            <img
              src="media/images/nithinKamath.jpg"
              alt="CEO_img"
              className="h-[220px] mx-8 my-10 w-[220px] rounded-[50%] "
            />{" "}
          </div>
          <div className="flex gap-[100px] my-12 w-full flex-wrap items-center justify-center">
            <img
              src="media/images/nithinKamath.jpg"
              alt="CEO_img"
              className="h-[220px] mx-8 my-10 w-[220px] rounded-[50%] "
            />{" "}
            <img
              src="media/images/nithinKamath.jpg"
              alt="CEO_img"
              className="h-[220px] mx-8 my-10 w-[220px] rounded-[50%] "
            />{" "}
            <img
              src="media/images/nithinKamath.jpg"
              alt="CEO_img"
              className="h-[220px] mx-8 my-10 w-[220px] rounded-[50%] "
            />{" "}
          </div>
          <div className="flex gap-[100px] my-12 w-full flex-wrap items-center justify-center">
            <img
              src="media/images/nithinKamath.jpg"
              alt="CEO_img"
              className="h-[220px] mx-8 my-10 w-[220px] rounded-[50%] "
            />{" "}
            <img
              src="media/images/nithinKamath.jpg"
              alt="CEO_img"
              className="h-[220px] mx-8 my-10 w-[220px] rounded-[50%] "
            />{" "}
            <img
              src="media/images/nithinKamath.jpg"
              alt="CEO_img"
              className="h-[220px] mx-8 my-10 w-[220px] rounded-[50%] "
            />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
