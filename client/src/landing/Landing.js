import React, { useEffect } from 'react';
import './landing.css';
import { LanguageProvider } from './i18n';

import Mesh from './sections/Mesh';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import WhoBuilds from './sections/WhoBuilds';
import Partnership from './sections/Partnership';
import Hackathon from './sections/Hackathon';
import Cadence from './sections/Cadence';
import Departments from './sections/Departments';
import Stats from './sections/Stats';
import Timeline from './sections/Timeline';
import Gallery from './sections/Gallery';
import Partners from './sections/Partners';
import Footer from './sections/Footer';

/* A ordem das seções é a ordem da evidência: o que o clube produz, em que
   ritmo, com que resultado (SPEC §4). Não é arbitrária — mexer aqui muda o
   argumento da página, não só o layout. */
export default function Landing() {
  /* As seções sobem ao entrar na viewport. Um observador só para todas as
     .sobe, criado depois que a árvore inteira já montou. */
  useEffect(() => {
    const targets = document.querySelectorAll('.rise');
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      targets.forEach((el) => el.classList.add('visible'));
      return undefined;
    }
    const obs = new IntersectionObserver((es) => {
      es.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
      });
    }, { threshold: 0.1 });
    targets.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <LanguageProvider>
      <Mesh />
      <div className="page">
        <Navbar />
        <Hero />
        <WhoBuilds />
        <Partnership />
        <Hackathon />
        <Cadence />
        <Departments />
        <Stats />
        <Timeline />
        <Gallery />
        <Partners />
        <Footer />
      </div>
    </LanguageProvider>
  );
}
