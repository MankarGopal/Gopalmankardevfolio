import { EDUCATION } from "../constants";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa6"; // You can use any icon here

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

const Education = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">Education</h1>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {EDUCATION.map((edu, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="mb-8 flex flex-wrap lg:justify-center"
          >
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-neutral-400">{edu.year}</p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold flex items-center justify-between">
                {edu.degree}{" "}
                <span className="text-sm text-purple-100 flex items-center gap-2">
                  {edu.institution}
                  <FaGraduationCap className="text-purple-300" />
                </span>
              </h6>
              <p className="text-neutral-400">{edu.performance}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Education;
