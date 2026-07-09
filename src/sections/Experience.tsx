import React from "react";
import { portfolioData } from "../data/portfolio";
import { SectionWrapper } from "../components/layout/SectionWrapper";
import { Award } from "lucide-react";

export function Experience() {
  return (
    <SectionWrapper id="experience">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col items-center justify-center gap-3 mb-12 text-center">
          <Award className="w-12 h-12 text-emerald-500 mb-2" />
          <h2 className="text-4xl font-bold tracking-tight">Certifications & Awards</h2>
          <p className="text-muted-foreground text-lg max-w-xl mt-2">
            Professional certifications and achievements that validate my technical expertise.
          </p>
        </div>
        
        <div className="space-y-6">
          {portfolioData.certifications.map((cert) => (
            <div key={`cert-${cert.id}`} className="p-6 rounded-2xl glass border border-white/5 hover:border-emerald-500/30 transition-all flex flex-col sm:flex-row items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                <Award className="w-6 h-6 text-emerald-500" />
              </div>
              <div>
                <h3 className="text-lg font-bold">{cert.title}</h3>
                <p className="text-emerald-500 font-medium text-sm">{cert.issuer}</p>
                {cert.description && (
                  <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{cert.description}</p>
                )}
                <span className="text-xs font-medium text-muted-foreground mt-3 block">{cert.date}</span>
              </div>
            </div>
          ))}

          {portfolioData.achievements.map((ach) => (
            <div key={`ach-${ach.id}`} className="p-6 rounded-2xl glass border border-white/5 hover:border-emerald-500/30 transition-all flex flex-col sm:flex-row items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                <Award className="w-6 h-6 text-emerald-500" />
              </div>
              <div>
                <h3 className="text-lg font-bold">{ach.title}</h3>
                <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{ach.description}</p>
                <span className="text-xs font-medium text-emerald-500 mt-3 block">{ach.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
