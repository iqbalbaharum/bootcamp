import React, { useContext } from "react";
import { ProfileFormContext } from ".";

const Buttons = () => {
  const profileFormContext = useContext(ProfileFormContext);

  const onSave = () => {
    console.log(profileFormContext.form);
  };

  function profile() {
    window.open("/profiledisplay", "_blank");
  }

  return (
    <div className="py-[7rem]">
      <div className="py-3">
        <button
          type="button"
          className="bg-black border-solid border-2 border-black hover:bg-[#DAFF3E] hover:text-black text-[#DAFF3E] px-16 py-3 rounded-lg font-bold"
          onClick={onSave}
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
          onClick={profile}
        >
          PREVIEW
        </button>
      </div>
    </div>
  );
};

export default Buttons;
