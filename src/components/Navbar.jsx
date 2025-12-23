import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import logo from "../assets/Gopaltext.png";
import {
  FaLinkedin,
  FaGithub,
  FaBehance,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

/* ONLY sections that exist on HOME page */
const sectionLinks = ["about", "projects", "certifications", "contact"];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();

  /* Scroll spy – ONLY on home page */
  useEffect(() => {
    if (location.pathname !== "/") return;

    const handleScroll = () => {
      const scrollY = window.scrollY;

      for (let id of sectionLinks) {
        const el = document.getElementById(id);
        if (
          el &&
          el.offsetTop - 120 <= scrollY &&
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
  }, [location.pathname]);

  const navLinkStyle = (id) =>
    `transition hover:text-pink-400 ${
      activeSection === id ? "text-pink-400 font-semibold" : "text-white"
    }`;

  return (
    <nav className="fixed top-4 left-1/2 z-50 w-full max-w-6xl -translate-x-1/2 px-4 sm:px-6">
      <div className="flex items-center justify-between rounded-full bg-white/10 dark:bg-black/20 px-6 py-3 backdrop-blur-md shadow-md">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img className="w-28" src={logo} alt="logo" />
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex gap-6 text-sm font-thin">
          {/* Section links */}
          {sectionLinks.map((id) => (
            <a key={id} href={`/#${id}`} className={navLinkStyle(id)}>
              {id}
            </a>
          ))}

          {/* Page links */}
          <Link
            to="/blogs"
            className="text-white hover:text-pink-400 transition"
          >
            blogs
          </Link>

          <Link
            to="/journey"
            className="text-white hover:text-pink-400 transition"
          >
            learning journey
          </Link>
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center gap-4 text-white text-xl">
          <a
            href="https://in.linkedin.com/in/gopal-mankar-7a4283177"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="hover:text-blue-400 transition" />
          </a>
          <a
            href="https://github.com/MankarGopal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="hover:text-gray-300 transition" />
          </a>
          <a
            href="https://www.behance.net/gopalmankar4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaBehance className="hover:text-blue-300 transition" />
          </a>

          {/* Get in Touch */}
          <a
            href="/#contact"
            className="hidden sm:inline-block ml-4 px-4 py-1.5 rounded-full border border-white text-white text-sm hover:bg-white hover:text-black dark:hover:bg-neutral-800 transition"
          >
            Get in Touch
          </a>

          {/* Mobile Menu Button */}
          <button
            className="ml-4 md:hidden text-white text-xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-2 w-full rounded-xl bg-white/10 dark:bg-black/30 backdrop-blur-md text-white px-6 py-4 flex flex-col gap-3 text-sm shadow-lg"
          >
            {sectionLinks.map((id) => (
              <a
                key={id}
                href={`/#${id}`}
                onClick={() => setMenuOpen(false)}
                className={navLinkStyle(id)}
              >
                {id}
              </a>
            ))}

            <Link to="/blogs" onClick={() => setMenuOpen(false)}>
              blogs
            </Link>

            <Link to="/journey" onClick={() => setMenuOpen(false)}>
              learning journey
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
