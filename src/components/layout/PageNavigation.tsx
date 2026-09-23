import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { pages } from '../../data/navigation';

export function PageNavigation() {
  const { pathname } = useLocation();
  const index = pages.findIndex((page) => page.path === pathname);
  if (index < 0) return null;
  const previous = pages[index - 1];
  const next = pages[index + 1];
  const nextClass = 'group ml-auto flex items-center gap-5 text-right';
  const nextContent = <><span><span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">{next ? 'Up next' : 'Let’s connect'}</span><span className="text-xl sm:text-3xl font-semibold tracking-tight">{next?.label ?? 'Contact me'}</span></span><span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 transition-colors group-hover:bg-primary group-hover:border-primary"><ArrowUpRight size={20} aria-hidden="true" /></span></>;
  return (
    <nav aria-label="Page sequence" className="site-shell flex items-center justify-between gap-5 border-t border-white/10 py-10 mb-10">
      {previous && <Link to={previous.path} className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover:text-white"><ArrowLeft size={16} aria-hidden="true" /><span>{previous.label}</span></Link>}
      {next ? <Link to={next.path} className={nextClass}>{nextContent}</Link> : <a href="#contact" className={nextClass}>{nextContent}</a>}
    </nav>
  );
}
