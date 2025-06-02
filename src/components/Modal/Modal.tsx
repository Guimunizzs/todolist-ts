import React from "react";

interface Props {
  children: React.ReactNode;
}

const Modal = ({ children }: Props) => {
  return (
    <div>
      <div className=" w-full h-full absolute bg-color-black opacity-30"></div>
      <div className=" flex flex-col justify-center text-center absolute w-xl h-96 z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded shadow-md z-10">
        <h1 className="text-2xl font-bold mb-4">Modal</h1>
        {children}
      </div>
    </div>
  );
};

export default Modal;
