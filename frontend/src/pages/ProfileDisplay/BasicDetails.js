import React from "react";
import image from "../../../assets/img/image.png";
import share from "../../../assets/img/shareIcon.png";

function Basicdetails() {
  return (
    <>
      <div>
        <img src={image} className="mx-auto" alt="" />
        <div className="flex items-center justify-center sm:py-1">
          <p className="font-bold text-2xl sm:pr-3 xs:text-lg">Constance</p>
          <img
            src={share}
            className="w-[30px] h-[30px] xs:scale-[0.8]"
            alt=""
          />
        </div>
        <div className="font-bold text-xl xs:text-lg">@11x11</div>
      </div>
      <div className="flex flex-row justify-center items-center sm:my-8 my-4 sm:text-xl font-bold xs:text-sm">
        <div>1,296 friends</div>
        <button
          type="button"
          className="mx-6 bg-black text-[#DAFF3E] px-5 py-2 rounded-full font-bold "
        >
          Add
        </button>
        <div>Joined 2022</div>
      </div>
    </>
  );
}

export default Basicdetails;
