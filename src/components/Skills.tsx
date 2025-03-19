// Skills.tsx

import React from "react";
import { Icon } from "@iconify/react";
import Card from "./Card";
import Typography from "./Typography";
import skillsData from "@/utils/skills"; // Caso você ainda precise importar os dados de skills

const Skills: React.FC = () => {
  return (
    <section className="p-0 md:p-6 bg-primary-800 flex items-center justify-center ">
<Card className="p-6 md:border-primary-500 w-full max-w-2xl mx-auto md:bg-primary-700 rounded-xl border-0 md:border-[0.1px] bg-primary-800">
        <div className="flex justify-between pb-4 p-6 text-primary-100">
          <Typography variant="subtitle" align="left" weight="bold">
            Skills
          </Typography>
          <Icon icon="mingcute:book-2-line" width="24" height="24" />
        </div>
        <Typography
          variant="caption"
          align="left"
          className="text-primary-300 p-6 leading-7"
        >
          I specialize in building scalable and efficient applications using
          modern web technologies, with a strong foundation in both front-end
          and back-end development.
        </Typography>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-3">
          {skillsData.map((skill, index) => (
            <Card
              key={index}
              className="border-[0.1px] p-3 flex flex-row items-center text-primary-300 border-primary-500 gap-3 justify-between  transition-all duration-300 rounded-xl hover:bg-primary-600 hover:border-secondary-800 hover:text-primary-50"
            >
              <Typography size="small" variant="caption">
                {skill.name}
              </Typography>
              <Icon icon={skill.icon} height={24} width={24} />
            </Card>
          ))}
        </div>
      </Card>
    </section>
  );
};

export default Skills;
