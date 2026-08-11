import React, { useEffect, useRef } from 'react';
import montarNo3d from '../no3d';
import Realce from '../Realce';
import { useTextos } from '../textos';

/* A dobra. O nó é um SLOT (SPEC §7): o <canvas> e a extrusão por
   empilhamento em CSS ocupam o mesmo espaço, e o canvas só assume depois
   que o 3D provou que desenhou. Nada aqui precisa ser refeito para trocar
   o conteúdo do slot. */

const CAMADAS = Array.from({ length: 14 }, (_, i) => i);

export default function Dobra() {
  const { t } = useTextos();
  const dobraRef = useRef(null);
  const slotRef = useRef(null);
  const palcoRef = useRef(null);
  const canvasRef = useRef(null);

  // o nó segue o ponteiro dentro da dobra. Sem ponteiro (toque) e sob
  // prefers-reduced-motion ele fica parado, no ângulo de repouso.
  useEffect(() => {
    const dobra = dobraRef.current;
    const slot = slotRef.current;
    const palco = palcoRef.current;
    if (!dobra || !slot || !palco) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    if (!window.matchMedia('(hover: hover)').matches) return undefined;

    const LIM = 26;                     // graus máximos de giro
    let bruto = null;
    let rodando = false;

    function pintar() {
      rodando = false;
      if (!bruto) return;
      const r = dobra.getBoundingClientRect();
      const x = (bruto.clientX - r.left) / r.width - 0.5;
      const y = (bruto.clientY - r.top) / r.height - 0.5;
      palco.style.setProperty('--ry', (x * LIM * 2).toFixed(2) + 'deg');
      palco.style.setProperty('--rx', (-y * LIM).toFixed(2) + 'deg');
    }

    const aoMover = (e) => {
      if (e.pointerType !== 'mouse') return;
      if (document.documentElement.classList.contains('gl-ativo')) return;  // o 3D assumiu
      bruto = e;
      slot.classList.add('no-slot--vivo');
      if (!rodando) { rodando = true; requestAnimationFrame(pintar); }
    };
    const aoSair = () => {
      slot.classList.remove('no-slot--vivo');
      palco.style.setProperty('--rx', '0deg');
      palco.style.setProperty('--ry', '0deg');
    };

    dobra.addEventListener('pointermove', aoMover);
    dobra.addEventListener('pointerleave', aoSair);
    return () => {
      dobra.removeEventListener('pointermove', aoMover);
      dobra.removeEventListener('pointerleave', aoSair);
    };
  }, []);

  // o glitch do wordmark só roda enquanto a dobra está visível: piscar para
  // ninguém gasta bateria e distrai quem já rolou para longe
  useEffect(() => {
    const dobra = dobraRef.current;
    if (!dobra) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const obs = new IntersectionObserver(
      (es) => es.forEach((e) => dobra.classList.toggle('dobra--visivel', e.isIntersecting)),
      { threshold: 0.25 },
    );
    obs.observe(dobra);
    return () => obs.disconnect();
  }, []);

  // a marca em 3D — decide sozinha se deve existir; ver no3d.js
  useEffect(() => montarNo3d(slotRef.current, canvasRef.current), []);

  return (
    <header className="dobra" id="topo" ref={dobraRef}>
      <div className="dobra__texto">
        <p className="dobra__kicker">
          <i aria-hidden="true" />
          <span className="rotulo">{t.dobra.kicker}</span>
        </p>

        <h1 className="lockup">
          <span className="no-slot" data-slot="marca" aria-hidden="true" ref={slotRef}>
            <canvas className="no-slot__gl" aria-hidden="true" ref={canvasRef} />
            <span className="no-slot__palco" ref={palcoRef}>
              {CAMADAS.map((i) => <span key={i} style={{ '--i': i }} />)}
            </span>
          </span>
          <span className="marca-nome" data-nome="Blockchain">
            <span className="leve">inteli</span>
            <span className="forte">Blockchain</span>
          </span>
        </h1>

        <p className="dobra__tese"><Realce partes={t.dobra.tese} /></p>

        {/* MOLDURA 1 de 5 — a ação principal leva para dentro da prova */}
        <a className="mold mold--gelo acao" href="#projetos">
          {t.dobra.acao}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>
      </div>
    </header>
  );
}
