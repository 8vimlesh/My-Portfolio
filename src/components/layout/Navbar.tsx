import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "../../utils/cn";
import { MagneticButton } from "../ui/MagneticButton";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out",
        isScrolled ? "py-4" : "py-6"
      )}
    >
      <div className={cn(
        "container mx-auto px-6 md:px-8 flex items-center justify-between transition-all duration-500 max-w-5xl rounded-full",
        isScrolled ? "glass shadow-[0_8px_32px_rgba(0,0,0,0.1)] py-2 border-t border-white/10" : ""
      )}>
        <a href="#" className="text-xl font-bold tracking-tighter relative z-10 group">
          Vimlesh<span className="text-primary group-hover:text-emerald-400 transition-colors">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 relative z-10" onMouseLeave={() => setHoveredIndex(null)}>
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onMouseEnter={() => setHoveredIndex(index)}
              className={cn(
                "relative px-4 py-2 text-sm font-medium transition-colors duration-300",
                hoveredIndex === index ? "text-white" : "text-muted-foreground"
              )}
            >
              {hoveredIndex === index && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-white/10 rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              {link.name}
            </a>
          ))}
          <div className="ml-4 pl-4 border-l border-white/10">
            <MagneticButton className="rounded-full bg-emerald-500 hover:bg-emerald-400 text-white font-medium px-5 py-2 text-sm transition-colors">
              <a href="#contact">Hire Me</a>
            </MagneticButton>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground p-2 relative z-10"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-4 right-4 mt-2 glass rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
          >
            <div className="flex flex-col items-center py-6 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-muted-foreground hover:text-white py-2 px-6 rounded-full hover:bg-white/5 transition-colors w-full text-center"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 mt-2 border-t border-white/10 w-[80%] flex justify-center">
                <MagneticButton onClick={() => setMobileMenuOpen(false)} className="rounded-full bg-emerald-500 hover:bg-emerald-400 text-white font-medium px-8 py-3 w-full">
                  <a href="#contact">Hire Me</a>
                </MagneticButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
