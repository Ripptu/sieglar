import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'motion/react';
import { Instagram, Facebook, Ticket, Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navLinks = [
    { name: 'Start', href: '/' },
    { name: 'Spielplan', href: '/#spielplan' },
    { name: 'Verein', href: '/#verein' },
    { name: 'Mitglied werden', href: '/#mitglied' },
    { name: 'Kontakt', href: '/#kontakt' },
  ];

  return (
    <motion.header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled ? "bg-[#111111]/90 backdrop-blur-lg border-b border-[#ffffff10] shadow-[0_4px_30px_rgba(0,0,0,0.5)]" : "bg-transparent py-4"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex-shrink-0 flex items-center space-x-2 group">
          <img 
            src="https://s1.directupload.eu/images/260424/pa6a234n.webp" 
            alt="Bühnengesellschaft Sieglar Logo" 
            className="h-12 md:h-14 w-auto transition-transform group-hover:scale-105 duration-500 origin-left object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
             <a 
               key={link.name} 
               href={link.href}
               className="relative overflow-hidden group text-xs font-medium text-gray-300 hover:text-white uppercase tracking-[0.2em] transition-colors py-2"
             >
               <span className="relative z-10">{link.name}</span>
               <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#b91c1c] transform origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
             </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex items-center space-x-5">
            <a href="https://facebook.com/BGSieglar" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#b91c1c] hover:-translate-y-1 transition-all duration-300">
              <Facebook strokeWidth={1.5} size={18} />
            </a>
            <a href="https://instagram.com/BGSieglar" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#b91c1c] hover:-translate-y-1 transition-all duration-300">
              <Instagram strokeWidth={1.5} size={18} />
            </a>
          </div>
          <a 
            href="/#spielplan" 
            className="group flex items-center space-x-2 bg-transparent border border-[#b91c1c] text-[#b91c1c] px-6 py-2.5 hover:bg-[#b91c1c] hover:text-black transition-all duration-500 font-medium tracking-[0.1em] text-xs uppercase"
          >
            <Ticket size={16} className="group-hover:-rotate-12 transition-transform duration-300" />
            <span>Tickets</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white z-50 mix-blend-difference"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <motion.div
            animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isMobileMenuOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
          </motion.div>
        </button>
      </div>

      {/* Mobile Nav Fullscreen Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, clipPath: 'circle(0% at 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at 100% 0)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at 100% 0)' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 min-h-screen bg-[#111] z-40 flex flex-col justify-center px-10"
          >
            <div className="space-y-8 flex flex-col">
              {navLinks.map((link, i) => (
                <motion.a 
                  key={link.name} 
                  href={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + (i * 0.1), duration: 0.5 }}
                  className="text-4xl font-serif text-gray-400 hover:text-white hover:translate-x-4 transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="pt-12 flex items-center space-x-8 border-t border-[#333] mt-8"
              >
                <a href="https://facebook.com/BGSieglar" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#b91c1c] transition-colors p-2 border border-[#333] rounded-full">
                  <Facebook strokeWidth={1.5} size={24} />
                </a>
                <a href="https://instagram.com/BGSieglar" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#b91c1c] transition-colors p-2 border border-[#333] rounded-full">
                  <Instagram strokeWidth={1.5} size={24} />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
