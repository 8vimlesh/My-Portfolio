import React from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/Button";
import { portfolioData } from "../data/portfolio";
import { ArrowDown, Download, Mail } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10 bg-background">
        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 via-background to-background" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[120px] opacity-50" />
      </div>

      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-400 mb-8 backdrop-blur-md"
        >
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
          Available for new opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
        >
          Hi, I'm <span className="text-gradient">{portfolioData.hero.name}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-muted-foreground font-medium mb-8 max-w-3xl"
        >
          {portfolioData.hero.title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-base md:text-lg text-muted-foreground/80 mb-10 max-w-2xl leading-relaxed"
        >
          {portfolioData.hero.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button size="lg" className="rounded-full bg-emerald-600 hover:bg-emerald-700 text-white gap-2" asChild>
            <a href="#projects">
              View Projects <ArrowDown className="w-4 h-4" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="rounded-full gap-2 border-emerald-500/20 hover:bg-emerald-500/10" asChild>
            <a href="/resume.pdf" target="_blank">
              <Download className="w-4 h-4" /> Download Resume
            </a>
          </Button>
          <Button size="lg" variant="ghost" className="rounded-full gap-2 hover:bg-emerald-500/10" asChild>
            <a href="#contact">
              <Mail className="w-4 h-4" /> Contact Me
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
