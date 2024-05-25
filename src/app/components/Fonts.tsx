import { Kumbh_Sans, Roboto_Slab, Space_Mono } from "next/font/google";
import { AllContext } from "../hooks/context";

const kumbhSans = Kumbh_Sans({ subsets: ["latin"], weight: "700" });
const robotoSlab = Roboto_Slab({ subsets: ["latin"], weight: "400" });
const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: "700",
});

const Fonts = () => {
  const { font, setFont } = AllContext();

  return (
    <div className="md:flex items-center justify-between md:mt-[19px] ">
      <h2 className="md:mt-0 md:text-[13px] tracking-[4.24px] mt-6 text-[11px] text-center">
        Font
      </h2>
      <div className="md:mt-0 md:gap-[2px] md:px-0 mt-[18px] flex  justify-between px-[59px]">
        <div className="flex justify-center items-center w-[50px] h-[50px] hover:border-solid hover:border-[1px] hover:border-gray rounded-[50%] ">
          <div
            onClick={() => setFont("khumbrSans")}
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
    </div>
  );
};

export default Fonts;
