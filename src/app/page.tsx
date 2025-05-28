import Header from "@/components/sections/Header";
import IntroduceSection from "@/components/sections/Introduce";
import ExperienceSection from "@/components/sections/Experience";
import SkillsSection from "@/components/sections/Skills";
import EducationSection from "@/components/sections/Education";
import CertificationSection from "@/components/sections/Certification";
import ProjectsSection from "@/components/sections/Projects";
import ContactSection from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header/>
      <main className="px-20 flex-1 flex flex-col">
        <IntroduceSection />
        <EducationSection />
        <SkillsSection />
        <CertificationSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
}
