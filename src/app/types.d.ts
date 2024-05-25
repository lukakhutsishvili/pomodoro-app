type AllInfoType = {
  pomodoro: number;
  shortBreak: number;
  longBreak: number;
  font: string;
  color: string;
};

type ContextType = {
  font: string;
  setFont: Dispatch<SetStateAction<string>>;
  color: string;
  setColor: Dispatch<SetStateAction<string>>;
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  allInfo: AllInfoType;
  setAllInfo: Dispatch<SetStateAction<AllInfoType>>;
};
