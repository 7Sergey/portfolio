/* eslint-disable @typescript-eslint/no-unused-vars */
import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./PinContainer";

const MyProjects = () => {
  return (
    <div className="py-20 text-ellipsis">
      <h1 className="heading">
        A small selection of {""}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="flex items-center justify-center lg:min-h-[32.5rem] h-[25rem] sm:w-96 w-[80vw]"
          >
            <PinContainer title={title} href={link}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div>
                  <img src="/bg.png" alt="bg-img" />
                </div>
                <img src={img} alt={title} className="z-10 absolute bottom-0" />
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProjects;
