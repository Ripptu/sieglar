import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Info, Clock, CalendarDays, Ticket } from 'lucide-react';

const currentShows = [
  {
    id: 1,
    title: "Der Wannenlift",
    subtitle: "Komödie in 3 Akten",
    date: "14. März 2026",
    time: "20:00 - 22:15 Uhr",
    director: "Max Mustermann",
    description: "Ein charmantes Verwirrspiel um Erbschaften, familiäre Verpflichtungen und einen höchst unzuverlässigen Wannenlift, der das Leben aller Beteiligten auf den Kopf stellt.",
    runningTime: "Ca. 2h 15m inkl. Pause",
    image: "https://placehold.co/800x1000/181818/555555?text=Premiere"
  },
  {
    id: 2,
    title: "Schatten im Foyer",
    subtitle: "Kriminalstück",
    date: "15. März 2026",
    time: "18:00 - 20:30 Uhr",
    director: "Maria Schmidt",
    description: "In der gediegenen Atmosphäre des Theaters ereignet sich ein Zwischenfall. Die Grenzen zwischen Fiktion und Realität verschwimmen in diesem fesselnden Krimi.",
    runningTime: "Ca. 2h 30m inkl. Pause",
    image: "https://placehold.co/800x1000/181818/555555?text=2.+Auff%C3%BChrung"
  }
];

export default function CurrentShows() {
  return (
    <section className="py-24 md:py-32 px-6 bg-[#000000] relative overflow-hidden">
      {/* Decorative lines */}
      <div className="absolute left-0 w-full h-px bg-gradient-to-r from-transparent via-[#b91c1c]/20 to-transparent top-0" />
      <div className="absolute left-0 w-full h-px bg-gradient-to-r from-transparent via-[#b91c1c]/20 to-transparent bottom-0" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="flex flex-col items-center mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[#b91c1c] mb-4">Jetzt im Verkauf</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#f5f5f5] text-center tracking-tight">Kommende Aufführungen</h2>
          <div className="w-1px h-16 bg-gradient-to-b from-[#b91c1c] to-transparent mt-8"></div>
        </motion.div>

        <div className="space-y-24 lg:space-y-32">
          {currentShows.map((show, index) => (
            <motion.div 
              key={show.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center`}
            >
              {/* Image side */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute -inset-4 bg-[#b91c1c]/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="aspect-[4/5] overflow-hidden relative border border-white/5 bg-[#111]">
                  <img 
                    src={show.image} 
                    alt={show.title}
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100 mix-blend-luminosity hover:mix-blend-normal"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none"></div>
                </div>
              </div>

              {/* Content side */}
              <div className="w-full lg:w-1/2 relative lg:px-8">
                {/* Number Watermark */}
                <span className="absolute -top-16 -left-8 text-[12rem] font-serif font-black text-white/5 pointer-events-none select-none">
                  0{index + 1}
                </span>

                <div className="relative z-10">
                  <div className="flex gap-4 items-center mb-6">
                    <span className="px-3 py-1 border border-[#b91c1c]/30 text-[#b91c1c] text-[10px] uppercase tracking-[0.2em] font-medium">Bühne</span>
                    <span className="text-gray-500 text-[10px] uppercase tracking-[0.2em]">{show.subtitle}</span>
                  </div>
                  
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-8 leading-[1.1] tracking-tight hover:text-[#b91c1c] transition-colors duration-300">
                    {show.title}
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-y-6 gap-x-8 mb-10 border-y border-white/10 py-8">
                    <div className="flex items-start gap-3">
                      <CalendarDays className="w-5 h-5 text-[#b91c1c] shrink-0" strokeWidth={1.5} />
                      <div>
                        <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Datum</p>
                        <p className="text-sm font-medium text-gray-200">{show.date}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-[#b91c1c] shrink-0" strokeWidth={1.5} />
                      <div>
                         <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Einlass & Beginn</p>
                         <p className="text-sm font-medium text-gray-200">{show.time}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Info className="w-5 h-5 text-[#b91c1c] shrink-0" strokeWidth={1.5} />
                      <div>
                         <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Dauer</p>
                         <p className="text-sm font-medium text-gray-200">{show.runningTime}</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-400 leading-relaxed mb-8 font-light text-lg">
                    {show.description}
                  </p>

                  <div className="flex flex-wrap gap-4">
                     <button className="flex items-center space-x-2 bg-[#b91c1c] text-black px-8 py-4 text-xs uppercase tracking-[0.1em] font-semibold hover:bg-white transition-colors duration-300">
                        <Ticket className="w-4 h-4" />
                        <span>Tickets kaufen</span>
                     </button>
                     <button className="flex items-center space-x-2 border border-white/20 px-8 py-4 text-xs uppercase tracking-[0.1em] font-medium text-white hover:border-white transition-colors duration-300">
                        <span>Mehr Informationen</span>
                     </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
