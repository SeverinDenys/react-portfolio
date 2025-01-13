import { useState } from "react";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import SoftSkills from "./components/SoftSkills/SoftSkills";
import Certificates from "./components/Certificate/Certificates";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHamburger = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Navbar isOpen={isOpen} toggleHamburger={toggleHamburger} />
      <Hero isMenuOpen={isOpen} />
      <About />
      <SoftSkills />
      <Experience />
      <Projects />
      <Certificates />
      <Contact />
    </>
  );
}

export default App;
