import React, { useState, useEffect } from 'react';
import inteliLogo from './imgs/inteliblcok.jpg';
import QuemSomos from './QuemSomos';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    // Apply theme to body
    document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const connectWallet = () => {
    // Simulate wallet connection
    setIsWalletConnected(!isWalletConnected);
  };

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  const partners = [
    {
      name: "Inteli",
      logo: require('./imgs/inteli.jpeg')
    },
    {
      name: "Stellar",
      logo: require('./imgs/Stellar_Symbol.png')
    },
    {
      name: "Ethereum Brasil",
      logo: require('./imgs/ethereumbrasil_logo.jpeg')
    },
    {
      name: "VinteUm",
      logo: require('./imgs/vinteum.png')
    },
    {
      name: "EthSamba",
      logo: require('./imgs/ethsamba.jpg')
    },
    {
      name: "EthLatam",
      logo: require('./imgs/ethlatam.png')
    },
    {
      name: "Starknet Foundation",
      logo: require('./imgs/starknet_foundation_logo.jpeg')
    },
    {
      name: "Chainlink Labs",
      logo: require('./imgs/chainlink_labs_logo.jpeg')
    },
    {
      name: "CryptoStar Games",
      logo: require('./imgs/cryptostargames.jpeg')
    },
    {
      name: "NearX",
      logo: require('./imgs/nearx.jpeg')
    }
  ];

  const achievements = [
    {
      number: "10+",
      title: "Projetos",
      description: "Aplicações blockchain",
      icon: "fas fa-code"
    },
    {
      number: "30+",
      title: "Membros",
      description: "Comunidade crescente de entusiastas",
      icon: "fas fa-users"
    },
    {
      number: "10+",
      title: "Parceiros",
      description: "Empresas e organizações colaborativas",
      icon: "fas fa-handshake"
    },
    {
      number: "20+",
      title: "Eventos Realizados",
      description: "Bootcamps, hackathons e workshops",
      icon: "fas fa-calendar-alt"
    }
  ];

  const renderContent = () => {
    if (currentPage === 'sobre') {
      return <QuemSomos />;
    }
    
        return (
      <>
        {/* Hero Section */}
        <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            A
            <span> Liberdade </span> <br />
            Começa Aqui
          </h1>
          <p className="hero-subtitle">
            Conectando inovação, tecnologia e comunidade
          </p>
          <p className="hero-description">
            O Inteli Blockchain é o epicentro da revolução blockchain no Inteli. 
            Desenvolvemos projetos inovadores, educamos a próxima geração de desenvolvedores 
            e construímos o futuro da tecnologia descentralizada.
          </p>
        </div>
        </section>

        {/* Partners Section */}
        <section className="partners">
          <div className="container">
            <div className="partners-content">
              <h2 className="section-title">Nossos Parceiros</h2>
              <p className="section-subtitle">
                Trabalhamos com as principais empresas e organizações do ecossistema blockchain
              </p>
              
              <div className="partners-carousel">
                <div className="partners-track">
                  {/* Primeira passagem dos parceiros */}
                  {partners.map((partner, index) => (
                    <div key={`first-${index}`} className="partner-card">
                      <div className="partner-logo">
                        <img src={partner.logo} alt={partner.name} />
                      </div>
                    </div>
                  ))}
                  {/* Segunda passagem dos parceiros para loop infinito */}
                  {partners.map((partner, index) => (
                    <div key={`second-${index}`} className="partner-card">
                      <div className="partner-logo">
                        <img src={partner.logo} alt={partner.name} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="achievements">
          <div className="container">
            <div className="partners-content">
              <h2 className="section-title">Nossas Conquistas</h2>
              <p className="section-subtitle">
                Números que mostram nosso impacto no ecossistema blockchain
              </p>
              
              <div className="achievements-grid">
                {achievements.map((achievement, index) => (
                  <div key={index} className="achievement-card">
                    <div className="achievement-icon">
                      <i className={achievement.icon}></i>
                    </div>
                    <div className="achievement-number">{achievement.number}</div>
                    <h3 className="achievement-title">{achievement.title}</h3>
                    <p className="achievement-description">{achievement.description}</p>
                  </div>
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
            <p className="footer-copyright">
              © 2025 Inteli Blockchain. Todos os direitos reservados.
            </p>
          </div>
        </footer>
      </>
    );
  };

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-content">
          <div className="logo">
            <img src={inteliLogo} alt="Inteli Blockchain" className="logo-img" />
          </div>
          
          <div className="nav-links-center">
            <button 
              onClick={() => handleNavigation('home')} 
              className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
            >
              Inicio
            </button>
            <button 
              onClick={() => handleNavigation('projetos')} 
              className={`nav-link ${currentPage === 'projetos' ? 'active' : ''}`}
            >
              Projetos
            </button>
            <button 
              onClick={() => handleNavigation('comunidade')} 
              className={`nav-link ${currentPage === 'comunidade' ? 'active' : ''}`}
            >
              Calendário
            </button>
            <button 
              onClick={() => handleNavigation('eventos')} 
              className={`nav-link ${currentPage === 'eventos' ? 'active' : ''}`}
            >
              Memórias
            </button>
            <button 
              onClick={() => handleNavigation('sobre')} 
              className={`nav-link ${currentPage === 'sobre' ? 'active' : ''}`}
            >
              Quem Somos
            </button>
          </div>
          
          <div className="nav-links-right">
            <button className="theme-toggle" onClick={toggleTheme}>
              <i className={isDarkMode ? "fas fa-sun" : "fas fa-moon"}></i>
            </button>
            <button className="connect-wallet" onClick={connectWallet}>
              {isWalletConnected ? "Conectado" : "Connect"}
            </button>
          </div>
        </div>
      </nav>

      {/* Render content based on current page */}
      {renderContent()}
            </div>
        );
};

export default App;