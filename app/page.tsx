import Grid from "@/components/Grid";
import Hero from "@/components/Home";
import MyProjects from "@/components/ui/MyProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
// import { FaHome } from "react-icons/fa";
import { navItems } from "@/data";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main
      className="relative bg-black-100 flex justify-center items-center
      flex-col overflow-clip  mx-auto
      sm:px-10 px-5
    "
    >
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <MyProjects />
        <Clients />
        <Experience />
        <Footer />
      </div>
    </main>
  );
}
