import React from 'react';
import inteliLogo from './imgs/inteliblcok.jpg';

const Memorias = () => {
  const memories = [
    {
      id: 1,
      title: "Primeiro Hackathon",
      date: "2023",
      image: "hackathon-2023.jpg",
      description: "Nosso primeiro hackathon com 50+ participantes"
    },
    {
      id: 2,
      title: "Workshop Smart Contracts",
      date: "2023",
      image: "workshop-smart-contracts.jpg",
      description: "Workshop intensivo sobre Solidity"
    },
    {
      id: 3,
      title: "Meetup DeFi",
      date: "2023",
      image: "meetup-defi.jpg",
      description: "Discussões sobre finanças descentralizadas"
    },
    {
      id: 4,
      title: "Bootcamp Web3",
      date: "2023",
      image: "bootcamp-web3.jpg",
      description: "Bootcamp completo de 2 semanas"
    },
    {
      id: 5,
      title: "Conferência Blockchain",
      date: "2023",
      image: "conferencia-blockchain.jpg",
      description: "Conferência sobre blockchain na educação"
    },
    {
      id: 6,
      title: "Hackathon NFTs",
      date: "2023",
      image: "hackathon-nft.jpg",
      description: "Hackathon focado em NFTs e metaverso"
    },
    {
      id: 7,
      title: "Palestra Layer 2",
      date: "2023",
      image: "palestra-layer2.jpg",
      description: "Palestra técnica sobre escalabilidade"
    },
    {
      id: 8,
      title: "Workshop ZKP",
      date: "2023",
      image: "workshop-zkp.jpg",
      description: "Workshop sobre Zero Knowledge Proofs"
    }
  ];

  return (
    <div className="memorias-page">
      {/* Hero Section */}
      <section className="memorias-hero">
        <div className="memorias-hero-content">
          <h1 className="memorias-hero-title">
            Linha do Tempo
          </h1>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="memorias-timeline-section">
        <div className="container">
          <div className="timeline-container">
            <div className="timeline-line"></div>
            
            {memories.map((memory, index) => (
              <div key={memory.id} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-image">
                    <div className="image-placeholder">
                      <i className="fas fa-image"></i>
                    </div>
                  </div>
                  <div className="timeline-info">
                    <h3>{memory.title}</h3>
                    <p>{memory.date}</p>
                    <span className="timeline-description">{memory.description}</span>
                  </div>
                </div>
              </div>
            ))}
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
    </div>
  );
};

export default Memorias; 