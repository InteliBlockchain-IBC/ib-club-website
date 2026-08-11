import React from 'react';
import Cabeca from '../Cabeca';
import { FOTOS } from '../dados';
import { useTextos } from '../textos';

/* Vem depois da linha do tempo: a linha diz o que aconteceu, o carrossel
   mostra. O laço é puro CSS (trilho duplicado + animação infinita) — não há
   JS nenhum aqui. Ver .galeria__trilho e @keyframes desfilarFotos.

   Ao contrário do carrossel de parceiros, as fotos NÃO são aria-hidden: são
   conteúdo informativo, não logo redundante com uma lista ao lado. Quem leva
   aria-hidden é só a segunda cópia, que existe para o loop fechar sem costura. */
function Foto({ foto, texto, copia }) {
  return (
    <figure className="galeria__item mold" aria-hidden={copia || undefined}>
      <img
        src={foto.src}
        width={foto.largura}
        height={foto.altura}
        loading={copia ? undefined : 'lazy'}
        alt={copia ? '' : texto.alt}
        tabIndex={copia ? -1 : undefined}
      />
      <figcaption>{texto.legenda}</figcaption>
    </figure>
  );
}

export default function Galeria() {
  const { t } = useTextos();
  const s = t.fotos;
  return (
    <section className="secao sobe" id="fotos">
      <Cabeca rotulo={s.rotulo} titulo={s.titulo} />
      <div className="galeria">
        <div className="galeria__trilho">
          {FOTOS.map((f) => <Foto foto={f} texto={s.lista[f.id]} key={f.id} />)}
          {FOTOS.map((f) => <Foto foto={f} texto={s.lista[f.id]} copia key={`copia-${f.id}`} />)}
        </div>
      </div>
    </section>
  );
}
