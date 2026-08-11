import { useEffect } from 'react';

/* As seções sobem ao entrar na viewport. Fica num componente próprio, e não
   dentro de Landing, porque é comportamento e não estrutura.

   Na pré-renderização este efeito não roda, então o HTML estático sai sem a
   classe `visible` — e sem JavaScript as seções ficariam invisíveis. Por isso
   `.rise` só começa transparente quando a raiz tem `js`, classe que o próprio
   bundle põe ao carregar. Sem script, a página aparece inteira. */
export default function Reveal() {
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

  return null;
}
