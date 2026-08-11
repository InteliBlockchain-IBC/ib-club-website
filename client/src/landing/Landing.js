import React, { useEffect } from 'react';
import './landing.css';

import Malha from './secoes/Malha';
import Navbar from './secoes/Navbar';
import Dobra from './secoes/Dobra';
import QuemConstroi from './secoes/QuemConstroi';
import Parceria from './secoes/Parceria';
import Hackathon from './secoes/Hackathon';
import Ritmo from './secoes/Ritmo';
import Areas from './secoes/Areas';
import Numeros from './secoes/Numeros';
import LinhaDoTempo from './secoes/LinhaDoTempo';
import Galeria from './secoes/Galeria';
import Parceiros from './secoes/Parceiros';
import Rodape from './secoes/Rodape';

/* A ordem das seções é a ordem da evidência: o que o clube produz, em que
   ritmo, com que resultado (SPEC §4). Não é arbitrária — mexer aqui muda o
   argumento da página, não só o layout. */
export default function Landing() {
  /* As seções sobem ao entrar na viewport. Um observador só para todas as
     .sobe, criado depois que a árvore inteira já montou. */
  useEffect(() => {
    const alvos = document.querySelectorAll('.sobe');
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      alvos.forEach((el) => el.classList.add('visivel'));
      return undefined;
    }
    const obs = new IntersectionObserver((es) => {
      es.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('visivel'); obs.unobserve(e.target); }
      });
    }, { threshold: 0.1 });
    alvos.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <Malha />
      <div className="pagina">
        <Navbar />
        <Dobra />
        <QuemConstroi />
        <Parceria />
        <Hackathon />
        <Ritmo />
        <Areas />
        <Numeros />
        <LinhaDoTempo />
        <Galeria />
        <Parceiros />
        <Rodape />
      </div>
    </>
  );
}
