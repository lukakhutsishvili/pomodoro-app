"use client";

import Image from "next/image";
import Header from "./components/header";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { Kumbh_Sans, Roboto_Slab, Space_Mono } from "next/font/google";
import Modal from "./pages/modal";

export const kumbhSans = Kumbh_Sans({ subsets: ["latin"], weight: "700" });
export const robotoSlab = Roboto_Slab({ subsets: ["latin"], weight: "400" });
export const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: "700",
});

interface HomeType {
  kumbhSans: string;
}
interface contextType {
  font: String;
  setFont: React.Dispatch<string>;
  color: String;
  setColor: React.Dispatch<string>;
}

const context = createContext<contextType>({
  font: "khumbrSans",
  setFont: () => {},
  color: "pomodoro",
  setColor: () => {},
});

export default function Home() {
  const [modal, setModal] = useState<boolean>(true);
  const [pomodoro, setPomodoro] = useState<number>(25);
  const [shortBreak, setShortBreak] = useState(5);
  const [longBreak, setlongBreak] = useState(5);
  const [font, setFont] = useState("khumbrSans");
  const [color, setColor] = useState("pomodoro");

  console.log(pomodoro);
  return (
    <context.Provider value={{ font, setFont, color, setColor }}>
      <main className={`px-6 kumbh-font grid relative  `}>
        <div className="mt-8 flex justify-center">
          <img src="/assets/logo.svg" alt="Logo" />
        </div>
        <Header />
        <div className="w-[300px] h-[300px] rounded-[50%] bg justify-self-center mt-12 p-4 ">
          <div className="p-[10px] bg-darkBlue h-full rounded-[50%]"></div>
        </div>
        <img
          onClick={() => setModal(true)}
          className="justify-self-center mt-[79px] cursor-pointer"
          src="/assets/icon-settings.svg"
        />
        <Modal
          modal={modal}
          setModal={setModal}
          pomodoro={pomodoro}
          setPomodoro={setPomodoro}
          shortBreak={shortBreak}
          setShortBreak={setShortBreak}
          longBreak={longBreak}
          setLongtBreak={setlongBreak}
        />
      </main>
    </context.Provider>
  );
}

export function FontContext() {
  return useContext(context);
}
