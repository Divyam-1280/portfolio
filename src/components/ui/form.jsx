import React from "react";
import { motion } from "framer-motion";

const Form = () => {
  return (
    <motion.form
      className="lg:h-[80%] h-[65%] lg:mt-12 lg:w-[45%] bg-transparent rounded-xl text-white flex flex-col lg:gap-8 gap-6 mb-6 justify-center px-12 py-12"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}>
      <motion.span
        className="text-3xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}>
        Hey,
      </motion.span>
      <motion.textarea
        rows={5}
        className="bg-white border-b-2 p-2 resize-none text-sm"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      />
      <motion.span
        className="text-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}>
        My mail address is:
      </motion.span>
      <motion.input
        type="email"
        className="bg-white border-b-2 p-2 resize-none"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      />
      <motion.span
        className="text-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}>
        Regards
      </motion.span>
      <motion.button
        className="bg-black text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}>
        Send
      </motion.button>
    </motion.form>
  );
};

export default Form;
