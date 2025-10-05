import React from "react";

const SignUpNow = () => {
  return (
    <div className="flex flex-col py-12 mt-12 ">
      <div className="flex flex-col items-center justify-center gap-y-8 py-6 mt-12">
        <h1 className="text-[1.8rem] font-semibold text-[hx(#424242)]">
          Open a free demat and trading account online
        </h1>
        <p className="text-xl text-[hx(#666666)] ">
          Start investing brokerage free and join a community of 1.6+ crore
          investors and traders
        </p>
      </div>

      <div className="flex mx-[10vw] mt-[12vh] px-[4rem] gap-8 pb-16">
        <div className="">
          <img
            src="/media/images/signup.png"
            alt="img"
            className="h-[22rem] w-[35rem]"
          />
        </div>

        <div className="pl-10">
          <h1 className="font-semibold text-2xl pb-2">Signup now</h1>
          <p className="text-[1.2rem] text-gray-400 pb-7">
            or track your existing application
          </p>
          <form action="" className="flex flex-col gap-5">
            <input
              type="email"
              placeholder="Enter Your Username"
              className="border-[1px] h-8 w-65 rounded-sm border-gray-400 pl-1.5"
            />
            <input
              type="password"
              placeholder="Enter Your Password"
              className="border-[1px] h-8 w-65 rounded-sm border-gray-400 pl-1.5"
            />
            <button className="bg-blue-500 text-white w-52 h-10 font-semibold text-[18px]">
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="flex flex-col justify-center text-center pt-20 text-[1.7rem]">
        <h2 className="font-semibold text-gray-600">
          {" "}
          Investment options with Zerodha demat account
        </h2>

        <div className="grid grid-cols-2 w-[50%] gap-8 mx-auto mt-10">

          <div className="flex items-start">
            <img src="/media/images/stocks-acop.svg" alt="" className="" />
            <div className="text-left h-40 w-70">
              <h2 className="font-semibold text-[20px]">Stocks</h2>
              <p className="text-gray-400 text-[18px]">Invest in all exchange-listed securities</p>
            </div>
          </div>

          <div className="flex items-start">
            <img src="/media/images/stocks-acop.svg" alt="" className="" />
            <div className="text-left h-40 w-70">
              <h2 className="font-semibold text-[20px]">Mutual Funds</h2>
              <p className="text-gray-400 text-[18px]">Invest in commission-free direct mutual funds</p>
            </div>
          </div>

          <div className="flex items-start">
            <img src="/media/images/stocks-acop.svg" alt="" className="" />
            <div className="text-left h-40 w-70">
              <h2 className="font-semibold text-[20px]">IPO</h2>
              <p className="text-gray-400 text-[18px]">Apply to the latest IPOs instantly via UPI</p>
            </div>
          </div>

          <div className="flex items-start">
            <img src="/media/images/stocks-acop.svg" alt="" className="" />
            <div className="text-left h-40 w-70">
              <h2 className="font-semibold text-[20px]">Futures & Options</h2>
              <p className="text-gray-400 text-[18px]">Hedge and mitigate market risk through simplified F&O trading</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SignUpNow;
