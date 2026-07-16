import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Globe, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const Hero = () => {
  const { hero } = portfolioData;
  const { scrollY } = useScroll();

  // 3D Parallax Scroll Effects for the Profile Image
  const profileY = useTransform(scrollY, [0, 800], [0, 200]);
  const profileRotateX = useTransform(scrollY, [0, 800], [0, 25]);
  const profileScale = useTransform(scrollY, [0, 800], [1, 0.85]);
  const profileOpacity = useTransform(scrollY, [0, 600], [1, 0.3]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-12 perspective-[1200px]">
      {/* Giant Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center pointer-events-none z-0 select-none">
        <h1 className="font-display text-[25vw] md:text-[15vw] leading-none whitespace-nowrap text-gradient-red opacity-20 transform -translate-y-10">
          {hero.title}
        </h1>
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-24 max-w-[1300px] flex flex-col lg:flex-row items-center h-full gap-12">
        
        {/* Left Content */}
        <div className="flex-1 w-full flex flex-col justify-center items-start pt-12 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-script text-3xl md:text-5xl text-foreground mb-2 sm:mb-4">
              {hero.greeting}
            </p>
            
            <h2 className="font-display text-[13vw] sm:text-6xl md:text-8xl lg:text-[7rem] leading-[0.85] tracking-tighter text-foreground mb-4 sm:mb-6 uppercase">
              {hero.name.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </h2>

            <div className="inline-block bg-primary/10 border border-primary/20 px-4 py-2 rounded-full mb-6">
              <p className="text-primary font-bold text-sm md:text-base tracking-widest uppercase">
                {hero.role}
              </p>
            </div>

            <p className="text-muted-foreground text-base sm:text-lg md:text-xl w-full max-w-md leading-relaxed mb-8">
              {hero.description}
            </p>

            <div className="flex items-center gap-3 text-sm uppercase tracking-widest text-muted-foreground border border-border px-5 py-3 rounded-full w-fit">
              <Globe className="w-4 h-4 text-primary" />
              {hero.availability}
            </div>
          </motion.div>
        </div>

        {/* Right Content - Photo & Stats */}
        <div className="flex-1 relative w-full h-[50vh] sm:h-[60vh] lg:h-[80vh] min-h-[400px] sm:min-h-[500px]" style={{ perspective: 1200 }}>
          <motion.div 
            className="absolute inset-0 overflow-visible origin-bottom"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ 
              y: profileY,
              rotateX: profileRotateX,
              scale: profileScale,
              opacity: profileOpacity,
            }}
          >
            {/* Dark gradient overlay for moody effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none" />
            <img 
              src="/profile-transparent.png" 
              alt="Portrait" 
              className="w-full h-full object-contain object-bottom scale-[1.15] lg:scale-[1.4] xl:scale-[1.5] origin-bottom grayscale opacity-90 drop-shadow-2xl"
            />
          </motion.div>

          {/* Floating Tagline Card */}
          <motion.div 
            className="absolute bottom-4 lg:bottom-12 left-0 lg:-left-20 xl:-left-32 z-20 glass-card p-4 sm:p-6 rounded-2xl flex items-center gap-3 sm:gap-4 w-max shadow-2xl"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Sparkles className="w-6 h-6 text-primary shrink-0" />
            <p className="font-bold text-sm tracking-widest uppercase whitespace-nowrap">
              {hero.tagline}
            </p>
          </motion.div>

          {/* Vertical Stats Blocks */}
          <motion.div 
            className="absolute right-0 lg:-right-8 xl:-right-16 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col gap-8"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {hero.stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-end border-r-2 border-primary/30 pr-6">
                <span className="font-display text-4xl text-primary mb-1">{stat.value}</span>
                <span className="text-xs uppercase tracking-widest text-muted-foreground text-right w-24">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};
