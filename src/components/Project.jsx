import { useState } from "react";
import { PROJECTS } from "../constants";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./projectcard";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("design");

  const filteredProjects = PROJECTS.filter(
    (project) => project.category === activeTab
  );

  return (
    <section id="projects" className="border-b border-neutral-900 pb-24">
      {/* Section Title */}
      <h1 className="my-20 text-center text-4xl font-bold">Projects</h1>

      {/* 🔹 BUTTONS JUST BELOW TITLE */}
      <div className="mb-16 flex justify-center gap-6">
        <button
          onClick={() => setActiveTab("design")}
          className={`rounded-lg border px-6 py-3 text-lg font-medium transition
            ${
              activeTab === "design"
                ? "border-purple-500 bg-purple-500/10 text-purple-400"
                : "border-neutral-800 text-neutral-400 hover:border-neutral-600"
            }`}
        >
          Design
        </button>

        <button
          onClick={() => setActiveTab("technical")}
          className={`rounded-lg border px-6 py-3 text-lg font-medium transition
            ${
              activeTab === "technical"
                ? "border-purple-500 bg-purple-500/10 text-purple-400"
                : "border-neutral-800 text-neutral-400 hover:border-neutral-600"
            }`}
        >
          Technical
        </button>
      </div>

      {/* CONTENT AREA */}
      <div className="mx-auto max-w-6xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center gap-10"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
