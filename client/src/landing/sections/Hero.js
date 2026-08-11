import React, { useEffect, useRef } from 'react';
import mountKnot3d from '../knot3d';
import Emphasis from '../Emphasis';
import { useTranslation } from '../i18n';

/* A dobra. O nó é um SLOT (SPEC §7): o <canvas> e a extrusão por
   empilhamento em CSS ocupam o mesmo espaço, e o canvas só assume depois
   que o 3D provou que desenhou. Nada aqui precisa ser refeito para trocar
   o conteúdo do slot. */

const LAYERS = Array.from({ length: 14 }, (_, i) => i);

export default function Hero() {
  const { t } = useTranslation();
  const heroRef = useRef(null);
  const slotRef = useRef(null);
  const stageRef = useRef(null);
  const canvasRef = useRef(null);

  // o nó segue o ponteiro dentro da dobra. Sem ponteiro (toque) e sob
  // prefers-reduced-motion ele fica parado, no ângulo de repouso.
  useEffect(() => {
    const hero = heroRef.current;
    const slot = slotRef.current;
    const stage = stageRef.current;
    if (!hero || !slot || !stage) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    if (!window.matchMedia('(hover: hover)').matches) return undefined;

    const LIM = 26;                     // graus máximos de giro
    let raw = null;
    let running = false;

    function paint() {
      running = false;
      if (!raw) return;
      const r = hero.getBoundingClientRect();
      const x = (raw.clientX - r.left) / r.width - 0.5;
      const y = (raw.clientY - r.top) / r.height - 0.5;
      stage.style.setProperty('--ry', (x * LIM * 2).toFixed(2) + 'deg');
      stage.style.setProperty('--rx', (-y * LIM).toFixed(2) + 'deg');
    }

    const onMove = (e) => {
      if (e.pointerType !== 'mouse') return;
      if (document.documentElement.classList.contains('gl-ativo')) return;  // o 3D assumiu
      raw = e;
      slot.classList.add('knot--live');
      if (!running) { running = true; requestAnimationFrame(paint); }
    };
    const onLeave = () => {
      slot.classList.remove('knot--live');
      stage.style.setProperty('--rx', '0deg');
      stage.style.setProperty('--ry', '0deg');
    };

    hero.addEventListener('pointermove', onMove);
    hero.addEventListener('pointerleave', onLeave);
    return () => {
      hero.removeEventListener('pointermove', onMove);
      hero.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  // o glitch do wordmark só roda enquanto a dobra está visível: piscar para
  // ninguém gasta bateria e distrai quem já rolou para longe
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const obs = new IntersectionObserver(
      (es) => es.forEach((e) => hero.classList.toggle('hero--visible', e.isIntersecting)),
      { threshold: 0.25 },
    );
    obs.observe(hero);
    return () => obs.disconnect();
  }, []);

  // a marca em 3D — decide sozinha se deve existir; ver knot3d.js
  useEffect(() => mountKnot3d(slotRef.current, canvasRef.current), []);

  return (
    <section className="hero" id="top" ref={heroRef} aria-labelledby="h-brand">
      <div className="hero__text">
        <p className="hero__kicker">
          <i aria-hidden="true" />
          <span className="label">{t.hero.kicker}</span>
        </p>

        <h1 className="lockup" id="h-brand">
          <span className="knot" data-slot="marca" aria-hidden="true" ref={slotRef}>
            <canvas className="knot__gl" aria-hidden="true" ref={canvasRef} />
            <span className="knot__stage" ref={stageRef}>
              {LAYERS.map((i) => <span key={i} style={{ '--i': i }} />)}
            </span>
          </span>
          <span className="wordmark" data-nome="Blockchain">
            <span className="light">inteli</span>
            <span className="bold">Blockchain</span>
          </span>
        </h1>

        <p className="hero__thesis"><Emphasis parts={t.hero.thesis} /></p>

        {/* MOLDURA 1 de 5 — a ação principal leva para dentro da prova */}
        <a className="frame frame--ice cta" href="#projects">
          {t.hero.cta}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>
      </div>
    </section>
  );
}
