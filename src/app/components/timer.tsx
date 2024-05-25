import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useEffect, useState } from "react";
import { AllContext } from "../hooks/context";

type TimerType = {
  pomodoro: number;
  shortBreak: number;
  longBreak: number;
};

type TimerMode = "pomodoro" | "shortBreak" | "longBreak";

const Timer = () => {
  const { allInfo, name } = AllContext();

  const [startTimer, setStartTimer] = useState("Start");

  const bgColor =
    allInfo.color === "pomodoro"
      ? "#f87070"
      : allInfo.color === "lightBlue"
      ? "#70f3f8"
      : allInfo.color === "pink"
      ? "#d881f8"
      : "";

  const [pause, setPause] = useState({
    pomodoro: true,
    shortBreak: true,
    longBreak: true,
  });

  const [seconds, setSeconds] = useState<TimerType>({
    pomodoro: 0,
    shortBreak: 0,
    longBreak: 0,
  });
  const [minutes, setMinutes] = useState<TimerType>({
    pomodoro: allInfo.pomodoro,
    shortBreak: allInfo.shortBreak,
    longBreak: allInfo.longBreak,
  });

  const formattedTime = (time: number) => String(time).padStart(2, "0");

  const getMode = (name: string): TimerMode => {
    switch (name) {
      case "pomodoro":
        return "pomodoro";
      case "short break":
        return "shortBreak";
      case "long break":
        return "longBreak";
      default:
        return "pomodoro";
    }
  };

  const currentMode = getMode(name);

  const resetTimer = (mode: TimerMode) => {
    setMinutes((prev) => ({
      ...prev,
      [mode]: allInfo[mode],
    }));
    setSeconds((prev) => ({
      ...prev,
      [mode]: 0,
    }));
  };

  const handleTimer = () => {
    if (startTimer === "Start") {
      setStartTimer("Pause");
      setPause((prev) => ({ ...prev, [currentMode]: false }));
    } else if (startTimer === "Pause") {
      setStartTimer("Start");
      setPause((prev) => ({ ...prev, [currentMode]: true }));
    } else if (startTimer === "Restart") {
      resetTimer(currentMode);
      setStartTimer("Start"); 
      setPause((prev) => ({ ...prev, [currentMode]: true })); 
    }
  };

  useEffect(() => {
    return () => {
      setStartTimer("Start");
      setPause((prev) => ({
        ...prev,
        [currentMode]: true,
      }));
    };
  }, [name, currentMode]);

  useEffect(() => {
    setMinutes({
      pomodoro: allInfo.pomodoro,
      shortBreak: allInfo.shortBreak,
      longBreak: allInfo.longBreak,
    });
    setSeconds({
      pomodoro: 0,
      shortBreak: 0,
      longBreak: 0,
    });
  }, [allInfo]);

  useEffect(() => {
    if (!pause[currentMode]) {
      const timer = setInterval(() => {
        if (minutes[currentMode] === 0 && seconds[currentMode] === 0) {
          clearInterval(timer);
          setStartTimer("Restart");
          setPause((prev) => ({ ...prev, [currentMode]: true }));
        } else if (seconds[currentMode] > 0) {
          setSeconds((prev) => ({
            ...prev,
            [currentMode]: prev[currentMode] - 1,
          }));
        } else if (minutes[currentMode] > 0 && seconds[currentMode] === 0) {
          setSeconds((prev) => ({ ...prev, [currentMode]: 59 }));
          setMinutes((prev) => ({
            ...prev,
            [currentMode]: prev[currentMode] - 1,
          }));
        }
      }, 1000);
      return () => {
        clearInterval(timer);
      };
    }
  }, [minutes, seconds, pause]);

  const totalSeconds = allInfo[currentMode] * 60;
  const remainingSeconds = minutes[currentMode] * 60 + seconds[currentMode];
  const percentage = ((totalSeconds - remainingSeconds) / totalSeconds) * 100;

  return (
    <div className="xl:mt-[45px] md:mt-[109px] md:w-[410px] md:p-[22px] md:h-[410px] w-[300px] h-[300px] rounded-[50%] bg justify-self-center mt-12 p-4 box shadow-xl relative">
      <div className="md:p-[13.5px] p-[10px] bg-darkBlue h-full rounded-[50%]">
        <CircularProgressbar
          value={100 - percentage}
          text={`${formattedTime(minutes[currentMode])}:${formattedTime(
            seconds[currentMode]
          )} `}
          styles={{
            // Customize the root svg element
            root: {},
            // Customize the path, i.e. the "completed progress"
            path: {
              // Path color
              stroke: bgColor,
              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
              strokeLinecap: "round",
              // Customize transition animation
              transition: "stroke-dashoffset 0.5s ease 0s",
              // Rotate the path
              transform: "",
              transformOrigin: "center center",

              strokeWidth: "5px",
            },
            // Customize the circle behind the path, i.e. the "total progress"
            trail: {
              display: "none",
            },
            // Customize the text
            text: {
              // Text color
              fill: "#d7e0ff",
              // Text size
              fontSize: "30px",
              letterSpacing: "0px",
            },
            // Customize background - only used when the `background` prop is true
            background: {
              fill: "#3e98c7",
            },
          }}
        />
      </div>
      <h1
        onClick={handleTimer}
        className={`text-white ${
          allInfo.color === "pomodoro"
            ? "hover:text-[#f87070]"
            : allInfo.color === "lightBlue"
            ? "hover:text-[#70f3f8]"
            : allInfo.color === "pink"
            ? "hover:text-[#d881f8]"
            : ""
        } md:text-[16px] cursor-pointer font-bold absolute left-[50%] translate-x-[-50%] md:bottom-[108px] bottom-[78px] tracking-[13.13px]`}
      >
        {startTimer}
      </h1>
    </div>
  );
};

export default Timer;
