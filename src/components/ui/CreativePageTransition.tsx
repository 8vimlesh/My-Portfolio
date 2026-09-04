import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Terminal, Cpu, ArrowUpRight } from 'lucide-react';

interface CreativePageTransitionProps {
  onComplete?: () => void;
}

export const CreativePageTransition: React.FC<CreativePageTransitionProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsDone(true);
            if (onComplete) onComplete();
          }, 300);
          return 100;
        }
        // Organic acceleration curve
        const step = Math.floor(Math.random() * 12) + 6;
        return Math.min(prev + step, 100);
      });
    }, 45);

    return () => clearInterval(timer);
  }, [onComplete]);

  // 5 Vertical shutter columns for the architectural curtain wipe
  const columns = [0, 1, 2, 3, 4];

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="creative-loader"
          className="fixed inset-0 z-[99999] pointer-events-auto flex flex-col justify-between overflow-hidden select-none"
          exit={{ opacity: 0, transition: { duration: 0.8, delay: 0.7 } }}
        >
          {/* Background Shutter Columns */}
          <div className="absolute inset-0 grid grid-cols-5 z-0 pointer-events-none">
            {columns.map((colIndex) => (
              <motion.div
                key={colIndex}
                initial={{ y: 0 }}
                exit={{
                  y: '-100%',
                  transition: {
                    duration: 0.85,
                    ease: [0.76, 0, 0.24, 1],
                    delay: colIndex * 0.08,
                  },
                }}
                className="relative h-full w-full bg-[#0a0a0a] border-r border-white/5 last:border-r-0 flex flex-col justify-between p-4"
              >
                {/* Subtle vertical accent line */}
                <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
              </motion.div>
            ))}
          </div>

          {/* Top HUD Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30, transition: { duration: 0.4 } }}
            className="relative z-10 w-full px-6 py-8 md:px-12 flex items-center justify-between text-xs tracking-widest uppercase font-mono text-muted-foreground"
          >
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-primary animate-ping" />
              <span className="text-white font-bold">VIMLESH.SYSTEM // v2.6</span>
            </div>

            <div className="hidden sm:flex items-center gap-6">
              <span className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-primary" /> INITIALIZING
              </span>
              <span className="flex items-center gap-2">
                <Cpu className="w-3.5 h-3.5 text-primary" /> AI & FULLSTACK
              </span>
            </div>

            <div className="font-mono text-primary font-bold">
              [{progress.toString().padStart(3, '0')}%]
            </div>
          </motion.div>

          {/* Central Hero Typography Reveal */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.1, opacity: 0, filter: 'blur(10px)', transition: { duration: 0.5 } }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div className="overflow-hidden">
                <motion.h1
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl uppercase tracking-tighter text-white"
                >
                  VIMLESH
                </motion.h1>
              </div>

              <div className="overflow-hidden">
                <motion.p
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="text-xs sm:text-sm md:text-base uppercase tracking-[0.3em] font-semibold text-primary"
                >
                  Software Developer & AI Engineer
                </motion.p>
              </div>
            </motion.div>

            {/* Kinetic Progress Bar */}
            <div className="w-48 sm:w-72 h-[2px] bg-white/10 rounded-full mt-8 overflow-hidden relative">
              <motion.div
                className="h-full bg-gradient-to-r from-primary via-red-500 to-rose-400"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'linear' }}
              />
            </div>
          </div>

          {/* Bottom HUD Footer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30, transition: { duration: 0.4 } }}
            className="relative z-10 w-full px-6 py-8 md:px-12 flex items-center justify-between text-[10px] sm:text-xs tracking-widest uppercase font-mono text-muted-foreground"
          >
            <span>LOCATION: GLOBAL REMOTE</span>
            <div className="flex items-center gap-2 text-white/80">
              <span>DESIGN. ENGINEER. DELIVER.</span>
              <Sparkles className="w-3.5 h-3.5 text-primary" />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
