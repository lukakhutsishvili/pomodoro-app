import React, { useState } from "react";

export const EncreaseTime: React.FC<{ animateUp: boolean }> = ({
  animateUp,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const strokeOpacity = isHovered ? "" : "0.25";

  return (
    <svg
      className={animateUp ? "animateClick" : ""}
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="7"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <path
        fill="none"
        stroke="#1E213F"
        style={{ strokeOpacity }}
        strokeWidth="2"
        d="M1 6l6-4 6 4"
      />
    </svg>
  );
};

export const DecreaseTime: React.FC<{ animateDown: boolean }> = ({
  animateDown,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const strokeOpacity = isHovered ? "" : "0.25";

  return (
    <svg
      className={animateDown ? "animateClick" : ""}
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="7"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <path
        fill="none"
        stroke="#1E213F"
        style={{ strokeOpacity }}
        strokeWidth="2"
        d="M1 1l6 4 6-4"
      />
    </svg>
  );
};
