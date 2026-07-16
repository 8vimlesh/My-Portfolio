import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Sparkles, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const ProcessAndQuote = () => {
  const { education, skills, process, quote } = portfolioData;

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 container mx-auto max-w-[1300px]">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-12">
        
        {/* Left Column - Education & Skills */}
        <motion.div 
          className="flex flex-col"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-12">
            <h3 className="text-primary font-bold text-sm tracking-widest uppercase mb-8 border-b border-border pb-4">
              Certifications
            </h3>
            <div className="space-y-8">
              {education.map((item, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-muted-foreground text-xs font-bold mb-1">{item.years}</span>
                  <h4 className="font-bold text-lg uppercase mb-1">{item.degree}</h4>
                  <p className="text-muted-foreground">{item.institution}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-primary font-bold text-sm tracking-widest uppercase mb-6 border-b border-border pb-4">
              Skills & Stack
            </h3>
            <div className="flex flex-col gap-6">
              {skills.map((skillGroup, idx) => (
                <div key={idx}>
                  <h4 className="text-muted-foreground text-[10px] sm:text-xs uppercase tracking-widest font-bold mb-3">
                    {skillGroup.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1.5 rounded-full border border-border bg-secondary text-[10px] sm:text-xs font-medium tracking-wide"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Middle Column - Work Process */}
        <motion.div 
          className="flex flex-col"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-primary font-bold text-sm tracking-widest uppercase mb-8 border-b border-border pb-4">
            Work Process
          </h3>
          
          <div className="relative pl-8">
            {/* Connecting Line */}
            <div className="absolute left-[11px] top-2 bottom-8 w-[2px] bg-border" />
            
            <div className="space-y-10">
              {process.map((step, i) => (
                <div key={i} className="relative">
                  {/* Icon Badge */}
                  <div className="absolute -left-[41px] top-1 w-6 h-6 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  
                  <div className="flex flex-col">
                    <span className="text-primary font-display text-sm mb-1">{step.step}</span>
                    <h4 className="font-bold text-xl uppercase mb-2">{step.title}</h4>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Column - Quote Block */}
        <motion.div 
          className="flex flex-col h-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-primary rounded-3xl p-6 sm:p-10 h-full flex flex-col justify-between relative overflow-hidden group">
            {/* Background Texture/Noise for the card */}
            <div className="absolute inset-0 bg-black/10 mix-blend-overlay pointer-events-none" />
            
            <Quote className="w-16 h-16 text-white/20 mb-8 relative z-10" />
            
            <div className="relative z-10 mb-12">
              <p className="text-xl sm:text-2xl md:text-3xl font-bold italic text-white leading-snug mb-8">
                "{quote.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-[2px] bg-white/30" />
                <span className="font-script text-4xl text-white">
                  {quote.signatureName}
                </span>
              </div>
            </div>

            <div className="relative z-10 pt-8 border-t border-white/20 mt-auto flex items-center justify-between">
              <span className="text-white font-bold text-[10px] sm:text-xs tracking-widest uppercase">
                Let's Create Together
              </span>
              <Sparkles className="w-5 h-5 text-white shrink-0 ml-2" />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
