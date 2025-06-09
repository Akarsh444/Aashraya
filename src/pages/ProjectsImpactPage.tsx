import HeroSection from "../components/HeroSection";
import ProjectsSection from "../components/ProjectsSection";
import ImpactSection from "../components/ImpactSection";

const ProjectsImpactPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow">
        <HeroSection />
        <ProjectsSection />
        <ImpactSection />
      </div>
    </div>
  );
};

export default ProjectsImpactPage;

export {}; 