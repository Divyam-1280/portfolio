"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import "./globals.css";

const Homepage = () => {
  const router = useRouter();

  const onWorkSubmit = () => {
    router.push("/portfolio");
  };

  const onContactSubmit = () => {
    router.push("/contact");
  };
  return (
    <motion.div
      className="h-full overflow-scroll scrollbar-hide"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}>
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        <div className="h-full flex items-center justify-center lg:w-1/2 relative">
          <div className="md:-mt-16">
            <Image
              src="/Divyam.png"
              alt="Divyam"
              height={300}
              width={300}
              className="object-contain"
            />
          </div>
        </div>
        <div className=" lg:h-full lg:w-1/2 flex flex-col gap-6 items-center justify-center">
          {/* Title */}
          <h1 className="md:text-5xl text-white text-3xl font-bold pt-2">
            I am Divyam and I am a Software Developer
          </h1>
          {/* DESCRIPTION */}
          <p className="md:text-lg text-white">
            I am a dedicated software developer with a passion for creating
            exceptional websites. Specializing in frontend development, I craft
            digital experiences that captivate and inspire. My enthusiasm for
            learning new things drives me to multitask and excel in what I love.
          </p>
          {/* BUTTONS */}
          <div className="flex gap-4 w-full pb-2 mb-4 justify-center">
            <button
              className="p-4 rounded-lg ring-1 view-work ring-black bg-black text-white"
              onClick={onWorkSubmit}>
              View My Work
            </button>
            <button
              className="p-4 rounded-lg ring-1 contact-button ring-white text-white"
              onClick={onContactSubmit}>
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
