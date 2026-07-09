import React, { useState } from "react";
import { portfolioData } from "../data/portfolio";
import { SectionWrapper } from "../components/layout/SectionWrapper";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../components/ui/Card";
import { ExternalLink } from "lucide-react";
import { GithubIcon as Github } from "../components/ui/icons";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../utils/cn";
import { TiltCard } from "../components/ui/TiltCard";
import { MagneticButton } from "../components/ui/MagneticButton";

const categories = ["All", "Software Development", "Machine Learning", "Data Analytics"];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = portfolioData.projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <SectionWrapper id="projects">
      <div className="flex flex-col gap-16 relative z-10">
        <div className="text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
          >
            Featured Work
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            A selection of my recent projects, showcasing my expertise in building scalable software and intelligent models.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border",
                  activeCategory === category
                    ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.2)]"
                    : "bg-transparent text-muted-foreground border-white/10 hover:border-white/30 hover:text-white"
                )}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 30 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <TiltCard className="h-full">
                  <Card className="h-full flex flex-col overflow-hidden group glass border-white/10 hover:border-emerald-500/50 transition-all duration-500 bg-background/40 backdrop-blur-xl relative">
                    {/* Animated gradient border on hover (pure CSS) */}
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/0 to-emerald-500/0 group-hover:from-emerald-500/20 group-hover:via-emerald-400/20 group-hover:to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-xl" />

                    <div className="relative aspect-[16/10] overflow-hidden rounded-t-xl">
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent z-10 opacity-60 group-hover:opacity-20 transition-opacity duration-500" />
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-out"
                      />
                    </div>
                    
                    <CardHeader className="relative z-20 -mt-6 pt-0">
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-xs font-semibold text-emerald-400 tracking-wider uppercase backdrop-blur-md">
                          {project.category}
                        </span>
                      </div>
                      <CardTitle className="text-2xl font-bold group-hover:text-emerald-400 transition-colors duration-300">
                        {project.title}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent className="flex-grow relative z-20">
                      <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 4).map((tech, i) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 bg-white/5 rounded-md text-xs font-medium text-white/80 border border-white/10 group-hover:border-emerald-500/30 transition-all duration-300"
                            style={{ transitionDelay: `${i * 50}ms` }}
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="px-2.5 py-1 bg-white/5 rounded-md text-xs font-medium text-white/80 border border-white/10">
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>
                    </CardContent>
                    
                    <CardFooter className="gap-3 mt-auto border-t border-white/10 pt-5 relative z-20">
                      <MagneticButton className="w-full rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium transition-all">
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 py-2.5 w-full">
                          <ExternalLink className="w-4 h-4" /> Live Demo
                        </a>
                      </MagneticButton>
                      <MagneticButton className="w-full rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-emerald-500/30 font-medium transition-all">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 py-2.5 w-full">
                          <Github className="w-4 h-4" /> Code
                        </a>
                      </MagneticButton>
                    </CardFooter>
                  </Card>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
