export const EncreaseTime: React.FC<{ animateUp: boolean }> = ({
  animateUp,
}) => {
  return <svg
        className={animateUp ? "animateClick" : ""}
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="7"
    >
        <path
            fill="none"
            stroke="#1E213F"
            strokeOpacity={animateUp ? "" : ".25"}
            strokeWidth="2"
            d="M1 6l6-4 6 4" />
    </svg>;
};


export const DecreaseTime: React.FC<{ animateDown: boolean }> = ({ animateDown }) => {
  return (
    <svg
      className={animateDown ? "animateClick" : ""}
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="7"
    >
      <path
        fill="none"
        stroke="#1E213F"
        strokeOpacity={animateDown ? "" : ".25"}
        strokeWidth="2"
        d="M1 1l6 4 6-4"
      />
    </svg>
  );
};
