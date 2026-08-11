import React from 'react';
import { useTranslation } from '../i18n';
import marca from '../assets/logo-horizontal.png';

export default function Navbar() {
  const { t, other, toggle } = useTranslation();

  return (
    <nav className="nav">
      <div className="nav__box">
        <a className="nav__brand" href="#top" aria-label={t.hero.home}>
          <img src={marca} alt="Inteli Blockchain" />
        </a>
        <div className="nav__links">
          <a href="#projects">{t.nav.projects}</a>
          <a href="#departments">{t.nav.departments}</a>
          <a href="#history">{t.nav.history}</a>
        </div>
        {/* Fica FORA de .nav__itens de propósito: aquele bloco some abaixo de
            900px, e esconder o seletor no celular deixaria o inglês
            inalcançável em metade dos acessos. O rótulo é o idioma para o
            qual se vai, não o atual. */}
        <button className="nav__lang" type="button" onClick={toggle} lang={other}>
          <span className="visually-hidden">{t.switchTo}</span>
          <span aria-hidden="true">{other.toUpperCase()}</span>
        </button>
      </div>
    </nav>
  );
}
