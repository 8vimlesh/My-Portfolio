import React, { useState } from "react";
import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./sections/Hero";
import { SelectedProjects } from "./sections/SelectedProjects";
import { ProcessAndQuote } from "./sections/ProcessAndQuote";
import { ContactFooter } from "./sections/ContactFooter";
import { motion, useScroll, useSpring } from "framer-motion";
import { CustomCursor } from "./components/ui/CustomCursor";
import { CreativePageTransition } from "./components/ui/CreativePageTransition";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 font-sans overflow-x-hidden w-full relative">
      {/* Creative Shutter Curtain Page Loader & Transition */}
      <CreativePageTransition onComplete={() => setIsLoaded(true)} />

      <CustomCursor />
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-[60]"
        style={{ scaleX }}
      />
      
      <Navbar />
      
      <motion.main
        initial={{ opacity: 0, scale: 0.98, filter: "blur(6px)" }}
        animate={isLoaded ? { opacity: 1, scale: 1, filter: "blur(0px)" } : {}}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <Hero />
        <SelectedProjects />
        <ProcessAndQuote />
      </motion.main>

      <ContactFooter />
    </div>
  );
}

export default App;

