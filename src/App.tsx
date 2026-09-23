import { useLayoutEffect, useRef } from 'react';
import { BrowserRouter, Link, Route, Routes, useLocation } from 'react-router-dom';
import { MotionConfig, motion, useScroll, useSpring } from 'framer-motion';
import { Navbar } from './components/layout/Navbar';
import { PageNavigation } from './components/layout/PageNavigation';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { SelectedProjects } from './sections/SelectedProjects';
import { Experience } from './sections/Experience';
import { TechStack } from './sections/TechStack';
import { ContactFooter } from './sections/ContactFooter';
import { CustomCursor } from './components/ui/CustomCursor';
import { CreativePageTransition } from './components/ui/CreativePageTransition';
import { pages } from './data/navigation';

function Portfolio() {
  const { pathname } = useLocation();
  const previousPath = useRef(pathname);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useLayoutEffect(() => {
    const page = pages.find((item) => item.path === pathname);
    document.title = `${page?.title ?? 'Page not found'} | Vimlesh Tiwari`;
    if (previousPath.current !== pathname) {
      window.scrollTo({ top: 0, behavior: 'instant' });
      document.getElementById('main-content')?.focus({ preventScroll: true });
      previousPath.current = pathname;
    }
  }, [pathname]);

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 font-sans w-full relative">
        <a href="#main-content" className="skip-link">Skip to content</a>
        <CreativePageTransition />
        <CustomCursor />
        <motion.div aria-hidden="true" className="fixed top-0 left-0 right-0 h-0.5 bg-primary origin-left z-[60]" style={{ scaleX }} />
        <Navbar />
        <main id="main-content" tabIndex={-1} className="pt-24 outline-none">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<SelectedProjects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/tech-stack" element={<TechStack />} />
            <Route path="*" element={<section className="portfolio-page"><p className="text-primary mb-4">404</p><h1 className="font-display text-4xl mb-6">Page not found</h1><Link to="/" className="text-muted-foreground underline underline-offset-4">Return to Home</Link></section>} />
          </Routes>
          <PageNavigation />
        </main>
        <ContactFooter />
      </div>
    </MotionConfig>
  );
}

export default function App() {
  return <BrowserRouter><Portfolio /></BrowserRouter>;
}
