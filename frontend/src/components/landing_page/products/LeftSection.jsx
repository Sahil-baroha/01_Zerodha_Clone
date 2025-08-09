import React from "react";

const LeftSection = ({ P_img, P_name, P_desc, Link_1 ,Link_2, L1_url, L2_url }) => {
  return (
    <div className="flex gap-[80px] items-start justify-center pt-[6rem]">
      <div className="flex px-8 pr-7">
        <img src={P_img} className="pr-8" />
      </div>
      <div className="flex w-[370px] leading-8 text-[17px] px-5 flex-col justify-start items-start">
        <h1 className="text-[32px] py-8">{P_name}</h1>
        <p className="">{P_desc}</p>
        <div className="flex gap-9 my-5">

          {Link_1 && (
            <a
              href={L1_url}
              className="cursor-pointer text-blue-500 hover:text-gray-700 pr-3"
            >
              {" "}
              {Link_1} <i className=" fa-solid fa-arrow-right"></i>
            </a>
          )}
 
          {
            Link_2?.trim() && (
          <a
            href={L2_url}
            className="cursor-pointer text-blue-500 hover:text-gray-700 px-3"
          >
            {" "}
            {Link_2} <i className=" fa-solid fa-arrow-right"></i>
          </a>

            )
          }
        </div>
        <div className="flex gap-8">
          <img src="media/images/googlePlayBadge.svg" alt="" />
          <img src="media/images/appstoreBadge.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
