import React from 'react';
import Cabeca from '../Cabeca';
import { PARCEIROS } from '../dados';
import { useTextos } from '../textos';

/* Carrossel: trilho duplicado rodando em loop, logos em P&B que voltam à cor
   cheia sob o ponteiro. A segunda cópia é aria-hidden — é redundância visual
   para o loop fechar sem costura, e repetir doze nomes no leitor de tela não
   informa nada. */
function Parceiro({ parceiro, copia }) {
  /* Bug real: clicar num logo (abre em aba nova) deixa o link focado na aba de
     origem, e :focus-within pausa o carrossel PARA SEMPRE — trocar de aba não
     tira o foco do elemento. Soltar o foco no clique deixa só o :hover de
     verdade pausando. */
  const soltarFoco = (e) => e.currentTarget.blur();

  return (
    <a
      className="parceiro"
      href={parceiro.href}
      target="_blank"
      rel="noopener"
      onClick={soltarFoco}
      aria-hidden={copia || undefined}
      tabIndex={copia ? -1 : undefined}
    >
      <img src={parceiro.src} alt={copia ? '' : parceiro.nome} />
      <span className="parceiro__nome">{parceiro.nome}</span>
    </a>
  );
}

export default function Parceiros() {
  const { t } = useTextos();
  const s = t.parceiros;
  return (
    <section className="secao sobe">
      <Cabeca rotulo={s.rotulo} titulo={s.titulo} />
      <div className="carrossel">
        <div className="carrossel__trilho">
          {PARCEIROS.map((p) => <Parceiro parceiro={p} key={p.nome} />)}
          {PARCEIROS.map((p) => <Parceiro parceiro={p} copia key={`copia-${p.nome}`} />)}
        </div>
      </div>
    </section>
  );
}
