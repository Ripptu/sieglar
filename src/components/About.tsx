import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Users, Star, CalendarHeart } from 'lucide-react';

export default function About() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section id="verein" className="py-32 px-6 bg-[#0a0a0a] relative overflow-hidden">
      {/* Decorative background typography */}
      <div className="absolute -top-20 -right-20 text-[200px] md:text-[300px] font-serif font-black text-white/[0.01] leading-none select-none pointer-events-none">
        1919
      </div>

      <div className="max-w-6xl mx-auto relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* Left Column: Heading & Sticky Nav */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 flex flex-col gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-sm tracking-[0.3em] text-[#b91c1c] uppercase mb-4">Über Uns</h2>
              <h3 className="text-5xl md:text-6xl font-serif text-white mb-8 leading-tight">Theater<br/>leben...</h3>
              <div className="h-px w-24 bg-[#333] mb-8"></div>
              <p className="text-gray-400 text-lg md:text-xl font-serif italic font-light drop-shadow-md">
                „Die Begeisterung in unser Handwerk hineinzuschnuppern und der tollen Atmosphäre beizuwohnen.“
              </p>
            </motion.div>

            {/* Sticky Image Desktop */}
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1, delay: 0.3 }}
               className="relative w-full aspect-[4/5] overflow-hidden hidden lg:block border border-[#222]"
            >
                <img 
                  src="https://s1.directupload.eu/images/260424/r96ib7xd.webp" 
                  alt="Ensemble der Volksbühne 1919/62 e.V." 
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 border border-[#b91c1c]/20 pointer-events-none mix-blend-screen"></div>
            </motion.div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-8 flex flex-col space-y-16 md:space-y-24">
            
            {/* Image Mobile/Tablet */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="relative w-full aspect-[16/9] sm:aspect-[2/1] overflow-hidden lg:hidden border border-[#222] mb-8"
            >
                <img 
                  src="https://s1.directupload.eu/images/260424/r96ib7xd.webp" 
                  alt="Ensemble der Volksbühne 1919/62 e.V." 
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
                />
            </motion.div>

            {/* Intro Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
              className="prose prose-invert prose-lg max-w-none text-gray-400"
            >
              <p className="first-letter:text-6xl first-letter:font-serif first-letter:text-[#b91c1c] first-letter:mr-3 first-letter:float-left first-letter:leading-none">
                Liebe Theaterfreunde, unsere treuen Zuschauer wissen, dass wir jedes Jahr zwei verschiedene Inszenierungen auf unsere Heimatbühne "KÜZ" darbringen. Neben den angestammten Spielzeiten im Frühjahr und Herbst, hält das Jahr neue Überraschungen bereit, auf die sich unser Publikum und auch unser Verein freuen darf.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
                <div className="border border-[#222] bg-[#111] p-6 flex flex-col items-center text-center group hover:border-[#b91c1c] transition-colors">
                  <span className="text-[#b91c1c] font-serif text-xl mb-2">Frühjahr</span>
                  <span className="text-gray-300">Eine Komödie</span>
                </div>
                <div className="border border-[#222] bg-[#111] p-6 flex flex-col items-center text-center group hover:border-[#b91c1c] transition-colors">
                  <span className="text-[#b91c1c] font-serif text-xl mb-2">Herbst</span>
                  <span className="text-gray-300">Krimi / Sozialkritik</span>
                </div>
                <div className="border border-[#222] bg-[#111] p-6 flex flex-col items-center text-center group hover:border-[#b91c1c] transition-colors">
                  <span className="text-[#b91c1c] font-serif text-xl mb-2">Sketchgruppe</span>
                  <span className="text-gray-300">Abendfüllendes Programm</span>
                </div>
                <div className="border border-[#222] bg-[#111] p-6 flex flex-col items-center text-center group hover:border-[#b91c1c] transition-colors">
                  <span className="text-[#b91c1c] font-serif text-xl mb-2">Kindergruppe</span>
                  <span className="text-gray-300">Ein Märchen</span>
                </div>
              </div>
              
              <p>
                Die Begeisterung in unser Handwerk hineinzuschnuppern und der tollen Atmosphäre in unserem Verein beizuwohnen hat in den letzten Jahren wieder sehr stark zugenommen, so dass wir derzeit knapp 100 Mitglieder zählen. Unser gemeinnütziger Verein, mit Sitz in Troisdorf-Sieglar, sieht seinen zentralen Auftrag darin, mit Leidenschaft Theater zu spielen, das gemeinschaftliche Miteinander zu fördern und freundschaftliche Beziehungen zu unseren Zuschauern und Freunden aufzubauen.
              </p>
            </motion.div>

            {/* Feature Blocks */}
            <div className="space-y-16">
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8 }}
                className="flex flex-col md:flex-row gap-6 md:gap-12 items-start"
              >
                <div className="w-16 h-16 shrink-0 rounded-full bg-[#111] border border-[#222] flex items-center justify-center text-[#b91c1c]">
                  <Star strokeWidth={1} size={28} />
                </div>
                <div>
                  <h4 className="text-2xl font-serif text-white mb-4">Theater leben</h4>
                  <p className="text-gray-400 leading-relaxed">
                    Für alle Schauspiel- und Theaterinteressierten der Region sind wir die erste Anlaufstelle. Lob und Zufriedenheit unserer Zuschauer lassen uns nicht ruhen, stetig darauf zu achten, besser zu werden. Die Qualität unserer Schauspielkunst, wie auch der anderen Bereiche (Technik, Maske, Kostüm, etc.) werden gefördert durch professionelle Work-Shops. Stolz können wir behaupten, der größte Theaterverein des Rhein-Sieg-Kreises zu sein.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8 }}
                className="flex flex-col md:flex-row gap-6 md:gap-12 items-start"
              >
                <div className="w-16 h-16 shrink-0 rounded-full bg-[#111] border border-[#222] flex items-center justify-center text-[#b91c1c]">
                  <Users strokeWidth={1} size={28} />
                </div>
                <div>
                  <h4 className="text-2xl font-serif text-white mb-4">Miteinander fördern</h4>
                  <p className="text-gray-400 leading-relaxed">
                    Ob Darsteller, Technik, Service oder Bühnenbauer - bei uns sind alle gleich und herzlich willkommen! Wir bieten jedem die gleiche Chance, sich auf, vor oder hinter der Bühne zu verwirklichen, denn bei uns zählt vor allem die Gemeinschaft: "Nur gemeinsam sind wir stark"! Auch Veranstaltungen außerhalb unserer Spieltätigkeit tragen zur Geselligkeit im Verein bei: Vom Ortskarneval über Grillabende bis zum Sommerfest.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8 }}
                className="flex flex-col md:flex-row gap-6 md:gap-12 items-start"
              >
                <div className="w-16 h-16 shrink-0 rounded-full bg-[#111] border border-[#222] flex items-center justify-center text-[#b91c1c]">
                  <CalendarHeart strokeWidth={1} size={28} />
                </div>
                <div>
                  <h4 className="text-2xl font-serif text-white mb-4">Freundschaftliche Beziehungen</h4>
                  <p className="text-gray-400 leading-relaxed">
                    Neben den zuvorgenannten Prämissen liegt uns auch die Freundschaft zu benachbarten Vereinen, unseren Zuschauern, Sponsoren und Gönnern sehr am Herzen. Der rege und interessierte Austausch und das Bier an der Bar gehören zu unserer Mentalität einfach dazu. Hierdurch sind schon sehr enge und lebenslange Freundschaften entstanden!
                  </p>
                </div>
              </motion.div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
