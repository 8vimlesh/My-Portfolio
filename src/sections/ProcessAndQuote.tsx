import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const ProcessAndQuote = () => {
  const { experience, education, skills, process, quote } = portfolioData;

  return (
    <section id="process" className="relative z-30 bg-[#080808] rounded-t-[36px] md:rounded-t-[56px] border-t border-white/10 shadow-[0_-30px_90px_rgba(0,0,0,0.95)] pt-16 md:pt-24 pb-28 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 max-w-[1720px] 2xl:max-w-[1880px] mx-auto -mt-8 w-full">
      {/* Editorial Curtain Grip Bar */}
      <div className="w-12 h-1.5 bg-white/15 rounded-full mx-auto mb-12 hover:bg-primary/50 transition-colors" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 xl:gap-16">
        
        {/* Left Column - Experience & Certifications */}
        <motion.div 
          className="flex flex-col"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Work Experience */}
          {experience && experience.length > 0 && (
            <div className="mb-12">
              <h3 className="text-primary font-bold text-sm tracking-widest uppercase mb-8 border-b border-border pb-4 flex items-center justify-between">
                <span>Experience</span>
                <span className="text-[10px] bg-primary/20 text-primary px-2.5 py-0.5 rounded-full font-bold">
                  {experience.length} Role
                </span>
              </h3>
              <div className="space-y-8">
                {experience.map((item, i) => (
                  <div key={i} className="flex flex-col bg-secondary/40 border border-white/5 p-5 rounded-2xl">
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="text-primary font-mono text-xs font-bold flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        {item.period}
                      </span>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded flex items-center gap-1">
                        <span>Remote</span>
                        <span className="text-white/40">•</span>
                        <span>WFH</span>
                      </span>
                    </div>
                    <h4 className="font-bold text-lg text-white mb-0.5">{item.role}</h4>
                    <p className="text-muted-foreground text-sm font-medium mb-3">{item.company}</p>
                    
                    <ul className="space-y-1.5 mb-4 text-xs text-gray-300">
                      {item.highlights.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-primary font-bold mt-0.5">›</span>
                          <span className="leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {item.techStack && (
                      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                        {item.techStack.map((tech, idx) => (
                          <span key={idx} className="text-[10px] font-semibold bg-white/5 text-gray-300 px-2 py-0.5 rounded border border-white/10">
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Certifications */}
          <div className="mb-12">
            <h3 className="text-primary font-bold text-sm tracking-widest uppercase mb-8 border-b border-border pb-4">
              Certifications
            </h3>
            <div className="space-y-6">
              {education.map((item, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-muted-foreground text-xs font-bold mb-1">{item.years}</span>
                  <h4 className="font-bold text-base uppercase mb-1">{item.degree}</h4>
                  <p className="text-muted-foreground text-sm">{item.institution}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Middle Column - Skills & Work Process */}
        <motion.div 
          className="flex flex-col"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {/* Skills & Stack */}
          <div className="mb-12">
            <h3 className="text-primary font-bold text-sm tracking-widest uppercase mb-6 border-b border-border pb-4">
              Skills & Stack
            </h3>
            <div className="flex flex-col gap-5">
              {skills.map((skillGroup, idx) => (
                <div key={idx}>
                  <h4 className="text-muted-foreground text-[10px] sm:text-xs uppercase tracking-widest font-bold mb-2.5">
                    {skillGroup.category}
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {skillGroup.items.map((skill, i) => (
                      <span 
                        key={i} 
                        className="px-2.5 py-1 rounded-full border border-border bg-secondary text-[10px] sm:text-xs font-medium tracking-wide text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

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
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-primary rounded-3xl p-6 sm:p-10 h-full flex flex-col justify-between relative overflow-hidden group shadow-xl">
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
