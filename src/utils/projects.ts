interface Project {
  title: string;
  description: string;
  lottieUrl: string;
  technologies: Technology[];
}

interface Technology {
  name: string;
  bg: string;
  border: string;
  text: string;
}

export const projectsData: Project[] = [
  {
    title: "Architecture System",
    description: "Intelligent Management System for Architecture Offices",
    lottieUrl:
      "https://lottie.host/3ff8a794-6591-4098-9358-d333af171ec7/J7Y0V38RH1.json",
    technologies: [
      {
        name: "Nest",
        bg: "bg-red-100",
        border: "border-red-200",
        text: "text-red-700",
      },
      {
        name: "MongoDB",
        bg: "bg-green-100",
        border: "border-green-200",
        text: "text-green-700",
      },
      {
        name: "React",
        bg: "bg-blue-100",
        border: "border-blue-200",
        text: "text-blue-700",
      },
      {
        name: "Next",
        bg: "bg-gray-100",
        border: "border-gray-200",
        text: "text-gray-700",
      },
      {
        name: "Tailwind",
        bg: "bg-teal-100",
        border: "border-teal-200",
        text: "text-teal-700",
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
        bg: "bg-red-100",
        border: "border-red-200",
        text: "text-red-700",
      },
      {
        name: "MongoDB",
        bg: "bg-green-100",
        border: "border-green-200",
        text: "text-green-700",
      },
      {
        name: "React",
        bg: "bg-blue-100",
        border: "border-blue-200",
        text: "text-blue-700",
      },
      {
        name: "Next",
        bg: "bg-gray-100",
        border: "border-gray-200",
        text: "text-gray-700",
      },
      {
        name: "Tailwind",
        bg: "bg-teal-100",
        border: "border-teal-200",
        text: "text-teal-700",
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
        bg: "bg-red-100",
        border: "border-red-200",
        text: "text-red-700",
      },
      {
        name: "MongoDB",
        bg: "bg-green-100",
        border: "border-green-200",
        text: "text-green-700",
      },
      {
        name: "React",
        bg: "bg-blue-100",
        border: "border-blue-200",
        text: "text-blue-700",
      },
      {
        name: "Next",
        bg: "bg-gray-100",
        border: "border-gray-200",
        text: "text-gray-700",
      },
      {
        name: "Tailwind",
        bg: "bg-teal-100",
        border: "border-teal-200",
        text: "text-teal-700",
      },
    ],
  },
];