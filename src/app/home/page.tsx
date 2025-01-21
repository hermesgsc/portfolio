"use client";

import React, { useState, useEffect, useRef } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
// import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const HomePage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  const aboutMeRef = useRef<HTMLDivElement>(undefined!);
  const projectsRef = useRef<HTMLDivElement>(undefined!);
  const skillsRef = useRef<HTMLDivElement>(undefined!);
  const contactRef = useRef<HTMLDivElement>(undefined!);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const loadResources = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2500));
      setIsLoading(false);
    };

    loadResources();
  }, []);

  return (
    <section className="w-full overflow-hidden ">
      <div className="relative z-10">
        {isLoading ? (
          <div className="flex items-center justify-center min-h-screen w-screen overflow-hidden bg-primary-50">
            <DotLottieReact
              src="https://lottie.host/ef5ec194-7222-4a98-90ff-9b07f4466594/Swcz5q6UBG.lottie"
              loop
              autoplay
              className="sm:w-1/4"
            />
          </div>
        ) : (
          <>
            <Navbar
              scrollToSection={scrollToSection}
              aboutMeRef={aboutMeRef}
              skillsRef={skillsRef}
              contactRef={contactRef}
              projectsRef={projectsRef}
            />
            <Hero scrollToSection={scrollToSection} aboutMeRef={aboutMeRef} />
            <div ref={aboutMeRef}>
              <AboutMe />
            </div>
            <div ref={skillsRef}>
              <Skills />
            </div>
                <div ref={projectsRef}>{/* <Projects /> */}</div>
            <div ref={contactRef}>
              <Contact />
            </div>
            <Footer />
          </>
        )}
      </div>
    </section>
  );
};

export default HomePage;
