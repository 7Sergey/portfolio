import React from "react";
import { technologies } from "@/data";
import { FloatingDockDesktop } from "@/components/ui/Floating";

const Tech = () => {
  // Подготавливаем элементы для FloatingDock
  const dockItems = technologies.map((tech) => ({
    title: tech.name,
    icon: <img src={tech.icon} alt={tech.name} className="w-6 h-6" />,
    href: "#", // Можно добавить реальные ссылки
  }));

  return (
    <section id="tech" className="py-20">
      <h1 className="heading">
        My
        <span className="text-purple"> tech stack</span>
      </h1>

      <div className="flex flex-col items-center mt-10">
        {/* Обычное отображение технологий на мобильных устройствах */}
        <div className="flex md:hidden flex-wrap items-center justify-center gap-4 md:gap-16">
          {technologies.map((tech) => (
            <div key={tech.name} className="flex md:max-w-60 max-w-32 gap-2">
              <img src={tech.icon} alt={tech.name} className="md:w-10 w-5" />
            </div>
          ))}
        </div>

        {/* FloatingDockDesktop только для десктопа */}
        <div className="hidden md:block mt-10">
          <FloatingDockDesktop items={dockItems} />
        </div>
      </div>
    </section>
  );
};

export default Tech;
