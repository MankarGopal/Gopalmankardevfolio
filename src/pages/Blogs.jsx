import { motion } from "framer-motion";
import { FaTwitter, FaLinkedin, FaMedium } from "react-icons/fa";

const blogs = [
  {
    title: "Progress Without the Noise",
    date: "Dec 18, 2025",
    type: "Blog",
    link: "https://medium.com/",
  },
  {
    title: "Designing With Intent",
    date: "Dec 12, 2025",
    type: "Insight",
    link: "https://medium.com/",
  },
  {
    title: "My Journey Into UX & Engineering",
    date: "Nov 28, 2025",
    type: "Story",
    link: "https://www.linkedin.com/",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  }),
};

const Blogs = () => {
  return (
    <section className="relative min-h-screen px-6 pt-36 pb-24 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-pink-900/20" />

      {/* Grain */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch"/></filter><rect width="160" height="160" filter="url(%23n)" opacity="0.4"/></svg>\')',
        }}
      />

      <div className="relative mx-auto max-w-4xl text-center">
        {/* Title */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-5xl font-light tracking-tight"
        >
          Story
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          custom={0.1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-6 text-lg text-neutral-400 max-w-2xl mx-auto"
        >
          Occasionally, I write about design, engineering, and my learning
          journey. Most of my long-form writing lives on Medium and LinkedIn.
        </motion.p>

        {/* Social Links */}
        <motion.div
          custom={0.2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-8 flex justify-center gap-4"
        >
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-neutral-900 px-4 py-2 text-sm text-neutral-300 hover:bg-neutral-800 transition"
          >
            <FaTwitter /> Twitter
          </a>

          <a
            href="https://www.linkedin.com/in/gopal-mankar/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-neutral-900 px-4 py-2 text-sm text-neutral-300 hover:bg-neutral-800 transition"
          >
            <FaLinkedin /> LinkedIn
          </a>

          <a
            href="https://medium.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-neutral-900 px-4 py-2 text-sm text-neutral-300 hover:bg-neutral-800 transition"
          >
            <FaMedium /> Medium
          </a>
        </motion.div>
      </div>

      {/* Blog List */}
      <div className="relative mx-auto mt-20 max-w-4xl space-y-6">
        {blogs.map((blog, index) => (
          <motion.a
            key={index}
            href={blog.link}
            target="_blank"
            rel="noopener noreferrer"
            custom={0.3 + index * 0.1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="block rounded-xl border border-neutral-800 bg-neutral-900/60 p-6 backdrop-blur hover:border-neutral-600 transition"
          >
            <div className="flex items-center justify-between text-sm text-neutral-500">
              <span>
                {blog.date} · {blog.type}
              </span>
              <span className="italic text-neutral-600">story</span>
            </div>

            <h3 className="mt-3 text-xl font-light text-white">{blog.title}</h3>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
