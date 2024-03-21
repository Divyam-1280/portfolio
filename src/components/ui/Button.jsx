import React from "react";
import { IoDocumentText } from "react-icons/io5";

const Button = () => {
  return (
    <div className="flex justify-center w-56 px-3 h-12">
      <a
        href="https://drive.google.com/file/d/1Sy0B_ek3Td31t1WiASTS-hGFdOaOSr0_/view?usp=drive_link"
        className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl border-2 border-[#ffffff] p-4 px-5 py-2.5 text-base text-[#ffffff] shadow-md transition duration-300 ease-out">
        <span className="absolute inset-0 flex h-full w-full -translate-y-10 items-center justify-center bg-[#000000] text-white duration-300 group-hover:translate-y-0">
          <IoDocumentText style={{ fontSize: "24px" }} />
        </span>
        <span className="absolute flex transform items-center justify-center text-[#ffffff] transition-all duration-300 group-hover:translate-y-10">
          Download My Resume
        </span>
        <span className="invisible relative">Download My Resume</span>
      </a>
    </div>
  );
};

export default Button;
