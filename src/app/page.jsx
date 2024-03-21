"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}>
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <div className="h-full">
            <Image
              src="/Divyam.png"
              alt="Divyam"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div className=" lg:h-full lg:w-1/2 flex flex-col gap-6 items-center justify-center">
          {/* Title */}
          <h1 className="md:text-5xl text-white text-3xl font-bold pt-2">
            I am Divyam Raj Singh and I am a Software Developer
          </h1>
          {/* DESCRIPTION */}
          <p className="md:text-lg text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat,
            nulla praesentium! Laborum natus veniam cum aperiam similique
            temporibus id ducimus! lorem ipsum dolor sit, amet consectetur Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Vitae, laborum.
          </p>
          {/* BUTTONS */}
          <div className="flex gap-4 w-full pb-2 justify-center">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
              View My Work
            </button>
            <button className="p-4 rounded-lg ring-1 ring-white text-white">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
