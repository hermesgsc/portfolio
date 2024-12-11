"use client";

import React from "react";
import { Icon } from "@iconify/react";
import Card from "./Card";
import Typography from "./Typography";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

interface Technology {
  name: string;
  bg: string;
  border: string;
  text: string;
}

interface Project {
  title: string;
  description: string;
  lottieUrl: string;
  technologies: Technology[];
}

const projectsData: Project[] = [
  {
    title: "Architecture System",
    description: "Intelligent Management System for Architecture Offices",
    lottieUrl:
      "https://lottie.host/3ff8a794-6591-4098-9358-d333af171ec7/J7Y0V38RH1.json",
    technologies: [
      {
        name: "Nest",
        bg: "bg-primary-100",
        border: "border-primary-200",
        text: "text-primary-700",
      },
      {
        name: "React",
        bg: "bg-secondary-100",
        border: "border-secondary-200",
        text: "text-secondary-700",
      },
      {
        name: "Next",
        bg: "bg-primary-500",
        border: "border-primary-200",
        text: "text-prymary-700",
      },
      {
        name: "Tailwind",
        bg: "bg-secondary-100",
        border: "border-secondary-200",
        text: "text-secondary-700",
      },
      {
        name: "MongoDB",
        bg: "bg-primary-100",
        border: "border-primary-200",
        text: "text-primary-700",
      },
    ],
  },
  {
    title: "Library System",
    description: "Intelligent System for Managing Library Resources",
    lottieUrl:
      "https://lottie.host/bab4df11-56cd-4007-847e-398a47285a89/tSCcNH9gaM.lottie",
    technologies: [
      {
        name: "Nest",
        bg: "bg-primary-100",
        border: "border-primary-200",
        text: "text-primary-700",
      },
      {
        name: "React",
        bg: "bg-secondary-100",
        border: "border-secondary-200",
        text: "text-secondary-700",
      },
      {
        name: "Next",
        bg: "bg-secondary-100",
        border: "border-secondary-200",
        text: "text-secondary-700",
      },
      {
        name: "Tailwind",
        bg: "bg-secondary-100",
        border: "border-secondary-200",
        text: "text-secondary-700",
      },
      {
        name: "MongoDB",
        bg: "bg-primary-100",
        border: "border-primary-200",
        text: "text-primary-700",
      },
    ],
  },
  {
    title: "Hospital System",
    description: "A System for Managing Hospital Resources and Staff.",
    lottieUrl:
      "https://lottie.host/e3b0368f-eb86-451d-a04c-4171ec033d9d/jIF16eXg6u.lottie",
    technologies: [
      {
        name: "Nest",
        bg: "bg-primary-100",
        border: "border-primary-200",
        text: "text-primary-700",
      },
      {
        name: "React",
        bg: "bg-secondary-100",
        border: "border-secondary-200",
        text: "text-secondary-700",
      },
      {
        name: "Next",
        bg: "bg-secondary-100",
        border: "border-secondary-200",
        text: "text-secondary-700",
      },
      {
        name: "Tailwind",
        bg: "bg-secondary-100",
        border: "border-secondary-200",
        text: "text-secondary-700",
      },
      {
        name: "MongoDB",
        bg: "bg-primary-100",
        border: "border-primary-200",
        text: "text-primary-700",
      },
    ],
  },
];

const Projects: React.FC = () => {
  return (
    <section className="p-6 bg-secondary-100 flex items-center justify-center md:h-screen">
      <Card className="p-6 border-none w-full max-w-6xl bg-white shadow-lg rounded-xl">
        <div className="flex justify-between pb-4 p-6 text-primary-600">
          <Typography variant="subtitle" align="left" weight="bold">
            Projects
          </Typography>
          <Icon icon="mingcute:code-line" height={24} width={24} />
        </div>

        <Typography
          variant="caption"
          align="left"
          className="text-secondary-600 p-6 leading-7"
        >
          My projects showcase my expertise in crafting scalable, efficient, and
          user-centric applications, leveraging the latest web technologies.
        </Typography>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="flex flex-col border border-secondary-200 p-6 rounded-2xl gap-3 bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-center">
                <DotLottieReact
                  src={project.lottieUrl}
                  loop
                  autoplay
                  className="w-80 bg-secondary-50 rounded-xl border border-secondary-200 p-6 items-center justify-center"
                />
              </div>
              <Typography variant="body" className="text-primary-700">
                {project.title}
              </Typography>
              <Typography
                className="text-secondary-600"
                align="left"
                variant="caption"
              >
                {project.description}
              </Typography>

              <div className="flex flex-wrap justify-start w-full gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <Typography
                    key={techIndex}
                    className={`px-2 text-center ${tech.bg} border ${tech.border} ${tech.text} rounded-full`}
                    variant="caption"
                  >
                    {tech.name}
                  </Typography>
                ))}
              </div>

              <div>
                <button className="flex items-center justify-between w-full mt-3 rounded-xl border border-primary-300 text-primary-700 p-3 hover:bg-primary-50 hover:border-primary-400 transition-all duration-300">
                  Deploy
                  <Icon icon="mingcute:rocket-line" width="24" height="24" />
                </button>
                <button className="flex items-center justify-between w-full mt-3 rounded-xl border border-secondary-300 text-secondary-700 p-3 hover:bg-secondary-50 hover:border-secondary-400 transition-all duration-300">
                  Repository
                  <Icon icon={"mdi:github"} height={24} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
};

export default Projects;
