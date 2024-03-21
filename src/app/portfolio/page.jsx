"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import "./../globals.css";
import { PinContainer } from "@/components/ui/3d-pin";
import Link from "next/link";

const PortfolioPage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}>
      <div className="h-full flex flex-col gap-6 overflow-auto scrollbar-hide">
        <div className=" mt-12 w-full flex justify-center font-bold sm:px-8 md:px-12 lg:px-20 xl:px-48">
          <Button />
        </div>
        <div className="w-full flex mt-10 justify-center md:text-4xl text-3xl font-semibold sm:px-8 md:px-12 lg:px-20 xl:px-48">
          <h1>Projects</h1>
        </div>
        <div className="w-full h-full pb-28 mt-10 flex flex-wrap gap-11 justify-center md:text-3xl text-2xl font-semibold sm:px-8 md:px-12 lg:px-20 xl:px-32">
          <a href="https://www.munsoc.in">
            <PinContainer
              title="Visit the Website"
              href="https://www.munsoc.in">
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-black">
                  MUNSOC Website
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-black ">
                    The official website of the Model United Nations club of NIT
                    Agartala
                  </span>
                </div>
                <div className="flex flex-1 w-full rounded-lg mt-4 munsoc-image" />
              </div>
            </PinContainer>
          </a>
          <a href="https://mesua-ferrea.vercel.app/">
            <PinContainer
              title="Visit the Website"
              href="https://mesua-ferrea.vercel.app/">
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-black">
                  Mesua Ferrea Restaurant
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-black ">
                    Website for a Restaurant in the institute campus for their
                    order and inventory management
                  </span>
                </div>
                <div className="flex flex-1 w-full rounded-lg mt-4 mesua-image" />
              </div>
            </PinContainer>
          </a>
          <a href="https://pricerice.vercel.app/">
            <PinContainer
              title="Visit the Website"
              href="https://pricerice.vercel.app/">
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-black">
                  PriceRice
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-black ">
                    Website that scrapes Amazon product data and notifies users
                    when the prices change.
                  </span>
                </div>
                <div className="flex flex-1 w-full rounded-lg mt-4 pricerice-image" />
              </div>
            </PinContainer>
          </a>
          <a href="https://www.munsoc.in">
            <PinContainer
              title="Visit the Website"
              href="https://www.munsoc.in">
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-black">
                  MUNSOC Website
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-black ">
                    The official website of the Model United Nations club of NIT
                    Agartala
                  </span>
                </div>
                <div className="flex flex-1 w-full rounded-lg mt-4 munsoc-image" />
              </div>
            </PinContainer>
          </a>
          <a href="https://www.munsoc.in">
            <PinContainer
              title="Visit the Website"
              href="https://www.munsoc.in">
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-black">
                  MUNSOC Website
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-black ">
                    The official website of the Model United Nations club of NIT
                    Agartala
                  </span>
                </div>
                <div className="flex flex-1 w-full rounded-lg mt-4 munsoc-image" />
              </div>
            </PinContainer>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
