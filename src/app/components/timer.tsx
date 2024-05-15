import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { allContext } from "../page";
import { useEffect, useState } from "react";

type TimerType = {
  pomodoro: number;
  shortBreak: number;
  longBreak: number;
};

type TimerMode = "pomodoro" | "shortBreak" | "longBreak";

const Timer = () => {
  const { allInfo, name } = allContext();

  const bgColor =
    allInfo.color === "pomodoro"
      ? "#f87070"
      : allInfo.color === "lightBlue"
      ? "#70f3f8"
      : allInfo.color === "pink"
      ? "#d881f8"
      : "";

  const [pause, setPause] = useState({
    pomodoro: false,
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
    const timer = setInterval(() => {

      if (minutes[currentMode] === 0 && seconds[currentMode] === 0) {

        clearInterval(timer);
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

    return () => clearInterval(timer);
  }, [minutes, seconds]);

  const totalSeconds = allInfo[currentMode] * 60;
  const remainingSeconds = minutes[currentMode] * 60 + seconds[currentMode];
  const percentage = ((totalSeconds - remainingSeconds) / totalSeconds) * 100;

  return (
    <div className="w-[300px] h-[300px] rounded-[50%] bg justify-self-center mt-12 p-4 ">
      <div className="p-[10px] bg-darkBlue h-full rounded-[50%]">
        <CircularProgressbar
          value={100 - percentage}
          text={`${formattedTime(minutes[currentMode])}:${formattedTime(
            seconds[currentMode]
          )} `}
          styles={buildStyles({
            pathColor: bgColor,
            strokeLinecap: "round",
            textColor: "#d7e0ff",
            textSize: "16px",
            trailColor: "transparent",
          })}
        />
      </div>
    </div>
  );
};

export default Timer;
