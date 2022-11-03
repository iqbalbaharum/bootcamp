import React from "react";
import { Link } from "react-router-dom";
import arrow from "../../../assets/img/arrow.png";
import cursor from "../../../assets/img/cursor.png";

function ThirdSection() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#DAFF3E]">
      <div className="px-[30rem] py-[10rem]  text-black mt-[5rem]">
        <div className="flex flex-row text-left">
          <div className="font-bold text-2xl">
            def SEED(): <br />
            &nbsp; print(“learn, build, hire”) <br />
            &nbsp; print(“find us on SEED profile“) <br />
            if _ _name_ _ == “_ _main_ _”: <br />
            SEED()
          </div>
        </div>
        <div className="flex flex-row mt-[7rem]">
          <div>
            <Link to="/login">
              <button
                type="button"
                className="bg-black text-[60px] text-[#DAFF3E] font-bold pl-5 rounded-[10px] font-robotoMono flex"
              >
                ENTER WEB3
                <img src={arrow} alt="" className="w-[50px] h-[auto] m-8" />
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-row justify-end">
          <img src={cursor} alt="" className="w-auto h-[100px] justify-right" />
        </div>
      </div>
    </div>
  );
}

export default ThirdSection;
