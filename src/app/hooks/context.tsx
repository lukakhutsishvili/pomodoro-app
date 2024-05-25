import { createContext, useContext } from "react";

export const context = createContext<ContextType>({
  font: "khumbrSans",
  setFont: () => {},
  color: "pomodoro",
  setColor: () => {},
  name: "pomodoro",
  setName: () => {},
  allInfo: {
    pomodoro: 25,
    shortBreak: 5,
    longBreak: 5,
    font: "khumbrSans",
    color: "pomodoro",
  },
  setAllInfo: () => {},
});

export const AllContext = () => {
  return useContext(context);
};
