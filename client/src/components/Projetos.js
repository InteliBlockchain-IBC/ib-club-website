import React from 'react';
import { useTranslation } from '../i18n';
import inteliLogo from './imgs/inteliblcok.jpg';
import capaImagem from './imgs/capa.png';

const Projetos = () => {
  const { t, lang } = useTranslation();
  const projetos = [
    {
      nome: "Blog",
      descricao: {
        pt: "Blog com documentação e artigos sobre blockchain e tecnologia.",
        en: "Blog with documentation and articles about blockchain and technology."
      },
      link: "https://inteliblockchain-ibc.github.io/docs3/blog",
      status: "ativo"
    },
    {
      nome: "High Block",
      descricao: {
        pt: "Programa de desenvolvimento Web3 com desafios práticos e formação de builders.",
        en: "Web3 development program focused on practical challenges and training builders."
      },
      link: "https://inteliblockchain-ibc.github.io/docs3/docs/projeto/introducao",
      status: "ativo"
    },
    {
      nome: "DeVolt (ETHSamba)",
      descricao: {
        pt: "Marketplace descentralizado que conecta produtores e consumidores de energia, promovendo negociação direta, transparência e maior aproveitamento de fontes renováveis.",
        en: "Decentralized marketplace connecting energy producers and consumers for direct trading, transparency, and better use of renewables."
      },
      participantes: [
        "Marcelo G Feitoza",
        "Paulo Presa Evangelista",
        "Emanuele Lacerda Morais Martins",
        "Henrique Marlon",
        "Matheus Macedo"
      ],
      link: "https://github.com/DeVolt-ETHSamba",
      status: "ativo"
    },
    {
      nome: "CarbonTracker",
      descricao: {
        pt: "Plataforma que usa IoT e blockchain para monitorar emissões de carbono e facilitar compensações transparentes.",
        en: "Platform using IoT and blockchain to monitor carbon emissions and streamline transparent offsets."
      },
      participantes: [
        "Henrique Marlon",
        "Emanuele Lacerda Morais Martins",
        "Elisa Flemer",
        "Alberto da Rocha Miranda"
      ],
      link: "https://github.com/CarbonVerifier",
      status: "ativo"
    },
    {
      nome: "Smart3",
      descricao: {
        pt: "Plataforma com trilhas interativas e laboratórios sandbox para aprender e praticar Web3, IA e contratos inteligentes.",
        en: "Platform with interactive learning paths and sandbox labs to learn and practice Web3, AI, and smart contracts."
      },
      participantes: [
        "Crypto Victor",
        "Leunam Souza",
        "Davi Duarte"
      ],
      link: "https://github.com/Inteli-Club5/Smart3",
      status: "ativo"
    },
    {
      nome: "HackMeridian",
      descricao: {
        pt: "Plataforma na Stellar que une filantropia, DeFi e liquidez para apoiar causas com rendimento transparente e sem travar o capital.",
        en: "Stellar-based platform combining philanthropy, DeFi, and liquidity to support causes with transparent yields and full capital access."
      },
      participantes: [
        "Lorena Garcia",
        "Ariely Lima",
        "Ana Carolina",
        "Marcus",
        "Messias Olivindo"
      ],
      link: "https://github.com/m4rcusml/hackmeridian-2025",
      status: "ativo"
    },
    {
      nome: "Reevo",
      descricao: {
        pt: "Fintech P2P que conecta investidores a produtores rurais com dados, IA e microserviços, oferecendo crédito ágil e transparente.",
        en: "P2P fintech connecting investors to rural producers using data, AI, and microservices for agile, transparent credit."
      },
      participantes: [
        "Lorena Garcia",
        "Ariely Lima",
        "Ana Carolina",
        "Marcus",
        "Messias Olivindo"
      ],
      link: "https://github.com/JvWandermurem/Hackathon-Peerseed",
      status: "ativo"
    },
    {
      nome: "BTContract",
      descricao: {
        pt: "Plataforma que simplifica contratos financeiros na rede Bitcoin com interface intuitiva e suporte à Lightning Network.",
        en: "Platform that simplifies financial contracts on Bitcoin with an intuitive interface and Lightning Network support."
      },
      participantes: [
        "Lorena Garcia",
        "Marco Ruas Sales Peixoto",
        "Giovanna Britto",
        "Victor Garcia",
        "Thiago Volcati"
      ],
      link: "https://github.com/Inteli-Table5/BTContract",
      status: "ativo"
    },
    {
      nome: "AgroFinance",
      descricao: {
        pt: "Investimentos Web3 em produtores familiares com contratos na Stellar, doação imediata e crédito acessível.",
        en: "Web3 investment platform for family farmers on Stellar, combining instant donations with accessible credit."
      },
      participantes: [
        "Matheus Ribeiro dos Santos",
        "Kethlen Martins",
        "Larissa Martins",
        "Francisco Filho"
      ],
      link: "https://github.com/kethlenmartins/hack-meridian",
      status: "ativo"
    },
    {
      nome: "EdCation3",
      descricao: {
        pt: "Plataforma para conectar talentos Web3, oferecer conteúdo gamificado e aproximar empresas de profissionais qualificados.",
        en: "Platform that connects Web3 talent, delivers gamified education, and links companies to qualified professionals."
      },
      participantes: [
        "Victor Garcia",
        "Kethlen Martins",
        "João Pedro Gonçalves"
      ],
      link: "https://github.com/Inteli-Club5/EdCation",
      status: "ativo"
    },
    {
      nome: "Layer3",
      descricao: {
        pt: "Onboarding Web2-friendly para Web3 com login tradicional, custódia simplificada e transações sem fricção.",
        en: "Web2-friendly Web3 onboarding with traditional login, simplified custody, and frictionless transactions."
      },
      participantes: [
        "Victor Garcia",
        "Davi Duarte",
        "Kethlen Martins"
      ],
      link: "https://github.com/Inteli-Club5/Layer3",
      status: "ativo"
    },
    {
      nome: "Mosaic",
      descricao: {
        pt: "Marketplace descentralizado onde agentes de IA viram ativos negociáveis com NFTs e receita justa para criadores.",
        en: "Decentralized marketplace turning AI agents into tradeable NFT-based assets with fair creator revenue."
      },
      participantes: [
        "Davi Abreu da Silveira",
        "Victor Silva",
        "Kethlen Martins"
      ],
      link: "https://github.com/Inteli-Club5/Mosaic",
      status: "ativo"
    },
    {
      nome: "trbe",
      descricao: {
        pt: "Plataforma Web3 na Chiliz que transforma engajamento de fãs em reputação on-chain e recompensas gamificadas.",
        en: "Chiliz-based Web3 platform turning fan engagement into on-chain reputation and gamified rewards."
      },
      participantes: [
        "Davi Abreu da Silveira",
        "Victor Garcia",
        "Kethlen Martins"
      ],
      link: "https://github.com/Inteli-Club5/trbe",
      status: "ativo"
    },
    {
      nome: "Moken",
      descricao: {
        pt: "Smart lock descentralizado com Cartesi, simulando locações estilo AirBnB com lógica off-chain verificável.",
        en: "Decentralized smart lock using Cartesi that simulates AirBnB-style rentals with verifiable off-chain logic."
      },
      participantes: [
        "Henrique Marlon",
        "Eduardo Santos Barreto",
        "Emanuele Lacerda Morais Martins",
        "Vinicios Lugli"
      ],
      link: "https://github.com/Moken-Dapp-Cartesi",
      status: "ativo"
    },
    {
      nome: "SmartTrans",
      descricao: {
        pt: "Bilhetagem digital para transporte público com blockchain, IoT e validação NFC integrados à rede Celo.",
        en: "Digital ticketing for public transit using blockchain, IoT, and NFC validation integrated with the Celo network."
      },
      participantes: [
        "Emanuele Lacerda Morais Martins",
        "Lyorrei Shono Quintão",
        "Henrique Marlon",
        "Alberto da Rocha Miranda"
      ],
      link: "https://github.com/SmartTrans-ETH/smart-trans",
      status: "ativo"
    },
    {
      nome: "SkillPass",
      descricao: {
        pt: "Plataforma que valida habilidades profissionais com NFTs intransferíveis e staking de reputação da comunidade.",
        en: "Platform validating professional skills through soulbound NFTs and community reputation staking."
      },
      participantes: [
        "Victor Carvalho",
        "Jonathas Romonga"
      ],
      link: "https://github.com/vict0rcarvalh0/skillpass",
      status: "ativo"
    },
    {
      nome: "DeSoy",
      descricao: {
        pt: "Tokenização de safras para antecipar capital a agricultores e oferecer rendimento real para investidores.",
        en: "Tokenizes crops to advance capital to farmers while delivering real-world yield to investors."
      },
      participantes: [
        "Gabriel Farias",
        "Hugo Noyma",
        "Victor Carvalho",
        "Matheus Macedo"
      ],
      link: "https://github.com/vict0rcarvalh0/eth-belgrade-hackathon",
      status: "ativo"
    },
    {
      nome: "PICE",
      descricao: {
        pt: "Plataforma integrada que registra conquistas educacionais via NFTs para transparência e confiança em currículos.",
        en: "Integrated platform recording educational achievements as NFTs to bring transparency and trust to student records."
      },
      participantes: [
        "Sophia Mello Dias",
        "Victor Carvalho",
        "Henrique Matias",
        "Paulo Evangelista",
        "Lyorrei Shono Quintão"
      ],
      link: "https://github.com/Ethereum-sp23/Plataforma-Integrada-de-Curriculo-Escolar-do-Estudante-PICE",
      status: "ativo"
    },
    {
      nome: "SpyNet",
      descricao: {
        pt: "Infraestrutura de pagamentos para economias de agentes de IA com micropagamentos cripto de alta frequência.",
        en: "Payment infrastructure for AI agent economies enabling high-frequency crypto micropayments."
      },
      participantes: [
        "Marco Ruas",
        "Giovanna Britto",
        "Lucas Britto"
      ],
      link: "https://github.com/Web3Squad/SpyNet",
      status: "ativo"
    },
    {
      nome: "BeneChain",
      descricao: {
        pt: "Plataforma de benefícios corporativos 100% on-chain no ICP, garantindo transparência e automação entre empresas e parceiros.",
        en: "Fully on-chain corporate benefits platform on ICP delivering transparency and automation for HR, employees, and merchants."
      },
      participantes: [
        "Lucas Britto",
        "Giovanna Britto",
        "Marco Ruas"
      ],
      link: "https://github.com/InteliThreeGroup/Beneficios",
      status: "ativo"
    },
    {
      nome: "Cronia",
      descricao: {
        pt: "Protocolo de crédito e pagamentos em Solana que converte cripto em linhas de crédito instantâneas para consumidores e lojistas.",
        en: "Solana credit and payments protocol turning crypto portfolios into instant credit lines for consumers and merchants."
      },
      participantes: [
        "Marco Ruas",
        "Giovanna Britto",
        "Vinicius Testa",
        "Lucas Britto"
      ],
      link: "https://github.com/Cr0nia/Cronia",
      status: "ativo"
    },
    {
      nome: "Adescentralized",
      descricao: {
        pt: "Plataforma de anúncios na Stellar que conecta anunciantes, publishers e usuários com pagamentos automáticos e transparência on-chain.",
        en: "Stellar-based advertising platform linking advertisers, publishers, and users with transparent on-chain payouts."
      },
      participantes: [
        "Gustavo Gonçalves",
        "Marco Ruas",
        "Giovanna Britto",
        "Vinicius Testa",
        "Maria Eduarda"
      ],
      link: "https://github.com/Adescentralized/Adescentralized",
      status: "ativo"
    },
    {
      nome: "PólenChain",
      descricao: {
        pt: "Plataforma que liga doadores, ONGs e empresas com transparência e recompensas NFT resgatáveis em parceiros.",
        en: "Platform connecting donors, NGOs, and companies with transparent tracking and NFT rewards redeemable at partners."
      },
      participantes: [
        "Kethlen Martins",
        "Gabriela Silva",
        "Larissa Carvalho",
        "Yasmim Passos"
      ],
      link: "https://github.com/Lumx-hackathon/Ada-Lovelace-Bounties",
      status: "ativo"
    },
    {
      nome: "AccountantBot",
      descricao: {
        pt: "Bot no Telegram que automatiza divisão de despesas via Scroll, contratos inteligentes e IA para controle financeiro em grupo.",
        en: "Telegram bot that automates expense splitting using Scroll smart contracts and AI for seamless group finances."
      },
      participantes: [
        "Giovanna Britto",
        "Vinicius Testa"
      ],
      link: "https://github.com/AccountantBot",
      status: "ativo"
    },
    {
      nome: "Inteli Quest NFT",
      descricao: {
        pt: "Plataforma de recompensas com NFTs que gamifica visitas a clubes durante o Inteli Day com mint barato e backend escalável.",
        en: "NFT rewards platform that gamifies club visits during Inteli Day with low-cost minting and scalable backend."
      },
      participantes: [
        "Giovanna Britto",
        "Vinicius Passos"
      ],
      link: "https://github.com/VinTesta/inteli-quest-nft",
      status: "ativo"
    }
  ].map((projeto) => ({
    ...projeto,
    imagem: capaImagem
  }));

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
                    <p className="projeto-descricao">
                      {projeto.descricao?.[lang] || projeto.descricao?.pt || projeto.descricao}
                    </p>
                    {projeto.participantes && projeto.participantes.length > 0 && (
                      <p className="projeto-participantes">
                        <strong>{t('projects.participants_label')}:</strong> {projeto.participantes.join(', ')}
                      </p>
                    )}
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
