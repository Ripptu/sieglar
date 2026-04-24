import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <section id="kontakt" className="py-24 px-6 bg-[#111] relative border-t border-[#222] min-h-[800px] flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-4 text-center text-white">Kontakt</h2>
          <div className="h-0.5 w-16 bg-[#b91c1c]"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-3xl font-serif text-white mb-8">Wir freuen uns von Ihnen zu hören.</h3>
            <p className="text-gray-400 mb-12 leading-relaxed text-lg">
              Egal ob Ticketreservierung, Fragen zur Mitgliedschaft oder Interesse an einem Sponsoring – wir haben ein offenes Ohr.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full border border-[#333] flex items-center justify-center text-[#b91c1c] mr-6 shrink-0 mt-1">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Spielstätte</h4>
                  <p className="text-gray-400">KÜZ (Kultur- und Begegnungszentrum)<br/>Eifelstraße 14<br/>53844 Troisdorf-Sieglar</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full border border-[#333] flex items-center justify-center text-[#b91c1c] mr-6 shrink-0 mt-1">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Kartenhotline</h4>
                  <p className="text-gray-400">02241 / 200 21 08</p>
                  <p className="text-xs text-gray-500 mt-1">(Oder bequem unten rechts per WhatsApp)</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full border border-[#333] flex items-center justify-center text-[#b91c1c] mr-6 shrink-0 mt-1">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">E-Mail</h4>
                  <p className="text-gray-400">info@buehnengesellschaft-sieglar.de</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-[#1a1a1a] border border-[#222] p-8 md:p-12 shadow-2xl relative">
              {/* Decorative corner accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#b91c1c]"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#b91c1c]"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#b91c1c]"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#b91c1c]"></div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs uppercase tracking-widest text-gray-500 font-medium">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      className="w-full bg-[#111] border border-[#333] focus:border-[#b91c1c] text-white px-4 py-3 outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs uppercase tracking-widest text-gray-500 font-medium">E-Mail</label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      className="w-full bg-[#111] border border-[#333] focus:border-[#b91c1c] text-white px-4 py-3 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-xs uppercase tracking-widest text-gray-500 font-medium">Betreff</label>
                  <select 
                    id="subject"
                    className="w-full bg-[#111] border border-[#333] focus:border-[#b91c1c] text-white px-4 py-3 outline-none transition-colors appearance-none"
                  >
                    <option>Ticketanfrage / Reservierung</option>
                    <option>Interesse an Mitgliedschaft</option>
                    <option>Allgemeine Anfrage</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs uppercase tracking-widest text-gray-500 font-medium">Nachricht</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    required
                    className="w-full bg-[#111] border border-[#333] focus:border-[#b91c1c] text-white px-4 py-3 outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={formStatus !== 'idle'}
                  className="w-full bg-[#b91c1c] text-black font-medium tracking-widest uppercase text-sm py-4 hover:bg-[#dc2626] transition-colors flex items-center justify-center space-x-2"
                >
                  {formStatus === 'idle' && (
                    <>
                      <span>Nachricht senden</span>
                      <Send size={16} />
                    </>
                  )}
                  {formStatus === 'submitting' && <span>Wird gesendet...</span>}
                  {formStatus === 'success' && <span>Gesendet!</span>}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
