import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projects } from '../data/projects'; // Adjust path if needed

const ProjectDetailPage = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const project = projects.find(p => p.id === parseInt(projectId || ''));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-lg mb-8">The project you are looking for does not exist.</p>
          <button 
            onClick={() => navigate('/projects-impact')}
            className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-full font-semibold transition-colors duration-300"
          >
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <button 
          onClick={() => navigate('/projects-impact')}
          className="flex items-center text-teal-500 hover:text-teal-400 mb-8"
        >
          &larr; Back to all Projects
        </button>

        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
          {project.title}
        </h1>
        <div className="flex items-center space-x-4 mb-8">
          <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
            {project.category}
          </span>
          <span className="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
            {project.status}
          </span>
        </div>

        <img 
          src={project.image}
          alt={project.title}
          className="w-full h-96 object-cover rounded-xl shadow-lg mb-8"
        />

        <p className="text-lg text-gray-300 leading-relaxed mb-8">
          {project.description} This is a placeholder for more detailed information about the project. 
          You can expand on the project's goals, methodologies, achievements, and future plans here.
        </p>

        {/* You can add more detailed content here */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-4">Project Highlights</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Successfully implemented digital literacy training for 1,000 individuals.</li>
            <li>Established 5 new community health centers in remote areas.</li>
            <li>Planted over 10,000 trees as part of the reforestation efforts.</li>
            <li>Collaborated with 15 local NGOs to expand outreach.</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default ProjectDetailPage; 