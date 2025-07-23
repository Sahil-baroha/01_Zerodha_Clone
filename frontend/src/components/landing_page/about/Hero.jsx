import React from "react";

const Hero = () => {
  return (
    <div className="flex justify-center flex-col w-full items-center mb-5 min-w-[340px] ">
      <div className="flex w-[80%] justify-center items-center flex-col">
        <div className="py-[25px] mb-[100px] pb-[70px]">
          <h1 className="font-medium text-[var(--hx)] text-[25px] ">
            We pioneered the discount broking model in India.
            <br /> Now, we are breaking ground with our technology.
          </h1>
        </div>
 
        <div className="flex flex-col md:flex-row ">
          <div className="flex flex-1 flex-col text-[17px] gap-y-5 p-5 pr-9 mx-5">
            <p className="leading-7 text-[var(--hx)]">
              {" "}
              We kick-started operations on the 15th of August, 2010 with the
              goal of breaking all barriers that traders and investors face in
              India in terms of cost, support, and technology. We named the
              company Zerodha, a combination of Zero and "Rodha", the Sanskrit
              word for barrier.
            </p>
            <p className="leading-7">
              Today, our disruptive pricing models and in-house technology have
              made us the biggest stock broker in India.
            </p>
            <p className="leading-7">
              Over 1.6+ crore clients place billions of orders every year
              through our powerful ecosystem of investment platforms,
              contributing over 15% of all Indian retail trading volumes.
            </p>
          </div>

          <div className="flex flex-1 flex-col text-[17.5px] gap-y-5 p-5 pl-0">
            <p className="leading-7 text-[var(--hx)]">
              {" "}
              In addition, we run a number of popular open online educational
              and community initiatives to empower retail traders and investors.
            </p>
            <p className="leading-7"> 
              Rainmatter, our fintech fund and incubator, has invested in
              several fintech startups with the goal of growing the Indian
              capital markets.
            </p>
            <p className="leading-7">
              {" "}
              And yet, we are always up to something new every day. Catch up on
              the latest updates on our blog or see what the media is saying
              about us or learn more about our business and product
              philosophies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
