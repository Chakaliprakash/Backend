import React, { useEffect, useState } from "react";
import { getProjects } from "../services/api";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects()
      .then((res) => setProjects(res.data))
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border rounded-lg p-6 shadow-md hover:shadow-xl transition duration-300 ease-in-out bg-white"
          >
            <h3 className="font-semibold text-2xl mb-3 text-gray-900">
              {project.title}
            </h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 font-medium hover:underline"
              >
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
