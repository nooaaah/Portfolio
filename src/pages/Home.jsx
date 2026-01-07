import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Timeline from "./Timeline";
import Skills from "./Skills";
import Contact from "./Contact";
import AnimatedSection from "../components/AnimatedSection";

export default function Home() {
  return (
    <>
      
      <AnimatedSection id="accueil" >
        <Hero />
      </AnimatedSection>

      
      <AnimatedSection id="about" >
        <About />
      </AnimatedSection>

      <AnimatedSection id="parcours" >
        <Timeline />
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
