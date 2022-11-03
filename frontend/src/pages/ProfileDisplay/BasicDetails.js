import React from "react";
import image from "../../../assets/img/image.png";
import share from "../../../assets/img/shareIcon.png";

function Basicdetails() {
  return (
    <div className="mt-10 font-robotoMono">
      <div>
        <img src={image} className="mx-auto" alt="" />
        <div className="flex items-center justify-center">
          <p className="font-bold text-[40px] pr-3">Constance</p>
          <img src={share} className="w-[50px] h-[50px]" alt="" />
        </div>
        <div className="font-bold text-[24px] ">@11x11</div>
      </div>
      <div className="flex flex-row justify-center items-center my-8 text-[24px] font-bold">
        <div>1,296 friends</div>
        <button
          type="button"
          className="mx-4 bg-black text-[#DAFF3E] px-6 rounded-full font-bold"
        >
          Add
        </button>
        <div>Joined 2022</div>
      </div>
    </div>
  );
}

export default Basicdetails;
