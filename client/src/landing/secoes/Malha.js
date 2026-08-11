import React, { useEffect, useRef } from 'react';

/* A malha: retículo triangular desenhado linha a linha, adensando da esquerda
   para a direita como o padrão de fundo do guia. Ruído determinístico, sem
   Math.random, para o desenho ser o mesmo a cada carga. */

const NS = 'http://www.w3.org/2000/svg';

const sorte = (a, b, c) => {
  const v = Math.sin(a * 12.9898 + b * 78.233 + c * 37.719) * 43758.5453;
  return v - Math.floor(v);
};

export default function Malha() {
  const ref = useRef(null);

  useEffect(() => {
    const svg = ref.current;
    if (!svg) return undefined;
    const calmo = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function desenhar() {
      const L = window.innerWidth;
      const A = window.innerHeight;
      svg.setAttribute('viewBox', `0 0 ${L} ${A}`);
      svg.textContent = '';

      const lado = L < 640 ? 88 : 128;
      const alt = lado * 0.866;
      const cols = Math.ceil(L / lado) + 2;
      const linhas = Math.ceil(A / alt) + 2;
      const segs = [];

      for (let j = 0; j < linhas; j++) {
        const y = j * alt;
        const desloc = (j % 2) * (lado / 2);
        for (let i = 0; i < cols; i++) {
          const x = i * lado - lado + desloc;
          const p = 0.1 + 0.7 * Math.pow(Math.max(0, x) / L, 1.8);
          [[x + lado, y], [x + lado / 2, y + alt], [x - lado / 2, y + alt]]
            .forEach(([x2, y2], d) => { if (sorte(i, j, d) < p) segs.push([x, y, x2, y2]); });
        }
      }

      segs.forEach((s, k) => {
        const [x1, y1, x2, y2] = s;
        const ln = document.createElementNS(NS, 'line');
        ln.setAttribute('x1', x1.toFixed(1)); ln.setAttribute('y1', y1.toFixed(1));
        ln.setAttribute('x2', x2.toFixed(1)); ln.setAttribute('y2', y2.toFixed(1));
        ln.style.setProperty('--c', Math.hypot(x2 - x1, y2 - y1).toFixed(1));
        ln.style.strokeOpacity = (0.07 + 0.26 * Math.max(0, Math.min(1, x1 / L))).toFixed(3);
        ln.style.animationDelay = calmo ? '0s' : (0.15 + (x1 / L) * 0.9 + (k % 7) * 0.02).toFixed(2) + 's';
        svg.appendChild(ln);
      });
    }

    desenhar();
    let t;
    const aoRedimensionar = () => { clearTimeout(t); t = setTimeout(desenhar, 220); };
    window.addEventListener('resize', aoRedimensionar);
    return () => { clearTimeout(t); window.removeEventListener('resize', aoRedimensionar); };
  }, []);

  return <svg id="malha" ref={ref} aria-hidden="true" />;
}
