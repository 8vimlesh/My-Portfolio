import { BriefcaseBusiness, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import { PageIntro } from '../components/layout/PageIntro';

export function Experience() {
  return (
    <section className="portfolio-page" aria-label="Experience">
      <PageIntro number="04" eyebrow="Learning through building" title="Experience" description="Putting software engineering into practice through real products and real-world problems." />
      <div className="space-y-8">
        {portfolioData.experience.map((item) => (
          <article key={`${item.company}-${item.role}`} className="grid gap-8 rounded-3xl border border-white/10 bg-secondary p-6 sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <BriefcaseBusiness className="mb-6 text-primary" size={30} aria-hidden="true" />
              <p className="mb-4 font-mono text-sm text-primary">{item.period}</p>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight leading-tight">{item.role}</h2>
              <p className="mt-3 text-lg text-white/80">{item.company}</p>
              <p className="mt-6 flex items-center gap-2 text-sm text-muted-foreground"><MapPin size={15} aria-hidden="true" /> {item.location}</p>
              <p className="mt-2 text-xs text-muted-foreground">{item.type}</p>
            </div>
            <div>
              <h3 className="mb-6 text-xs font-semibold uppercase tracking-widest text-muted-foreground">What I’m working on</h3>
              <ul className="space-y-5">
                {item.highlights.map((highlight) => <li key={highlight} className="flex items-start gap-3 leading-relaxed text-white/80"><span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" /><span>{highlight}</span></li>)}
              </ul>
              <div className="mt-8 flex flex-wrap gap-2 border-t border-white/10 pt-6">
                {item.techStack.map((tech) => <span key={tech} className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-muted-foreground">{tech}</span>)}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
