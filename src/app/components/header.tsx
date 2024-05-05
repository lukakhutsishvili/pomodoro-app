"use client";

import { useState } from "react";

const Header = () => {
  const [name, setName] = useState("pomodoro");
  const bgColor = " #f87070";

  return (
    <div className="mt-[45px] h-[63px] p-2 flex justify-between rounded-[31px] bg-darkBlue">
      <div
        onClick={() => setName("pomodoro")}
        className={`px-[18px] flex items-center  rounded-[26px] cursor-pointer`}
        style={{
          backgroundColor: name === "pomodoro" ? bgColor : "transparent",
        }}
      >
        <p className="text-[12px] font-bold">pomodoro</p>
      </div>
      <div
        onClick={() => setName("short break")}
        className={`px-[18px] flex items-center  rounded-[26px] cursor-pointer`}
        style={{
          backgroundColor: name === "short break" ? bgColor : "transparent",
        }}
      >
        <p className="text-[12px] font-bold">short break</p>
      </div>
      <div
        onClick={() => setName("long break")}
        className={`px-[18px] flex items-center  rounded-[26px] cursor-pointer`}
        style={{
          backgroundColor: name === "long break" ? bgColor : "transparent",
        }}
      >
        <p className="text-[12px] font-bold">long break</p>
      </div>
    </div>
  );
};

export default Header;
