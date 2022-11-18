import React from "react";
// import image from "../../assets/img/image.png";

function Skills() {
  return (
    <div className="my-[2rem] text-left sm:mx-4">
      <form>
        <div className="flex flex-row justify-between xs:text-sm">
          <div className="flex flex-col w-[50%] mr-3">
            <div className="pb-[1rem]">Main Skills</div>
            <div className="grid sm:grid-cols-3 grid-flow-row-dense auto-rows-auto gap-1 xs:text-[1.5vh]">
              <div className="flex justify-center items-center bg-black border-solid border-2 border-black text-[#DAFF3E] rounded-full font-semibold">
                Community
              </div>
              <div className="flex justify-center items-center bg-black border-solid border-2 border-black text-[#DAFF3E] rounded-full font-semibold">
                Database Design
              </div>
              <div className="flex justify-center items-center bg-black border-solid border-2  border-black text-[#DAFF3E]  rounded-full font-semibold">
                RUST Developer
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[50%]">
            <div className="pb-[1rem]">Other Skills</div>
            <div className="grid sm:grid-cols-3 grid-flow-row-dense auto-rows-auto gap-1 xs:text-[1.5vh]">
              <div className=" flex justify-center items-center bg-white border-solid border-2 border-black text-[#000000] rounded-full font-bold">
                Smart Contract
              </div>
              <div className="flex justify-center items-center bg-white border-solid border-2  border-black text-[#000000]  rounded-full font-bold">
                RUST Developer
              </div>
              <div className="flex justify-center items-center bg-white border-solid border-2 border-black text-[#000000] rounded-full font-bold">
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
  );
}

export default Skills;
