import React from 'react';
import { useTranslation } from '../i18n';
import inteliLogo from './imgs/inteliblcok.jpg';
import inteliblockchain from './imgs/inteliblockchain.webp';
import ethereum10years from './imgs/ethereum10years.webp';

const Projetos = () => {
  const { t } = useTranslation();
  const projetos = [
    {
      nome: "Blog",
      descricao: "Documentação e artigos sobre blockchain e tecnologia",
      link: "https://inteliblockchain-ibc.github.io/docs3/blog",
      imagem: `${inteliblockchain}`,
      status: "ativo"
    },
    {
      nome: "High Block",
      descricao: "Projeto de desenvolvimento em web3",
      link: "https://inteliblockchain-ibc.github.io/docs3/docs/projeto/introducao",
      imagem:  `${ethereum10years}`,
      status: "ativo"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero projetos-hero">
        <div className="hero-content">
          <h1 className="hero-title">
            {t('projects.hero_title_part1')} <span>{t('projects.hero_title_span')}</span>
          </h1>
          <p className="hero-subtitle">{t('projects.hero_subtitle') || t('projects.hero_subtitle')}</p>
          <p className="hero-description">{t('projects.hero_description')}</p>
        </div>
      </section>

      {/* Projetos Section */}
      <section className="projetos-section">
        <div className="container">
          <div className="projetos-content">
            <h2 className="section-title">{t('projects.section_title')}</h2>
            <p className="section-subtitle">{t('projects.section_subtitle')}</p>
            
            <div className="projetos-grid">
              {projetos.map((projeto, index) => (
                <a 
                  key={index} 
                  href={projeto.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="projeto-card"
                >
                  <div className="projeto-imagem">
                    <img src={projeto.imagem} alt={projeto.nome} />
                    <div className="projeto-overlay">
                      <i className="fas fa-external-link-alt"></i>
                    </div>
                  </div>
                  <div className="projeto-info">
                    <h3 className="projeto-nome">{projeto.nome}</h3>
                    <p className="projeto-descricao">{projeto.descricao}</p>
                    <span className={`projeto-status ${projeto.status}`}>
                      {projeto.status === 'ativo' ? t('projects.status_active') : t('projects.status_dev')}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={inteliLogo} alt="Inteli Blockchain" className="footer-logo-img" />
          </div>
          <p className="footer-text">{t('footer.text')}</p>
          <div className="footer-social">
            <a href="https://github.com/InteliBlockchain-IBC" target="_blank" rel="noopener noreferrer" className="social-icon github">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/company/inteli-blockchain" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/inteli_blockchain" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <p className="footer-copyright">{t('footer.copyright')}</p>
        </div>
      </footer>
    </>
  );
};

export default Projetos; 