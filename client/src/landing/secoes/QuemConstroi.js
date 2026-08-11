import React from 'react';
import Cabeca from '../Cabeca';
import Paineis from '../Paineis';
import { DESTAQUE } from '../dados';
import { useTextos } from '../textos';

export default function QuemConstroi() {
  const { t } = useTextos();
  const s = t.quemConstroi;

  return (
    <section className="secao sobe">
      {/* A FOTO DE DESTAQUE DA PÁGINA. É a primeira imagem depois da dobra, e é
          ela que sustenta a afirmação do hero: dizer "grande clube universitário"
          custa nada; mostrar o time inteiro custa uma foto. Vem antes do título
          de propósito — a evidência entra antes do argumento. */}
      <figure className="destaque mold">
        <img
          src={DESTAQUE.src}
          width={DESTAQUE.largura}
          height={DESTAQUE.altura}
          alt={t.fotos.destaque.alt}
        />
        <figcaption>{t.fotos.destaque.legenda}</figcaption>
      </figure>

      <Cabeca rotulo={s.rotulo} titulo={s.titulo} corpo={s.corpo} />
      <Paineis paineis={s.paineis} />
    </section>
  );
}
