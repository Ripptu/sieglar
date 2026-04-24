import React from 'react';
import { motion } from 'motion/react';

export default function QuoteSection() {
  return (
    <section className="py-32 px-6 bg-[#111111] overflow-hidden relative border-y border-[#222]">
      {/* Decorative large background quote marks */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[400px] text-white/[0.02] font-serif leading-none select-none pointer-events-none">
        "
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-3xl md:text-4xl lg:text-5xl font-serif italic font-light text-white leading-relaxed text-balance">
            „Freude am Schauspiel und dem gemeinsamen Miteinander.“
          </p>
          
          <div className="mt-12 flex flex-col items-center">
            <div className="w-10 h-px bg-[#b91c1c] mb-6"></div>
            <span className="text-sm tracking-[0.2em] text-[#b91c1c] uppercase">
              Bühnengesellschaft Sieglar e.V.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
