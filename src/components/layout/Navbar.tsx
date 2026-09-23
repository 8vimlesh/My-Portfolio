import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { pages } from '../../data/navigation';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();

  useEffect(() => { setIsOpen(false); }, [location]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-background/95 backdrop-blur-xl">
      <nav aria-label="Main navigation" className="site-shell flex min-h-24 items-center justify-between gap-5">
        <Link to="/" aria-label="Vimlesh Tiwari — Home" className="flex shrink-0 flex-col gap-1">
          <span className="text-primary font-bold text-xs tracking-widest uppercase">Vimlesh Tiwari</span>
          <span className="text-[9px] sm:text-[10px] text-muted-foreground tracking-widest uppercase">Software & AI Engineer</span>
        </Link>
        <div className="hidden lg:flex items-center gap-5 xl:gap-8">
          {pages.map((page) => (
            <NavLink key={page.path} to={page.path} end className={({ isActive }) => `py-3 text-xs font-semibold transition-colors hover:text-white ${isActive ? 'text-primary' : 'text-muted-foreground'}`}>
              {page.label}
            </NavLink>
          ))}
        </div>
        <a href="#contact" className="hidden lg:inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2.5 text-xs font-semibold text-primary transition-colors hover:bg-primary hover:text-white">Contact me <ArrowUpRight size={15} aria-hidden="true" /></a>
        <button ref={toggleRef} type="button" aria-expanded={isOpen} aria-controls="mobile-navigation" aria-label={isOpen ? 'Close menu' : 'Open menu'} onClick={() => setIsOpen(!isOpen)} className="lg:hidden flex h-11 w-11 items-center justify-center rounded-full border border-white/15">
          {isOpen ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
        </button>
      </nav>
      {isOpen && (
        <nav id="mobile-navigation" aria-label="Mobile navigation" className="lg:hidden border-t border-white/10 bg-background px-6 py-4 shadow-2xl">
          {pages.map((page, index) => (
            <NavLink key={page.path} to={page.path} end onClick={() => setIsOpen(false)} className={({ isActive }) => `flex items-center gap-4 rounded-lg px-3 py-3.5 text-sm ${isActive ? 'bg-primary/10 text-primary' : 'text-white/75 hover:bg-white/5'}`}>
              <span className="font-mono text-xs opacity-50">0{index + 1}</span>{page.label}
            </NavLink>
          ))}
          <a href="#contact" onClick={() => setIsOpen(false)} className="mt-2 flex items-center justify-between border-t border-white/10 px-3 py-4 text-sm text-primary">Contact me <ArrowUpRight size={16} aria-hidden="true" /></a>
        </nav>
      )}
    </header>
  );
}
