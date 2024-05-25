import React, { useState } from "react";
import { DecreaseTime, EncreaseTime } from "../images/svgs";
import Fonts from "../components/Fonts";
import Colors from "../components/Colors";
import { Kumbh_Sans, Roboto_Slab, Space_Mono } from "next/font/google";
import { AllContext } from "../hooks/context";

const kumbhSans = Kumbh_Sans({
  subsets: ["latin"],
  weight: "700",
  variable: "--kumbhSans",
});
const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: "400",
  variable: "--roboto",
});
const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: "700",
  variable: "--spaceMono",
});

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

  const { font, setAllInfo, color } = AllContext();

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
            ? "xl:pt-[155px] xl:px-[450px] md:px-[114px] md:pt-[267px] w-full  flex px-6  absolute pb-[72px]"
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
      <div className="md:mt-0 md:px-[39px] md:pt-[34px] bg-white mt-11 px-6 pt-6 w-full h-fit relative rounded-[15px] pb-[54px] ">
        <div className="flex justify-between items-center">
          <h1 className="md:text-[28px] font-bold text-[20px]">Settings</h1>
          <img
            onClick={() => setModal(false)}
            className="h-3 cursor-pointer"
            src="/assets/icon-close.svg"
            alt="Close"
          />
        </div>
        <div className="md:top-[93px] absolute h-[1px] w-full bg-gray top-[72px] left-0"></div>
        <h2 className="md:text-left mt-[53px] text-center tracking-[4.24px] text-[11px] md:text-[13px]">
          Time (Minutes)
        </h2>
        <div className="md:mt-[26px] md:gap-0 mt-[18px] flex flex-col ">
          <div className="md:justify-between md:flex-row flex flex-col md:gap-5 gap-2">
            {/* pomodoro */}
            <div className="md:items-start md:gap-[8px] md:flex-col flex justify-between items-center">
              <p className="text-darkBlue text-[12px] opacity-[0.4]">
                Pomodoro
              </p>
              <div className="md:h-12 flex justify-between items-center w-[140px] h-10 bg-timerBgColor px-4 rounded-[10px]">
                <p className="text-[14px]">{pomodoro}</p>
                <div className=" flex flex-col gap-[9px]">
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
            <div className="md:items-start md:flex-col md:gap-[8px]  flex justify-between items-center">
              <p className="text-darkBlue  text-[12px] opacity-[0.4]">
                short Break
              </p>
              <div className=" md:h-12 flex justify-between items-center w-[140px] h-10 bg-timerBgColor px-4 rounded-[10px]">
                <p className="text-[14px]">{shortBreak}</p>
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
            <div className="md:items-start md:flex-col md:gap-[8px]  flex justify-between items-center">
              <p className="text-darkBlue  text-[12px] opacity-[0.4]">
                long break{" "}
              </p>
              <div className="md:h-12 flex justify-between items-center w-[140px] h-10 bg-timerBgColor px-4 rounded-[10px]">
                <p className="text-[14px]">{longBreak}</p>
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
          <div className="md:mt-6 h-[1px] w-full bg-gray mt-[49px]"></div>
          <Fonts />
          <div className="md:mt-6  h-[1px] w-full bg-gray mt-6 "></div>
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
