import { allContext } from "../page";

const Colors = () => {
  const { color, setColor } = allContext();

  return (
    <>
      <h2 className="text-[11px] mt-4 leading-[4.23px] text-center">Color</h2>
      <div className="flex mt-[18px]  px-[59px] justify-between">
        <div className="flex justify-center items-center w-[50px] h-[50px] hover:border-solid hover:border-[1px] hover:border-gray rounded-[50%] ">
          <div
            onClick={() => {
              setColor("pomodoro");
            }}
            className=" bg-pomodoro flex justify-center items-center rounded-[50%] w-10 h-10 cursor-pointer"
          >
            {color === "pomodoro" ? <img src="/assets/Path 2.png" /> : ""}
          </div>
        </div>
        <div className="flex justify-center items-center w-[50px] h-[50px] hover:border-solid hover:border-[1px] hover:border-gray rounded-[50%] ">
          <div
            onClick={() => {
              setColor("lightBlue");
            }}
            className=" bg-lightBlue flex justify-center items-center rounded-[50%]  w-10 h-10 cursor-pointer"
          >
            {color === "lightBlue" ? <img src="/assets/Path 2.png" /> : ""}
          </div>
        </div>
        <div className="flex justify-center items-center w-[50px] h-[50px] hover:border-solid hover:border-[1px] hover:border-gray rounded-[50%] ">
          <div
            onClick={() => {
              setColor("pink");
            }}
            className=" bg-pink flex justify-center items-center rounded-[50%]  w-10 h-10 cursor-pointer"
          >
            {color === "pink" ? <img src="/assets/Path 2.png" /> : ""}
          </div>
        </div>
      </div>
    </>
  );
};

export default Colors;
