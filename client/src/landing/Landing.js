import React from 'react';
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
import Reveal from './Reveal';

/* A ordem das seções é a ordem da evidência: o que o clube produz, em que
   ritmo, com que resultado (SPEC §4). Não é arbitrária — mexer aqui muda o
   argumento da página, não só o layout.

   A estrutura do documento é <header> (navegação) → <main> (o conteúdo) →
   <footer>. A dobra é a primeira seção do <main>, e não um segundo <header>:
   ela é conteúdo, não cabeçalho de navegação. */
export default function Landing({ language }) {
  return (
    <LanguageProvider language={language}>
      <Mesh />
      <div className="page">
        <Navbar />
        <main id="content">
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
        </main>
        <Footer />
      </div>
      <Reveal />
    </LanguageProvider>
  );
}
