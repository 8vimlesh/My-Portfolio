import { Globe, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolio';

export function Hero() {
  const { hero, education, projects, skills } = portfolioData;
  const stats = [
    { value: `${education.length}+`, label: 'Certifications', path: '/about' },
    { value: `${projects.length}+`, label: 'Projects completed', path: '/projects' },
    { value: `${skills.length}+`, label: 'Core skills', path: '/tech-stack' },
  ];

  return (
    <section className="landing-hero" aria-label="Introduction">
      <div aria-hidden="true" className="landing-watermark text-gradient-red">{hero.title}</div>
      <div className="landing-layout">
        <div className="landing-copy">
          <p className="font-script landing-greeting">{hero.greeting}</p>
          <h1 className="font-display landing-name">
            {hero.name.split('\n').map((line) => <span key={line} className="block">{line}</span>)}
          </h1>
          <p className="landing-role">{hero.role}</p>
          <p className="landing-description">{hero.description}</p>
          <p className="landing-availability"><Globe size={18} className="text-primary shrink-0" aria-hidden="true" />{hero.availability}</p>
        </div>
        <div className="landing-visual">
          <div className="landing-portrait">
            <img src="/profile-transparent.png" alt="Vimlesh Tiwari" fetchPriority="high" className="landing-photo" />
            <div className="landing-photo-fade" aria-hidden="true" />
          </div>
          <div className="landing-tagline">
            <Sparkles className="text-primary shrink-0" size={27} aria-hidden="true" />
            <p>{hero.tagline}</p>
          </div>
          <ul className="landing-stats" aria-label="Portfolio at a glance">
            {stats.map((stat) => (
              <li key={stat.label}>
                <Link to={stat.path} className="landing-stat-link" aria-label={`${stat.value} ${stat.label}`}>
                  <span className="landing-stat-label">{stat.label}</span>
                  <span className="font-display landing-stat-value">{stat.value}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
