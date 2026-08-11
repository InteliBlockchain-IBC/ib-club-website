import React from 'react';
import { useTranslation } from '../i18n';
import brand from '../assets/logo-horizontal.png';

export default function Navbar() {
  const { t, other, otherPath } = useTranslation();

  return (
    <header className="nav">
      <div className="nav__box">
        <a className="nav__brand" href={t.nav.homePath} aria-label={t.hero.home}>
          <img src={brand} alt="Inteli Blockchain" width="150" height="38" />
        </a>
        <nav className="nav__links" aria-label={t.nav.label}>
          <a href="#projects">{t.nav.projects}</a>
          <a href="#departments">{t.nav.departments}</a>
          <a href="#history">{t.nav.history}</a>
        </nav>
        {/* Link de verdade, não botão: é assim que o rastreador encontra a
            outra versão do site, e é o que o `hreflang` do cabeçalho confirma.
            Fica FORA de .nav__links porque aquele bloco some abaixo de 900px,
            e esconder o seletor deixaria o outro idioma inalcançável no
            celular. `hreflang` e `lang` descrevem o DESTINO, não esta página. */}
        <a
          className="nav__lang"
          href={otherPath}
          hrefLang={other === 'pt' ? 'pt-BR' : 'en'}
          lang={other === 'pt' ? 'pt-BR' : 'en'}
        >
          <span className="visually-hidden">{t.switchTo}</span>
          <span aria-hidden="true">{other.toUpperCase()}</span>
        </a>
      </div>
    </header>
  );
}
