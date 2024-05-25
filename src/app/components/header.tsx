"use client";

import { useContext } from "react";
import {  context } from "../page";

const Header = () => {
  const { name, setName, allInfo } = useContext(context);
  const bgColor =
    allInfo.color === "pomodoro"
      ? "#f87070"
      : allInfo.color === "lightBlue"
      ? "#70f3f8"
      : allInfo.color === "pink"
      ? "#d881f8"
      : "";

  return (
    <div className="xl:mx-[533px] md:mx-[198px] md:mt-[55px] mt-[45px] h-[63px] p-2 flex justify-between rounded-[31px] bg-darkBlue">
      <div
        onClick={() => setName("pomodoro")}
        className={`md:px-[28px] px-[18px] flex items-center  rounded-[26px] cursor-pointer  ${
          name !== "pomodoro" ? "hover:text-[white] " : ""
        }`}
        style={{
          backgroundColor: name === "pomodoro" ? bgColor : "transparent",
        }}
      >
        <p className="text-[12px] font-bold">pomodoro</p>
      </div>
      <div
        onClick={() => setName("short break")}
        className={`md:px-[28px] px-[18px] flex items-center  rounded-[26px] cursor-pointer  ${
          name !== "short break" ? "hover:text-[white] " : ""
        }`}
        style={{
          backgroundColor: name === "short break" ? bgColor : "transparent",
        }}
      >
        <p className="text-[12px] font-bold">short break</p>
      </div>
      <div
        onClick={() => setName("long break")}
        className={`md:px-[28px] px-[18px] flex items-center  rounded-[26px] cursor-pointer  ${
          name !== "long break" ? "hover:text-[white] " : ""
        }`}
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
