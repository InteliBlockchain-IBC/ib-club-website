import React from 'react';
import marca from '../assets/logo-horizontal-marca.png';

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav__cx">
        <a className="nav__marca" href="#topo" aria-label="Inteli Blockchain — início">
          <img src={marca} alt="Inteli Blockchain" />
        </a>
        <div className="nav__itens">
          <a href="#projetos">Projetos</a>
          <a href="#areas">Áreas</a>
          <a href="#historia">História</a>
        </div>
      </div>
    </nav>
  );
}
