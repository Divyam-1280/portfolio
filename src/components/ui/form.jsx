import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Form = ({ success, error, setSuccess, setError }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm("service_chkvl0y", "template_spd6thn", form.current, {
        publicKey: "MCt9__01bv578nI6v",
      })
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setError(true);
        }
      );
  };
  return (
    <motion.form
      ref={form}
      onSubmit={sendEmail}
      className="lg:h-[80%] h-[65%] lg:mt-12 lg:w-[45%] bg-transparent rounded-xl text-white flex flex-col lg:gap-6 gap-4 mb-6 justify-between px-10 py-10"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}>
      <motion.span
        className="text-3xl md:text-4xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}>
        Hey,
      </motion.span>
      <motion.textarea
        rows={5}
        name="user_message"
        placeholder="Enter your message"
        className="bg-transparent text-white outline-none border-b-2 p-2 resize-none text-sm"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      />
      <motion.span
        className="text-lg md:text-2xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}>
        My Mail Address is:
      </motion.span>
      <motion.input
        type="email"
        name="user_email"
        className="bg-transparent text-white outline-none border-b-2 p-2 resize-none"
        placeholder="Enter your email"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.0 }}
      />
      <motion.span
        className="text-lg md:text-2xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}>
        Regards
      </motion.span>
      <motion.button
        className="bg-black text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.4 }}>
        Send
      </motion.button>
      {success && (
        <span className="text-green-500 font-semibold flex justify-center items-center">
          Your message has been delivered successfully!
        </span>
      )}
      {error && (
        <span className="text-red-400 font-semibold flex justify-center items-center">
          Something went wrong!
        </span>
      )}
    </motion.form>
  );
};

export default Form;
