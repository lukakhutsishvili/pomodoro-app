import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { allContext } from "../page";
import { useEffect, useState } from "react";

type timerType = {
  pomodoro: number;
  shortBreak: number;
  longBreak: number;
};

const Timer = () => {
  const { allInfo, name } = allContext();
  const mode =
    name === "pomodoro"
      ? allInfo.pomodoro
      : name === "long break"
      ? allInfo.longBreak
      : name === "short break"
      ? allInfo.shortBreak
      : 0;

  const [seconds, setSeconds] = useState<{ [key: string]: number }>({
    pomodoro: 0,
    shortBreak: 0,
    longBreak: 0,
  });
  const [minutes, setMinutes] = useState<{[key: string] : number}>({
    pomodoro: allInfo.pomodoro,
    shortBreak: allInfo.shortBreak,
    longBreak: allInfo.longBreak,
  });

  const formattedMinutes: { [key: string]: string } = {};
  const formattedSeconds: { [key: string]: string } = {};
  // Iterate over each key in minutes object and apply padStart
  for (const key in minutes) {
    formattedMinutes[key] = String(minutes[key]).padStart(2, "0");
  }

  // Iterate over each key in seconds object and apply padStart
  for (const key in seconds) {
    formattedSeconds[key] = String(seconds[key]).padStart(2, "0");
  }

  console.log(formattedMinutes);
  const bgColor =
    allInfo.color === "pomodoro"
      ? "#f87070"
      : allInfo.color === "lightBlue"
      ? "#70f3f8"
      : allInfo.color === "lightBlue"
      ? "#d881f8"
      : "";

  // useEffect(() => {
  //   setMinutes(mode);
  //   setSeconds(0);
  // }, [name]);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     if (minutes === 0 && seconds === 0) {
  //       clearInterval(timer);
  //     } else if (seconds > 0) {
  //       setSeconds(seconds - 1);
  //     } else if (seconds === 0) {
  //       if (minutes > 0) {
  //         setMinutes(minutes - 1);
  //         setSeconds(59);
  //       }
  //     }
  //   }, 1000);

  //   return () => clearInterval(timer);
  // }, [minutes, seconds]);

  return (
    <div className="w-[300px] h-[300px] rounded-[50%] bg justify-self-center mt-12 p-4 ">
      <div className="p-[10px] bg-darkBlue h-full rounded-[50%]">
        <CircularProgressbar
          value={50}
          text={`${formattedMinutes}:${formattedSeconds}`}
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
              fontSize: "16px",
            },
            // Customize background - only used when the `background` prop is true
            background: {
              fill: "#3e98c7",
            },
          }}
        />
      </div>
    </div>
  );
};

export default Timer;
