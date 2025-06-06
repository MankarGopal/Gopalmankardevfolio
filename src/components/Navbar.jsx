import { useState, useEffect } from "react";
import logo from "../assets/Gopaltext.png";
import {
  FaLinkedin,
  FaGithub,
  FaBehance,
  FaInstagram,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const sections = ["about", "blogs", "projects", "certifications", "contact"];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      for (let id of sections) {
        const el = document.getElementById(id);
        if (
          el &&
          el.offsetTop - 100 <= scrollY &&
          el.offsetTop + el.offsetHeight > scrollY
        ) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkStyle = (id) =>
    `transition hover:text-pink-400 ${
      activeSection === id ? "text-pink-400 font-semibold" : "text-white"
    }`;

  return (
    <nav className="fixed top-4 left-1/2 z-50 w-full max-w-6xl transform -translate-x-1/2 px-4 sm:px-6">
      <div className="flex flex-wrap items-center justify-between rounded-full bg-white/10 dark:bg-black/20 px-6 py-3 backdrop-blur-md shadow-md">
        {/* Logo */}
        <div className="flex items-center">
          <img className="w-28" src={logo} alt="logo" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 text-sm font-thin">
          {sections.slice(0, 4).map((id) => (
            <a key={id} href={`#${id}`} className={navLinkStyle(id)}>
              {id}
            </a>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4 text-white text-xl">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="hover:text-blue-400 transition" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="hover:text-gray-300 transition" />
          </a>
          <a
            href="https://behance.net"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaBehance className="hover:text-blue-300 transition" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="hover:text-pink-400 transition" />
          </a>

          {/* Get in Touch - Desktop only */}
          <a
            href="#contact"
            className="hidden sm:inline-block ml-4 px-4 py-1.5 rounded-full border border-white text-white text-sm hover:bg-white hover:text-black dark:hover:text-white dark:hover:bg-neutral-800 transition"
          >
            Get in Touch
          </a>

          {/* Hamburger - Mobile only */}
          <button
            className="ml-4 md:hidden text-white text-xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="dropdown"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-2 w-full rounded-xl bg-white/10 dark:bg-black/30 backdrop-blur-md text-white px-6 py-4 flex flex-col gap-3 text-sm shadow-lg overflow-hidden"
          >
            {sections.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className={navLinkStyle(id)}
                onClick={() => setMenuOpen(false)}
              >
                {id}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
