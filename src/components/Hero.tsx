"use client";

import React from "react";
import Typewriter from "typewriter-effect";
import Typography from "./Typography";
import Button from "./EcryptButton";

interface HeroProps {
  scrollToSection: (ref: React.RefObject<HTMLDivElement>) => void;
  aboutMeRef: React.RefObject<HTMLDivElement>;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection, aboutMeRef }) => {
  return (
    <div className="flex flex-row bg-primary-800 items-center justify-center h-screen bg-gradient-to-b from-primary-900">
      <div className="p-12 text-center">
        <Typography
          variant="title"
          weight="bold"
          align="center"
          className="text-primary-100 text-xl sm:text-2xl md:text-4xl"
        >
          My name is <strong>Hermes Gabriel</strong>
        </Typography>

        <div className="flex items-center mt-6 -mb-4 text-primary-200 gap-3 justify-center">
          <Typography
            className="max-w-[520px] text-base sm:text-base md:text-xl"
            variant="subtitle"
            weight="normal"
            align="center"
          >
            and I&apos;m a
          </Typography>
          <div className="text-secondary-500 font-bold max-w-[520px] text-base sm:text-base md:text-xl">
            <Typewriter
              options={{
                strings: [
                  "Back-end developer",
                  "Software developer",
                  "Front-end developer",
                ],
                autoStart: true,
                loop: true,
                delay: 40,
                deleteSpeed: 20,
                cursor: "",
              }}
            />
          </div>
        </div>
        <div>
          <Button onClick={() => scrollToSection(aboutMeRef)}></Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
