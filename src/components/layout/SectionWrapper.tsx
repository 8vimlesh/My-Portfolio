import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

interface SectionWrapperProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export function SectionWrapper({ id, className, children }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn("py-20 md:py-32 overflow-hidden", className)}
    >
      <motion.div
        initial={{ opacity: 0, y: 120, filter: "blur(20px)", scale: 0.85, rotateX: 20 }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1, rotateX: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformPerspective: 1200 }}
        className="container mx-auto px-6 md:px-12 max-w-7xl"
      >
        {children}
      </motion.div>
    </section>
  );
}
