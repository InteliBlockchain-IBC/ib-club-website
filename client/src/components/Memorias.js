import React from 'react';
import inteliLogo from './imgs/inteliblcok.jpg';
import ethereumsp from './imgs/ethereumsp.jpg';
import devcon from './imgs/devcon.jpg';
import workshopsi from './imgs/workshopsi.webp';
import workshoprep from './imgs/workshoprep.webp';
import challenge from './imgs/challenge.jpg';
import processoseletivo from './imgs/processoseletivo.jpg';
import aulaintrodutoria from './imgs/aulaintrodutoria.webp';
import starknetbasecamp from './imgs/starknet.jpeg';
import inteliblockchain from './imgs/inteliblockchain.webp';
import tokennation from './imgs/tokennation.webp';
import docussaurus from './imgs/docussaurus.webp';
import workshopzkum from './imgs/workshopzkum.jpg';
import workshopzkdois from './imgs/workshopzkdois.jpg';
import ethcannes from './imgs/ethcannes.jpg';

const Memorias = () => {
  const memories = [
    {
      id: 1,
      title: "Fundação",
      date: "2022",
      image: "https://media.licdn.com/dms/image/v2/C4D1BAQHWD2ZM_fhk5A/company-background_10000/company-background_10000/0/1652446492732/inteli_blockchain_cover?e=1755000000&v=beta&t=rexrSBbmKOhGjK6o6eEvHHHcPFWhYxFpxFssOvDjhfI",
      description: "Fundação Oficial do Inteli Blockchain"
    },
    {
      id: 2,
      title: "EthereumSP",
      date: "2022",
      image: ethereumsp,
      description: "Participação no EthereumSP"
    },
    {
      id: 3,
      title: "DEVCON VI",
      date: "2022",
      image: devcon,
      description: "Viagem para a DEVCON VI em Bogotá"
    },
    {
      id: 4,
      title: "Workshop Web3",
      date: "2023",
      image: workshopsi,
      description: "Workshop Web3 para alunos de SI do Inteli"
    },
    {
      id: 5,
      title: "Workshop Preparatório",
      date: "2023",
      image: workshoprep,
      description: "Workshop Web3 preparatório para o Inteli Blockchain Challenge"
    },
    {
      id: 6,
      title: "Inteli Blockchain Challenge",
      date: "2023",
      image: challenge,
      description: "Evento de Hackathon Web3 realizado pelo Inteli"
    },
    {
      id: 7,
      title: "Processo Seletivo",
      date: "2024",
      image: processoseletivo,
      description: "Processo Seletivo para o Inteli Blockchain"
    },
    {
      id: 8,
      title: "Aula Introdutória",
      date: "2025",
      image: aulaintrodutoria,
      description: "Aula Introdutória sobre Blockchain"
    },
    {
      id: 9,
      title: "Starknet Basecamp",
      date: "2025",
      image: starknetbasecamp,
      description: "Basecamp Online da Starknet realizado com o Inteli"
    },
    {
      id: 10,
      title: "1° Bitcoin Students Day",
      date: "2025",
      image: inteliblockchain,
      description: "Ida ao evento de Bitcoin Students Day realizado pela Vinteum"
    },
    {
      id: 11,
      title: "Tokennation",
      date: "2025",
      image: tokennation,
      description: "Ida ao evento da Tokennation em São Paulo"
    },
    {
      id: 12,
      title: "Lançamento do Docs³",
      date: "2025",
      image: docussaurus,
      description: "Lançamento do Blog e Material de Estudo Oficial do Inteli Blockchain"
    },
    {
      id: 13,
      title: "1° Workshop ZK",
      date: "2025",
      image: workshopzkum,
      description: "Ida ao primeiro Workshop sobre Zero Knowledge"
    },
    {
      id: 14,
      title: "2° Workshop ZK",
      date: "2025",
      image: workshopzkdois,
      description: "Ida ao segundo Workshop sobre Zero Knowledge"
    },
    {
      id: 15,
      title: "ETHGlobal Cannes",
      date: "2025",
      image: ethcannes,
      description: "Ida ao evento ETHGlobal Cannes"
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
            
            {memories.slice().reverse().map((memory, index) => (
              <div key={memory.id} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-image">
                      <img src={memory.image} alt={memory.title} />
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

export default Memorias; 