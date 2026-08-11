import React from 'react';
import Cabeca from '../Cabeca';
import Paineis from '../Paineis';
import { useTextos } from '../textos';

export default function Ritmo() {
  const { t } = useTextos();
  const s = t.ritmo;
  return (
    <section className="secao sobe">
      <Cabeca rotulo={s.rotulo} titulo={s.titulo} corpo={s.corpo} />
      <Paineis paineis={s.paineis} />
    </section>
  );
}
