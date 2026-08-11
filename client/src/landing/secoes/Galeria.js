import React from 'react';
import Cabeca from '../Cabeca';
import { FOTOS } from '../dados';

/* Vem depois da linha do tempo: a linha diz o que aconteceu, o carrossel
   mostra. O laço é puro CSS (trilho duplicado + animação infinita) — não há
   JS nenhum aqui. Ver .galeria__trilho e @keyframes desfilarFotos.

   Ao contrário do carrossel de parceiros, as fotos NÃO são aria-hidden: são
   conteúdo informativo, não logo redundante com uma lista ao lado. Quem leva
   aria-hidden é só a segunda cópia, que existe para o loop fechar sem costura. */
function Foto({ foto, copia }) {
  return (
    <figure className="galeria__item mold" aria-hidden={copia || undefined}>
      <img
        src={foto.src}
        width={foto.largura}
        height={foto.altura}
        loading={copia ? undefined : 'lazy'}
        alt={copia ? '' : foto.alt}
        tabIndex={copia ? -1 : undefined}
      />
      <figcaption>{foto.legenda}</figcaption>
    </figure>
  );
}

export default function Galeria() {
  return (
    <section className="secao sobe" id="fotos">
      <Cabeca rotulo="Registro" titulo={<>O clube <b>em foto</b></>} />
      <div className="galeria">
        <div className="galeria__trilho">
          {FOTOS.map((f) => <Foto foto={f} key={f.legenda} />)}
          {FOTOS.map((f) => <Foto foto={f} copia key={`copia-${f.legenda}`} />)}
        </div>
      </div>
    </section>
  );
}
