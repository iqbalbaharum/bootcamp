import React, { useState } from "react";
// import imagesquare from "../../../assets/img/imagesquare.png";
// import lightning from "../../../assets/img/lightning.png";
import dollarbag from "../../../assets/img/dollarbag.png";

function MyJob(job) {
  const [applied, setApply] = useState(false);

  function onClickApply() {
    if (job.status === 0) {
      setApply(true);
    }
  }

  return (
    <article className="rounded-lg border border-gray-100 p-4 shadow-sm transition bg-white hover:shadow-lg sm:p-6">
      {applied && (
        <div className="absolute w-[303px] h-[229px] bg-[#DAFF3E] rounded-2xl flex justify-center items-center">
          <p className="text-3xl font-semibold">Applied 🥳</p>
        </div>
      )}
      <div className="flex flex-row justify-between text-left">
        <div>
          <p className="text-[#797979] mb-2 font-normal sm:text-base text-xs text-[1vh] mt-1">
            {job.company}
          </p>
          <p className="text-black font-normal sm:text-base text-xs text-[1vh] mt-1">
            {job.title}
          </p>
        </div>
        <div>
          <img src={job.logo} alt="" />
        </div>
      </div>

      <div className="flex flex-row justify-between my-4 text-left">
        <p className="text-[#D7F050] font-normal sm:text-base text-xs text-[1vh] mt-1">
          ${job.salary.min} - ${job.salary.max}
        </p>
        <p className="text-black font-normal sm:text-base text-xs text-[1vh] mt-1 mr-3">
          REMOTE
        </p>
      </div>

      <p className="text-left leading-relaxed text-gray-500 line-clamp-3 font-normal sm:text-base text-xs text-[1vh] mt-1">
        {job.description}
      </p>

      <div className="mt-8 justify-between flex xs:flex-col">
        <button
          type="button"
          onClick={onClickApply}
          className="border-2 rounded-full py-1 font-bold bg-[#DAFF3E] border-black text-black hover:bg-[#DAFF3E] sm:text-base text-xs text-[1vh] mt-1"
        >
          {job.status === 0 ? "FAST APPLY" : "Check Status"}
        </button>
        <a className="border-2 rounded-full py-1 font-bold bg-black text-[#DAFF3E] flex sm:text-base text-xs text-[1vh] mt-1 justify-center">
          <img src={dollarbag} alt="" className="w-auto h-5" />
          REFER & GET
          {job.bounty.min} {job.bounty.max}
        </a>
      </div>
    </article>
  );
}

export default MyJob;
