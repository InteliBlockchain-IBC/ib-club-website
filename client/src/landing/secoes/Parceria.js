import React from 'react';
import Cabeca from '../Cabeca';
import { PARCERIA, CONTATO } from '../dados';
import { useTextos } from '../textos';
import no from '../assets/marca-gradiente.png';

/* A marca da Alphractal fica inline e não como <img>: o viewBox abaixo é
   recortado rente ao traçado para igualar a ALTURA ÓPTICA à do nó do clube
   (o "AP" do favicon deles tem ~25% de folga interna; com a mesma altura de
   caixa ele leria menor). Trocar por <img src={alphractal.svg}> devolve a
   folga e desalinha o co-branding. Ver SPEC-rodada-2 §1.2. */
function MarcaAlphractal() {
  return (
    <svg className="card-parceria__ap" viewBox="47.3185 62.3203 455.4675 416.3377" xmlns="http://www.w3.org/2000/svg">
      <path d="M51.3185 467.337L167.387 84.1913C191.886 97.0432 210.762 140.418 205.942 178.572L146.503 365.728C98.7098 375.768 88.2676 456.895 51.3185 467.337Z" fill="url(#ap0)" />
      <path d="M124.815 448.151C109.152 474.658 64.0367 469.303 51.3185 468.634C59.7528 421.58 74.1316 371.235 124.815 321.872C154.522 292.94 194.092 275.755 210.762 275.764C221.003 275.77 228.852 277.681 233.655 285.733C240.884 297.853 249.317 319.943 253.736 332.393C223.614 342.497 205.942 348.056 179.837 371.441C146.158 401.611 140.478 421.644 124.815 448.151Z" fill="url(#ap1)" />
      <path d="M469.441 178.873C436.476 66.3203 305.946 85.3959 242.891 85.3959C252.129 105.841 262.973 129.574 272.611 136.402C292.291 148.852 314.38 139.631 348.919 146.442C420.006 160.462 418.4 217.931 379.041 235.201C363.547 241.999 344.903 242.891 330.847 249.659C320.003 254.88 317.83 260.739 319.2 268.133C321.505 280.584 327.634 293.838 335.666 313.918C395.508 304.279 498.786 279.068 469.441 178.873Z" fill="url(#ap2)" />
      <path d="M287.577 403.792C305.293 455.992 357.364 471.108 383.123 468.437C341.498 349.556 255.631 120.916 240.65 101.155C225.119 80.6681 187.976 84.0987 167.105 84.0927C196.232 163.687 265.404 338.459 287.577 403.792Z" fill="url(#ap3)" />
      <defs>
        <linearGradient id="ap0" x1="129.593" y1="108.289" x2="129.593" y2="369.744" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1946E5" /><stop offset="1" stopColor="#020055" />
        </linearGradient>
        <linearGradient id="ap1" x1="177.06" y1="107.881" x2="177.06" y2="480.379" gradientUnits="userSpaceOnUse">
          <stop offset="0.447" stopColor="#1946E5" /><stop offset="1" stopColor="#020068" />
        </linearGradient>
        <linearGradient id="ap2" x1="359.779" y1="77.1448" x2="359.779" y2="309.394" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1946E5" /><stop offset="1" stopColor="#020068" />
        </linearGradient>
        <linearGradient id="ap3" x1="288.842" y1="86.9489" x2="261.574" y2="462.98" gradientUnits="userSpaceOnUse">
          <stop stopColor="#020068" /><stop offset="1" stopColor="#1946E5" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function Parceria() {
  const { t } = useTextos();
  const s = t.parceria;
  return (
    <section className="secao sobe" id="projetos">
      <Cabeca rotulo={s.rotulo} titulo={s.titulo} corpo={s.corpo} />

      {/* MOLDURA 6 de 7. Preenchimento gelo obrigatório: a marca da Alphractal
          é um monograma azul-escuro que some sobre a tinta da página. */}
      <a
        className="mold mold--gelo card-parceria"
        href={PARCERIA.href}
        target="_blank"
        rel="noopener"
      >
        <div className="card-parceria__co" aria-hidden="true">
          <img className="card-parceria__no" src={no} alt="" />
          <span className="card-parceria__x">×</span>
          <MarcaAlphractal />
        </div>
        <h3>{s.projeto.nome}</h3>
        <p>{s.projeto.descricao}</p>
        <span className="card-parceria__ir">{s.ir}</span>
      </a>

      {/* CTA de contato: só aqui na página, consequência do que acabou de ser
          mostrado — não uma captação. Padrão .secundario, não uma 2ª moldura. */}
      <p className="parceria__contato">
        {s.contato}
        <a className="secundario" href={`mailto:${CONTATO}`}>{CONTATO}</a>
      </p>
    </section>
  );
}
