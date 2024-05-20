import { Kumbh_Sans, Roboto_Slab, Space_Mono } from "next/font/google";
import React, { useState } from "react";
import { DecreaseTime, EncreaseTime } from "../images/svgs";
import Fonts from "../components/Fonts";
import Colors from "../components/Colors";
import { allContext, kumbhSans, robotoSlab, spaceMono } from "../page";

const Modal: React.FC<{
  modal: boolean;
  setModal: (modal: boolean) => void;
  pomodoro: number;
  setPomodoro: React.Dispatch<React.SetStateAction<number>>;
  shortBreak: number;
  setShortBreak: React.Dispatch<React.SetStateAction<number>>;
  longBreak: number;
  setLongtBreak: React.Dispatch<React.SetStateAction<number>>;
}> = ({
  modal,
  setModal,
  pomodoro,
  setPomodoro,
  shortBreak,
  setShortBreak,
  longBreak,
  setLongtBreak,
}) => {
  const [animatePomodoroUp, setAnimatePomodoroUp] = useState(false);
  const [animatePomodoroDown, setAnimatePomodoroDown] = useState(false);

  const [animateshortBreakUp, setAnimateshortBreakUp] = useState(false);
  const [animateshortBreakDown, setAnimateshortBreakDown] = useState(false);

  const [animatelongBreakUp, setAnimatelongBreakUp] = useState(false);
  const [animatelongBreakDown, setAnimatelongBreakDown] = useState(false);

  const { font, setAllInfo, color } = allContext();

  const handleIncrease = (
    value: number,
    setter: React.Dispatch<React.SetStateAction<number>>,
    animateSetter: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setter(value + 1);
    animateSetter(true);
    setTimeout(() => animateSetter(false), 300);
  };

  const handleDecrease = (
    value: number,
    setter: React.Dispatch<React.SetStateAction<number>>,
    animateSetter: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setter(value > 0 ? value - 1 : 0);
    animateSetter(true);
    setTimeout(() => animateSetter(false), 300);
  };

  return (
    <div
      className={`
        ${
          modal
            ? "md:px-[114px] md:pt-[267px] w-full min-h-full flex px-6  absolute pb-[72px]"
            : "hidden"
        } ${
        font === "khumbrSans"
          ? kumbhSans.className
          : font === "robotoSlab"
          ? robotoSlab.className
          : font === "spaceMono"
          ? spaceMono.className
          : ""
      } `}
    >
      <div className="md:px-[39px] md:pt-[34px] bg-white mt-11 px-6 pt-6 w-full h-fit relative rounded-[15px] pb-[59px] ">
        <div className="flex justify-between">
          <h1 className="font-bold text-[20px]">Settings</h1>
          <img
            onClick={() => setModal(false)}
            className="h-3 cursor-pointer"
            src="/assets/icon-close.svg"
            alt="Close"
          />
        </div>
        <div className="md:top-[93px] absolute h-[1px] w-full bg-gray top-[72px] left-0"></div>
        <h2 className="md:text-left mt-[53px] text-center">Time (Minutes)</h2>
        <div className=" mt-[18px] flex flex-col gap-2">
          <div className="md:flex gap-5">
            {/* pomodoro */}
            <div className=" md:flex-col flex justify-between items-center">
              <p className="text-darkBlue opacity-[0.4]">Pomodoro</p>
              <div className="flex justify-between items-center w-[140px] h-10 bg-timerBgColor px-4 rounded-[10px]">
                <p>{pomodoro}</p>
                <div className="flex flex-col gap-[9px]">
                  <div
                    onClick={() =>
                      handleIncrease(
                        pomodoro,
                        setPomodoro,
                        setAnimatePomodoroUp
                      )
                    }
                  >
                    <EncreaseTime animateUp={animatePomodoroUp} />
                  </div>
                  <div
                    onClick={() =>
                      handleDecrease(
                        pomodoro,
                        setPomodoro,
                        setAnimatePomodoroDown
                      )
                    }
                  >
                    <DecreaseTime animateDown={animatePomodoroDown} />
                  </div>
                </div>
              </div>
            </div>
            {/*  short Break */}
            <div className="md:flex-col  flex justify-between items-center">
              <p className="text-darkBlue opacity-[0.4]">short Break</p>
              <div className="flex justify-between items-center w-[140px] h-10 bg-timerBgColor px-4 rounded-[10px]">
                <p>{shortBreak}</p>
                <div className="flex flex-col gap-[9px]">
                  <div
                    onClick={() =>
                      handleIncrease(
                        shortBreak,
                        setShortBreak,
                        setAnimateshortBreakUp
                      )
                    }
                  >
                    <EncreaseTime animateUp={animateshortBreakUp} />
                  </div>
                  <div
                    onClick={() =>
                      handleDecrease(
                        shortBreak,
                        setShortBreak,
                        setAnimateshortBreakDown
                      )
                    }
                  >
                    <DecreaseTime animateDown={animateshortBreakDown} />
                  </div>
                </div>
              </div>
            </div>
            {/* long break  */}
            <div className="md:flex-col  flex justify-between items-center">
              <p className="text-darkBlue opacity-[0.4]">long break </p>
              <div className="flex justify-between items-center w-[140px] h-10 bg-timerBgColor px-4 rounded-[10px]">
                <p>{longBreak}</p>
                <div className="flex flex-col gap-[9px]">
                  <div
                    onClick={() =>
                      handleIncrease(
                        longBreak,
                        setLongtBreak,
                        setAnimatelongBreakUp
                      )
                    }
                  >
                    <EncreaseTime animateUp={animatelongBreakUp} />
                  </div>
                  <div
                    onClick={() =>
                      handleDecrease(
                        longBreak,
                        setLongtBreak,
                        setAnimatelongBreakDown
                      )
                    }
                  >
                    <DecreaseTime animateDown={animatelongBreakDown} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" h-[1px] w-full bg-gray mt-[49px]"></div>
          <Fonts />
          <div className=" h-[1px] w-full bg-gray mt-6 "></div>
          <Colors />
          <button
            onClick={() => {
              setAllInfo({
                pomodoro,
                shortBreak,
                longBreak,
                font,
                color,
              });
              setModal(false);
            }}
            className={`${
              color === "pomodoro"
                ? "bg-pomodoro"
                : color === "lightBlue"
                ? "bg-lightBlue"
                : color === "pink"
                ? "bg-pink"
                : ""
            } 
            bottom-[-26.5px] w-[140px] h-[53px] absolute rounded-[26.5px] text-[16px]  text-white left-[50%] translate-x-[-50%]`}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
