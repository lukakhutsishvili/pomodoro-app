"use client";
import Header from "./components/header";
import React, { createContext, useContext, useState } from "react";
import { Kumbh_Sans, Roboto_Slab, Space_Mono } from "next/font/google";
import Modal from "./pages/modal";
import Timer from "./components/timer";
import { context } from "./hooks/context";

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



export default function Home() {
  const [name, setName] = useState("pomodoro");
  const [modal, setModal] = useState<boolean>(false);
  const [pomodoro, setPomodoro] = useState<number>(25);
  const [shortBreak, setShortBreak] = useState(5);
  const [longBreak, setlongBreak] = useState(5);
  const [font, setFont] = useState("khumbrSans");
  const [color, setColor] = useState("pomodoro");

  const [allInfo, setAllInfo] = useState<AllInfoType>({
    pomodoro,
    shortBreak,
    longBreak,
    font,
    color,
  });

  return (
    <context.Provider
      value={{
        font,
        setFont,
        color,
        setColor,
        name,
        setName,
        allInfo,
        setAllInfo,
      }}
    >
      <main
        className={` md:pb-[112px] md:px-[0px] px-6 kumbh-font grid relative  ${
          allInfo.font === "khumbrSans"
            ? kumbhSans.className
            : allInfo.font === "robotoSlab"
            ? robotoSlab.className
            : allInfo.font === "spaceMono"
            ? spaceMono.className
            : ""
        } `}
      >
        <div className="xl:mt-12 md:mt-20 mt-8 flex justify-center">
          <img src="/assets/logo.svg" alt="Logo" />
        </div>
        <Header />
        <Timer />
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

