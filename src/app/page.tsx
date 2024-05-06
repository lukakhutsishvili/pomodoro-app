"use client";

import Image from "next/image";
import Header from "./components/header";
import { useState } from "react";
import { Kumbh_Sans, Roboto_Slab, Space_Mono } from "next/font/google";
import Modal from "./components/modal";

const kumbhSans = Kumbh_Sans({ subsets: ["latin"], weight: "700" });
const robotoSlab = Roboto_Slab({ subsets: ["latin"], weight: "400" });
const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: "700",
});

interface HomeType {
  kumbhSans: string;
}

export default function Home() {
  const [modal, setModal] = useState<boolean>(true);

  return (
    <main className={`px-6 kumbh-font grid relative ${kumbhSans.className}`}>
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
      <Modal modal={modal} setModal={setModal} />
    </main>
  );
}
