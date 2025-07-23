import React from "react";

const Education = () => {
  return (
    <div className="">
      <div className="flex items-center gap-[5vw] justify-start">

        <div className="flex flex-1">
          <img
            src="media/images/education.svg"
            className="h-[20rem] w-[29rem] mb-5 -mt-5"
          />
        </div>

        <div className="flex flex-1 flex-col pr-8">
          <h1 className="flex font-semibold text-[33px] mb-8 ">Free and open market education </h1>
          <div className="pb-4 mb-4">
            <p className="-mb-3">
              Varsity, the largest online stock market education book in the
              world covering everything from the basics to advanced trading.
            </p>
            <br />
            <button className="-mt-2">
              <a
                href="https://zerodha.com/charges/#tab-equities"
                target="empty"
              >
                Varsity{" "}
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

          <div className=" pr-8">
            <p className="-mb-2">
              TradingQ&A, the most active trading and investment community in
              India for all your market related queries.
            </p>
            <br />
            <button className="">
              <a
                href="https://zerodha.com/charges/#tab-equities"
                target="empty"
              >
                TradingQ&A{" "}
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
        </div>
      </div>
    </div>
  );
};

export default Education;
