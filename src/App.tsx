import React from "react";
import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./sections/Hero";
import { SelectedProjects } from "./sections/SelectedProjects";
import { ProcessAndQuote } from "./sections/ProcessAndQuote";
import { ContactFooter } from "./sections/ContactFooter";
import { motion, useScroll, useSpring } from "framer-motion";
import { CustomCursor } from "./components/ui/CustomCursor";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 font-sans">
      <CustomCursor />
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-[60]"
        style={{ scaleX }}
      />
      
      <Navbar />
      
      <main>
        <Hero />
        <SelectedProjects />
        <ProcessAndQuote />
      </main>

      <ContactFooter />
    </div>
  );
}

export default App;
