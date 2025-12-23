import { PROJECTS } from "../constants";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

// Animation Variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

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

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
      <h1 className="my-20 text-center text-4xl">Projects</h1>
      <motion.div
        className="flex flex-col items-center gap-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
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
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
