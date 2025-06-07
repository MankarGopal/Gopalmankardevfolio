import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-neutral-800 bg-neutral-900/80 backdrop-blur-md text-neutral-400 py-8 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <p className="text-base font-medium tracking-wide">
          Designed & Developed by
          <p className="text-base font-medium tracking-wide"> </p>
          <span className="text-purple-400">Gopal Mankar</span>🚀
        </p>
        <div className="flex justify-center items-center gap-6 text-xl">
          <a
            href="https://github.com/MankarGopal"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://in.linkedin.com/in/gopal-mankar-7a4283177"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:gopalmankar812@gmail.com"
            className="hover:text-white transition-colors"
          >
            <FaEnvelope />
          </a>
        </div>
        <p className="text-xs text-neutral-500">
          © {new Date().getFullYear()} Gopal Mankar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
