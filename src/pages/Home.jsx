import Accueil from "./Accueil";
import About from "./About";
import Projects from "./Projects";
import Parcours from "./Parcours";
import Skills from "./Skills";
import Contact from "./Contact";
import AnimatedSection from "../components/AnimatedSection";

export default function Home() {
  return (
    <>
      
      <AnimatedSection id="accueil" >
        <Accueil />
      </AnimatedSection>

      
      <AnimatedSection id="about" >
        <About />
      </AnimatedSection>

      <AnimatedSection id="parcours" >
        <Parcours />
      </AnimatedSection>

      
      <AnimatedSection id="projects" >
        <Projects />
      </AnimatedSection>

      
      <AnimatedSection id="skills" >
        <Skills />
      </AnimatedSection>

      
      <AnimatedSection id="contact" >
        <Contact />
      </AnimatedSection>
    </>
  );
}
