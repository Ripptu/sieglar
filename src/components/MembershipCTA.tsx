import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, FileText } from 'lucide-react';

export default function MembershipCTA() {
  return (
    <section id="mitglied" className="py-24 md:py-32 bg-[#111] relative overflow-hidden">
      {/* Decorative background lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#b91c1c" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
           className="max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center justify-center p-3 mb-8 rounded-full bg-[#b91c1c]/10 ring-1 ring-[#b91c1c]/30 text-[#b91c1c]">
             <FileText size={24} strokeWidth={1.5} />
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-white mb-8 tracking-tight">
            Werden Sie <span className="italic text-[#b91c1c] font-light">Mitglied</span>
          </h2>
          
          <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed mb-12">
            Egal ob auf der Bühne, bei der Technik, im Service oder beim Bühnenbau – bei der Bühnengesellschaft Sieglar sind alle herzlich willkommen. Wir bieten jedem die gleiche Chance, sich zu verwirklichen. Denn bei uns zählt die Gemeinschaft!
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="flex items-center justify-center space-x-3 bg-[#b91c1c] text-black px-8 py-4 uppercase tracking-[0.15em] font-semibold text-sm hover:bg-white transition-colors duration-300">
              <span>Beitrittserklärung PDF</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="flex items-center justify-center space-x-3 bg-transparent border border-white/20 text-white px-8 py-4 uppercase tracking-[0.15em] font-medium text-sm hover:border-[#b91c1c] hover:text-[#b91c1c] transition-colors duration-300">
               <span>Satzung einsehen</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
