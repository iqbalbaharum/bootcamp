import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProfileFormContext } from ".";

const Buttons = () => {

  const profileFormContext = useContext(ProfileFormContext)

  const openPreviewPage = () => {
    window.open('/profile/preview')
  }
  
  return (
    <div className="py-[7rem]">
      <div className="py-3">
        <button
          type="button"
          className="bg-black border-solid border-2 border-black text-[#DAFF3E] px-16 py-3 rounded-lg font-bold"
          onClick={profileFormContext.onSubmit}
        >
          SAVE
        </button>
      </div>

      <div className="py-3">
        <button
          type="button"
          className="bg-transparent border-solid border-2 border-black hover:bg-[#DAFF3E] text-[#000000] px-14 py-3 rounded-lg font-bold"
        >
          DISCARD
        </button>
      </div>
      <div className="py-3">
        <button
          type="button"
          className="bg-transparent border-solid border-2 border-black hover:bg-[#DAFF3E] text-[#000000] px-14 py-3 rounded-lg font-bold"
          onClick={() => openPreviewPage()}
        >
          PREVIEW
        </button>
      </div>
    </div>
  );
};

export default Buttons;
