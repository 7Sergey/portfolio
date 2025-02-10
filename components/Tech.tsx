"use client";

import React from "react";
import { technologies } from "@/data";
import { FloatingDock } from "./ui/Floating";

const Tech = () => {
  const techItems = technologies.map((tech) => ({
    title: tech.name,
    icon: <img src={tech.icon} alt={tech.name} className="md:w-10 w-5" />,
    href: "#", // Можете заменить на реальные ссылки или убрать, если не нужно
  }));

  return (
    <section id="tech" className="py-20">
      <h1 className="heading">
        My <span className="text-purple">tech stack</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10 mt-10">
        {/* Используем FloatingDock для отображения технологий без фона */}
        <FloatingDock
          items={techItems}
          desktopClassName="bg-transparent"
          mobileClassName="bg-transparent"
        />
      </div>
    </section>
  );
};

export default Tech;
