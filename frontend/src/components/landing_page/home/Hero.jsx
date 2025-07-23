import React from "react";

const Hero = () => {
  return (
    <div className="flex max-w-7xl mt-[19vh] align-middle mx-auto px-4 pb-[120px] justify-center justify-items-center flex-col">
      
      <div className="flex justify-center items-center mb-1">
        <img
          src="media/images/homeHero.png"
          alt="Hero-IMG"
          className="w-[743px] h-[312.84px] mb-[60px]"
        />
      </div>

      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl mb-1 font-semibold text-[hx(#424242)]">
          Invest in everything
        </h1>
        <p className="text-xl my-5 ">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <button className="w-52 font-semibold text-white text-xl bg-[rgb(56,126,209)] py-2 my-7 rounded-sm hover:bg-black">
          Sign up for free
        </button>
      </div>
    </div>
  );
};

export default Hero;
