import React from "react";

const RightSection = ({ P_img, P_name, P_desc, Link_1 ,L1_url }) => {
  return (
    <div className="flex gap-12 items-start justify-center flex-col lg:flex-row pt-[5rem]">
      <div className="flex w-[370px] my-auto leading-8 text-[17px] px-5 flex-col pl-8 pt-[10px]">
        <h1 className="text-[28px] font-semibold pt-12 pb-5">{P_name}</h1>
        <p className="">{P_desc}</p>
        <div className="flex gap-9 my-5">
          {Link_1?.trim() && (
            <a
              href={L1_url}
              className="cursor-pointer text-blue-500 hover:text-gray-700 pr-3"
            >
              {" "}
              {Link_1} <i className=" fa-solid fa-arrow-right"></i>
            </a>
          )}
        </div>
      </div>
      <div className="flex px-8 pr-7">
        <img src={P_img} />
      </div>
    </div>
  );
};

export default RightSection;
