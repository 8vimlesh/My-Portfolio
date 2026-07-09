import React from "react";
import { portfolioData } from "../data/portfolio";
import { SectionWrapper } from "../components/layout/SectionWrapper";
import { Briefcase, Award } from "lucide-react";

export function Experience() {
  return (
    <SectionWrapper id="experience">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Experience Timeline */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="w-8 h-8 text-emerald-500" />
            <h2 className="text-3xl font-bold tracking-tight">Experience</h2>
          </div>
          
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-emerald-500 before:via-emerald-500/20 before:to-transparent">
            {portfolioData.experience.map((exp, index) => (
              <div key={exp.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-emerald-500 text-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <div className="w-2 h-2 rounded-full bg-background" />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl glass border border-white/5 shadow-sm hover:border-emerald-500/30 transition-colors">
                  <div className="flex flex-col mb-2">
                    <span className="text-emerald-500 font-medium text-sm mb-1">{exp.duration}</span>
                    <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                    <h4 className="text-muted-foreground font-medium">{exp.company}</h4>
                  </div>
                  <p className="text-muted-foreground text-sm mt-3">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications & Achievements */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Award className="w-8 h-8 text-emerald-500" />
            <h2 className="text-3xl font-bold tracking-tight">Certifications & Awards</h2>
          </div>
          
          <div className="space-y-6">
            {portfolioData.certifications.map((cert) => (
              <div key={`cert-${cert.id}`} className="p-6 rounded-2xl glass border border-white/5 hover:border-emerald-500/30 transition-all flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">{cert.title}</h3>
                  <p className="text-muted-foreground">{cert.issuer}</p>
                  <span className="text-xs font-medium text-emerald-500 mt-2 block">{cert.date}</span>
                </div>
              </div>
            ))}

            {portfolioData.achievements.map((ach) => (
              <div key={`ach-${ach.id}`} className="p-6 rounded-2xl glass border border-white/5 hover:border-emerald-500/30 transition-all flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">{ach.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{ach.description}</p>
                  <span className="text-xs font-medium text-emerald-500 mt-2 block">{ach.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
