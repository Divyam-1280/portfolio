"use client";

import Link from "next/link";
import { useState } from "react";
import NavLink from "./navLink";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "./../../node_modules/react-icons/fa";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 39,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };
  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -39,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-lg">
      {/* LINKS */}

      <div className="hidden md:flex gap-4 w-1/3 items-center justify-center">
        {links.map((link) => (
          <NavLink key={link.title} link={link} />
        ))}
      </div>

      {/* LOGO */}

      <div className="md:hidden lg:flex xl:w-1/3 flex xl:justify-center items-center">
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center">
          <span className="text-white mr-1">Divyam Raj</span>
          <span className=" flex items-center justify-center w-12 h-8 rounded bg-white text-black">
            Singh
          </span>
        </Link>
      </div>

      {/* SOCIAL ICONS */}

      <div className="hidden md:flex gap-5 w-1/3 justify-center text-white items-center">
        <Link href="https://github.com/Divyam-1280">
          <FaGithub style={{ width: 24, height: 24 }} />
        </Link>
        <Link href="https://linkedin.com/in/divyam1280">
          <FaLinkedin style={{ width: 24, height: 24 }} />
        </Link>
        <Link href="https://www.instagram.com/divyam._.singh21">
          <FaInstagram style={{ width: 24, height: 24 }} />
        </Link>
      </div>

      {/* RESPONSIVE MENU*/}

      <div className="md:hidden">
        {/* MENU BUTTON */}

        <button
          className="w-10 h-6 flex flex-col  justify-between z-50 relative"
          onClick={() => setOpen(!open)}>
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-8 h-1 bg-white rounded origin-left"></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-8 h-1 bg-white rounded"></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-8 h-1 bg-white rounded origin-left"></motion.div>
        </button>

        {/*MENU LIST*/}

        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-3xl z-10">
            {links.map((link) => (
              <motion.div
                variants={listItemVariants}
                className=""
                key={link.title}>
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
