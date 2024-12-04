import React from "react";
import { SKILLS } from "../utils/data";

const Skills = () => {
  return (
    <section className="max-w-screen-xl px-6 mx-auto pb-20" id="skills">
      <div className="bg-gradient-to-br from-blue-950 to-slate-900 rounded-lg border border-blue-800/40 p-4 md:p-8">
        
        <h5 className="text-xl font-medium mb-5">Sample Works</h5>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {SKILLS.map((skill) => (
            <SkillsCard
              key={skill.id}
              image={skill.image}
              title={skill.title}
              comment={skill.comment}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillsCard = ({ image, title, comment }) => {
  return (
<div class="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="w-full h-48 object-cover rounded-t-lg" src={image} alt="" />
    </a>
    <div class="p-3">
        <a href="#">
            <h5 class="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        </a>
        <p class="mb-2 text-sm font-normal text-gray-700 dark:text-gray-400">{comment}</p>
        <a href="#" class="inline-flex items-center px-2 py-1 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg class="rtl:rotate-180 w-3 h-3 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>
  );
};

export default Skills;
