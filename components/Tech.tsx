import React from "react";
import { technologies } from "@/data";
import { FloatingDockDesktop } from "@/components/ui/Floating";

const Tech = () => {
  // Подготавливаем элементы для FloatingDock
  const dockItems = technologies.map((tech) => ({
    title: tech.name,
    icon: (
      <img
        src={tech.icon}
        alt={tech.name}
        className="w-10 h-10 md:w-14 md:h-14 object-contain"
      />
    ),
    href: "#", // Можно добавить реальные ссылки
  }));

  return (
    <section id="tech" className="py-20">
      <h1 className="text-4xl md:text-5xl font-bold text-center">
        My <span className="text-purple">tech stack</span>
      </h1>

      <div className="flex flex-col items-center mt-10">
        {/* Обычное отображение технологий на мобильных устройствах */}
        <div className="flex md:hidden flex-wrap items-center justify-center gap-6">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="flex items-center justify-center bg-gray-800 p-3 rounded-lg shadow-md"
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-12 h-12 md:w-16 md:h-16 object-contain"
              />
            </div>
          ))}
        </div>

        {/* FloatingDockDesktop только для десктопа */}
        <div className="hidden md:block mt-10">
          <FloatingDockDesktop
            items={dockItems}
            className="dark:bg-inherit p-4 rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Tech;
