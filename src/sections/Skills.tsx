import React from "react";
import { portfolioData } from "../data/portfolio";
import { SectionWrapper } from "../components/layout/SectionWrapper";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card";
import { Code2, Database, LayoutTemplate, Server, Cpu, Wrench, BookOpen } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { TiltCard } from "../components/ui/TiltCard";

const skillCategories = [
  { key: "programming", title: "Programming", icon: Code2, color: "text-blue-500", glow: "shadow-blue-500/20" },
  { key: "frontend", title: "Frontend", icon: LayoutTemplate, color: "text-pink-500", glow: "shadow-pink-500/20" },
  { key: "backend", title: "Backend", icon: Server, color: "text-green-500", glow: "shadow-green-500/20" },
  { key: "databases", title: "Databases", icon: Database, color: "text-yellow-500", glow: "shadow-yellow-500/20" },
  { key: "aiml", title: "AI & ML", icon: Cpu, color: "text-purple-500", glow: "shadow-purple-500/20" },
  { key: "tools", title: "Tools", icon: Wrench, color: "text-orange-500", glow: "shadow-orange-500/20" },
  { key: "core", title: "Core CS", icon: BookOpen, color: "text-emerald-500", glow: "shadow-emerald-500/20" },
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
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <SectionWrapper id="skills">
      <div className="flex flex-col gap-16 relative z-10">
        <div className="text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
          >
            Technical Expertise
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            A comprehensive overview of my technical stack and core competencies across software engineering, AI, and data analytics.
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            // @ts-ignore - dynamic key access
            const skills = portfolioData.skills[category.key] as string[];
            
            if (!skills || skills.length === 0) return null;

            return (
              <motion.div key={category.key} variants={item} className="h-full">
                <TiltCard className="h-full">
                  <Card className={`h-full glass border-white/5 hover:border-white/20 transition-all duration-500 group bg-background/40 backdrop-blur-xl hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]`}>
                    <CardHeader className="pb-4 relative z-20">
                      <motion.div 
                        animate={{ y: [0, -8, 0] }}
                        transition={{ 
                          repeat: Infinity, 
                          duration: 4, 
                          ease: "easeInOut",
                          delay: idx * 0.2 // stagger the floating
                        }}
                        className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg ${category.glow}`}
                      >
                        <Icon className={`w-7 h-7 ${category.color} filter drop-shadow-md`} />
                      </motion.div>
                      <CardTitle className="text-2xl font-bold tracking-tight">{category.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="relative z-20">
                      <ul className="flex flex-wrap gap-2.5">
                        {skills.map((skill, i) => (
                          <li 
                            key={skill}
                            className="px-3.5 py-1.5 bg-white/5 hover:bg-white/10 text-foreground/90 rounded-full text-sm font-medium border border-white/10 transition-colors duration-300 cursor-default"
                          >
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </TiltCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
