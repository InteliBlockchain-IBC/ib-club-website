import React, { createContext, useContext, useState } from 'react';

const translations = {
  pt: {
    nav: {
      home: 'Inicio',
      projects: 'Projetos',
      calendar: 'Calendário',
      memories: 'Memórias',
      about: 'Quem Somos'
    },
    about: {
      hero_title: 'Quem Somos',
      hero_subtitle: 'Conectando inovação, tecnologia e comunidade',
      hero_description: 'O Inteli Blockchain é uma organização dedicada ao desenvolvimento e promoção da tecnologia blockchain no Brasil. Nossa missão é educar, conectar e capacitar a próxima geração de desenvolvedores e entusiastas blockchain no Inteli.',
      members_title: 'Membros Ativos',
      members_subtitle: 'Nossa equipe atual que lidera os projetos e iniciativas',
      ex_members_title: 'Ex-Membros',
      ex_members_subtitle: 'Membros que contribuíram para o crescimento da organização'
    },
    hero: {
      title_part1: 'A',
      title_span: 'Liberdade',
      title_part2: 'Começa Aqui',
      subtitle: 'Conectando inovação, tecnologia e comunidade',
      description: 'O Inteli Blockchain é o epicentro da revolução blockchain no Inteli. Desenvolvemos projetos inovadores, educamos a próxima geração de desenvolvedores e construímos o futuro da tecnologia descentralizada.'
    },
    partners: {
      title: 'Nossos Parceiros',
      subtitle: 'Trabalhamos com as principais empresas e organizações do ecossistema blockchain'
    },
    achievements: {
      title: 'Nossas Conquistas',
      subtitle: 'Números que mostram nosso impacto no ecossistema blockchain',
      projects: 'Projetos',
      members: 'Membros',
      partners: 'Parceiros',
      events: 'Eventos Realizados',
      achievement: 'Conquistas',
      community: 'Comunidade',
      education: 'Educação',
      defi: 'DeFi',
      development: 'Desenvolvimento'
    },
    wallet: {
      connect: 'Conectar',
      connecting: 'Conectando...',
      modal_title: 'Informações da Carteira',
      address: 'Endereço:',
      balance: 'Saldo:',
      network: 'Rede:',
      copy: 'Copiar endereço',
      viewAchievements: 'Ver Conquistas',
      disconnect: 'Desconectar',
      not_connected: 'Carteira não conectada'
    },
    errors: {
      metamask_missing: 'MetaMask não está instalado. Por favor, instale a extensão MetaMask.',
      wallet_setup: 'Erro ao configurar carteira',
      user_cancelled: 'Conexão cancelada pelo usuário',
      wallet_connect: 'Erro ao conectar carteira. Tente novamente.'
    },
    conexao: {
      connecting: 'Conectando...'
    },
    footer: {
      text: 'Conectando o futuro da tecnologia blockchain através de inovação, educação e colaboração.',
      copyright: '© 2025 Inteli Blockchain. Todos os direitos reservados.'
    },
    conquistas_page: {
      title: 'Minhas Conquistas',
      subtitle: 'Sua coleção de NFTs e conquistas na comunidade blockchain',
      loading: 'Carregando suas conquistas...',
      filters: {
        all: 'Todas',
        achievement: 'Conquistas',
        community: 'Comunidade',
        education: 'Educação',
        defi: 'DeFi',
        development: 'Desenvolvimento'
      },
      no_nfts_title: 'Nenhuma NFT encontrada',
      no_nfts_text: 'Não há NFTs nesta categoria ainda.'
    },
    calendar_page: {
      loading: 'Carregando eventos...',
      title: 'Calendário de Eventos',
      subtitle: 'Confira os próximos eventos da comunidade blockchain',
      filters: {
        all: 'Todos',
        bootcamp: 'Bootcamps',
        hackathon: 'Hackathons',
        palestra: 'Palestras',
        meetup: 'Meetups'
      },
      share_copied: 'Link do evento copiado para a área de transferência!',
      upcoming: 'Próximo',
      participants: 'participantes',
      event: 'Evento'
    },
    memories: {
      timeline: 'Linha do Tempo'
    },
    projects: {
      hero_title_part1: 'Nossos',
      hero_title_span: 'Projetos',
      hero_subtitle: 'Inovação e desenvolvimento em blockchain',
      hero_description: 'Conheça os projetos desenvolvidos pelo Inteli Blockchain. Nossa equipe trabalha constantemente para criar soluções inovadoras e educar a comunidade sobre as possibilidades da tecnologia blockchain.',
      section_title: 'Projetos Ativos',
      section_subtitle: 'Conheça nossas iniciativas e contribuições para o ecossistema blockchain',
      participants_label: 'Participantes',
      status_active: 'Ativo',
      status_dev: 'Em Desenvolvimento'
    },
    common: {
      collection: 'Coleção:',
      token_id: 'Token ID:',
      date: 'Data:'
    }
  },
  en: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      calendar: 'Calendar',
      memories: 'Memories',
      about: 'About'
    },
    about: {
      hero_title: 'About',
      hero_subtitle: 'Connecting innovation, technology and community',
      hero_description: 'Inteli Blockchain is an organization dedicated to developing and promoting blockchain technology in Brazil. Our mission is to educate, connect and empower the next generation of blockchain developers and enthusiasts at Inteli.',
      members_title: 'Active Members',
      members_subtitle: 'Our current team that leads projects and initiatives',
      ex_members_title: 'Ex-Members',
      ex_members_subtitle: 'Members who helped grow the organization'
    },
    hero: {
      title_part1: 'Freedom',
      title_span: 'Begins',
      title_part2: 'Here',
      subtitle: 'Connecting innovation, technology and community',
      description: 'Inteli Blockchain is the epicenter of the blockchain revolution at Inteli. We build innovative projects, educate the next generation of developers and shape the future of decentralized technology.'
    },
    partners: {
      title: 'Our Partners',
      subtitle: 'We work with the leading companies and organizations in the blockchain ecosystem'
    },
    achievements: {
      title: 'Our Achievements',
      subtitle: 'Numbers that showcase our impact in the blockchain ecosystem',
      projects: 'Projects',
      members: 'Members',
      partners: 'Partners',
      events: 'Events Held',
      achievement: 'Achievements',
      community: 'Community',
      education: 'Education',
      defi: 'DeFi',
      development: 'Development'
    },
    wallet: {
      connect: 'Connect',
      connecting: 'Connecting...',
      modal_title: 'Wallet Information',
      address: 'Address:',
      balance: 'Balance:',
      network: 'Network:',
      copy: 'Copy address',
      viewAchievements: 'View Achievements',
      disconnect: 'Disconnect',
      not_connected: 'Wallet not connected'
    },
    errors: {
      metamask_missing: 'MetaMask is not installed. Please install the MetaMask extension.',
      wallet_setup: 'Error setting up wallet',
      user_cancelled: 'Connection cancelled by user',
      wallet_connect: 'Error connecting wallet. Try again.'
    },
    conexao: {
      connecting: 'Connecting...'
    },
    footer: {
      text: 'Connecting the future of blockchain technology through innovation, education and collaboration.',
      copyright: '© 2025 Inteli Blockchain. All rights reserved.'
    },
    conquistas_page: {
      title: 'My Achievements',
      subtitle: 'Your collection of NFTs and achievements in the blockchain community',
      loading: 'Loading your achievements...',
      filters: {
        all: 'All',
        achievement: 'Achievements',
        community: 'Community',
        education: 'Education',
        defi: 'DeFi',
        development: 'Development'
      },
      no_nfts_title: 'No NFTs found',
      no_nfts_text: 'There are no NFTs in this category yet.'
    },
    calendar_page: {
      loading: 'Loading events...',
      title: 'Events Calendar',
      subtitle: "Check the community's upcoming events",
      filters: {
        all: 'All',
        bootcamp: 'Bootcamps',
        hackathon: 'Hackathons',
        palestra: 'Talks',
        meetup: 'Meetups'
      },
      share_copied: 'Event link copied to clipboard!',
      upcoming: 'Upcoming',
      participants: 'participants',
      event: 'Event'
    },
    memories: {
      timeline: 'Timeline'
    },
    projects: {
      hero_title_part1: 'Our',
      hero_title_span: 'Projects',
      hero_subtitle: 'Innovation and development in blockchain',
      hero_description: 'Discover the projects developed by Inteli Blockchain. Our team works constantly to create innovative solutions and educate the community about the possibilities of blockchain technology.',
      section_title: 'Active Projects',
      section_subtitle: 'Meet our initiatives and contributions to the blockchain ecosystem',
      participants_label: 'Participants',
      status_active: 'Active',
      status_dev: 'In Development'
    }
    ,
    common: {
      collection: 'Collection:',
      token_id: 'Token ID:',
      date: 'Date:'
    }
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const defaultLang = localStorage.getItem('lang') || (navigator.language && navigator.language.startsWith('en') ? 'en' : 'pt');
  const [lang, setLang] = useState(defaultLang);

  const t = (path) => {
    const parts = path.split('.');
    let cur = translations[lang];
    for (let p of parts) {
      if (!cur) return path;
      cur = cur[p];
    }
    return cur || path;
  };

  const changeLang = (newLang) => {
    setLang(newLang);
    localStorage.setItem('lang', newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, t, changeLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  return useContext(LanguageContext);
};

export default LanguageContext;
