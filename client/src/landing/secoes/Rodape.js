import React from 'react';
import { RODAPE_LINKS, CONTATO } from '../dados';
import marca from '../assets/logo-horizontal-marca.png';

/* O contato existe aqui como fato, não como pedido — a página expõe, não
   capta (SPEC §2). */
export default function Rodape() {
  return (
    <footer className="rodape">
      <div className="rodape__topo">
        <div>
          <img src={marca} alt="Inteli Blockchain" style={{ height: '36px', width: 'auto' }} />
          <p className="rodape__missao">
            Levar tecnologias descentralizadas para dentro do Inteli e tornar o
            clube uma referência no ecossistema web3, em inovação e em projetos.
          </p>
        </div>
        {RODAPE_LINKS.map((bloco) => (
          <div key={bloco.titulo}>
            <h4>{bloco.titulo}</h4>
            <ul>
              {bloco.itens.map((i) => (
                <li key={i.href}>
                  <a href={i.href} target="_blank" rel="noopener">{i.texto}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="rodape__base">
        <span>© 2026 Inteli Blockchain — Instituto de Tecnologia e Liderança</span>
        <span>Contato: <a href={`mailto:${CONTATO}`}>{CONTATO}</a></span>
        <span>Domínio institucional: @sou.inteli.edu.br</span>
      </div>
    </footer>
  );
}
