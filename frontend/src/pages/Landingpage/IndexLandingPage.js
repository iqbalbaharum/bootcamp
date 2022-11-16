import React from "react";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";

function IndexLandingPage(props) {
  props.funcNav(false);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#DAFF3E]">
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </div>
  );
}

export default IndexLandingPage;
