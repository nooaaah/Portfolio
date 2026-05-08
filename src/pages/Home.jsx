import '../styles/global.scss';
import Hero from './Hero';
import About from './About';
import Timeline from './Timeline';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Timeline />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}
