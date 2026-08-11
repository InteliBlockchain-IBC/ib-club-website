import React from 'react';
import SectionHeader from '../SectionHeader';
import { PARTNERS } from '../data';
import { useTranslation } from '../i18n';

/* Carrossel: trilho duplicado rodando em loop, logos em P&B que voltam à cor
   cheia sob o ponteiro. A segunda cópia é aria-hidden — é redundância visual
   para o loop fechar sem costura, e repetir doze nomes no leitor de tela não
   informa nada. */
function Parceiro({ partner, copy }) {
  /* Bug real: clicar num logo (abre em aba nova) deixa o link focado na aba de
     origem, e :focus-within pausa o carrossel PARA SEMPRE — trocar de aba não
     tira o foco do elemento. Soltar o foco no clique deixa só o :hover de
     verdade pausando. */
  const releaseFocus = (e) => e.currentTarget.blur();

  return (
    <a
      className="partner"
      href={partner.href}
      target="_blank"
      rel="noopener"
      onClick={releaseFocus}
      aria-hidden={copy || undefined}
      tabIndex={copy ? -1 : undefined}
    >
      <img src={partner.src} alt={copy ? '' : partner.name} />
      <span className="partner__name">{partner.name}</span>
    </a>
  );
}

export default function Partners() {
  const { t } = useTranslation();
  const s = t.partners;
  return (
    <section className="section rise" aria-labelledby="h-partners">
      <SectionHeader id="h-partners" label={s.label} title={s.title} />
      <div className="carousel">
        <div className="carousel__track">
          {PARTNERS.map((p) => <Parceiro partner={p} key={p.name} />)}
          {PARTNERS.map((p) => <Parceiro partner={p} copy key={`copia-${p.name}`} />)}
        </div>
      </div>
    </section>
  );
}
