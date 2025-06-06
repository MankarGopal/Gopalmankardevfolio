import { motion } from "framer-motion";

const BlobBackground = () => {
  return (
    <div className="fixed -z-10 w-full h-full overflow-hidden">
      <motion.div
        className="absolute w-[400px] h-[400px] bg-pink-500 rounded-full opacity-20 blur-3xl mix-blend-screen"
        animate={{ x: [0, 100, -100, 0], y: [0, -50, 50, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 w-[500px] h-[500px] bg-purple-600 rounded-full opacity-20 blur-3xl mix-blend-screen"
        animate={{ x: [0, -80, 80, 0], y: [0, 60, -60, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-0 bottom-0 w-[300px] h-[300px] bg-blue-500 rounded-full opacity-20 blur-3xl mix-blend-screen"
        animate={{ x: [0, -60, 60, 0], y: [0, 30, -30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};

export default BlobBackground;
