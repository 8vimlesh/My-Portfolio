import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X, ExternalLink, LayoutGrid, List, Sparkles } from 'lucide-react';
import { GithubIcon } from '../components/ui/icons';
import { portfolioData } from '../data/portfolio';

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'ai', label: 'AI & ML / RAG' },
  { id: 'fullstack', label: 'Full-Stack Apps' },
  { id: 'data', label: 'Data & Analytics' },
];

export const SelectedProjects = () => {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Filter projects based on active category
  const filteredProjects = projects.filter((project) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'ai') {
      return ['02', '04', '05'].includes(project.id) || 
        project.category.toLowerCase().includes('ai') || 
        project.category.toLowerCase().includes('vision') ||
        project.category.toLowerCase().includes('rag');
    }
    if (activeCategory === 'fullstack') {
      return ['01', '03', '07'].includes(project.id) || 
        project.category.toLowerCase().includes('fullstack') || 
        project.category.toLowerCase().includes('finance');
    }
    if (activeCategory === 'data') {
      return ['06', '08'].includes(project.id) || 
        project.category.toLowerCase().includes('data') || 
        project.category.toLowerCase().includes('intelligence');
    }
    return true;
  });

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
    <section id="projects" className="relative z-20 bg-[#0d0d0d] rounded-t-[36px] md:rounded-t-[56px] border-t border-white/10 shadow-[0_-30px_90px_rgba(0,0,0,0.95)] pt-14 md:pt-20 pb-24 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 max-w-[1720px] 2xl:max-w-[1880px] mx-auto mt-8 w-full">
      {/* Editorial Curtain Grip Bar */}
      <div className="w-12 h-1.5 bg-white/15 rounded-full mx-auto mb-10 hover:bg-primary/50 transition-colors" />

      {/* Header & Controls */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-10 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Curated Portfolio</span>
          </div>
          <motion.h2 
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-tighter text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Selected Projects
          </motion.h2>
        </div>

        {/* Filters & View Switcher */}
        <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto justify-between lg:justify-end">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 bg-[#171717] p-1.5 rounded-2xl border border-white/10">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`relative px-3.5 py-1.5 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                    isActive ? 'text-white font-bold' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeProjectCategory"
                      className="absolute inset-0 bg-primary rounded-xl shadow-[0_0_15px_rgba(224,32,32,0.4)]"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* View Mode Switcher */}
          <div className="flex items-center bg-[#171717] p-1 rounded-xl border border-white/10">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-colors cursor-pointer ${
                viewMode === 'grid' ? 'bg-white/15 text-white' : 'text-gray-400 hover:text-white'
              }`}
              title="Grid View"
              aria-label="Grid View"
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-colors cursor-pointer ${
                viewMode === 'list' ? 'bg-white/15 text-white' : 'text-gray-400 hover:text-white'
              }`}
              title="List View"
              aria-label="List View"
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Grid View */}
      {viewMode === 'grid' && (
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer flex flex-col bg-[#141414] hover:bg-[#1a1a1a] border border-white/10 hover:border-primary/50 rounded-2xl p-4 transition-all duration-300 shadow-lg hover:shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
              >
                {/* Compact 16:10 Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl mb-4 bg-secondary border border-white/5 group-hover:border-primary/30 transition-colors">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover grayscale opacity-75 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Top Badge Overlay */}
                  <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
                    <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-black/70 backdrop-blur-sm border border-white/10 text-primary">
                      {project.id}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary/80 text-white backdrop-blur-sm shadow">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Bottom Details */}
                <div className="flex flex-col flex-1 justify-between">
                  <div>
                    <h4 className="font-bold text-base sm:text-lg uppercase tracking-wide text-white group-hover:text-primary transition-colors duration-200 line-clamp-1 mb-2">
                      {project.title}
                    </h4>

                    {/* Tech Stack Pills */}
                    {project.techStack && (
                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.techStack.slice(0, 3).map((tech: string, i: number) => (
                          <span key={i} className="text-[10px] font-medium bg-white/5 border border-white/10 px-2 py-0.5 rounded text-gray-300">
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 3 && (
                          <span className="text-[10px] font-medium text-gray-400 self-center">
                            +{project.techStack.length - 3}
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Click to inspect action */}
                  <div className="flex items-center justify-between pt-2 border-t border-white/5 text-xs text-muted-foreground group-hover:text-primary transition-colors">
                    <span className="font-semibold uppercase tracking-wider text-[11px]">View Details</span>
                    <div className="w-7 h-7 rounded-full bg-white/5 group-hover:bg-primary group-hover:text-white flex items-center justify-center transition-colors">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}

      {/* Sleek List View */}
      {viewMode === 'list' && (
        <motion.div 
          layout
          className="flex flex-col divide-y divide-white/10 border-y border-white/10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25, delay: index * 0.03 }}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer py-4 sm:py-5 px-3 sm:px-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-white/[0.03] transition-colors rounded-xl"
              >
                <div className="flex items-center gap-4 sm:gap-6">
                  <span className="font-mono text-sm sm:text-base font-bold text-primary w-8 shrink-0">
                    {project.id}
                  </span>
                  <div>
                    <h4 className="font-bold text-base sm:text-xl text-white group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mt-0.5">
                      {project.category}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 sm:gap-8 justify-between md:justify-end">
                  {/* Tech stack */}
                  {project.techStack && (
                    <div className="hidden sm:flex flex-wrap gap-1.5 max-w-md justify-end">
                      {project.techStack.slice(0, 4).map((tech: string, i: number) => (
                        <span key={i} className="text-[10px] font-semibold bg-white/5 border border-white/10 px-2 py-0.5 rounded text-gray-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary group-hover:translate-x-1 transition-transform">
                    <span className="hidden sm:inline">Details</span>
                    <div className="w-8 h-8 rounded-full border border-white/10 group-hover:border-primary group-hover:bg-primary group-hover:text-white flex items-center justify-center transition-colors">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}

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
