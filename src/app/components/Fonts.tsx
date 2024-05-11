import { Kumbh_Sans, Roboto_Slab, Space_Mono } from "next/font/google";
import { useContext } from "react";
import { FontContext } from "../page";

const kumbhSans = Kumbh_Sans({ subsets: ["latin"], weight: "700" });
const robotoSlab = Roboto_Slab({ subsets: ["latin"], weight: "400" });
const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: "700",
});

const Fonts = () => {
  const { font, setFont } = FontContext();

  return (
    <>
      <h2 className="mt-6 text-[11px] leading-[4.23px] text-center">Font</h2>
      <div className="mt-[18px] flex  justify-between px-[59px]">
        <div className="flex justify-center items-center w-[50px] h-[50px] hover:border-solid hover:border-[1px] hover:border-gray rounded-[50%] ">
          <div
            onClick={() => setFont("kumbhSans")}
            className={`w-10 h-10 flex justify-center items-center bg-black rounded-[50%] cursor-pointer`}
          >
            <p className={`${kumbhSans.className} text-[15px] text-white `}>
              Aa
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center w-[50px] h-[50px] hover:border-solid hover:border-[1px] hover:border-gray rounded-[50%] ">
          <div
            onClick={() => setFont("robotoSlab")}
            className={`w-10 h-10 flex justify-center items-center bg-timerBgColor rounded-[50%] cursor-pointer`}
          >
            {" "}
            <p className={`${robotoSlab.className} text-[15px] text-white`}>
              Aa
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center w-[50px] h-[50px] hover:border-solid hover:border-[1px] hover:border-gray rounded-[50%] ">
          <div
            onClick={() => setFont("spaceMono")}
            className={`w-10 h-10 flex justify-center items-center bg-timerBgColor rounded-[50%] cursor-pointer`}
          >
            {" "}
            <p className={`${spaceMono.className} text-[15px] text-white`}>
              Aa
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fonts;
