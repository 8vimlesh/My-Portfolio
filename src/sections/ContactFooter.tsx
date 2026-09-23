import { ArrowUpRight, Mail, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/ui/icons';
import { portfolioData } from '../data/portfolio';

export function ContactFooter() {
  const { contact } = portfolioData;
  const links = [
    { label: 'Email', text: contact.email, href: `mailto:${contact.email}`, icon: Mail, external: false },
    { label: 'LinkedIn', text: contact.linkedin, href: `https://linkedin.com/in/${contact.linkedin}`, icon: LinkedinIcon, external: true },
    { label: 'GitHub', text: contact.github, href: `https://github.com/${contact.github}`, icon: GithubIcon, external: true },
  ];

  return (
    <footer id="contact" tabIndex={-1} aria-labelledby="contact-heading" className="relative border-t border-white/10 bg-[#111111] pt-14 sm:pt-20 pb-8">
      <div className="site-shell grid gap-10 md:grid-cols-2 lg:gap-24 pb-14">
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">Contact me</p>
          <h2 id="contact-heading" className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tighter leading-tight">Let’s work<br />together.</h2>
          <p className="mt-5 max-w-md text-sm sm:text-base leading-relaxed text-muted-foreground">Have a project in mind or an opportunity to share? I’d love to hear from you.</p>
          <p className="mt-6 flex items-center gap-2 text-xs text-muted-foreground"><MapPin size={14} aria-hidden="true" />{contact.location}</p>
        </div>
        <div className="flex flex-col justify-center divide-y divide-white/10">
          {links.map(({ label, text, href, icon: Icon, external }) => (
            <a key={label} href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined} className="group flex min-w-0 items-center gap-4 py-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors"><Icon className="h-4 w-4" aria-hidden="true" /></span>
              <span className="min-w-0 flex-1"><span className="block mb-1 text-[10px] uppercase tracking-widest text-muted-foreground">{label}</span><span className="block break-words text-sm sm:text-base text-white/85 group-hover:text-white">{text}</span></span>
              <ArrowUpRight size={17} className="shrink-0 text-muted-foreground group-hover:text-primary" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
      <div className="site-shell border-t border-white/10 pt-6 flex flex-wrap justify-between gap-3 text-[10px] sm:text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Vimlesh Tiwari. All rights reserved.</p>
        <p>Software. Intelligence. Impact.</p>
      </div>
    </footer>
  );
}
