import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#000] py-16 px-6 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center space-x-2">
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <img 
              src="https://s1.directupload.eu/images/260424/pa6a234n.webp" 
              alt="Bühnengesellschaft Sieglar Logo" 
              className="h-16 md:h-20 w-auto object-contain"
            />
          </Link>
        </div>
        
        <div className="text-gray-500 text-xs tracking-widest uppercase text-center md:text-left">
          &copy; {new Date().getFullYear()} Die Volksbühne 1919/62 e.V.
        </div>
        
        <div className="flex space-x-8 text-xs tracking-[0.15em] uppercase text-gray-400 font-medium">
          <Link to="/impressum" className="hover:text-[#b91c1c] transition-colors duration-300">Impressum</Link>
          <Link to="/datenschutz" className="hover:text-[#b91c1c] transition-colors duration-300">Datenschutz</Link>
        </div>
      </div>
    </footer>
  );
}
