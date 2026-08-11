/* Todo o texto da página em português. O que NÃO mora aqui: links, imagens,
   dimensões e a ordem das coisas — isso é `data.js`, que não tem idioma.

   Os arrays alternam texto normal e realce: ['normal ', 'forte', ' normal'].
   A posição do negrito faz parte da tradução, porque ela muda de lugar entre
   os idiomas. Ver Realce.js. */

export default {
  language: 'pt-BR',
  switchTo: 'Ver em inglês',

  /* O que aparece na aba do navegador, no resultado de busca e no card de
     link compartilhado. É a única cópia que muita gente vai ler do clube,
     então diz o que ele é e o que ele entregou — não um slogan. */
  seo: {
    title: 'Inteli Blockchain — clube universitário de blockchain, hackathons e projetos web3',
    description: 'Liga estudantil de blockchain do Inteli, em São Paulo. 25 projetos entregues desde 2022 em Stellar, Solana, Bitcoin, Celo e Chiliz, com hackathons, aulas semanais e parcerias no ecossistema web3.',
    imageAlt: 'Membros do Inteli Blockchain reunidos em um auditório do Inteli',
  },

  nav: {
    label: 'Seções da página',
    homePath: '/',
    projects: 'Projetos',
    departments: 'Áreas',
    history: 'História',
  },

  hero: {
    kicker: 'Liga estudantil de blockchain · Inteli · São Paulo · desde 2022',
    thesis: ['O clube universitário que o ', 'ecossistema web3', ' chama.'],
    cta: 'Ver os 25 projetos',
    home: 'Inteli Blockchain — início',
  },

  whoBuilds: {
    label: 'Quem constrói',
    title: ['Universitários que ', 'entregam'],
    prose: [
      'O clube é feito de alunos do Inteli que constroem de verdade — em competição e em casa. Desde 2022 são ',
      '25 projetos entregues',
      ', rodando em Stellar, Solana, Bitcoin, Celo e Chiliz, ao lado de Ethereum Brasil, Chainlink Labs e Starknet Foundation. As duas frentes se alimentam: o que a gente aprende no hackathon volta para o ciclo interno, e o que amadurece internamente chega mais pronto na próxima competição.',
    ],
    panels: [
      {
        label: 'Em competição',
        title: 'Hackathons',
        text: 'Os membros competem em hackathons no Brasil e fora dele — ETHSamba, Meridian da Stellar, ETH Belgrade, entre outros. O que nasce em três dias de maratona fica aberto no GitHub depois, não morre com a premiação.',
      },
      {
        label: 'Dentro do clube',
        title: 'Projetos internos',
        text: 'Em paralelo rodam os projetos do próprio clube, com termo de abertura, ciclo de um mês e acompanhamento semanal. É de onde saem o programa de formação e o material aberto que a gente publica.',
      },
    ],
  },

  partnership: {
    label: 'Com parceiro',
    title: ['Onde o clube tem ', 'parceria'],
    prose: ['Hoje é um projeto — o resto do que o clube constrói nasce em hackathon ou dentro de casa.'],
    project: {
      name: 'Projeto Alphractal',
      description: 'Sistema de monitoramento em tempo real de custos de taxa na rede Ethereum — projeto do Inteli Blockchain com a Alphractal.',
    },
    cta: 'Ver no GitHub →',
    contact: 'Quer construir com o clube?',
  },

  hackathon: {
    label: 'Entregas',
    title: ['Feito em ', 'hackathon'],
    prose: ['Doze dos vinte e cinco, em seis redes diferentes. Todos com código aberto e link direto para o repositório.'],
    cta: 'GitHub →',
    seeMore: (n) => `Ver mais ${n} projetos`,
    seeLess: 'Ver menos',
    all: 'Os 25 no GitHub',
  },

  /* Descrições em inglês vêm do próprio repositório (o antigo Projetos.js
     tinha as 25 escritas em pt e en). Aqui é a versão em português. */
  projects: {
    devolt: { label: 'ETHSamba', description: 'Marketplace descentralizado que conecta produtores e consumidores de energia, com negociação direta e melhor aproveitamento de fontes renováveis.' },
    carbontracker: { label: 'Sustentabilidade', description: 'IoT e blockchain para monitorar emissões de carbono e tornar a compensação transparente e auditável.' },
    quatrobridge: { label: 'Stellar · Meridian', description: 'Une filantropia, DeFi e liquidez para apoiar causas com rendimento transparente, sem travar o capital de quem doa.' },
    cronia: { label: 'Solana', description: 'Protocolo de crédito e pagamentos que converte cripto em linhas de crédito instantâneas para consumidores e lojistas.' },
    btcontract: { label: 'Bitcoin · Lightning', description: 'Simplifica contratos financeiros na rede Bitcoin, com interface direta e suporte à Lightning Network.' },
    smarttrans: { label: 'Celo', description: 'Bilhetagem digital para transporte público com blockchain, IoT e validação por NFC integrados à rede Celo.' },
    trbe: { label: 'Chiliz', description: 'Transforma engajamento de torcida em reputação on-chain, com recompensas gamificadas para o torcedor.' },
    skillpass: { label: 'Identidade', description: 'Valida habilidades profissionais com NFTs intransferíveis e staking de reputação feito pela própria comunidade.' },
    spynet: { label: 'Agentes de IA', description: 'Infraestrutura de pagamentos para economias de agentes de IA, com micropagamentos cripto de alta frequência.' },
    polenchain: { label: 'Lumx', description: 'Liga doadores, ONGs e empresas com transparência de ponta a ponta e recompensas em NFT resgatáveis em parceiros.' },
    highblock: { label: 'Programa do clube', description: 'Programa de desenvolvimento Web3 com desafios práticos, voltado a formar builders dentro do Inteli.', cta: 'Ver o programa →' },
    docs3: { label: 'Documentação', description: 'Site público com documentação e tutoriais do clube: Foundry, carteira, faucet e o primeiro contrato.', cta: 'Abrir o Docs³ →' },
  },

  cadence: {
    label: 'O ritmo',
    title: ['A disciplina por ', 'trás'],
    prose: ['Nada disso sai de improviso. São duas cadências fixas, que rodam desde 2022 e não se atropelam.'],
    panels: [
      {
        label: 'Toda semana',
        title: 'Aula interna',
        text: 'Conduzida pela área Educacional e aberta a todos os membros. Tokenização, DAO, redes blockchain e DeFi — cada tema com material e dicionário próprios, publicados no repositório aberto do clube.',
      },
      {
        label: 'Todo mês',
        title: 'Ciclo de projeto',
        text: 'Cada projeto abre com um termo de abertura, roda em ciclo de um mês e tem acompanhamento semanal. O que sai daí vai para o GitHub da organização, não para a gaveta.',
      },
    ],
  },

  departments: {
    label: 'Estrutura',
    title: ['Organizados para construir ', 'comunidade'],
    prose: ['Quatro áreas, e nenhuma delas entrega sozinha. Juntas cobrem os lados de que uma comunidade web3 precisa para se sustentar: quem ensina, quem constrói, quem comunica e quem cuida das pessoas.'],
    items: {
      educational: { name: 'Educacional', description: 'Aulas internas, dicionário, trilhas e todo o material de estudo do clube.' },
      projects: { name: 'Projetos', description: 'Os projetos técnicos, do MVP à entrega, com acompanhamento semanal.' },
      marketing: { name: 'Marketing', description: 'Presença pública, conteúdo e as redes sociais do Inteli Blockchain.' },
      people: { name: 'Pessoas', description: 'Processo seletivo, PDI, acompanhamento e cultura dos membros.' },
    },
  },

  stats: {
    label: 'Números',
    title: ['Onde o clube ', 'chegou'],
    labels: {
      members: 'membros ativos',
      projects: 'projetos entregues',
      events: 'eventos realizados',
      partners: 'parceiros',
    },
  },

  history: {
    label: 'Histórico',
    title: ['De 2022 até ', 'agora'],
    milestones: {
      2022: ['Fundação do clube', 'Ethereum SP', 'DEVCON VI'],
      2023: ['Workshop Web3', 'Workshop preparatório', 'Inteli Blockchain Challenge'],
      2024: ['Processo seletivo'],
      2025: ['Starknet Basecamp', '1º Bitcoin Students Day', 'Tokennation', 'Lançamento do Docs³', 'Meridian da Stellar', '1º Workshop ZK'],
    },
  },

  photos: {
    label: 'Registro',
    title: ['O clube ', 'em foto'],
    featured: {
      caption: 'Time 2026',
      alt: 'Cerca de trinta e cinco membros do Inteli Blockchain posando juntos em duas fileiras num auditório do Inteli, com os telões atrás exibindo a marca do clube.',
    },
    items: {
      workshop: {
        caption: 'Workshop com Solange Gueiros',
        alt: 'Sala do Inteli durante o workshop: alunos em fileiras com notebooks abertos, telas de projeção ao fundo e, em primeiro plano, um notebook com código de contrato aberto no editor.',
      },
      bootcamp: {
        caption: 'Bootcamp com Solange Gueiros',
        alt: 'Cerca de quarenta e cinco participantes do bootcamp posando na escadaria central do Inteli, com o letreiro da faculdade na parede ao fundo.',
      },
      winners: {
        caption: 'Ganhadores do Meridian 2025',
        alt: 'Dez membros do clube no palco do Meridian 2025 segurando a bandeira do Inteli Blockchain, dois deles com os troféus nas mãos, diante do painel de patrocinadores do evento.',
      },
      delegation: {
        caption: 'A delegação no Meridian 2025',
        alt: 'Cerca de quarenta membros do Inteli Blockchain reunidos ao ar livre à beira-mar, de camiseta do clube e crachá, segurando a bandeira do clube.',
      },
    },
  },

  partners: {
    label: 'Rede',
    title: ['Quem anda ', 'junto'],
  },

  footer: {
    mission: 'Levar tecnologias descentralizadas para dentro do Inteli e tornar o clube uma referência no ecossistema web3, em inovação e em projetos.',
    where: 'Onde a gente está',
    study: 'Para estudar',
    links: { docs3: 'Docs³ — tutoriais', classes: 'Material das aulas', blog: 'Blog' },
    rights: '© 2026 Inteli Blockchain — Instituto de Tecnologia e Liderança',
    contact: 'Contato:',
    domain: 'Domínio institucional: @sou.inteli.edu.br',
  },
};
