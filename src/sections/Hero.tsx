import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolio";
import { ArrowDown, Download, Mail } from "lucide-react";
import { MagneticButton } from "../components/ui/MagneticButton";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 100, damping: 20 }
  },
};

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-400 mb-8 glass"
          >
            <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 mr-2.5 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
            Available for new opportunities
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-6 leading-tight"
          >
            Hi, I'm <br className="md:hidden" /><span className="text-gradient inline-block">{portfolioData.hero.name}</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-2xl md:text-3xl text-foreground font-medium mb-8 max-w-3xl"
          >
            {portfolioData.hero.title}
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl leading-relaxed"
          >
            {portfolioData.hero.description}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 items-center"
          >
            <MagneticButton className="rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all">
              <a href="#projects" className="flex items-center gap-2 px-8 py-4">
                View Projects <ArrowDown className="w-5 h-5" />
              </a>
            </MagneticButton>
            
            <MagneticButton className="rounded-full glass border-emerald-500/20 hover:border-emerald-500/50 hover:bg-emerald-500/10 font-medium transition-all">
              <a href="/resume.pdf" target="_blank" className="flex items-center gap-2 px-8 py-4">
                <Download className="w-5 h-5" /> Download Resume
              </a>
            </MagneticButton>
            
            <MagneticButton className="rounded-full hover:bg-white/5 font-medium transition-all">
              <a href="#contact" className="flex items-center gap-2 px-8 py-4">
                <Mail className="w-5 h-5" /> Contact Me
              </a>
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 w-full h-1/2 bg-emerald-500"
            animate={{ top: ["-50%", "100%"] }}
            transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
