import { PROJECTS } from "../constants";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
      <h1 className="my-20 text-center text-4xl">Projects</h1>
      <div className="flex flex-col items-center gap-12">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="w-full max-w-4xl rounded-xl border border-neutral-800 bg-neutral-900 p-6 shadow-md transition hover:shadow-purple-700/30"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-white">
                {project.title}
              </h2>
              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-300 hover:text-white"
                  >
                    <FiGithub size={22} />
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-300 hover:text-white"
                  >
                    <FiExternalLink size={22} />
                  </a>
                )}
              </div>
            </div>
            <p className="mt-2 text-neutral-400">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="rounded bg-neutral-800 px-3 py-1 text-sm text-purple-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
