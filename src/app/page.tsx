import Header from "@/components/sections/Header";
import IntroduceSection from "@/components/sections/Introduce";
import AboutSection from "@/components/sections/About";
import ExperienceSection from "@/components/sections/Experience";
import SkillsSection from "@/components/sections/Skills";
import EducationSection from "@/components/sections/Education";
import ProjectsSection from "@/components/sections/Projects";
import ContactSection from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header/>
      <main className="flex-1 flex flex-col">
        <IntroduceSection />
        <AboutSection />        
        <EducationSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </div>
  );
}
