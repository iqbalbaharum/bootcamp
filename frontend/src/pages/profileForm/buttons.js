import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProfileFormContext } from ".";

const Buttons = () => {

  const profileFormContext = useContext(ProfileFormContext)

  const onSave = () => {
    console.log(profileFormContext.form)
  }

  return (
    <div className="py-[9rem]">
      {/* button 1 */}
      <div className="py-3">
        <button
          type="button"
          className="bg-black border-solid border-2 border-black text-[#DAFF3E] px-16 py-3 rounded-lg font-bold"
          onClick={onSave}
        >
          SAVE
        </button>
      </div>

      {/* button 2 */}
      <div className="py-3">
        <button
          type="button"
          className="bg-transparent border-solid border-2 border-black text-[#000000] px-14 py-3 rounded-lg font-bold"
        >
          DISCARD
        </button>
      </div>

      {/* button 3 */}
      <div className="py-3">
        <button
          type="button"
          className="bg-transparent border-solid border-2 border-black text-[#000000] px-14 py-3 rounded-lg font-bold"
        >
          <Link to="/profiledisplay">PREVIEW</Link>
        </button>
      </div>
    </div>
  );
}

export default Buttons;
