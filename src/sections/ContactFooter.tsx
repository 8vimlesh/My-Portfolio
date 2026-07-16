import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, Globe, Phone, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const ContactFooter = () => {
  const { contact } = portfolioData;

  const contactIcons = {
    email: <Mail className="w-4 h-4" />,
    website: <Globe className="w-4 h-4" />,
    phone: <Phone className="w-4 h-4" />,
    location: <MapPin className="w-4 h-4" />,
    linkedin: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>,
    github: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
  };

  return (
    <footer id="contact" className="relative bg-secondary pt-24 pb-12 mt-24 border-t border-border overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 max-w-[1300px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-12 mb-20 relative z-10">
        
        {/* Left - CTA */}
        <motion.div 
          className="flex flex-col"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl uppercase tracking-tighter mb-6">
            Let's Work<br />Together
          </h2>
          <p className="text-muted-foreground mb-10 max-w-sm">
            Ready to bring your vision to life? Let's collaborate to build digital experiences that matter.
          </p>
          
          <div className="flex items-center gap-6 group cursor-none w-fit">
            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <ArrowUpRight className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-sm tracking-widest uppercase group-hover:text-primary transition-colors">
              Available For<br />Work
            </span>
          </div>
        </motion.div>

        {/* Middle - Contact Info */}
        <motion.div 
          className="flex flex-col justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="space-y-6">
            {Object.entries(contact).map(([key, value], index) => (
              <div key={index} className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300">
                  {contactIcons[key as keyof typeof contactIcons]}
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">
                    {key}
                  </span>
                  <a href="#" className="font-medium hover:text-primary transition-colors">
                    {value}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right - Mockup Image */}
        <motion.div 
          className="flex items-center justify-center lg:justify-end"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="relative w-full max-w-sm aspect-square rounded-2xl overflow-hidden border border-border group">
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500 z-10" />
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop" 
              alt="Tech workspace with laptop and coffee" 
              className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
            />
          </div>
        </motion.div>
      </div>

      {/* Bottom Copyright/Footer Footer */}
      <div className="container mx-auto px-6 md:px-12 lg:px-24 max-w-[1300px] border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4 relative z-10">
        <p className="text-muted-foreground text-xs sm:text-sm uppercase tracking-widest font-bold">
          © {new Date().getFullYear()} Vimlesh Tiwari
        </p>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm uppercase tracking-widest font-bold text-muted-foreground">
          {contact.linkedin && (
            <a 
              href={`https://linkedin.com/in/${contact.linkedin}`} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              <span>LinkedIn</span>
            </a>
          )}
          {contact.github && (
            <a 
              href={`https://github.com/${contact.github}`} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
              <span>GitHub</span>
            </a>
          )}
        </div>
      </div>

      {/* Giant Background Text for Footer (Subtle) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden flex justify-center pointer-events-none z-0 opacity-5">
        <h2 className="font-display text-[25vw] md:text-[20vw] leading-none whitespace-nowrap text-white translate-y-1/4">
          VIMLESH
        </h2>
      </div>
    </footer>
  );
};
