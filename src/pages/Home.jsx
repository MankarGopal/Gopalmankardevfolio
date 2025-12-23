import Hero from "../components/Hero";
import About from "../components/About";
import Technologies from "../components/Technologies";
import Education from "../components/Education";
import Project from "../components/Project";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="container mx-auto px-8">
      <Hero />
      <About />
      <Technologies />
      <Education />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
