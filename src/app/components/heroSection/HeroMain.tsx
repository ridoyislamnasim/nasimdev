'use client'

import HeroText from "./HeroText";
import HeroPic from "./HeroPic";

const HeroMain = () => {
  return (
    <div className="md:pt-40 pt-10 md:pb-16 pb-10">
      <div className="flex md:flex-row flex-col max-w-[1200px] mx-auto justify-between items-center relative px-4 gap-20">
        <HeroText />
        <HeroPic />
      </div>
    </div>
  );
};

export default HeroMain;
