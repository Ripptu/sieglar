import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
    // Hier würde das FB/Insta Pixel geladen werden
    console.log("Cookies accepted - load Pixel");
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="bg-[#1a1a1a] border border-[#333] shadow-2xl p-6 sm:p-8 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative">
            <div className="flex-1 text-sm text-gray-300 left-relaxed">
              <h4 className="text-white font-medium mb-2 text-base">Wir verwenden Cookies</h4>
              <p>
                Um unsere Webseite für Sie optimal zu gestalten und fortlaufend verbessern zu können, sowie für Retargeting-Kampagnen (Ticketverkäufe), verwenden wir Cookies. Weitere Informationen finden Sie in unserer Datenschutzerklärung.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto shrink-0">
              <button 
                onClick={handleDecline}
                className="px-6 py-3 border border-[#333] text-gray-300 hover:text-white hover:border-white transition-colors text-sm font-medium whitespace-nowrap"
              >
                Nur Essenzielle
              </button>
              <button 
                onClick={handleAccept}
                className="px-6 py-3 bg-[#b91c1c] text-black hover:bg-[#dc2626] transition-colors text-sm font-medium whitespace-nowrap"
              >
                Alle akzeptieren
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
