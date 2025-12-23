import { HERO_CONTENT } from "../constants";
import profilePhoto from "../assets/Aboutgopall.png";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  }),
};

const Hero = () => {
  return (
    <section className="relative border-b border-neutral-800 pt-32 pb-20 overflow-hidden">
      {/* Subtle background grain */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch"/></filter><rect width="160" height="160" filter="url(%23n)" opacity="0.4"/></svg>\')',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* LEFT — TEXT */}
        <div className="text-center lg:text-left">
          {/* Availability Badge */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mb-4 flex justify-center lg:justify-start"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-neutral-700 bg-neutral-900/60 px-4 py-1.5 text-xs text-neutral-300 backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-30"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400"></span>
              </span>
              Open to opportunities
            </span>
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-sm uppercase tracking-widest text-neutral-500"
          >
            Hi, I’m
          </motion.p>

          <motion.h1
            custom={0.1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-2 text-5xl sm:text-6xl font-light tracking-tight"
          >
            Gopal Mankar
          </motion.h1>

          <motion.p
            custom={0.2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-4 text-lg text-neutral-400"
          >
            UI/UX Designer · Developer
          </motion.p>

          <motion.p
            custom={0.3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-6 max-w-xl mx-auto lg:mx-0 text-neutral-400 leading-relaxed"
          >
            {HERO_CONTENT}
          </motion.p>

          {/* ACTION BUTTONS */}
          <motion.div
            custom={0.4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-8 flex justify-center lg:justify-start gap-4"
          >
            <a
              href="https://www.behance.net/gopalmankar4"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-neutral-700 px-6 py-2 text-sm text-white hover:bg-neutral-800 transition"
            >
              Design Portfolio
            </a>

            <a
              href="/resume.pdf"
              className="rounded-full bg-white px-6 py-2 text-sm text-black hover:bg-neutral-200 transition"
            >
              Resume
            </a>
          </motion.div>
        </div>

        {/* RIGHT — IMAGE (DESKTOP ONLY) */}
        <motion.div
          custom={0.5}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="hidden lg:flex justify-end"
        >
          <img
            src={profilePhoto}
            alt="Gopal Mankar"
            className="w-72 h-72 object-cover rounded-2xl border border-neutral-800"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
