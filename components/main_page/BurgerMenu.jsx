"use client";

import { useState } from "react";
import { motion } from "framer-motion";

// Burger menu icon
import BurgerMenuIcon from "@/assets/burger_menu.svg";
import CloseMenuIcon from "@/assets/close_menu.svg";
import Image from "next/image";

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>
        <Image
          src={BurgerMenuIcon}
          alt="Burger menu"
          className="hover:cursor-pointer z-50"
          height={"40"}
          width={"40"}
        />
      </button>
      {isOpen && (
        <>
          <motion.div
            className="bg-accent-color fixed top-0 right-0 h-screen w-full flex flex-col justify-center items-center space-y-10 grid-margin-px"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            transition={{ ease: "easeIn", duration: 0.301 }}
          >
            <a
              href="/#projects"
              aria-label="projects link"
              className="transition-colors text-bg-color hover:text-bg-color/50 hero border-b border-bg-color w-full"
              onClick={() => setIsOpen(!isOpen)}
            >
              Projects
            </a>
            <a
              href="/#skills"
              aria-label="skills link"
              className="transition-colors text-bg-color hover:text-bg-color/50 hero border-b border-bg-color w-full text-right"
              onClick={() => setIsOpen(!isOpen)}
            >
              Skills
            </a>
            <a
              href="/#contacts"
              aria-label="contacts link"
              className="transition-colors text-bg-color hover:text-bg-color/50 hero border-b border-bg-color w-full"
              onClick={() => setIsOpen(!isOpen)}
            >
              Contacts
            </a>
          </motion.div>

        <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="absolute top-0 w-[40px] h-[40px] right-0 grid-margin-pr"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, ease: "easeIn", duration: 0.102 }}
        >
            <Image
                src={CloseMenuIcon}
                alt="Burger menu"
                className="hover:cursor-pointer z-50"
                height={"40"}
                width={"40"}
            />
        </motion.button>
        </>
      )}
    </div>
  );
}
