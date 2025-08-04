import React, { useState, useEffect } from 'react';
import inteliLogo from './imgs/inteliblcok.jpg';

const Conquistas = ({ walletAddress }) => {
  const [nfts, setNfts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  // Mock data - NFTs do usuário (vazio por enquanto)
  const mockNfts = [];

  useEffect(() => {
    // Simular carregamento de dados da API
    setTimeout(() => {
      setNfts(mockNfts);
      setLoading(false);
    }, 1000);
  }, []);

  const getFilteredNfts = () => {
    if (filter === 'all') return nfts;
    return nfts.filter(nft => nft.category === filter);
  };

  const getRarityColor = (rarity) => {
    switch (rarity) {
      case 'Legendary':
        return '#FFD700';
      case 'Epic':
        return '#9932CC';
      case 'Rare':
        return '#4169E1';
      case 'Common':
        return '#808080';
      default:
        return '#808080';
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'achievement':
        return 'fas fa-trophy';
      case 'community':
        return 'fas fa-users';
      case 'education':
        return 'fas fa-graduation-cap';
      case 'defi':
        return 'fas fa-chart-line';
      case 'development':
        return 'fas fa-code';
      default:
        return 'fas fa-star';
    }
  };

  const getCategoryName = (category) => {
    switch (category) {
      case 'achievement':
        return 'Conquistas';
      case 'community':
        return 'Comunidade';
      case 'education':
        return 'Educação';
      case 'defi':
        return 'DeFi';
      case 'development':
        return 'Desenvolvimento';
      default:
        return 'Geral';
    }
  };

  if (loading) {
    return (
      <div className="conquistas-loading">
        <div className="loading-spinner">
          <i className="fas fa-spinner fa-spin"></i>
        </div>
        <p>Carregando suas conquistas...</p>
      </div>
    );
  }

  return (
    <div className="conquistas-page">
      {/* Header */}
      <div className="conquistas-header">
        <div className="container">
          <div className="conquistas-header-content">
            <div className="conquistas-title-section">
              <h1 className="conquistas-title">
                <i className="fas fa-trophy"></i>
                Minhas Conquistas
              </h1>
              <p className="conquistas-subtitle">
                Sua coleção de NFTs e conquistas na comunidade blockchain
              </p>
              <div className="wallet-info-display">
                <span className="wallet-address-display">
                  {walletAddress ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}` : 'Carteira não conectada'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="conquistas-filters">
        <div className="container">
          <div className="filters-content">
            <button 
              className={`filter-button ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              <i className="fas fa-th"></i>
              Todas
            </button>
            <button 
              className={`filter-button ${filter === 'achievement' ? 'active' : ''}`}
              onClick={() => setFilter('achievement')}
            >
              <i className="fas fa-trophy"></i>
              Conquistas
            </button>
            <button 
              className={`filter-button ${filter === 'community' ? 'active' : ''}`}
              onClick={() => setFilter('community')}
            >
              <i className="fas fa-users"></i>
              Comunidade
            </button>
            <button 
              className={`filter-button ${filter === 'education' ? 'active' : ''}`}
              onClick={() => setFilter('education')}
            >
              <i className="fas fa-graduation-cap"></i>
              Educação
            </button>
            <button 
              className={`filter-button ${filter === 'defi' ? 'active' : ''}`}
              onClick={() => setFilter('defi')}
            >
              <i className="fas fa-chart-line"></i>
              DeFi
            </button>
            <button 
              className={`filter-button ${filter === 'development' ? 'active' : ''}`}
              onClick={() => setFilter('development')}
            >
              <i className="fas fa-code"></i>
              Desenvolvimento
            </button>
          </div>
        </div>
      </div>

      {/* NFTs Grid */}
      <div className="conquistas-content">
        <div className="container">
          {getFilteredNfts().length === 0 ? (
            <div className="no-nfts">
              <i className="fas fa-search"></i>
              <h3>Nenhuma NFT encontrada</h3>
              <p>Não há NFTs nesta categoria ainda.</p>
            </div>
          ) : (
            <div className="nfts-grid">
              {getFilteredNfts().map((nft) => (
                <div key={nft.id} className="nft-card">
                  <div className="nft-image-container">
                    <img src={nft.image} alt={nft.name} className="nft-image" />
                    <div className="nft-rarity-badge" style={{ backgroundColor: getRarityColor(nft.rarity) }}>
                      {nft.rarity}
                    </div>
                    <div className="nft-category-badge">
                      <i className={getCategoryIcon(nft.category)}></i>
                      {getCategoryName(nft.category)}
                    </div>
                  </div>
                  
                  <div className="nft-info">
                    <h3 className="nft-name">{nft.name}</h3>
                    <p className="nft-description">{nft.description}</p>
                    
                    <div className="nft-details">
                      <div className="nft-detail-item">
                        <span className="detail-label">Coleção:</span>
                        <span className="detail-value">{nft.collection}</span>
                      </div>
                      <div className="nft-detail-item">
                        <span className="detail-label">Token ID:</span>
                        <span className="detail-value">{nft.tokenId}</span>
                      </div>
                      <div className="nft-detail-item">
                        <span className="detail-label">Data:</span>
                        <span className="detail-value">{new Date(nft.date).toLocaleDateString('pt-BR')}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

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
    </div>
  );
};

export default Conquistas; 