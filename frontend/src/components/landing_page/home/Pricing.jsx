import React from "react";

const Pricing = () => {
  return (
    <div className="flex pl-5 flex-col items-start pb-[100px] flex-wrap lg:flex-row">
      <div className="flex flex-col flex-1 items-start pb-5">
        <h1 className="flex font-semibold text-4xl mb-8 ">
          Unbeatable pricing
        </h1>
        <p className="">
          We pioneered the concept of discount broking and price transparency in
          India. Flat fees and no hidden charges.
        </p>
        <br />
        <button className="">
          <a href="https://zerodha.com/charges/#tab-equities" target="empty">
            See Pricing{" "}
          </a>
          <i
            class="fa-solid fa-arrow-right-long"
            style={{
              color: "#00BFFF",
              marginLeft: "0.4rem",
              paddingTop: "5px",
            }}
          ></i>
        </button>
      </div>
      <div className="flex flex-2 text-center pl-5 mt-10 pt-5 ">
        <div className="flex mr-5 ml-[3vw]">
          <img
            src="media/images/pricing0.svg"
            className="w-[120px]  h-[89px]"
          />
          <p className="flex mb-5 -ml-5 items-end justify-start text-[10px]">
            Free account <br /> opening
          </p>
        </div>
        <div className="flex mr-5 ml-5">
          <img
            src="media/images/pricing0.svg"
            className="w-[120px]  h-[89px]"
          />
          <p className="flex mb-5 -ml-5 items-end justify-start text-[10px]">
            Free equity delivery <br /> and direct mutual funds
          </p>
        </div>
        <div className="flex mr-5 ml-5">
          <img
            src="media/images/pricing0.svg"
            className="w-[120px]  h-[89px]"
          />
          <p className="flex mb-5 -ml-5 items-end justify-start text-[10px]">
            Intraday and
            <br /> F&O
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
