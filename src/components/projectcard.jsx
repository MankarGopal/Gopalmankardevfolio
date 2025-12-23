import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

// Card animation
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      variants={cardVariants}
      className="w-full max-w-4xl rounded-xl border border-neutral-800 bg-neutral-900 p-6 shadow-md transition hover:shadow-purple-700/30"
    >
      {/* Title & Links */}
      <div className="flex items-start justify-between gap-4">
        <h2 className="text-2xl font-semibold text-white">{project.title}</h2>

        <div className="flex gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition"
              aria-label="GitHub Repository"
            >
              <FiGithub size={22} />
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition"
              aria-label="Live Demo"
            >
              <FiExternalLink size={22} />
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="mt-3 text-neutral-400 leading-relaxed">
        {project.description}
      </p>

      {/* Tech Stack */}
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
    </motion.div>
  );
};

export default ProjectCard;
