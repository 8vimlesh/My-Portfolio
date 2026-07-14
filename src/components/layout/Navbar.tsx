import React from 'react';
import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-8 md:px-12 lg:px-24 max-w-[1300px] mx-auto w-full"
    >
      <div className="flex flex-col justify-center">
        <span className="text-primary font-bold text-xs tracking-widest uppercase mb-1">
          Software Engineer
        </span>
      </div>

      <a href="#contact" className="flex items-center gap-2 group cursor-pointer">
        <span className="text-xs font-semibold tracking-widest uppercase group-hover:text-primary transition-colors duration-300">
          Hire Me
        </span>
        <Sparkles className="w-4 h-4 text-primary animate-pulse" />
      </a>
    </motion.nav>
  );
};
