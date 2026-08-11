/* The page in English. Same shape as pt.js — if you add a key there, add it
   here: `i18n/index.js` compares the two key trees and throws in
   development, so a half-translated page fails loudly instead of rendering
   `undefined` in the middle of a paragraph.

   The eleven project descriptions marked below are the club's OWN English
   copy, recovered from the old `components/Projetos.js`, which carried all 25
   written in both languages. They were not re-translated. Only Docs³ had no
   English version on file and was translated here. */

export default {
  language: 'en',
  switchTo: 'Ver em português',

  nav: { projects: 'Projects', departments: 'Teams', history: 'History' },

  hero: {
    kicker: 'Student blockchain club · Inteli · São Paulo · since 2022',
    thesis: ['The university club the ', 'web3 ecosystem', ' calls on.'],
    cta: 'See the 25 projects',
    home: 'Inteli Blockchain — home',
  },

  whoBuilds: {
    label: 'Who builds',
    title: ['Undergraduates who ', 'ship'],
    prose: [
      'The club is made of Inteli students who actually build — in competition and at home. Since 2022 that is ',
      '25 projects delivered',
      ', running on Stellar, Solana, Bitcoin, Celo and Chiliz, alongside Ethereum Brasil, Chainlink Labs and the Starknet Foundation. The two tracks feed each other: what we learn at a hackathon goes back into the internal cycle, and what matures internally arrives further along at the next competition.',
    ],
    panels: [
      {
        label: 'In competition',
        title: 'Hackathons',
        text: 'Members compete at hackathons in Brazil and abroad — ETHSamba, Stellar Meridian, ETH Belgrade, among others. What is born in a three-day sprint stays open on GitHub afterwards; it does not end with the prize.',
      },
      {
        label: 'Inside the club',
        title: 'Internal projects',
        text: 'Running in parallel are the club’s own projects, each with a project charter, a one-month cycle and weekly check-ins. This is where our training program and the open material we publish come from.',
      },
    ],
  },

  partnership: {
    label: 'With a partner',
    title: ['Where the club has a ', 'partnership'],
    prose: ['Today that is one project — everything else the club builds is born at a hackathon or in-house.'],
    project: {
      name: 'Alphractal Project',
      description: 'Real-time monitoring of gas fee costs on the Ethereum network — a project by Inteli Blockchain with Alphractal.',
    },
    cta: 'View on GitHub →',
    contact: 'Want to build with the club?',
  },

  hackathon: {
    label: 'Deliveries',
    title: ['Built at a ', 'hackathon'],
    prose: ['Twelve of the twenty-five, across six different networks. All open source, each with a direct link to its repository.'],
    cta: 'GitHub →',
    seeMore: (n) => `See ${n} more projects`,
    seeLess: 'See fewer',
    all: 'All 25 on GitHub',
  },

  projects: {
    devolt: { label: 'ETHSamba', description: 'Decentralized marketplace connecting energy producers and consumers for direct trading, transparency, and better use of renewables.' },
    carbontracker: { label: 'Sustainability', description: 'Platform using IoT and blockchain to monitor carbon emissions and streamline transparent offsets.' },
    quatrobridge: { label: 'Stellar · Meridian', description: 'Stellar-based platform combining philanthropy, DeFi, and liquidity to support causes with transparent yields and full capital access.' },
    cronia: { label: 'Solana', description: 'Solana credit and payments protocol turning crypto portfolios into instant credit lines for consumers and merchants.' },
    btcontract: { label: 'Bitcoin · Lightning', description: 'Platform that simplifies financial contracts on Bitcoin with an intuitive interface and Lightning Network support.' },
    smarttrans: { label: 'Celo', description: 'Digital ticketing for public transit using blockchain, IoT, and NFC validation integrated with the Celo network.' },
    trbe: { label: 'Chiliz', description: 'Chiliz-based Web3 platform turning fan engagement into on-chain reputation and gamified rewards.' },
    skillpass: { label: 'Identity', description: 'Platform validating professional skills through soulbound NFTs and community reputation staking.' },
    spynet: { label: 'AI agents', description: 'Payment infrastructure for AI agent economies enabling high-frequency crypto micropayments.' },
    polenchain: { label: 'Lumx', description: 'Platform connecting donors, NGOs, and companies with transparent tracking and NFT rewards redeemable at partners.' },
    highblock: { label: 'Club program', description: 'Web3 development program focused on practical challenges and training builders.', cta: 'See the program →' },
    // sem versão em inglês no arquivo antigo — traduzido aqui
    docs3: { label: 'Documentation', description: 'Public site with the club’s documentation and tutorials: Foundry, wallets, faucet and your first contract.', cta: 'Open Docs³ →' },
  },

  cadence: {
    label: 'The cadence',
    title: ['The discipline ', 'behind it'],
    prose: ['None of this is improvised. There are two fixed cadences, running since 2022, and they do not collide.'],
    panels: [
      {
        label: 'Every week',
        title: 'Internal class',
        text: 'Run by the Educational team and open to every member. Tokenization, DAOs, blockchain networks and DeFi — each topic with its own material and glossary, published in the club’s open repository.',
      },
      {
        label: 'Every month',
        title: 'Project cycle',
        text: 'Each project opens with a charter, runs on a one-month cycle and has weekly check-ins. What comes out of it goes to the organization’s GitHub, not into a drawer.',
      },
    ],
  },

  departments: {
    label: 'Structure',
    title: ['Organized to build ', 'community'],
    prose: ['Four teams, and none of them delivers alone. Together they cover what a web3 community needs to sustain itself: who teaches, who builds, who communicates and who looks after the people.'],
    items: {
      educational: { name: 'Educational', description: 'Internal classes, glossary, learning tracks and all of the club’s study material.' },
      projects: { name: 'Projects', description: 'The technical projects, from MVP to delivery, with weekly check-ins.' },
      marketing: { name: 'Marketing', description: 'Public presence, content and the Inteli Blockchain social channels.' },
      people: { name: 'People', description: 'Admissions, development plans, mentoring and the culture of our members.' },
    },
  },

  stats: {
    label: 'Numbers',
    title: ['How far the club ', 'has come'],
    labels: {
      members: 'active members',
      projects: 'projects delivered',
      events: 'events held',
      partners: 'partners',
    },
  },

  history: {
    label: 'Track record',
    title: ['From 2022 to ', 'now'],
    milestones: {
      2022: ['Club founded', 'Ethereum SP', 'DEVCON VI'],
      2023: ['Web3 workshop', 'Prep workshop', 'Inteli Blockchain Challenge'],
      2024: ['Admissions cycle'],
      2025: ['Starknet Basecamp', '1st Bitcoin Students Day', 'Tokennation', 'Docs³ launch', 'Stellar Meridian', '1st ZK workshop'],
    },
  },

  photos: {
    label: 'On the record',
    title: ['The club ', 'in photos'],
    featured: {
      caption: 'Team 2026',
      alt: 'About thirty-five Inteli Blockchain members posing together in two rows in an Inteli auditorium, with the screens behind them showing the club logo.',
    },
    items: {
      workshop: {
        caption: 'Workshop with Solange Gueiros',
        alt: 'An Inteli classroom during the workshop: students in rows with open laptops, projection screens in the background and, in the foreground, a laptop with contract code open in the editor.',
      },
      bootcamp: {
        caption: 'Bootcamp with Solange Gueiros',
        alt: 'About forty-five bootcamp participants posing on the central staircase at Inteli, with the school signage on the wall behind them.',
      },
      winners: {
        caption: 'Meridian 2025 winners',
        alt: 'Ten club members on the Meridian 2025 stage holding the Inteli Blockchain flag, two of them with trophies in hand, in front of the event sponsor wall.',
      },
      delegation: {
        caption: 'The delegation at Meridian 2025',
        alt: 'About forty Inteli Blockchain members gathered outdoors by the sea, in club t-shirts and badges, holding the club flag.',
      },
    },
  },

  partners: {
    label: 'Network',
    title: ['Who walks ', 'with us'],
  },

  footer: {
    mission: 'To bring decentralized technology inside Inteli and make the club a reference in the web3 ecosystem, in innovation and in projects.',
    where: 'Where to find us',
    study: 'To study',
    links: { docs3: 'Docs³ — tutorials', classes: 'Class material', blog: 'Blog' },
    rights: '© 2026 Inteli Blockchain — Instituto de Tecnologia e Liderança',
    contact: 'Contact:',
    domain: 'Institutional domain: @sou.inteli.edu.br',
  },
};
