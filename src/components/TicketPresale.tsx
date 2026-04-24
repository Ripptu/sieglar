import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Ticket, Phone, MessageCircle, MapPin, Sparkles } from 'lucide-react';

const TicketContent = () => (
  <div className="relative w-full aspect-[1/2] sm:aspect-[2/3] bg-[#b91c1c] p-1 rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(185,28,28,0.2)] overflow-hidden">
    {/* Golden Ticket Border */}
    <div className="absolute inset-2 border border-black/20 rounded-xl pointer-events-none" />
    <div className="absolute inset-3 border border-black/10 rounded-lg pointer-events-none" />
    
    {/* Inner Black Card */}
    <div className="w-full h-full bg-[#111] rounded-xl p-8 flex flex-col justify-between relative overflow-hidden">
      
      {/* Decorative Ticket Details */}
      <div className="absolute -left-6 top-1/2 w-12 h-12 bg-[#b91c1c] rounded-full -translate-y-1/2" />
      <div className="absolute -right-6 top-1/2 w-12 h-12 bg-[#b91c1c] rounded-full -translate-y-1/2" />
      <div className="absolute left-6 right-6 top-1/2 h-px border-t-2 border-dashed border-[#b91c1c]/30 -translate-y-1/2" />

      <div className="space-y-4">
        <p className="text-gray-500 text-[10px] uppercase tracking-[0.3em] font-bold">Zutritt</p>
        <h3 className="text-3xl font-serif text-white tracking-tight">Admit <span className="italic text-[#b91c1c]">One</span></h3>
      </div>

      <div className="flex flex-col items-center justify-center flex-grow opacity-20">
        <img 
          src="https://s1.directupload.eu/images/260424/pa6a234n.webp" 
          alt="Logo Watermark" 
          className="w-32 h-auto filter grayscale mix-blend-screen"
        />
      </div>

      <div className="space-y-2 text-right">
        <p className="text-gray-500 text-[10px] uppercase tracking-[0.3em] font-bold">Die Volksbühne</p>
        <p className="text-[#b91c1c] font-mono text-xl tracking-widest">No. 191962</p>
      </div>
    </div>
  </div>
);

export default function TicketPresale() {
  const { scrollYProgress } = useScroll();
  const rotateY1 = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const [isTorn, setIsTorn] = useState(false);

  const handleTear = () => {
    if (isTorn) return;
    setIsTorn(true);
    setTimeout(() => setIsTorn(false), 4000);
  };
  
  return (
    <section className="py-24 md:py-32 bg-[#0a0a0a] relative overflow-hidden perspective-1000">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#b91c1c]/20 rounded-full blur-[100px] mix-blend-screen" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-[#b91c1c]/10 rounded-full blur-[100px] mix-blend-screen" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center space-x-2 text-[#b91c1c] text-xs font-semibold tracking-[0.2em] uppercase mb-6 px-4 py-2 border border-[#b91c1c]/30 rounded-full bg-[#b91c1c]/5 backdrop-blur-sm">
              <Sparkles size={14} className="animate-pulse" />
              <span>Der Vorverkauf hat begonnen</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-8 leading-[1.1] tracking-tight">
              Sichern Sie sich <br className="hidden md:block"/>
              <span className="italic text-[#b91c1c] font-light">Ihre Plätze!</span>
            </h2>
            
            <p className="text-gray-400 text-lg md:text-xl font-light mb-12 max-w-lg leading-relaxed">
              Tauchen Sie ein in fesselnde Geschichten und unvergessliche Theaterabende. Reservieren Sie jetzt Ihre Tickets schnell und kontaktlos über unsere Kanäle.
            </p>

            <div className="space-y-6">
              <motion.a 
                whileHover={{ scale: 1.02, x: 10 }}
                href="https://wa.me/4922412002108?text=Hallo!%20Ich%20m%C3%B6chte%20gerne%20Tickets%20reservieren."
                target="_blank"
                rel="noreferrer"
                className="flex items-center p-6 bg-[#111] border border-[#222] hover:border-[#25D366] group transition-all duration-300 relative overflow-hidden"
              >
                <div className="w-14 h-14 bg-[#25D366]/10 rounded-full flex items-center justify-center text-[#25D366] mr-6 shrink-0 group-hover:scale-110 transition-transform">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <h4 className="text-white text-lg font-medium mb-1 group-hover:text-[#25D366] transition-colors">Per WhatsApp reservieren</h4>
                  <p className="text-gray-500 text-sm">Schnell & unkompliziert: 02241 / 200 21 08</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#25D366]/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              </motion.a>

              <motion.div 
                whileHover={{ scale: 1.02, x: 10 }}
                className="flex items-center p-6 bg-[#111] border border-[#222] hover:border-[#b91c1c] group transition-all duration-300 relative overflow-hidden"
              >
                <div className="w-14 h-14 bg-[#b91c1c]/10 rounded-full flex items-center justify-center text-[#b91c1c] mr-6 shrink-0 group-hover:scale-110 transition-transform">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-white text-lg font-medium mb-1 group-hover:text-[#b91c1c] transition-colors">Telefonische Reservierung</h4>
                  <p className="text-gray-500 text-sm">Kartenhotline: 02241 / 200 21 08</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#b91c1c]/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              </motion.div>
            </div>
          </motion.div>

          {/* Visual Side: 3D Floating Ticket */}
          <div className="relative h-[500px] w-full flex items-center justify-center lg:justify-end">
            <motion.div
              animate={{ y: [-15, 15, -15], rotateZ: [-2, 2, -2] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-20 w-full max-w-sm cursor-pointer group"
              style={{ transformStyle: "preserve-3d" }}
              onClick={handleTear}
            >
              {/* Tooltip to encourage clicking */}
              <div className={`absolute -top-12 left-1/2 -translate-x-1/2 text-xs text-[#b91c1c] font-medium tracking-widest uppercase transition-opacity duration-300 w-max ${isTorn ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'}`}>
                Klicken zum Einreißen
              </div>

              {/* invisible placeholder to keep layout size */}
              <div className="invisible opacity-0">
                 <TicketContent />
              </div>

              {/* Top Half of the Ticket */}
              <motion.div 
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)' }}
                animate={isTorn ? { y: -10, rotateZ: isTorn ? (Math.random() > 0.5 ? 2 : -2) : 0 } : { y: 0, rotateZ: 0 }}
                transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
                className="absolute inset-0 z-30"
              >
                 <TicketContent />
              </motion.div>

              {/* Bottom Half of the Ticket */}
              <motion.div 
                style={{ clipPath: 'polygon(0 50%, 100% 50%, 100% 100%, 0 100%)' }}
                animate={isTorn ? { y: 300, x: 50, rotateZ: 25, opacity: 0 } : { y: 0, x: 0, rotateZ: 0, opacity: 1 }}
                transition={{ type: "spring", bounce: 0.2, duration: 1.5 }}
                className="absolute inset-0 z-20"
              >
                 <TicketContent />
              </motion.div>

            </motion.div>

            {/* Glowing orb behind ticket */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#b91c1c]/20 blur-[80px] rounded-full z-10" />
          </div>
          
        </div>
      </div>
{/* Add global styles for the shimmer effect */}
<style dangerouslySetInnerHTML={{__html: `
  @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }
`}} />
    </section>
  );
}
