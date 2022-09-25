import React from "react";

const CuentaOption = ({ title, img }) => {
  return (
    <button className="mb-2 shadow-[0_0px_5px_4px_rgba(0,0,0,0.05)] px-2 py-4 hover:bg-stone-300/50 w-full md:mb-4 lg:mb-2">
      <span className="flex items-center text-xl cursor-pointer md:text-2xl lg:text-base">
        <span className="mr-3">
            <img src={img} className="w-6 md:w-8 lg:w-6" alt="Icono" />
        </span>
        {title}
      </span>
    </button>
  );
};

export default CuentaOption;
