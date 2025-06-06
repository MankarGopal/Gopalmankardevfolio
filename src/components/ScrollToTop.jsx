import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return visible ? (
    <motion.button
      onClick={scrollToTop}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed bottom-6 right-6 z-50 rounded-full bg-purple-600 p-3 text-white shadow-lg hover:bg-purple-500"
    >
      <FaArrowUp />
    </motion.button>
  ) : null;
};

export default ScrollToTop;
