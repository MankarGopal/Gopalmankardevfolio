import { HERO_CONTENT } from "../constants";
import profilePhoto from "../assets/Aboutgopall.png";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay },
  },
});

const Hero = () => {
  return (
    <section className="border-b border-neutral-800 pt-28 pb-16 lg:pt-36 lg:pb-24">
      <div className="mx-auto max-w-6xl px-6 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">
        {/* Text Content */}
        <div className="w-full lg:w-2/3 text-center lg:text-left">
          <motion.h1
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="text-5xl sm:text-6xl lg:text-7xl font-thin tracking-tight"
          >
            Gopal Mankar
          </motion.h1>

          <motion.span
            variants={container(0.1)}
            initial="hidden"
            animate="visible"
            className="block mt-4 text-2xl sm:text-3xl bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent font-semibold"
          >
            UI/UX Designer & Developer
          </motion.span>

          <motion.p
            variants={container(0.2)}
            initial="hidden"
            animate="visible"
            className="mt-6 max-w-xl mx-auto lg:mx-0 font-thin text-lg leading-relaxed"
          >
            {HERO_CONTENT}
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={container(0.3)}
            initial="hidden"
            animate="visible"
            className="mt-6 flex flex-wrap justify-center lg:justify-start gap-4"
          >
            <a
              href="/resume.pdf"
              className="px-4 py-2 text-xs sm:text-sm rounded-full bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 text-white font-medium shadow-md hover:scale-105 transition-all"
            >
              Resume
            </a>

            <a
              href="#contact"
              className="px-4 py-2 text-xs sm:text-sm rounded-full border border-white text-white font-medium hover:bg-white hover:text-black transition-all"
            >
              Contact
            </a>
          </motion.div>
        </div>

        {/* Profile Image */}
        <div className="w-full lg:w-1/3 flex justify-center">
          <img
            src={profilePhoto}
            alt="Gopal Mankar"
            className="w-60 h-60 sm:w-72 sm:h-72 object-cover rounded-2xl border-2 border-neutral-700 shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
