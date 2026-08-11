/* The page in English. Same shape as pt.js — if you add a key there, add it
   here: `textos/index.js` compares the two key trees and throws in
   development, so a half-translated page fails loudly instead of rendering
   `undefined` in the middle of a paragraph.

   The eleven project descriptions marked below are the club's OWN English
   copy, recovered from the old `components/Projetos.js`, which carried all 25
   written in both languages. They were not re-translated. Only Docs³ had no
   English version on file and was translated here. */

export default {
  idioma: 'en',
  trocar: 'Ver em português',

  nav: { projetos: 'Projects', areas: 'Teams', historia: 'History' },

  dobra: {
    kicker: 'Student blockchain club · Inteli · São Paulo · since 2022',
    tese: ['The university club the ', 'web3 ecosystem', ' calls on.'],
    acao: 'See the 25 projects',
    inicio: 'Inteli Blockchain — home',
  },

  quemConstroi: {
    rotulo: 'Who builds',
    titulo: ['Undergraduates who ', 'ship'],
    corpo: [
      'The club is made of Inteli students who actually build — in competition and at home. Since 2022 that is ',
      '25 projects delivered',
      ', running on Stellar, Solana, Bitcoin, Celo and Chiliz, alongside Ethereum Brasil, Chainlink Labs and the Starknet Foundation. The two tracks feed each other: what we learn at a hackathon goes back into the internal cycle, and what matures internally arrives further along at the next competition.',
    ],
    paineis: [
      {
        rotulo: 'In competition',
        titulo: 'Hackathons',
        texto: 'Members compete at hackathons in Brazil and abroad — ETHSamba, Stellar Meridian, ETH Belgrade, among others. What is born in a three-day sprint stays open on GitHub afterwards; it does not end with the prize.',
      },
      {
        rotulo: 'Inside the club',
        titulo: 'Internal projects',
        texto: 'Running in parallel are the club’s own projects, each with a project charter, a one-month cycle and weekly check-ins. This is where our training program and the open material we publish come from.',
      },
    ],
  },

  parceria: {
    rotulo: 'With a partner',
    titulo: ['Where the club has a ', 'partnership'],
    corpo: ['Today that is one project — everything else the club builds is born at a hackathon or in-house.'],
    projeto: {
      nome: 'Alphractal Project',
      descricao: 'Real-time monitoring of gas fee costs on the Ethereum network — a project by Inteli Blockchain with Alphractal.',
    },
    ir: 'View on GitHub →',
    contato: 'Want to build with the club?',
  },

  hackathon: {
    rotulo: 'Deliveries',
    titulo: ['Built at a ', 'hackathon'],
    corpo: ['Twelve of the twenty-five, across six different networks. All open source, each with a direct link to its repository.'],
    ir: 'GitHub →',
    verMais: (n) => `See ${n} more projects`,
    verMenos: 'See fewer',
    todos: 'All 25 on GitHub',
  },

  projetos: {
    devolt: { rotulo: 'ETHSamba', descricao: 'Decentralized marketplace connecting energy producers and consumers for direct trading, transparency, and better use of renewables.' },
    carbontracker: { rotulo: 'Sustainability', descricao: 'Platform using IoT and blockchain to monitor carbon emissions and streamline transparent offsets.' },
    quatrobridge: { rotulo: 'Stellar · Meridian', descricao: 'Stellar-based platform combining philanthropy, DeFi, and liquidity to support causes with transparent yields and full capital access.' },
    cronia: { rotulo: 'Solana', descricao: 'Solana credit and payments protocol turning crypto portfolios into instant credit lines for consumers and merchants.' },
    btcontract: { rotulo: 'Bitcoin · Lightning', descricao: 'Platform that simplifies financial contracts on Bitcoin with an intuitive interface and Lightning Network support.' },
    smarttrans: { rotulo: 'Celo', descricao: 'Digital ticketing for public transit using blockchain, IoT, and NFC validation integrated with the Celo network.' },
    trbe: { rotulo: 'Chiliz', descricao: 'Chiliz-based Web3 platform turning fan engagement into on-chain reputation and gamified rewards.' },
    skillpass: { rotulo: 'Identity', descricao: 'Platform validating professional skills through soulbound NFTs and community reputation staking.' },
    spynet: { rotulo: 'AI agents', descricao: 'Payment infrastructure for AI agent economies enabling high-frequency crypto micropayments.' },
    polenchain: { rotulo: 'Lumx', descricao: 'Platform connecting donors, NGOs, and companies with transparent tracking and NFT rewards redeemable at partners.' },
    highblock: { rotulo: 'Club program', descricao: 'Web3 development program focused on practical challenges and training builders.', ir: 'See the program →' },
    // sem versão em inglês no arquivo antigo — traduzido aqui
    docs3: { rotulo: 'Documentation', descricao: 'Public site with the club’s documentation and tutorials: Foundry, wallets, faucet and your first contract.', ir: 'Open Docs³ →' },
  },

  ritmo: {
    rotulo: 'The cadence',
    titulo: ['The discipline ', 'behind it'],
    corpo: ['None of this is improvised. There are two fixed cadences, running since 2022, and they do not collide.'],
    paineis: [
      {
        rotulo: 'Every week',
        titulo: 'Internal class',
        texto: 'Run by the Educational team and open to every member. Tokenization, DAOs, blockchain networks and DeFi — each topic with its own material and glossary, published in the club’s open repository.',
      },
      {
        rotulo: 'Every month',
        titulo: 'Project cycle',
        texto: 'Each project opens with a charter, runs on a one-month cycle and has weekly check-ins. What comes out of it goes to the organization’s GitHub, not into a drawer.',
      },
    ],
  },

  areas: {
    rotulo: 'Structure',
    titulo: ['Organized to build ', 'community'],
    corpo: ['Four teams, and none of them delivers alone. Together they cover what a web3 community needs to sustain itself: who teaches, who builds, who communicates and who looks after the people.'],
    lista: {
      educacional: { nome: 'Educational', descricao: 'Internal classes, glossary, learning tracks and all of the club’s study material.' },
      projetos: { nome: 'Projects', descricao: 'The technical projects, from MVP to delivery, with weekly check-ins.' },
      marketing: { nome: 'Marketing', descricao: 'Public presence, content and the Inteli Blockchain social channels.' },
      pessoas: { nome: 'People', descricao: 'Admissions, development plans, mentoring and the culture of our members.' },
    },
  },

  numeros: {
    rotulo: 'Numbers',
    titulo: ['How far the club ', 'has come'],
    rotulos: {
      membros: 'active members',
      projetos: 'projects delivered',
      eventos: 'events held',
      parceiros: 'partners',
    },
  },

  historia: {
    rotulo: 'Track record',
    titulo: ['From 2022 to ', 'now'],
    marcos: {
      2022: ['Club founded', 'Ethereum SP', 'DEVCON VI'],
      2023: ['Web3 workshop', 'Prep workshop', 'Inteli Blockchain Challenge'],
      2024: ['Admissions cycle'],
      2025: ['Starknet Basecamp', '1st Bitcoin Students Day', 'Tokennation', 'Docs³ launch', 'Stellar Meridian', '1st ZK workshop'],
    },
  },

  fotos: {
    rotulo: 'On the record',
    titulo: ['The club ', 'in photos'],
    destaque: {
      legenda: 'Team 2026',
      alt: 'About thirty-five Inteli Blockchain members posing together in two rows in an Inteli auditorium, with the screens behind them showing the club logo.',
    },
    lista: {
      workshop: {
        legenda: 'Workshop with Solange Gueiros',
        alt: 'An Inteli classroom during the workshop: students in rows with open laptops, projection screens in the background and, in the foreground, a laptop with contract code open in the editor.',
      },
      bootcamp: {
        legenda: 'Bootcamp with Solange Gueiros',
        alt: 'About forty-five bootcamp participants posing on the central staircase at Inteli, with the school signage on the wall behind them.',
      },
      ganhadores: {
        legenda: 'Meridian 2025 winners',
        alt: 'Ten club members on the Meridian 2025 stage holding the Inteli Blockchain flag, two of them with trophies in hand, in front of the event sponsor wall.',
      },
      delegacao: {
        legenda: 'The delegation at Meridian 2025',
        alt: 'About forty Inteli Blockchain members gathered outdoors by the sea, in club t-shirts and badges, holding the club flag.',
      },
    },
  },

  parceiros: {
    rotulo: 'Network',
    titulo: ['Who walks ', 'with us'],
  },

  rodape: {
    missao: 'To bring decentralized technology inside Inteli and make the club a reference in the web3 ecosystem, in innovation and in projects.',
    onde: 'Where to find us',
    estudar: 'To study',
    links: { docs3: 'Docs³ — tutorials', aulas: 'Class material', blog: 'Blog' },
    direitos: '© 2026 Inteli Blockchain — Instituto de Tecnologia e Liderança',
    contato: 'Contact:',
    dominio: 'Institutional domain: @sou.inteli.edu.br',
  },
};
