import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const SelectedProjects = () => {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  // Lock body scroll when modal is open
  React.useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 container mx-auto max-w-[1300px]">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <motion.h2 
          className="font-display text-4xl md:text-5xl uppercase"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Selected Projects
        </motion.h2>
        <motion.a 
          href="#"
          className="text-sm font-bold tracking-widest uppercase hover:text-primary transition-colors flex items-center gap-2 group cursor-pointer border-b border-transparent hover:border-primary pb-1"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
          >
            {/* Image Container */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl mb-6 bg-secondary border border-border">
              {/* Overlay Text */}
              <div className="absolute inset-0 z-20 flex items-center justify-center p-6 bg-black/40 group-hover:bg-black/20 transition-colors duration-500">
                <h3 className="font-display text-3xl md:text-4xl text-center uppercase tracking-tight text-white group-hover:text-primary transition-colors duration-500 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0">
                  {project.title}
                </h3>
              </div>
              
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover grayscale opacity-70 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out"
              />
            </div>

            {/* Bottom Info */}
            <div className="flex items-start justify-between">
              <div className="flex flex-col">
                <span className="text-primary font-display text-lg mb-1">{project.id}</span>
                <h4 className="font-bold text-xl uppercase tracking-wider mb-1">{project.title}</h4>
                <p className="text-muted-foreground text-sm uppercase tracking-widest">{project.category}</p>
              </div>
              
              {/* Arrow Reveal Button */}
              <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-colors duration-300 overflow-hidden relative">
                <ArrowUpRight className="w-5 h-5 text-foreground group-hover:text-white absolute transition-transform duration-300 transform -translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0" />
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-white absolute transition-transform duration-300 transform translate-x-0 translate-y-0 group-hover:translate-x-full group-hover:-translate-y-full" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm"
            />
            
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 100, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-x-4 md:inset-x-auto top-1/2 -translate-y-1/2 md:left-1/2 md:-translate-x-1/2 z-[101] w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-secondary border border-border shadow-2xl flex flex-col md:flex-row"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-white hover:border-primary transition-colors duration-300"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Image */}
              <div className="w-full md:w-1/2 h-[300px] md:h-auto md:min-h-[500px] relative overflow-hidden">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent md:hidden" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-secondary hidden md:block" />
              </div>

              {/* Modal Details */}
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <span className="text-primary font-display text-2xl mb-2">{selectedProject.id}</span>
                <h3 className="font-display text-4xl md:text-5xl uppercase tracking-tighter mb-4">{selectedProject.title}</h3>
                
                <div className="inline-block bg-primary/10 border border-primary/20 px-3 py-1 rounded-full mb-6 w-fit">
                  <p className="text-primary font-bold text-xs tracking-widest uppercase">
                    {selectedProject.category}
                  </p>
                </div>

                {/* Tech Stack */}
                {selectedProject.techStack && (
                  <div className="flex flex-wrap gap-2 mb-8">
                    {selectedProject.techStack.map((tech: string, i: number) => (
                      <span key={i} className="text-xs font-semibold tracking-wider uppercase bg-white/5 border border-white/10 px-3 py-1 rounded-md text-muted-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
                  This is a featured project spanning modern web technologies, beautiful editorial design, and robust engineering. We focused heavily on the user experience and performance to deliver exceptional value.
                </p>

                <a 
                  href={selectedProject.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 bg-white text-black px-6 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-primary hover:text-white transition-colors duration-300 w-fit"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                  View on GitHub
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};
