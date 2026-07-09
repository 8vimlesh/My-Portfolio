import React from "react";
import { portfolioData } from "../data/portfolio";
import { SectionWrapper } from "../components/layout/SectionWrapper";

export function About() {
  return (
    <SectionWrapper id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            {portfolioData.about.title}
          </h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            {portfolioData.about.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
        
        <div className="relative group max-w-md mx-auto lg:max-w-none">
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-emerald-300 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative aspect-square rounded-full overflow-hidden glass">
            {/* User's professional photo */}
            <img 
              src="/profile.jpg" 
              alt={portfolioData.hero.name}
              className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
