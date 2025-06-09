import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { Button } from "../components/ui/shadcn-button";
import { projects } from "../data/projects";
import { Link } from "react-router-dom";

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Education", "Healthcare", "Environment"];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-teal-500">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Transforming communities through innovative solutions and sustainable impact.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div className="flex gap-4 flex-wrap">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "border-gray-600 text-gray-300 bg-transparent hover:bg-teal-600/20 hover:text-white hover:border-teal-600"
                }`}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
        
        {/* Projects Grid */}
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            {/* Left Column - First 3 projects */}
            <div className="space-y-10">
              {filteredProjects.slice(0, 3).map((project) => (
                <Link key={project.id} to={`/projects/${project.id}`} className="block transform transition-all duration-300 hover:scale-105">
                  <ProjectCard {...project} />
                </Link>
              ))}
            </div>
            
            {/* Right Column - Quote + Last 3 projects */}
            <div className="space-y-10">
              {/* Quote for offset */}
              <div className="text-gray-300 italic text-lg leading-relaxed px-6 py-8 rounded-lg">
                "Every project we undertake is a step towards building stronger, more resilient communities."
              </div>
              
              {filteredProjects.slice(3, 6).map((project) => (
                <Link key={project.id} to={`/projects/${project.id}`} className="block transform transition-all duration-300 hover:scale-105">
                  <ProjectCard {...project} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection; 