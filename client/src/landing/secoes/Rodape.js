import React from 'react';
import { REDES, ESTUDO, CONTATO } from '../dados';
import { useTextos } from '../textos';
import marca from '../assets/logo-horizontal-marca.png';

/* O contato existe aqui como fato, não como pedido — a página expõe, não
   capta (SPEC §2). */
export default function Rodape() {
  const { t } = useTextos();
  const s = t.rodape;
  return (
    <footer className="rodape">
      <div className="rodape__topo">
        <div>
          <img src={marca} alt="Inteli Blockchain" style={{ height: '36px', width: 'auto' }} />
          <p className="rodape__missao">{s.missao}</p>
        </div>
        <div>
          <h4>{s.onde}</h4>
          <ul>
            {REDES.map((r) => (
              <li key={r.href}>
                <a href={r.href} target="_blank" rel="noopener">{r.texto}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>{s.estudar}</h4>
          <ul>
            {ESTUDO.map((e) => (
              <li key={e.id}>
                <a href={e.href} target="_blank" rel="noopener">{s.links[e.id]}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="rodape__base">
        <span>{s.direitos}</span>
        <span>{s.contato} <a href={`mailto:${CONTATO}`}>{CONTATO}</a></span>
        <span>{s.dominio}</span>
      </div>
    </footer>
  );
}
