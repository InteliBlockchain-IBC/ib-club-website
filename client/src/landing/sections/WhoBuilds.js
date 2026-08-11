import React from 'react';
import SectionHeader from '../SectionHeader';
import PanelPair from '../PanelPair';
import { FEATURED } from '../data';
import { useTranslation } from '../i18n';

export default function WhoBuilds() {
  const { t } = useTranslation();
  const s = t.whoBuilds;

  return (
    <section className="section rise" aria-labelledby="h-who">
      {/* A FOTO DE DESTAQUE DA PÁGINA. É a primeira imagem depois da dobra, e é
          ela que sustenta a afirmação do hero: dizer "grande clube universitário"
          custa nada; mostrar o time inteiro custa uma foto. Vem antes do título
          de propósito — a evidência entra antes do argumento. */}
      <figure className="featured frame">
        <img
          src={FEATURED.src}
          width={FEATURED.width}
          height={FEATURED.height}
          alt={t.photos.featured.alt}
        />
        <figcaption>{t.photos.featured.caption}</figcaption>
      </figure>

      <SectionHeader id="h-who" label={s.label} title={s.title} prose={s.prose} />
      <PanelPair panels={s.panels} />
    </section>
  );
}
