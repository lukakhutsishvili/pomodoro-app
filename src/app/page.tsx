"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main className="px-6 kumbh-font">
      <div className="mt-8 flex justify-center">
        <Image
          src="/assets/logo.svg"
          alt="Logo"
          width={200}
          height={100}
          unoptimized={true}
        />
      </div>
      <div className="mt-[45px] h-[63px] p-2 flex justify-between rounded-[31px] bg-darkBlue">
        <div className="px-[18px] flex items-center bg-red-500 rounded-[26px]">
          <p className="text-[12px] font-bold">pomodoro</p>
        </div>
        <div className="px-[18px] flex items-center rounded-[26px]">
          <p className="text-[12px] font-bold">short break</p>
        </div>
        <div className="px-[18px] flex items-center rounded-[26px]">
          <p className="text-[12px] font-bold">long break</p>
        </div>
      </div>
      <div className="w-[300px] h-[300px]"></div>
    </main>
  );
}
