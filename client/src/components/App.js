import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import inteliLogo from './imgs/inteliblcok.jpg';
import QuemSomos from './QuemSomos';
import Conquistas from './Conquistas';
import Calendario from './Calendario';
import Memorias from './Memorias';
import Projetos from './Projetos';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [walletAddress, setWalletAddress] = useState('');
  const [walletBalance, setWalletBalance] = useState('');
  const [isConnecting, setIsConnecting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [showWalletModal, setShowWalletModal] = useState(false);
  const [networkInfo, setNetworkInfo] = useState(null);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
    }

    // Check if wallet was previously connected
    const savedWalletAddress = localStorage.getItem('walletAddress');
    if (savedWalletAddress) {
      connectWalletFromStorage();
    }
  }, []);

  useEffect(() => {
    // Apply theme to body
    document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const connectWalletFromStorage = async () => {
    try {
      const savedAddress = localStorage.getItem('walletAddress');
      if (savedAddress && window.ethereum) {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        if (accounts.length > 0) {
          await setupWalletConnection(accounts[0]);
        }
      }
    } catch (error) {
      console.error('Error connecting from storage:', error);
      localStorage.removeItem('walletAddress');
    }
  };

  const getNetworkInfo = async (provider) => {
    try {
      const network = await provider.getNetwork();
      const chainId = network.chainId;
      
      const networks = {
        1: { name: 'Ethereum Mainnet', symbol: 'ETH' },
        5: { name: 'Goerli Testnet', symbol: 'ETH' },
        11155111: { name: 'Sepolia Testnet', symbol: 'ETH' },
        137: { name: 'Polygon', symbol: 'MATIC' },
        80001: { name: 'Mumbai Testnet', symbol: 'MATIC' },
        56: { name: 'BSC', symbol: 'BNB' },
        97: { name: 'BSC Testnet', symbol: 'BNB' }
      };
      
      return networks[chainId] || { name: `Chain ID: ${chainId}`, symbol: 'ETH' };
    } catch (error) {
      console.error('Error getting network info:', error);
      return { name: 'Unknown Network', symbol: 'ETH' };
    }
  };

  const setupWalletConnection = async (address) => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const balance = await provider.getBalance(address);
      const balanceInEth = ethers.utils.formatEther(balance);
      const network = await getNetworkInfo(provider);

      setProvider(provider);
      setSigner(signer);
      setWalletAddress(address);
      setWalletBalance(balanceInEth);
      setNetworkInfo(network);
      setIsWalletConnected(true);
      localStorage.setItem('walletAddress', address);
      setErrorMessage('');
    } catch (error) {
      console.error('Error setting up wallet:', error);
      setErrorMessage('Erro ao configurar carteira');
    }
  };

  const connectWallet = async () => {
    if (isWalletConnected) {
      setShowWalletModal(true);
      return;
    }

    setIsConnecting(true);
    setErrorMessage('');

    try {
      // Check if MetaMask is installed
      if (!window.ethereum) {
        setErrorMessage('MetaMask não está instalado. Por favor, instale a extensão MetaMask.');
        setIsConnecting(false);
        return;
      }

      // Request account access
      const accounts = await window.ethereum.request({ 
        method: 'eth_requestAccounts' 
      });

      if (accounts.length > 0) {
        await setupWalletConnection(accounts[0]);
      }

      // Listen for account changes
      window.ethereum.on('accountsChanged', (accounts) => {
        if (accounts.length > 0) {
          setupWalletConnection(accounts[0]);
        } else {
          disconnectWallet();
        }
      });

      // Listen for chain changes
      window.ethereum.on('chainChanged', async () => {
        if (isWalletConnected) {
          await setupWalletConnection(walletAddress);
        }
      });

    } catch (error) {
      console.error('Error connecting wallet:', error);
      if (error.code === 4001) {
        setErrorMessage('Conexão cancelada pelo usuário');
      } else {
        setErrorMessage('Erro ao conectar carteira. Tente novamente.');
      }
    } finally {
      setIsConnecting(false);
    }
  };

  const disconnectWallet = () => {
    setIsWalletConnected(false);
    setWalletAddress('');
    setWalletBalance('');
    setProvider(null);
    setSigner(null);
    setNetworkInfo(null);
    localStorage.removeItem('walletAddress');
    setErrorMessage('');
    setShowWalletModal(false);
  };

  const getShortAddress = (address) => {
    if (!address) return '';
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      // You could add a toast notification here
    } catch (error) {
      console.error('Error copying to clipboard:', error);
    }
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  const partners = [
    {
      name: "Inteli",
      logo: require('./imgs/inteli.jpeg'),
      link: "https://www.inteli.edu.br/"
    },
    {
      name: "Stellar",
      logo: require('./imgs/Stellar_Symbol.png'),
      link: "https://stellar.org/"
    },
    {
      name: "Ethereum Brasil",
      logo: require('./imgs/ethereumbrasil_logo.jpeg'),
      link: "https://www.ethereumbrasil.com/"
    },
    {
      name: "VinteUm",
      logo: require('./imgs/vinteum.png'),
      link: "https://vinteum.org/"
    },
    {
      name: "EthSamba",
      logo: require('./imgs/ethsamba.jpg'),
      link: "https://ethsamba.org/pt/"
    },
    {
      name: "EthLatam",
      logo: require('./imgs/ethlatam.png'),
      link: "https://ethereumlatam.org/"
    },
    {
      name: "Starknet Foundation",
      logo: require('./imgs/starknet_foundation_logo.jpeg'),
      link: "https://www.starknet.org/"
    },
    {
      name: "Chainlink Labs",
      logo: require('./imgs/chainlink_labs_logo.jpeg'),
      link: "https://chain.link/"
    },
    {
      name: "NearX",
      logo: require('./imgs/nearx.jpeg'),
      link: "https://nearx.com.br/"
    },
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
    
    if (currentPage === 'conquistas') {
      return <Conquistas walletAddress={walletAddress} />;
    }
    
    if (currentPage === 'calendario') {
      return <Calendario />;
    }
    
    if (currentPage === 'eventos') {
      return <Memorias />;
    }
    
    if (currentPage === 'projetos') {
      return <Projetos />;
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
                    partner.link ? (
                      <a 
                        key={`first-${index}`} 
                        href={partner.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="partner-card"
                      >
                        <div className="partner-logo">
                          <img src={partner.logo} alt={partner.name} />
                        </div>
                      </a>
                    ) : (
                      <div key={`first-${index}`} className="partner-card">
                        <div className="partner-logo">
                          <img src={partner.logo} alt={partner.name} />
                        </div>
                      </div>
                    )
                  ))}
                  {/* Segunda passagem dos parceiros para loop infinito */}
                  {partners.map((partner, index) => (
                    partner.link ? (
                      <a 
                        key={`second-${index}`} 
                        href={partner.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="partner-card"
                      >
                        <div className="partner-logo">
                          <img src={partner.logo} alt={partner.name} />
                        </div>
                      </a>
                    ) : (
                      <div key={`second-${index}`} className="partner-card">
                        <div className="partner-logo">
                          <img src={partner.logo} alt={partner.name} />
                        </div>
                      </div>
                    )
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
              onClick={() => handleNavigation('calendario')} 
              className={`nav-link ${currentPage === 'calendario' ? 'active' : ''}`}
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
            
            {/* Wallet Connection Section */}
            <div className="wallet-section">
              {errorMessage && (
                <div className="error-message">
                  {errorMessage}
                </div>
              )}
              
              {isWalletConnected ? (
                <div className="wallet-info" onClick={() => setShowWalletModal(true)}>
                  <div className="wallet-details">
                    <span className="wallet-address">{getShortAddress(walletAddress)}</span>
                    <span className="wallet-balance">{parseFloat(walletBalance).toFixed(4)} {networkInfo?.symbol || 'ETH'}</span>
                  </div>
                  <button className="connect-wallet connected">
                    <i className="fas fa-wallet"></i>
                  </button>
                </div>
              ) : (
                <button 
                  className={`connect-wallet ${isConnecting ? 'connecting' : ''}`} 
                  onClick={connectWallet}
                  disabled={isConnecting}
                >
                  {isConnecting ? (
                    <>
                      <i className="fas fa-spinner fa-spin"></i>
                      Conectando...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-wallet"></i>
                      Conectar
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Wallet Modal */}
      {showWalletModal && isWalletConnected && (
        <div className="wallet-modal-overlay" onClick={() => setShowWalletModal(false)}>
          <div className="wallet-modal" onClick={(e) => e.stopPropagation()}>
            <div className="wallet-modal-header">
              <h3>Informações da Carteira</h3>
              <button 
                className="wallet-modal-close" 
                onClick={() => setShowWalletModal(false)}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            
            <div className="wallet-modal-content">
              <div className="wallet-info-item">
                <label>Endereço:</label>
                <div className="wallet-address-container">
                  <span className="wallet-full-address">{walletAddress}</span>
                  <button 
                    className="copy-button"
                    onClick={() => copyToClipboard(walletAddress)}
                    title="Copiar endereço"
                  >
                    <i className="fas fa-copy"></i>
                  </button>
                </div>
              </div>
              
              <div className="wallet-info-item">
                <label>Saldo:</label>
                <span className="wallet-balance-full">
                  {parseFloat(walletBalance).toFixed(6)} {networkInfo?.symbol || 'ETH'}
                </span>
              </div>
              
              <div className="wallet-info-item">
                <label>Rede:</label>
                <span className="wallet-network">{networkInfo?.name || 'Unknown Network'}</span>
              </div>
            </div>
            
            <div className="wallet-modal-actions">
                             <button 
                 className="conquistas-button"
                 onClick={() => handleNavigation('conquistas')}
               >
                 <i className="fas fa-trophy"></i>
                 Ver Conquistas
               </button>
              <button 
                className="disconnect-button"
                onClick={disconnectWallet}
              >
                <i className="fas fa-sign-out-alt"></i>
                Desconectar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Render content based on current page */}
      {renderContent()}
            </div>
        );
};

export default App;