import React from "react";
import { portfolioData } from "../data/portfolio";
import { SectionWrapper } from "../components/layout/SectionWrapper";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card";
import { Code2, Database, LayoutTemplate, Server, Cpu, Wrench, BookOpen } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const skillCategories = [
  { key: "programming", title: "Programming", icon: Code2, color: "text-blue-500" },
  { key: "frontend", title: "Frontend", icon: LayoutTemplate, color: "text-pink-500" },
  { key: "backend", title: "Backend", icon: Server, color: "text-green-500" },
  { key: "databases", title: "Databases", icon: Database, color: "text-yellow-500" },
  { key: "aiml", title: "AI & ML", icon: Cpu, color: "text-purple-500" },
  { key: "tools", title: "Tools", icon: Wrench, color: "text-orange-500" },
  { key: "core", title: "Core CS", icon: BookOpen, color: "text-emerald-500" },
];

export function Skills() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <SectionWrapper id="skills">
      <div className="flex flex-col gap-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Technical Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical stack and core competencies across software engineering, AI, and data analytics.
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {skillCategories.map((category) => {
            const Icon = category.icon;
            // @ts-ignore - dynamic key access
            const skills = portfolioData.skills[category.key] as string[];
            
            if (!skills || skills.length === 0) return null;

            return (
              <motion.div key={category.key} variants={item}>
                <Card className="h-full glass hover:border-emerald-500/50 transition-colors duration-300 group">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 rounded-lg bg-background flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className={`w-6 h-6 ${category.color}`} />
                    </div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <li 
                          key={skill}
                          className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium border border-border"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
