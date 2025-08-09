import React from "react";

const Universe = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-6 pt-[10vh]">
      <h1 className="text-[22px] py-7">
        Want to know more about our technology stack? Check out the Zerodha.tech
        blog.
      </h1>

      <div className="flex flex-col justify-center items-center pb-12">
        <div className="flex flex-col justify-center items-center pb-7">
          <h1 className="text-[25px] pt-12 mt-5 font-semibold pb-5">
            The Zerodha Universe
          </h1>
          <p className="text-[17px] pb-7">
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-[6rem] w-4xl">
          <div className="flex justify-center items-center gap-[6rem]">
            <div className="">
              <img src="media/images/smallcaseLogo.png" alt="" />
              <p className="text-[12px] w-[15vw] text-center text-gray-500">
                smallcases are modern investment products that help you build a
                diversified, low-cost & long term portfolio
              </p>
            </div>
            <div className="">
              <img src="media/images/smallcaseLogo.png" alt="" />
              <p className="text-[12px] w-[15vw] text-center text-gray-500">
                smallcases are modern investment products that help you build a
                diversified, low-cost & long term portfolio
              </p>
            </div>
            <div className="">
              <img src="media/images/smallcaseLogo.png" alt="" />
              <p className="text-[12px] w-[15vw] text-center text-gray-500">
                smallcases are modern investment products that help you build a
                diversified, low-cost & long term portfolio
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center gap-[6rem]">
            <div className="">
              <img src="media/images/smallcaseLogo.png" alt="" />
              <p className="text-[12px] w-[15vw] text-center text-gray-500">
                smallcases are modern investment products that help you build a
                diversified, low-cost & long term portfolio
              </p>
            </div>
            <div className="">
              <img src="media/images/smallcaseLogo.png" alt="" />
              <p className="text-[12px] w-[15vw] text-center text-gray-500">
                smallcases are modern investment products that help you build a
                diversified, low-cost & long term portfolio
              </p>
            </div>
            <div className="">
              <img src="media/images/smallcaseLogo.png" alt="" />
              <p className="text-[12px] w-[15vw] text-center text-gray-500">
                smallcases are modern investment products that help you build a
                diversified, low-cost & long term portfolio
              </p>
            </div>
          </div>
        </div>
      </div>
        <button className="w-52 font-semibold text-white text-xl bg-[rgb(56,126,209)] py-2  my-12 rounded-sm hover:bg-black">
          Sign up for free
        </button>
    </div>
  );
};

export default Universe;
