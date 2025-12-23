import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb, SiMysql } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { motion } from "framer-motion";

const iconVariants = {
  initial: { y: 0 },
  animate: (i) => ({
    y: [0, -15, 0],
    transition: {
      duration: 2.5,
      ease: "easeInOut",
      repeat: Infinity,
      delay: i * 0.3,
    },
  }),
};

const icons = [
  { component: <RiReactjsLine className="text-7xl text-cyan-400" /> },
  { component: <TbBrandNextjs className="text-7xl" /> },
  { component: <SiMongodb className="text-7xl text-green-500" /> },
  {
    component: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
        alt="Express.js"
        className="h-16 w-16 dark:invert"
      />
    ),
  },
  { component: <FaNodeJs className="text-7xl text-green-500" /> },
  { component: <SiMysql className="text-7xl text-blue-600" /> },
  {
    component: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
        alt="Python"
        className="h-16 w-16"
      />
    ),
  },
  {
    component: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
        alt="Figma"
        className="h-14 w-14"
      />
    ),
  },
];

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl font-bold">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {icons.map((icon, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={iconVariants}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            {icon.component}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
