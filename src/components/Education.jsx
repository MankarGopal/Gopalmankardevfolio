import { EDUCATION } from "../constants";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa6";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Education = () => {
  return (
    <section className="border-b border-neutral-900 pb-24">
      <h1 className="my-20 text-center text-4xl font-bold">Education</h1>

      <motion.div
        className="relative mx-auto max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Timeline line */}
        <div className="absolute left-4 top-0 h-full w-[2px] bg-neutral-800 md:left-1/2 md:-translate-x-1/2" />

        {EDUCATION.map((edu, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className={`relative mb-16 flex flex-col md:flex-row ${
              index % 2 === 0 ? "md:justify-start" : "md:justify-end"
            }`}
          >
            {/* Timeline Dot */}
            <div className="absolute left-4 top-2 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-purple-500 bg-neutral-900 md:left-1/2">
              <FaGraduationCap className="text-purple-400" />
            </div>

            {/* Card */}
            <div
              className={`ml-12 w-full rounded-xl border border-neutral-800 bg-neutral-900 p-6 md:ml-0 md:w-[45%] ${
                index % 2 === 0 ? "md:pr-10" : "md:pl-10"
              }`}
            >
              <p className="mb-2 text-sm text-purple-400">{edu.year}</p>

              <h3 className="text-lg font-semibold text-white">{edu.degree}</h3>

              <p className="mt-1 text-sm text-neutral-400">{edu.institution}</p>

              <p className="mt-3 text-neutral-400">{edu.performance}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Education;
