const Modal: React.FC<{ modal: boolean; setModal(arg: boolean): void }> = ({
  modal,
  setModal,
}) => {
  return (
    <div
      className={`${
        modal ? "block" : "hidden"
      } w-full min-h-full flex px-6 absolute`}
    >
      <div className="bg-white mt-11 px-6 pt-6 w-full ">
        <div className="flex justify-between">
          <h1 className="font-bold text-[20px]">Settings</h1>
          <img onClick={() => setModal(false)} className="h-3" src="/assets/icon-close.svg" />
        </div>
      </div>
    </div>
  );
};

export default Modal;
