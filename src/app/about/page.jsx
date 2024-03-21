"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { motion } from "framer-motion";
import "./page.css";

const icons = [
  {
    id: 1,
    name: "HTML",
    image: "/html.png",
  },
  {
    id: 2,
    name: "CSS",
    image: "/css.png",
  },
  {
    id: 3,
    name: "JavaScript",
    image: "/javascript.png",
  },
  {
    id: 4,
    name: "TailwindCSS",
    image: "/tailwindcss.png",
  },
  {
    id: 5,
    name: "ReactJS",
    image: "/reactjs.png",
  },
  {
    id: 6,
    name: "Redux",
    image: "/redux.png",
  },
  {
    id: 7,
    name: "NEXTJs",
    image: "/nextjs.png",
  },
  {
    id: 8,
    name: "MongoDB",
    image: "/mongodb.png",
  },
  {
    id: 9,
    name: "ThreeJS",
    image: "/threejs.png",
  },
  {
    id: 10,
    name: "Canva",
    image: "/canva.png",
  },
  {
    id: 11,
    name: "Github",
    image: "/github.png",
  },
  {
    id: 12,
    name: "Java",
    image: "/java.png",
  },
  {
    id: 13,
    name: "Sass",
    image: "/sass.png",
  },
];

const About = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}>
      <div className="h-full overflow-y-scroll overflow-x-hidden scrollbar-hide">
        <div className="md:h-1/2 max-md:mb-10 px-4 flex md:flex-row max-md:pt-10 md:justify-center gap-8 flex-col sm:px-8 md:px-12 lg:px-20 xl:px-48">
          <div className="md:w-1/3 flex justify-center items-center">
            <h1 className="md:text-6xl text-4xl font-semibold text-white">
              About Me
            </h1>
          </div>
          <div className=" h-[65%] my-auto w-1 rounded-lg bg-white md:block hidden"></div>
          <div className="md:w-1/3 items-center justify-center flex md:ml-12">
            <h2 className=" text-justify font-sans font-medium text-white">
              I am Divyam, a skilled web developer specializing in frontend
              development. I am passionate about exploring innovative web
              technologies and creating captivating websites. In addition to my
              technical expertise, I place a strong emphasis on honing my
              communication skills, which is one of the strongest point of my
              personality.
            </h2>
          </div>
        </div>
        <div className="sm:px-8 md:px-12 lg:px-20 xl:px-48 items-center justify-center flex gap-20 flex-col">
          <div className="md:w-1/3 flex justify-center items-center">
            <div className="md:text-4xl text-2xl font-bold underline underline-offset-4 text-white">
              Tech Stack
            </div>
          </div>
          <div className="flex flex-row flex-wrap items-center justify-center gap-16 md:gap-20 mb-10 w-full cursor-pointer sm:px-10 md:px-14 lg:px-20 xl:px-48">
            <AnimatedTooltip items={icons} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
