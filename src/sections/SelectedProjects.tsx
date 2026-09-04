import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X, ExternalLink } from 'lucide-react';
import { GithubIcon } from '../components/ui/icons';
import { portfolioData } from '../data/portfolio';

export const SelectedProjects = () => {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  // Lock body scroll and handle ESC key when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setSelectedProject(null);
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  return (
    <section id="projects" className="relative z-20 bg-[#0d0d0d] rounded-t-[36px] md:rounded-t-[56px] border-t border-white/10 shadow-[0_-30px_90px_rgba(0,0,0,0.95)] pt-16 md:pt-24 pb-28 px-6 md:px-12 lg:px-24 container mx-auto max-w-[1300px] mt-8">
      {/* Editorial Curtain Grip Bar */}
      <div className="w-12 h-1.5 bg-white/15 rounded-full mx-auto mb-12 hover:bg-primary/50 transition-colors" />

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <motion.h2 
          className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-tighter"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Selected Projects
        </motion.h2>
        <motion.a 
          href="https://github.com/8vimlesh"
          target="_blank"
          rel="noreferrer"
          className="text-sm font-bold tracking-widest uppercase hover:text-primary transition-colors flex items-center gap-2 group cursor-pointer border-b border-transparent hover:border-primary pb-1"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          View All Projects
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </motion.a>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="group cursor-pointer flex flex-col"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
          >
            {/* Image Container */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-6 bg-secondary border border-border group-hover:border-primary/50 transition-colors duration-300">
              {/* Overlay Text */}
              <div className="absolute inset-0 z-20 flex items-center justify-center p-6 bg-black/40 group-hover:bg-black/20 transition-colors duration-500">
                <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-center uppercase tracking-tight text-white group-hover:text-primary transition-colors duration-500 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0">
                  {project.title}
                </h3>
              </div>
              
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover grayscale opacity-75 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 ease-out"
              />
            </div>

            {/* Bottom Info */}
            <div className="flex items-start justify-between">
              <div className="flex flex-col">
                <span className="text-primary font-display text-lg mb-1">{project.id}</span>
                <h4 className="font-bold text-xl uppercase tracking-wider mb-1 group-hover:text-primary transition-colors duration-300">{project.title}</h4>
                <p className="text-muted-foreground text-sm uppercase tracking-widest">{project.category}</p>
              </div>
              
              {/* Arrow Reveal Button */}
              <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-colors duration-300 overflow-hidden relative shrink-0 ml-3">
                <ArrowUpRight className="w-5 h-5 text-foreground group-hover:text-white absolute transition-transform duration-300 transform -translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0" />
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-white absolute transition-transform duration-300 transform translate-x-0 translate-y-0 group-hover:translate-x-full group-hover:-translate-y-full" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project Details Modal rendered via Portal */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-[999] flex items-center justify-center p-3 sm:p-6 md:p-8 overflow-y-auto">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="fixed inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
              />
              
              {/* Modal Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 30 }}
                transition={{ type: "spring", damping: 26, stiffness: 260 }}
                onClick={(e) => e.stopPropagation()}
                className="relative z-10 w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-2xl md:rounded-3xl bg-[#131313] border border-white/15 shadow-[0_25px_70px_rgba(0,0,0,0.9)] flex flex-col md:flex-row my-auto"
              >
                {/* Close Button */}
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 cursor-pointer shadow-lg"
                  aria-label="Close details"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Modal Left / Top Image */}
                <div className="w-full md:w-5/12 h-[220px] sm:h-[280px] md:h-auto relative overflow-hidden bg-black shrink-0">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-transparent to-transparent md:hidden" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#131313]/90 hidden md:block" />
                </div>

                {/* Modal Right Details */}
                <div className="w-full md:w-7/12 p-6 sm:p-8 md:p-10 overflow-y-auto max-h-[calc(90vh-220px)] md:max-h-[90vh] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-primary font-display text-xl sm:text-2xl font-bold">{selectedProject.id}</span>
                      <div className="inline-block bg-primary/10 border border-primary/25 px-3 py-0.5 rounded-full">
                        <p className="text-primary font-bold text-[10px] sm:text-xs tracking-widest uppercase">
                          {selectedProject.category}
                        </p>
                      </div>
                    </div>

                    <h3 className="font-display text-2xl sm:text-3xl md:text-4xl uppercase tracking-tighter mb-4 text-white">
                      {selectedProject.title}
                    </h3>

                    {/* Tech Stack */}
                    {selectedProject.techStack && (
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {selectedProject.techStack.map((tech: string, i: number) => (
                          <span key={i} className="text-[10px] sm:text-xs font-semibold tracking-wider uppercase bg-white/5 border border-white/10 px-2.5 py-1 rounded-md text-gray-300">
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Project Brief */}
                    {(selectedProject as any).brief ? (
                      <p className="text-gray-300 text-xs sm:text-sm mb-5 leading-relaxed">
                        {(selectedProject as any).brief}
                      </p>
                    ) : (
                      <p className="text-gray-300 text-xs sm:text-sm mb-5 leading-relaxed">
                        This is a featured project spanning modern web technologies, beautiful editorial design, and robust engineering. We focused heavily on the user experience and performance to deliver exceptional value.
                      </p>
                    )}

                    {/* Key Features */}
                    {(selectedProject as any).keyFeatures && (
                      <div className="mb-5">
                        <h4 className="text-white font-bold text-[11px] sm:text-xs tracking-widest uppercase mb-2.5 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
                          Key Features
                        </h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-300 text-xs sm:text-sm">
                          {(selectedProject as any).keyFeatures.map((feature: string, i: number) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-primary font-bold mt-0.5">›</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* What I Learned */}
                    {(selectedProject as any).learned && (
                      <div className="mb-6">
                        <h4 className="text-white font-bold text-[11px] sm:text-xs tracking-widest uppercase mb-2.5 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
                          What I Learned
                        </h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-300 text-xs sm:text-sm">
                          {(selectedProject as any).learned.map((item: string, i: number) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-primary font-bold mt-0.5">›</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10 mt-auto">
                    {selectedProject.link && selectedProject.link !== '#' ? (
                      <a 
                        href={selectedProject.link}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full font-bold uppercase tracking-wider text-[11px] sm:text-xs hover:bg-primary hover:text-white transition-all duration-300 shadow-md cursor-pointer"
                      >
                        <GithubIcon className="w-4 h-4" />
                        View Code
                      </a>
                    ) : (
                      <span className="flex items-center gap-2 bg-white/10 text-gray-400 px-5 py-2.5 rounded-full font-bold uppercase tracking-wider text-[11px] sm:text-xs">
                        <GithubIcon className="w-4 h-4" />
                        Code Private / Internal
                      </span>
                    )}

                    {(selectedProject as any).liveLink && (
                      <a 
                        href={(selectedProject as any).liveLink}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 bg-primary text-white border border-primary px-5 py-2.5 rounded-full font-bold uppercase tracking-wider text-[11px] sm:text-xs hover:bg-transparent hover:text-primary transition-all duration-300 shadow-md cursor-pointer"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
};
