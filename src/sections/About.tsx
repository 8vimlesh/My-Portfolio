import { ArrowDownToLine, Award, GraduationCap } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import { PageIntro } from '../components/layout/PageIntro';

export function About() {
  const { about, education } = portfolioData;

  return (
    <section className="portfolio-page" aria-label="About me">
      <PageIntro number="02" eyebrow="The person behind the projects" title="About Me" description="Curiosity, continuous learning, and a love for building useful software." />
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight mb-6">A little about me.</h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>{about.intro}</p>
            <p>{about.description}</p>
          </div>
          <a href="/resume.pdf" download className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold hover:bg-white/5 transition-colors">
            Download resume <ArrowDownToLine size={16} aria-hidden="true" />
          </a>
          <p className="font-script text-4xl text-primary mt-10">V. Tiwari</p>
        </div>
        <div>
          <h2 className="mb-6 flex items-center gap-3 text-xl font-semibold"><GraduationCap className="text-primary" aria-hidden="true" /> Education</h2>
          <div className="rounded-2xl border border-primary/25 bg-primary/5 p-6 sm:p-8">
            <p className="mb-4 flex flex-wrap justify-between gap-3 text-xs uppercase tracking-widest text-primary font-semibold"><span>{about.education.status}</span><span>{about.education.years}</span></p>
            <h3 className="text-2xl font-semibold leading-snug">{about.education.degree}</h3>
            <p className="mt-4 text-white/80 leading-relaxed">{about.education.institution}, {about.education.location}</p>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">Affiliated with {about.education.university}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {about.education.focus.map((subject) => <li key={subject} className="rounded-md border border-primary/15 bg-primary/5 px-2.5 py-1.5 text-xs text-white/70">{subject}</li>)}
            </ul>
          </div>
          <h2 className="mt-10 mb-6 flex items-center gap-3 text-xl font-semibold"><Award className="text-primary" aria-hidden="true" /> Certifications & learning</h2>
          <div className="divide-y divide-white/10 border-t border-white/10">
            {education.map((item) => (
              <article key={item.degree} className="flex gap-5 py-6">
                <span className="pt-1 font-mono text-sm text-primary">{item.years}</span>
                <div><h3 className="font-semibold leading-relaxed">{item.degree}</h3><p className="mt-1 text-sm text-muted-foreground">{item.institution}</p></div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
