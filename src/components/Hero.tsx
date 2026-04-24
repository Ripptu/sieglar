import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with parallax */}
      <motion.div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://s1.directupload.eu/images/260424/xcstma6x.webp')",
          y: y1,
          scale: 1.05
        }}
      >
        {/* Advanced dark overlay with radial and linear gradients for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-[#111111] z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/40 to-black/80 z-20"></div>
      </motion.div>

      {/* Content */}
      <motion.div 
        className="relative z-30 text-center px-6 mt-20 max-w-5xl mx-auto flex flex-col items-center"
        style={{ opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-serif text-[#f5f5f5] tracking-tight leading-[1.1] mb-8 text-balance drop-shadow-2xl">
            Bühnengesellschaft
            <br />
            <span className="italic font-light text-[#b91c1c]">Sieglar</span>
            <motion.span 
              className="block text-xl md:text-2xl lg:text-3xl mt-6 text-gray-300 tracking-[0.2em] uppercase font-sans font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            >
              Die Volksbühne 1919/62 e.V.
            </motion.span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "100px" }}
          transition={{ duration: 1, delay: 1.2, ease: "easeInOut" }}
          className="h-px bg-[#b91c1c] mb-8"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-6 text-xs md:text-sm text-gray-300 font-medium tracking-[0.1em] uppercase"
        >
          <span>Premiere: 14.03.2026</span>
          <span className="hidden sm:inline text-[#b91c1c] opacity-60">◆</span>
          <span>Regie: Volksbühne</span>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center cursor-pointer group"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        onClick={() => {
          const el = document.getElementById('spielplan');
          if (el) {
            const yOffset = -80; // Navbar height
            const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({top: y, behavior: 'smooth'});
          }
        }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-4 group-hover:text-[#b91c1c] transition-colors">Entdecken</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="relative"
        >
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-gray-500 to-transparent group-hover:via-[#b91c1c] transition-colors duration-500"></div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#b91c1c] shadow-[0_0_10px_rgba(212,175,55,0.5)]"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}
