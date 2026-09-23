import { Braces, PanelsTopLeft, Server, Database, BrainCircuit, Wrench, ChartNoAxesCombined, Network } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import { PageIntro } from '../components/layout/PageIntro';

export function TechStack() {
  const skills = portfolioData.original_skills;
  const groups = [
    { title: 'Languages', icon: Braces, items: skills.programming },
    { title: 'Frontend', icon: PanelsTopLeft, items: skills.frontend },
    { title: 'Backend & APIs', icon: Server, items: skills.backend },
    { title: 'Databases', icon: Database, items: skills.databases },
    { title: 'AI & Machine Learning', icon: BrainCircuit, items: skills.aiml },
    { title: 'Tools & Deployment', icon: Wrench, items: skills.tools },
    { title: 'Data & Visualization', icon: ChartNoAxesCombined, items: ['Power BI', 'Power Query', 'DAX', 'Excel', 'Matplotlib'] },
    { title: 'Computer Science', icon: Network, items: skills.core },
  ];

  return (
    <section className="portfolio-page" aria-label="Tech stack">
      <PageIntro number="05" eyebrow="My development toolkit" title="Tech Stack" description="The languages, frameworks, and tools I use to turn ideas into working applications." />
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {groups.map(({ title, icon: Icon, items }) => (
          <article key={title} className="rounded-2xl border border-white/10 bg-secondary p-6 sm:p-8 transition-colors hover:border-primary/40">
            <Icon className="mb-6 text-primary" size={26} aria-hidden="true" />
            <h2 className="mb-5 text-xl font-semibold tracking-tight">{title}</h2>
            <ul className="flex flex-wrap gap-2">
              {items.map((item) => <li key={item} className="rounded-lg bg-white/5 border border-white/10 px-3 py-1.5 text-sm text-white/70">{item}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
