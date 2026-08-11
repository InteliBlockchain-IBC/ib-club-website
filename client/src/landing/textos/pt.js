/* Todo o texto da página em português. O que NÃO mora aqui: links, imagens,
   dimensões e a ordem das coisas — isso é `dados.js`, que não tem idioma.

   Os arrays alternam texto normal e realce: ['normal ', 'forte', ' normal'].
   A posição do negrito faz parte da tradução, porque ela muda de lugar entre
   os idiomas. Ver Realce.js. */

export default {
  idioma: 'pt-BR',
  trocar: 'Ver em inglês',

  nav: { projetos: 'Projetos', areas: 'Áreas', historia: 'História' },

  dobra: {
    kicker: 'Liga estudantil de blockchain · Inteli · São Paulo · desde 2022',
    tese: ['O clube universitário que o ', 'ecossistema web3', ' chama.'],
    acao: 'Ver os 25 projetos',
    inicio: 'Inteli Blockchain — início',
  },

  quemConstroi: {
    rotulo: 'Quem constrói',
    titulo: ['Universitários que ', 'entregam'],
    corpo: [
      'O clube é feito de alunos do Inteli que constroem de verdade — em competição e em casa. Desde 2022 são ',
      '25 projetos entregues',
      ', rodando em Stellar, Solana, Bitcoin, Celo e Chiliz, ao lado de Ethereum Brasil, Chainlink Labs e Starknet Foundation. As duas frentes se alimentam: o que a gente aprende no hackathon volta para o ciclo interno, e o que amadurece internamente chega mais pronto na próxima competição.',
    ],
    paineis: [
      {
        rotulo: 'Em competição',
        titulo: 'Hackathons',
        texto: 'Os membros competem em hackathons no Brasil e fora dele — ETHSamba, Meridian da Stellar, ETH Belgrade, entre outros. O que nasce em três dias de maratona fica aberto no GitHub depois, não morre com a premiação.',
      },
      {
        rotulo: 'Dentro do clube',
        titulo: 'Projetos internos',
        texto: 'Em paralelo rodam os projetos do próprio clube, com termo de abertura, ciclo de um mês e acompanhamento semanal. É de onde saem o programa de formação e o material aberto que a gente publica.',
      },
    ],
  },

  parceria: {
    rotulo: 'Com parceiro',
    titulo: ['Onde o clube tem ', 'parceria'],
    corpo: ['Hoje é um projeto — o resto do que o clube constrói nasce em hackathon ou dentro de casa.'],
    projeto: {
      nome: 'Projeto Alphractal',
      descricao: 'Sistema de monitoramento em tempo real de custos de taxa na rede Ethereum — projeto do Inteli Blockchain com a Alphractal.',
    },
    ir: 'Ver no GitHub →',
    contato: 'Quer construir com o clube?',
  },

  hackathon: {
    rotulo: 'Entregas',
    titulo: ['Feito em ', 'hackathon'],
    corpo: ['Doze dos vinte e cinco, em seis redes diferentes. Todos com código aberto e link direto para o repositório.'],
    ir: 'GitHub →',
    verMais: (n) => `Ver mais ${n} projetos`,
    verMenos: 'Ver menos',
    todos: 'Os 25 no GitHub',
  },

  /* Descrições em inglês vêm do próprio repositório (o antigo Projetos.js
     tinha as 25 escritas em pt e en). Aqui é a versão em português. */
  projetos: {
    devolt: { rotulo: 'ETHSamba', descricao: 'Marketplace descentralizado que conecta produtores e consumidores de energia, com negociação direta e melhor aproveitamento de fontes renováveis.' },
    carbontracker: { rotulo: 'Sustentabilidade', descricao: 'IoT e blockchain para monitorar emissões de carbono e tornar a compensação transparente e auditável.' },
    quatrobridge: { rotulo: 'Stellar · Meridian', descricao: 'Une filantropia, DeFi e liquidez para apoiar causas com rendimento transparente, sem travar o capital de quem doa.' },
    cronia: { rotulo: 'Solana', descricao: 'Protocolo de crédito e pagamentos que converte cripto em linhas de crédito instantâneas para consumidores e lojistas.' },
    btcontract: { rotulo: 'Bitcoin · Lightning', descricao: 'Simplifica contratos financeiros na rede Bitcoin, com interface direta e suporte à Lightning Network.' },
    smarttrans: { rotulo: 'Celo', descricao: 'Bilhetagem digital para transporte público com blockchain, IoT e validação por NFC integrados à rede Celo.' },
    trbe: { rotulo: 'Chiliz', descricao: 'Transforma engajamento de torcida em reputação on-chain, com recompensas gamificadas para o torcedor.' },
    skillpass: { rotulo: 'Identidade', descricao: 'Valida habilidades profissionais com NFTs intransferíveis e staking de reputação feito pela própria comunidade.' },
    spynet: { rotulo: 'Agentes de IA', descricao: 'Infraestrutura de pagamentos para economias de agentes de IA, com micropagamentos cripto de alta frequência.' },
    polenchain: { rotulo: 'Lumx', descricao: 'Liga doadores, ONGs e empresas com transparência de ponta a ponta e recompensas em NFT resgatáveis em parceiros.' },
    highblock: { rotulo: 'Programa do clube', descricao: 'Programa de desenvolvimento Web3 com desafios práticos, voltado a formar builders dentro do Inteli.', ir: 'Ver o programa →' },
    docs3: { rotulo: 'Documentação', descricao: 'Site público com documentação e tutoriais do clube: Foundry, carteira, faucet e o primeiro contrato.', ir: 'Abrir o Docs³ →' },
  },

  ritmo: {
    rotulo: 'O ritmo',
    titulo: ['A disciplina por ', 'trás'],
    corpo: ['Nada disso sai de improviso. São duas cadências fixas, que rodam desde 2022 e não se atropelam.'],
    paineis: [
      {
        rotulo: 'Toda semana',
        titulo: 'Aula interna',
        texto: 'Conduzida pela área Educacional e aberta a todos os membros. Tokenização, DAO, redes blockchain e DeFi — cada tema com material e dicionário próprios, publicados no repositório aberto do clube.',
      },
      {
        rotulo: 'Todo mês',
        titulo: 'Ciclo de projeto',
        texto: 'Cada projeto abre com um termo de abertura, roda em ciclo de um mês e tem acompanhamento semanal. O que sai daí vai para o GitHub da organização, não para a gaveta.',
      },
    ],
  },

  areas: {
    rotulo: 'Estrutura',
    titulo: ['Organizados para construir ', 'comunidade'],
    corpo: ['Quatro áreas, e nenhuma delas entrega sozinha. Juntas cobrem os lados de que uma comunidade web3 precisa para se sustentar: quem ensina, quem constrói, quem comunica e quem cuida das pessoas.'],
    lista: {
      educacional: { nome: 'Educacional', descricao: 'Aulas internas, dicionário, trilhas e todo o material de estudo do clube.' },
      projetos: { nome: 'Projetos', descricao: 'Os projetos técnicos, do MVP à entrega, com acompanhamento semanal.' },
      marketing: { nome: 'Marketing', descricao: 'Presença pública, conteúdo e as redes sociais do Inteli Blockchain.' },
      pessoas: { nome: 'Pessoas', descricao: 'Processo seletivo, PDI, acompanhamento e cultura dos membros.' },
    },
  },

  numeros: {
    rotulo: 'Números',
    titulo: ['Onde o clube ', 'chegou'],
    rotulos: {
      membros: 'membros ativos',
      projetos: 'projetos entregues',
      eventos: 'eventos realizados',
      parceiros: 'parceiros',
    },
  },

  historia: {
    rotulo: 'Histórico',
    titulo: ['De 2022 até ', 'agora'],
    marcos: {
      2022: ['Fundação do clube', 'Ethereum SP', 'DEVCON VI'],
      2023: ['Workshop Web3', 'Workshop preparatório', 'Inteli Blockchain Challenge'],
      2024: ['Processo seletivo'],
      2025: ['Starknet Basecamp', '1º Bitcoin Students Day', 'Tokennation', 'Lançamento do Docs³', 'Meridian da Stellar', '1º Workshop ZK'],
    },
  },

  fotos: {
    rotulo: 'Registro',
    titulo: ['O clube ', 'em foto'],
    destaque: {
      legenda: 'Time 2026',
      alt: 'Cerca de trinta e cinco membros do Inteli Blockchain posando juntos em duas fileiras num auditório do Inteli, com os telões atrás exibindo a marca do clube.',
    },
    lista: {
      workshop: {
        legenda: 'Workshop com Solange Gueiros',
        alt: 'Sala do Inteli durante o workshop: alunos em fileiras com notebooks abertos, telas de projeção ao fundo e, em primeiro plano, um notebook com código de contrato aberto no editor.',
      },
      bootcamp: {
        legenda: 'Bootcamp com Solange Gueiros',
        alt: 'Cerca de quarenta e cinco participantes do bootcamp posando na escadaria central do Inteli, com o letreiro da faculdade na parede ao fundo.',
      },
      ganhadores: {
        legenda: 'Ganhadores do Meridian 2025',
        alt: 'Dez membros do clube no palco do Meridian 2025 segurando a bandeira do Inteli Blockchain, dois deles com os troféus nas mãos, diante do painel de patrocinadores do evento.',
      },
      delegacao: {
        legenda: 'A delegação no Meridian 2025',
        alt: 'Cerca de quarenta membros do Inteli Blockchain reunidos ao ar livre à beira-mar, de camiseta do clube e crachá, segurando a bandeira do clube.',
      },
    },
  },

  parceiros: {
    rotulo: 'Rede',
    titulo: ['Quem anda ', 'junto'],
  },

  rodape: {
    missao: 'Levar tecnologias descentralizadas para dentro do Inteli e tornar o clube uma referência no ecossistema web3, em inovação e em projetos.',
    onde: 'Onde a gente está',
    estudar: 'Para estudar',
    links: { docs3: 'Docs³ — tutoriais', aulas: 'Material das aulas', blog: 'Blog' },
    direitos: '© 2026 Inteli Blockchain — Instituto de Tecnologia e Liderança',
    contato: 'Contato:',
    dominio: 'Domínio institucional: @sou.inteli.edu.br',
  },
};
