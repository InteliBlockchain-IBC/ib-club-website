import React from 'react';
import SectionHeader from '../SectionHeader';
import { PHOTOS } from '../data';
import { useTranslation } from '../i18n';

/* Vem depois da linha do tempo: a linha diz o que aconteceu, o carrossel
   mostra. O laço é puro CSS (trilho duplicado + animação infinita) — não há
   JS nenhum aqui. Ver .galeria__trilho e @keyframes desfilarFotos.

   Ao contrário do carrossel de parceiros, as fotos NÃO são aria-hidden: são
   conteúdo informativo, não logo redundante com uma lista ao lado. Quem leva
   aria-hidden é só a segunda cópia, que existe para o loop fechar sem costura. */
function Foto({ photo, text, copy }) {
  return (
    <figure className="gallery__item frame" aria-hidden={copy || undefined}>
      <img
        src={photo.src}
        width={photo.width}
        height={photo.height}
        loading={copy ? undefined : 'lazy'}
        alt={copy ? '' : text.alt}
        tabIndex={copy ? -1 : undefined}
      />
      <figcaption>{text.caption}</figcaption>
    </figure>
  );
}

export default function Gallery() {
  const { t } = useTranslation();
  const s = t.photos;
  return (
    <section className="section rise" id="photos" aria-labelledby="h-photos">
      <SectionHeader id="h-photos" label={s.label} title={s.title} />
      <div className="gallery">
        <div className="gallery__track">
          {PHOTOS.map((f) => <Foto photo={f} text={s.items[f.id]} key={f.id} />)}
          {PHOTOS.map((f) => <Foto photo={f} text={s.items[f.id]} copy key={`copia-${f.id}`} />)}
        </div>
      </div>
    </section>
  );
}
