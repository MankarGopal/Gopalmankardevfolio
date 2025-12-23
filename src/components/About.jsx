import aboutImg from "../assets/gopalimage.jpg";
import { ABOUT_TEXT } from "../constants";
import { FaJava, FaLaptopCode } from "react-icons/fa";
import { SiLeetcode, SiFigma } from "react-icons/si";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-12 px-4">
      <h1
        id="about"
        className="my-16 text-center text-4xl font-light tracking-tight"
      >
        About <span className="text-neutral-500">Me</span>
      </h1>

      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 max-w-6xl mx-auto">
        {/* Left Side – Rounded Photo */}
        <div className="w-64 h-64 flex-shrink-0">
          <img
            src={aboutImg}
            alt="Gopal Mankar"
            className="w-full h-full rounded-full object-cover border-4 border-neutral-800 shadow-md"
          />
        </div>

        {/* Right Side – About Text */}
        <div className="flex-1 text-center lg:text-left">
          <p className="font-thin text-lg leading-relaxed max-w-3xl mx-auto lg:mx-0">
            {ABOUT_TEXT}
          </p>

          {/* Currently Learning */}
          <div className="mt-6 text-sm text-neutral-500 flex items-center justify-center lg:justify-start gap-3 flex-wrap">
            <FaLaptopCode className="text-green-400" />
            <span>Currently Learning:</span>
            <FaJava size={18} title="Java" className="text-orange-500" />
            <SiLeetcode size={18} title="DSA" className="text-yellow-400" />
            <SiFigma size={18} title="UX Design" className="text-pink-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
