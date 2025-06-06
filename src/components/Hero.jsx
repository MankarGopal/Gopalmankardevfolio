import { HERO_CONTENT } from "../constants";
import profilePhoto from "../assets/Aboutgopall.png";

const Hero = () => {
  return (
    <section className="border-b border-neutral-800 pt-36 pb-24">
      <div className="mx-auto w-full max-w-6xl px-6 flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        {/* Text Content */}
        <div className="text-left w-full lg:w-2/3">
          <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
            Gopal Mankar
          </h1>

          <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
            UI/UX Designer & Developer
          </span>

          <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
            {HERO_CONTENT}
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="/resume.pdf"
              className="px-4 py-1.5 sm:px-5 sm:py-2 rounded-full text-xs sm:text-sm bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 text-white hover:opacity-90 transition"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="px-4 py-1.5 sm:px-5 sm:py-2 rounded-full text-xs sm:text-sm border border-white text-white hover:bg-white hover:text-black transition"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/3 flex justify-center">
          <img
            src={profilePhoto}
            alt="Gopal Mankar"
            className="rounded-xl w-60 sm:w-72 lg:w-80 xl:w-96 object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
