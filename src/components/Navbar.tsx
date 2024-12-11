"use client";

import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import Typography from "./Typography";

interface NavbarProps {
  scrollToSection: (ref: React.RefObject<HTMLDivElement>) => void;
  aboutMeRef: React.RefObject<HTMLDivElement>;
  skillsRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
  projectsRef: React.RefObject<HTMLDivElement>;
}

const Navbar: React.FC<NavbarProps> = ({
  scrollToSection,
  aboutMeRef,
  skillsRef,
  contactRef,
  projectsRef,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <nav className="bg-primary-900 fixed p-4 w-full">
      <div className="flex justify-between items-center">
        <div className="text-xl  text-white sm:hidden">Hermes dev</div>

        <ol className="justify-center space-x-12 text-primary-100 hidden md:flex w-full">
          <li
            className="hover:text-secondary-500 transition-colors duration-300 cursor-pointer"
            onClick={() => scrollToSection(aboutMeRef)}
          >
            <Typography variant="body" weight="normal" align="center">
              About me
            </Typography>
          </li>

          <li
            className="hover:text-secondary-500 transition-colors duration-300 cursor-pointer"
            onClick={() => scrollToSection(skillsRef)}
          >
            <Typography variant="body" weight="normal" align="center">
              Skills
            </Typography>
          </li>

          <li
            className="hover:text-secondary-500 transition-colors duration-300 cursor-pointer"
            onClick={() => scrollToSection(projectsRef)}
          >
            <Typography variant="body" weight="normal" align="center">
              Projects
            </Typography>
          </li>

          <li
            className="hover:text-secondary-500 transition-colors duration-300 cursor-pointer"
            onClick={() => scrollToSection(contactRef)}
          >
            <Typography variant="body" weight="normal" align="center">
              Contact
            </Typography>
          </li>
        </ol>

        <button
          onClick={toggleMenu}
          className="md:hidden text-white relative z-10"
        >
          <div
            className={`w-6 h-1 bg-white my-1 rounded transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-1 bg-white my-1 rounded transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-1 bg-white my-1 rounded transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></div>
        </button>
      </div>

      <div
        className={`md:hidden bg-primary-800 fixed inset-0 h-full p-8 flex flex-col justify-between items-center transition-transform duration-300 z-20 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center w-full">
          <div className="text-xl text-white"></div>
          <button
            onClick={toggleMenu}
            className="text-white text-3xl absolute top-4 right-4 z-30"
          >
            <Icon icon="mdi:close" width="32" height="32" />
          </button>
        </div>
        <ol className="space-y-12 text-primary-100 justify-center w-full ">
          <li
            className="hover:text-secondary-500 transition-colors duration-300 cursor-pointer"
            onClick={() => {
              scrollToSection(aboutMeRef);
              toggleMenu();
            }}
          >
            <Typography variant="body" weight="normal" align="center">
              About me
            </Typography>
          </li>
          <li
            className=" transition-colors duration-300 cursor-pointer"
            onClick={() => {
              scrollToSection(skillsRef);
              toggleMenu();
            }}
          >
            <Typography variant="body" weight="normal" align="center">
              Skills
            </Typography>
          </li>
          <li
            className="hover:text-secondary-500 transition-colors duration-300 cursor-pointer"
            onClick={() => {
              scrollToSection(projectsRef);
              toggleMenu();
            }}
          >
            <Typography variant="body" weight="normal" align="center">
              Projects
            </Typography>
          </li>
          <li
            className="hover:text-secondary-500 transition-colors duration-300 cursor-pointer"
            onClick={() => {
              scrollToSection(contactRef);
              toggleMenu();
            }}
          >
            <Typography variant="body" weight="normal" align="center">
              Contact
            </Typography>
          </li>
        </ol>
        <div className="flex space-x-4 mt-8">
          <a
            href="https://github.com/hermesgsc"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-300 hover:text-white transition-colors duration-300 cursor-pointer"
          >
            <Icon icon="mdi:github" width="30" height="30" />
          </a>
          <a
            href="https://www.linkedin.com/in/hermes-gabriel-78410b232/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-300 hover:text-white transition-colors duration-300 cursor-pointer"
          >
            <Icon icon="mdi:linkedin" width="30" height="30" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
