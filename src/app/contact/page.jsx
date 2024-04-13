"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Form from "@/components/ui/form";

const ContactPage = () => {
  const text = "Let's Connect!";
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}>
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* Text Container */}
        <div className="h-1/3 lg:h-full lg:w-1/2 flex items-center justify-center lg:text-6xl text-4xl">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                className="text-white"
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}>
                {letter}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Form Container */}
        <Form
          className="h-1/2 lg:full lg:w-1/2 bg-black rounded-xl text-white text-xl flex flex-col gap-8 justify-center p-24"
          success={success}
          error={error}
          setSuccess={setSuccess}
          setError={setError}
        />
      </div>
    </motion.div>
  );
};

export default ContactPage;
