import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-neutral-800 py-10 px-6 text-neutral-400">
      <div className="mx-auto max-w-4xl text-center space-y-6">
        {/* Credit */}
        <p className="text-sm tracking-wide">
          Designed & developed by{" "}
          <span className="font-medium text-purple-400">Gopal Mankar</span>
        </p>

        {/* Social Links */}
        <div className="flex justify-center items-center gap-6 text-lg">
          <a
            href="https://github.com/MankarGopal"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition hover:text-white"
          >
            <FaGithub />
          </a>

          <a
            href="https://in.linkedin.com/in/gopal-mankar-7a4283177"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition hover:text-white"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:gopalmankar812@gmail.com"
            aria-label="Email"
            className="transition hover:text-white"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-neutral-500">
          © {new Date().getFullYear()} Gopal Mankar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
