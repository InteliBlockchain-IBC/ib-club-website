/* O que a página tem, sem idioma: links, imagens, dimensões e ordem.
   O texto de cada item mora em `i18n/pt.js` e `i18n/en.js`, casado por
   `id`. Separado assim, adicionar um projeto é mexer em três lugares óbvios,
   e nenhum deles é uma seção.

   Nada aqui foi inventado: projetos e links saem do repositório da
   organização, os rótulos de hackathon só existem onde o nome do repositório
   prova (SPEC-rodada-2 §1.1) e os números foram confirmados pelo Messias. */

import teamPosing from './assets/photos/team-posing.jpg';
import workshopCode from './assets/photos/workshop-code.jpg';
import bootcampStairs from './assets/photos/bootcamp-stairs.jpg';
import meridianWinners from './assets/photos/meridian-winners.jpg';
import meridianDelegation from './assets/photos/meridian-delegation.jpg';

import stellar from './assets/partners/stellar.png';
import ethereumbrasil from './assets/partners/ethereumbrasil.png';
import vinteum from './assets/partners/vinteum.png';
import ethsamba from './assets/partners/ethsamba.png';
import ethlatam from './assets/partners/ethlatam.png';
import starknet from './assets/partners/starknet.png';
import chainlink from './assets/partners/chainlink.png';
import nearx from './assets/partners/nearx.png';
import superteambrasil from './assets/partners/superteambrasil.png';
import blockchainrio from './assets/partners/blockchainrio.png';
import mercadobitcoin from './assets/partners/mercadobitcoin.svg';
import erc55 from './assets/partners/erc55.png';

export const CONTACT = 'blockchain@inteli.edu.br';
export const GITHUB_ORG = 'https://github.com/InteliBlockchain-IBC';

/* ┌──────────────────────────────────────────────────────────────┐
   │  DADOS DO CLUBE — ÚNICO LUGAR DA PÁGINA. EDITE AQUI.         │
   │                                                              │
   │  Confirmados por Messias Olivindo em 8 de agosto de 2026.    │
   │  Só o 25 foi contado contra Projetos.js; os outros três      │
   │  vieram do site antigo e não foram recontados.               │
   │  É o dado com maior chance de envelhecer — ver SPEC §5.      │
   └──────────────────────────────────────────────────────────────┘ */
export const STATS = [
  { id: 'members', value: '30+' },
  { id: 'projects', value: '25' },
  { id: 'events', value: '20+' },
  { id: 'partners', value: '10+' },
];

/* O único projeto com parceiro confirmado. Nunca inferir parceria — o
   CLAUDE.md do workspace proíbe supor dado do clube, e patrocínio é
   exatamente o tipo de coisa que dá problema se errar. */
export const PARTNERSHIP = {
  href: `${GITHUB_ORG}/projeto-alphractal`,
};

/* Doze dos vinte e cinco. A ordem é a da página. */
export const PROJECTS = [
  { id: 'devolt', name: 'DeVolt', href: 'https://github.com/DeVolt-ETHSamba' },
  { id: 'carbontracker', name: 'CarbonTracker', href: 'https://github.com/CarbonVerifier' },
  { id: 'quatrobridge', name: '4Bridge', href: 'https://github.com/m4rcusml/hackmeridian-2025' },
  { id: 'cronia', name: 'Cronia', href: 'https://github.com/Cr0nia/Cronia' },
  { id: 'btcontract', name: 'BTContract', href: 'https://github.com/Inteli-Table5/BTContract' },
  { id: 'smarttrans', name: 'SmartTrans', href: 'https://github.com/SmartTrans-ETH/smart-trans' },
  { id: 'trbe', name: 'trbe', href: 'https://github.com/Inteli-Club5/trbe' },
  { id: 'skillpass', name: 'SkillPass', href: 'https://github.com/vict0rcarvalh0/skillpass' },
  { id: 'spynet', name: 'SpyNet', href: 'https://github.com/Web3Squad/SpyNet' },
  { id: 'polenchain', name: 'PólenChain', href: 'https://github.com/Lumx-hackathon/Ada-Lovelace-Bounties' },
  { id: 'highblock', name: 'High Block', href: 'https://inteliblockchain-ibc.github.io/docs3/docs/projeto/introducao' },
  { id: 'docs3', name: 'Docs³', href: 'https://docs3.inteliblockchain.org' },
];

/* MOLDURAS 2 a 5. A cor É a taxonomia: uma por departamento do enum
   Department da plataforma de gestão. Não é decoração — não reordene sem
   mover o preenchimento junto. */
export const DEPARTMENTS = [
  { id: 'educational', num: '01', frame: 'frame--steel' },
  { id: 'projects', num: '02', frame: 'frame--ice' },
  { id: 'marketing', num: '03', frame: 'frame--night frame--cyan' },
  { id: 'people', num: '04', frame: 'frame--wine frame--cyan' },
];

/* `atual` pinta o ano em ciano — é o 5º e último uso do acento (SPEC §3.4). */
export const MILESTONES = [
  { year: '2022' },
  { year: '2023' },
  { year: '2024' },
  { year: '2025', current: true },
];

/* As quatro já vêm recortadas em 3:2 — o object-fit no CSS é cinto de
   segurança, não o mecanismo. */
export const PHOTOS = [
  { id: 'workshop', src: workshopCode, width: 700, height: 466 },
  { id: 'bootcamp', src: bootcampStairs, width: 700, height: 467 },
  { id: 'winners', src: meridianWinners, width: 700, height: 466 },
  { id: 'delegation', src: meridianDelegation, width: 700, height: 467 },
];

export const FEATURED = { src: teamPosing, width: 1440, height: 679 };

/* Nomes de parceiro são nomes próprios: não traduzem, então ficam aqui. */
export const PARTNERS = [
  { name: 'Stellar', href: 'https://stellar.org/', src: stellar },
  { name: 'Ethereum Brasil', href: 'https://www.ethereumbrasil.com/', src: ethereumbrasil },
  { name: 'VinteUm', href: 'https://vinteum.org/', src: vinteum },
  { name: 'EthSamba', href: 'https://ethsamba.org/pt/', src: ethsamba },
  { name: 'EthLatam', href: 'https://ethereumlatam.org/', src: ethlatam },
  { name: 'Starknet Foundation', href: 'https://www.starknet.org/', src: starknet },
  { name: 'Chainlink Labs', href: 'https://chain.link/', src: chainlink },
  { name: 'NearX', href: 'https://nearx.com.br/', src: nearx },
  { name: 'Superteam Brasil', href: 'https://www.superteam.com.br/', src: superteambrasil },
  { name: 'Blockchain.Rio', href: 'https://blockchainrio.com.br/', src: blockchainrio },
  { name: 'Mercado Bitcoin', href: 'https://www.mercadobitcoin.com.br/', src: mercadobitcoin },
  { name: 'ERC55', href: 'https://erc55.xyz/', src: erc55 },
];

export const SOCIAL = [
  { text: 'GitHub', href: GITHUB_ORG },
  { text: 'LinkedIn', href: 'https://www.linkedin.com/company/inteli-blockchain' },
  { text: 'Instagram', href: 'https://www.instagram.com/inteli_blockchain' },
];

export const STUDY = [
  { id: 'docs3', href: 'https://docs3.inteliblockchain.org' },
  { id: 'classes', href: `${GITHUB_ORG}/educational` },
  { id: 'blog', href: 'https://inteliblockchain-ibc.github.io/docs3/blog' },
];
