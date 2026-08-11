import React from 'react';
import { useTextos } from '../textos';
import marca from '../assets/logo-horizontal-marca.png';

export default function Navbar() {
  const { t, outro, alternar } = useTextos();

  return (
    <nav className="nav">
      <div className="nav__cx">
        <a className="nav__marca" href="#topo" aria-label={t.dobra.inicio}>
          <img src={marca} alt="Inteli Blockchain" />
        </a>
        <div className="nav__itens">
          <a href="#projetos">{t.nav.projetos}</a>
          <a href="#areas">{t.nav.areas}</a>
          <a href="#historia">{t.nav.historia}</a>
        </div>
        {/* Fica FORA de .nav__itens de propósito: aquele bloco some abaixo de
            900px, e esconder o seletor no celular deixaria o inglês
            inalcançável em metade dos acessos. O rótulo é o idioma para o
            qual se vai, não o atual. */}
        <button className="nav__idioma" type="button" onClick={alternar} lang={outro}>
          <span className="visualmente-oculto">{t.trocar}</span>
          <span aria-hidden="true">{outro.toUpperCase()}</span>
        </button>
      </div>
    </nav>
  );
}
