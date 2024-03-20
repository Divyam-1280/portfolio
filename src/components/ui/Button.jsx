import React from "react";
import { IoDocumentText } from "react-icons/io5";

const Button = () => {
  return (
    <div className="flex justify-center w-28 h-12">
      <a
        href="#_"
        className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl border-2 border-[#000000] p-4 px-5 py-2.5 text-base text-[#C4DFE6] shadow-md transition duration-300 ease-out">
        <span className="absolute inset-0 flex h-full w-full -translate-y-full items-center justify-center bg-[#000000] text-white duration-300 group-hover:translate-y-0">
          <IoDocumentText style={{ fontSize: "24px" }} />
        </span>
        <span className="absolute flex transform items-center justify-center text-[#000000] transition-all duration-300 group-hover:translate-y-full">
          Resume
        </span>
        <span className="invisible relative">Resume</span>
      </a>
    </div>
  );
};

export default Button;
