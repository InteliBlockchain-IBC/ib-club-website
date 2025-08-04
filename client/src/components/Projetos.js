import React from 'react';
import inteliLogo from './imgs/inteliblcok.jpg';
import inteliblockchain from './imgs/inteliblockchain.webp';
import ethereum10years from './imgs/ethereum10years.webp';

const Projetos = () => {
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
            Nossos <span>Projetos</span>
          </h1>
          <p className="hero-subtitle">
            Inovação e desenvolvimento em blockchain
          </p>
          <p className="hero-description">
            Conheça os projetos desenvolvidos pelo Inteli Blockchain. Nossa equipe 
            trabalha constantemente para criar soluções inovadoras e educar a 
            comunidade sobre as possibilidades da tecnologia blockchain.
          </p>
        </div>
      </section>

      {/* Projetos Section */}
      <section className="projetos-section">
        <div className="container">
          <div className="projetos-content">
            <h2 className="section-title">Projetos Ativos</h2>
            <p className="section-subtitle">
              Conheça nossas iniciativas e contribuições para o ecossistema blockchain
            </p>
            
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
                      {projeto.status === 'ativo' ? 'Ativo' : 'Em Desenvolvimento'}
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
          <p className="footer-text">
            Conectando o futuro da tecnologia blockchain através de inovação, 
            educação e colaboração.
          </p>
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
          <p className="footer-copyright">
            © 2025 Inteli Blockchain. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Projetos; 