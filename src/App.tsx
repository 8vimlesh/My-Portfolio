import React from "react";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Skills } from "./sections/Skills";
import { Projects } from "./sections/Projects";
import { Experience } from "./sections/Experience";
import { GithubStats } from "./sections/GithubStats";
import { Contact } from "./sections/Contact";
import { motion, useScroll, useSpring } from "framer-motion";

import { CustomCursor } from "./components/ui/CustomCursor";
import { AnimatedBackground } from "./components/ui/AnimatedBackground";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-transparent text-foreground selection:bg-emerald-500/30">
      <CustomCursor />
      <AnimatedBackground />
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-emerald-500 origin-left z-[60]"
        style={{ scaleX }}
      />
      
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <GithubStats />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
