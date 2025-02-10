"use client";

import React from "react";

import { technologies } from "@/data";

const Tech = () => {
  return (
    <section id="tech" className="py-20">
      <h1 className="heading">
        My
        <span className="text-purple"> tech stack</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10 mt-10">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {technologies.map((tech) => (
            <React.Fragment key={tech.name}>
              <div className="flex md:max-w-60 max-w-32 gap-2">
                <img src={tech.icon} alt={tech.name} className="md:w-10 w-5" />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tech;
