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
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="container mx-auto px-6 md:px-12 max-w-7xl"
      >
        {children}
      </motion.div>
    </section>
  );
}
