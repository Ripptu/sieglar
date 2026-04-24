import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Ticket } from 'lucide-react';

const shows = [
  {
    id: 1,
    category: "Frühjahrskomödie",
    title: "Der Wannenlift",
    date: "14. - 28. Mär 2026",
    image: "https://placehold.co/800x1200/222222/555555?text=Der+Wannenlift",
    excerpt: "Eine rasante Komödie. Wenn der neue Lift zum Zentrum familiärer Verwicklungen wird, bleibt kein Auge trocken."
  },
  {
    id: 2,
    category: "Herbst-Krimi",
    title: "Schatten im Foyer",
    date: "10. - 24. Okt 2026",
    image: "https://placehold.co/800x1200/222222/555555?text=Schatten+im+Foyer",
    excerpt: "Spannung garantiert im neuesten Theater-Krimi der Volksbühne."
  },
  {
    id: 3,
    category: "Sketche",
    title: "Sieglarer Allerlei",
    date: "05. - 06. Jun 2026",
    image: "https://placehold.co/800x1200/222222/555555?text=Sieglarer+Allerlei",
    excerpt: "Ein bunter Abend voller Humor und lokaler Anekdoten."
  },
  {
    id: 4,
    category: "Kindertheater",
    title: "Der gestiefelte Kater",
    date: "01. - 15. Dez 2026",
    image: "https://placehold.co/800x1200/222222/555555?text=Kindertheater",
    excerpt: "Ein zauberhaftes Märchenerlebnis für die ganze Familie."
  }
];

export default function FeaturedShows() {
  return (
    <section id="spielplan" className="py-32 px-6 bg-[#0a0a0a] relative overflow-hidden">
      {/* Abstract blurred background element */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#b91c1c]/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="flex flex-col md:flex-row md:items-end justify-between mb-24 border-b border-white/10 pb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-serif text-[#f5f5f5] mb-6 tracking-tight">
              Spielplan <span className="italic text-[#b91c1c] font-light">25/26</span>
            </h2>
            <p className="text-gray-400 font-light text-lg leading-relaxed">
              Entdecken Sie unser aktuelles Repertoire. Von humorvollen Komödien über spannende Krimis bis hin zu zauberhaftem Kindertheater – die Volksbühne bietet für jeden Geschmack das Richtige.
            </p>
          </div>
          <button className="hidden md:flex items-center space-x-3 text-xs uppercase tracking-[0.2em] font-medium text-white hover:text-[#b91c1c] transition-colors mt-8 md:mt-0 group">
            <span>Komplette Saison</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {shows.map((show, index) => (
            <motion.div 
              key={show.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
              className="group cursor-pointer flex flex-col"
            >
              <div className="relative overflow-hidden aspect-[3/4] mb-8 bg-[#111]">
                <img 
                  src={show.image} 
                  alt={show.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                {/* Overlay Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Tickets Button overlay visible on hover */}
                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out flex justify-center">
                   <button className="w-full bg-[#b91c1c] text-black text-xs font-semibold uppercase tracking-[0.1em] py-3 flex items-center justify-center space-x-2 hover:bg-white transition-colors duration-300">
                     <Ticket className="w-4 h-4" />
                     <span>Tickets</span>
                   </button>
                </div>
              </div>
              
              <div className="flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
                  <p className="text-[#b91c1c] text-[10px] font-semibold tracking-[0.2em] uppercase">{show.category}</p>
                  <p className="text-gray-500 text-[10px] uppercase tracking-[0.1em]">{show.date}</p>
                </div>
                <h3 className="text-2xl font-serif text-white mb-3 group-hover:text-[#b91c1c] transition-colors duration-300 leading-tight">
                  {show.title}
                </h3>
                <p className="text-gray-400 text-sm font-light leading-relaxed mb-6 line-clamp-3">
                  {show.excerpt}
                </p>
                <div className="mt-auto">
                   <span className="inline-flex items-center space-x-2 text-xs uppercase tracking-wider text-gray-500 group-hover:text-white transition-colors">
                     <span>Details</span>
                     <ArrowRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
                   </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 md:hidden flex justify-center">
          <button className="w-full border border-white/20 py-4 text-xs uppercase tracking-[0.2em] font-medium text-white hover:border-[#b91c1c] hover:text-[#b91c1c] transition-colors">
            Komplette Saison ansehen
          </button>
        </div>
      </div>
    </section>
  );
}
