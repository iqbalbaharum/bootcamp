import React, { useContext } from "react";
import { UserProfileContext } from "./display";
// import image from "../../assets/img/image.png";

const SkillTag = ({skill}) => {
  console.log(skill)
  return (
    <div className="flex justify-center capitalize items-center bg-black border-solid border-2 border-black text-[#DAFF3E] rounded-full font-semibold">
      {skill}
    </div>
  )
}

const OtherSkillTag = ({ skill }) => {
  return (
    <div className=" flex justify-center capitalize items-center bg-white border-solid border-2 border-black text-[#000000] rounded-full font-bold">
      {skill}
    </div>
  )
}
function Skills() {

  const {profile} = useContext(UserProfileContext)

  return (
    <div className="my-[2rem] text-left sm:mx-4">
      <form>
        <div className="flex flex-row justify-between xs:text-sm">
          <div className="flex flex-col w-[50%] mr-3">
            <div className="pb-[1rem]">Main Skills</div>
            <div className="grid sm:grid-cols-3 grid-flow-row-dense auto-rows-auto gap-1 xs:text-[1.5vh]">
              {profile.skills.map((skill) => {
                return (
                  <SkillTag skill={skill} />
                )
              })}
            </div>
          </div>
          <div className="flex flex-col w-[50%]">
            <div className="pb-[1rem]">Other Skills</div>
            <div className="grid sm:grid-cols-3 grid-flow-row-dense auto-rows-auto gap-1 xs:text-[1.5vh]">
              {profile.otherskills.map((skill) => {
                return (<OtherSkillTag skill={skill} key={skill} />)
              })}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Skills;
