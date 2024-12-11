"use client";

import React from "react";
import { Icon } from "@iconify/react";
import Typography from "./Typography";

const Footer: React.FC = () => {
  return (
    <footer className="p-20 bg-secondary-800 text-secondary-200">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex space-x-2">
          <a
            href="https://github.com/hermesgsc"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary-500 transition-colors duration-300 cursor-pointer"
          >
            <Icon icon="mdi:github" width="26" height="26" />
          </a>
          <a
            href="https://www.linkedin.com/in/hermes-gabriel-78410b232/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary-500 transition-colors duration-300 cursor-pointer"
          >
            <Icon icon="mdi:linkedin" width="26" height="26" />
          </a>
          <a
            href="mailto:hermesg.dev@gmail.com"
            className="hover:text-primary-500 transition-all"
            target="blank"
          >
            <Icon
              icon="mingcute:mail-line"
              className="hover:text-primary-500 transition-colors duration-300 cursor-pointer"
              width={24}
              height={24}
            />
          </a>
        </div>

        <div className="mt-4 md:mt-0">
          <Typography variant="caption" className="text-center">
            © {new Date().getFullYear()} Hermes Gabriel. All rights reserved.
          </Typography>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
