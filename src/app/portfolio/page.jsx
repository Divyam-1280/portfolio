"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

const PortfolioPage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}>
      <div className=" flex flex-col gap-6">
        <div className=" mt-8 w-full flex justify-center md:text-4xl text-2xl font-semibold sm:px-8 md:px-12 lg:px-20 xl:px-48">
          <h1>Portfolio</h1>
          <Button />
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
