import React from 'react';
import { Sparkles, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-8 md:px-12 lg:px-24 max-w-[1300px] mx-auto w-full"
    >
      <a href="#" className="flex flex-col justify-center group">
        <span className="text-primary font-bold text-xs tracking-widest uppercase mb-0.5">
          Vimlesh Tiwari
        </span>
        <span className="text-[10px] text-muted-foreground tracking-widest uppercase">
          Software & AI Engineer
        </span>
      </a>

      {/* Nav Links */}
      <div className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-widest uppercase text-muted-foreground">
        <a href="#projects" className="hover:text-white transition-colors duration-200">
          Projects
        </a>
        <a href="#process" className="hover:text-white transition-colors duration-200">
          Process & Stack
        </a>
        <a href="#contact" className="hover:text-white transition-colors duration-200">
          Contact
        </a>
      </div>

      <a 
        href="#contact" 
        className="flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300 group cursor-pointer"
      >
        <span className="text-xs font-bold tracking-widest uppercase">
          Hire Me
        </span>
        <Sparkles className="w-3.5 h-3.5 animate-pulse" />
      </a>
    </motion.nav>
  );
};

