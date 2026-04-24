import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedShows from './components/FeaturedShows';
import CurrentShows from './components/CurrentShows';
import QuoteSection from './components/QuoteSection';
import RoleMatchingQuiz from './components/RoleMatchingQuiz';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import WhatsappButton from './components/WhatsappButton';
import About from './components/About';
import Contact from './components/Contact';
import MembershipCTA from './components/MembershipCTA';
import TicketPresale from './components/TicketPresale';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';

function Spotlight() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
      style={{
        background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(212, 175, 55, 0.05), transparent 80%)`,
      }}
    />
  );
}

function Home() {
  return (
    <>
      <Helmet>
        <title>Bühnengesellschaft Sieglar - Theater in Troisdorf</title>
        <meta name="description" content="Entdecke aktuelles Laientheater im Rhein-Sieg-Kreis. Die Bühnengesellschaft Sieglar präsentiert Stücke wie 'Der Wannenlift'. Ticketreservierung und mehr." />
        <meta name="keywords" content="Theater Troisdorf, Laientheater Rhein-Sieg-Kreis, Schauspielverein Sieglar, Aufführung, Theaterstücke, Wannenlift" />
        <meta property="og:title" content="Bühnengesellschaft Sieglar - Theater erleben" />
        <meta property="og:description" content="Der traditionsreiche Schauspielverein in Sieglar. Sichere dir jetzt Tickets für unsere aktuellen Stücke." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <Navbar />
      <main>
        <Hero />
        <div id="spielplan">
          <FeaturedShows />
          <CurrentShows />
        </div>
        <About />
        <div id="mitglied">
          <MembershipCTA />
          <RoleMatchingQuiz />
        </div>
        <QuoteSection />
        <TicketPresale />
        <Contact />
      </main>
      <Footer />
      <CookieBanner />
      <WhatsappButton />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen">
        <Spotlight />
        <div className="relative z-10 flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

