import React from 'react';
import { SOCIAL, STUDY, CONTACT } from '../data';
import { useTranslation } from '../i18n';
import marca from '../assets/logo-horizontal.png';

/* O contato existe aqui como fato, não como pedido — a página expõe, não
   capta (SPEC §2). */
export default function Footer() {
  const { t } = useTranslation();
  const s = t.footer;
  return (
    <footer className="footer">
      <div className="footer__top">
        <div>
          <img src={marca} alt="Inteli Blockchain" style={{ height: '36px', width: 'auto' }} />
          <p className="footer__mission">{s.mission}</p>
        </div>
        <div>
          <h4>{s.where}</h4>
          <ul>
            {SOCIAL.map((r) => (
              <li key={r.href}>
                <a href={r.href} target="_blank" rel="noopener">{r.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>{s.study}</h4>
          <ul>
            {STUDY.map((e) => (
              <li key={e.id}>
                <a href={e.href} target="_blank" rel="noopener">{s.links[e.id]}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer__base">
        <span>{s.rights}</span>
        <address>{s.contact} <a href={`mailto:${CONTACT}`}>{CONTACT}</a></address>
        <span>{s.domain}</span>
      </div>
    </footer>
  );
}
