import React from "react";
// import image from "../../assets/img/image.png";

function Skills() {
  return (
    <div className="px-[10rem] mt-8 font-robotoMono mx-auto">
      <div className="mb-2 text-left px-[6rem]">
        <form>
          <div className="flex flex-row justify-between">
            <div className="flex flex-col ">
              <div className="pb-[1rem]">Main Skills</div>
              <div className="grid grid-cols-3 grid-flow-row gap-1">
                <div className="bg-black border-2 border-black text-[#DAFF3E] px-2 rounded-full">
                  Database Design
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="pb-[1rem]">Other Skills</div>
              <div className="grid grid-cols-3 grid-flow-row gap-1">
                <div className=" flex justify-center items-center bg-white border-solid border-2 border-black text-[#000000] rounded-full font-bold">
                  Smart Contract
                </div>
                <div className="flex justify-center items-center bg-white border-solid border-2  border-black text-[#000000]  rounded-full font-bold">
                  RUST Developer
                </div>
                <div className=" flex justify-center items-center bg-white border-solid border-2  border-black text-[#000000] px-2 rounded-full font-bold">
                  Database Design
                </div>
                <div className=" flex justify-center items-center bg-white border-solid border-2 border-black text-[#000000]  rounded-full font-bold">
                  Database
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Skills;
