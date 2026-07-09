import React, { useState } from "react";
import { portfolioData } from "../data/portfolio";
import { SectionWrapper } from "../components/layout/SectionWrapper";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { ExternalLink } from "lucide-react";
import { GithubIcon as Github } from "../components/ui/icons";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../utils/cn";

const categories = ["All", "Software Development", "Machine Learning", "Data Analytics"];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = portfolioData.projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <SectionWrapper id="projects">
      <div className="flex flex-col gap-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Featured Work</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            A selection of my recent projects, showcasing my expertise in building scalable software and intelligent models.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full flex flex-col overflow-hidden group glass border-white/5 hover:border-emerald-500/30 transition-all duration-300">
                  <div className="relative aspect-video overflow-hidden">
                    <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors z-10" />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-emerald-500 tracking-wider uppercase">
                        {project.category}
                      </span>
                    </div>
                    <CardTitle className="text-xl group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-background rounded-md text-xs font-medium text-foreground/80 border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1 bg-background rounded-md text-xs font-medium text-foreground/80 border border-border">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </CardContent>
                  
                  <CardFooter className="gap-3 pt-0 mt-auto border-t border-border/50 pt-4">
                    <Button variant="default" size="sm" className="w-full gap-2 bg-emerald-600 hover:bg-emerald-700 text-white" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" /> Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" className="w-full gap-2 hover:bg-emerald-500/10 hover:text-emerald-400" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" /> Code
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
