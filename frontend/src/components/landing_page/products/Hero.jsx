import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col items-center gap-4 py-[40px] mb-[100px] pb-[50px]">
      <h1 className="text-[30px] text-[var(--hx)]  font-semibold">Zerodha Products</h1>
      <p className="text-[21px]">Sleek, modern, and intuitive trading platforms</p>
      <p className="text-center items-center justify-center">
        Check out our <a href="https://zerodha.com/investments" className="cursor-pointer text-blue-400 hover:text-gray-500">investment offerings{" "}
        <i className=" fa-solid fa-arrow-right"></i></a>
      </p>
    </div>
  );    
};

export default Hero;
  