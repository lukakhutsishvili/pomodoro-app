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
      <div className="mt-[18px] flex gap-[10px] justify-between">
        <div
          onClick={() => setFont("robotoSlab")}
          className={`w-10 h-10 flex justify-center items-center bg-black rounded-[50%]`}
        >
          <p className={`${kumbhSans.className} text-[15px] text-white `}>Aa</p>
        </div>
        <div
          onClick={() => setFont("robotoSlab")}
          className={`w-10 h-10 flex justify-center items-center bg-timerBgColor rounded-[50%]`}
        >
          {" "}
          <p className={`${robotoSlab.className} text-[15px] text-white`}>Aa</p>
        </div>
        <div
          onClick={() => setFont("robotoSlab")}
          className={`w-10 h-10 flex justify-center items-center bg-timerBgColor rounded-[50%]`}
        >
          {" "}
          <p className={`${spaceMono.className} text-[15px] text-white`}>Aa</p>
        </div>
      </div>
    </>
  );
};

export default Fonts;