/* O que a página tem, sem idioma: links, imagens, dimensões e ordem.
   O texto de cada item mora em `textos/pt.js` e `textos/en.js`, casado por
   `id`. Separado assim, adicionar um projeto é mexer em três lugares óbvios,
   e nenhum deles é uma seção.

   Nada aqui foi inventado: projetos e links saem do repositório da
   organização, os rótulos de hackathon só existem onde o nome do repositório
   prova (SPEC-rodada-2 §1.1) e os números foram confirmados pelo Messias. */

import grupoPosando from './assets/fotos/grupo-posando.jpg';
import workshopCodigo from './assets/fotos/workshop-codigo.jpg';
import bootcampEscada from './assets/fotos/bootcamp-escada.jpg';
import meridianGanhadores from './assets/fotos/meridian-ganhadores.jpg';
import meridianDelegacao from './assets/fotos/meridian-delegacao.jpg';

import stellar from './assets/parceiros/stellar.png';
import ethereumbrasil from './assets/parceiros/ethereumbrasil.png';
import vinteum from './assets/parceiros/vinteum.png';
import ethsamba from './assets/parceiros/ethsamba.png';
import ethlatam from './assets/parceiros/ethlatam.png';
import starknet from './assets/parceiros/starknet.png';
import chainlink from './assets/parceiros/chainlink.png';
import nearx from './assets/parceiros/nearx.png';
import superteambrasil from './assets/parceiros/superteambrasil.png';
import blockchainrio from './assets/parceiros/blockchainrio.png';
import mercadobitcoin from './assets/parceiros/mercadobitcoin.svg';
import erc55 from './assets/parceiros/erc55.png';

export const CONTATO = 'blockchain@inteli.edu.br';
export const GITHUB_ORG = 'https://github.com/InteliBlockchain-IBC';

/* ┌──────────────────────────────────────────────────────────────┐
   │  DADOS DO CLUBE — ÚNICO LUGAR DA PÁGINA. EDITE AQUI.         │
   │                                                              │
   │  Confirmados por Messias Olivindo em 8 de agosto de 2026.    │
   │  Só o 25 foi contado contra Projetos.js; os outros três      │
   │  vieram do site antigo e não foram recontados.               │
   │  É o dado com maior chance de envelhecer — ver SPEC §5.      │
   └──────────────────────────────────────────────────────────────┘ */
export const NUMEROS = [
  { id: 'membros', valor: '30+' },
  { id: 'projetos', valor: '25' },
  { id: 'eventos', valor: '20+' },
  { id: 'parceiros', valor: '10+' },
];

/* O único projeto com parceiro confirmado. Nunca inferir parceria — o
   CLAUDE.md do workspace proíbe supor dado do clube, e patrocínio é
   exatamente o tipo de coisa que dá problema se errar. */
export const PARCERIA = {
  href: `${GITHUB_ORG}/projeto-alphractal`,
};

/* Doze dos vinte e cinco. A ordem é a da página. */
export const PROJETOS = [
  { id: 'devolt', nome: 'DeVolt', href: 'https://github.com/DeVolt-ETHSamba' },
  { id: 'carbontracker', nome: 'CarbonTracker', href: 'https://github.com/CarbonVerifier' },
  { id: 'quatrobridge', nome: '4Bridge', href: 'https://github.com/m4rcusml/hackmeridian-2025' },
  { id: 'cronia', nome: 'Cronia', href: 'https://github.com/Cr0nia/Cronia' },
  { id: 'btcontract', nome: 'BTContract', href: 'https://github.com/Inteli-Table5/BTContract' },
  { id: 'smarttrans', nome: 'SmartTrans', href: 'https://github.com/SmartTrans-ETH/smart-trans' },
  { id: 'trbe', nome: 'trbe', href: 'https://github.com/Inteli-Club5/trbe' },
  { id: 'skillpass', nome: 'SkillPass', href: 'https://github.com/vict0rcarvalh0/skillpass' },
  { id: 'spynet', nome: 'SpyNet', href: 'https://github.com/Web3Squad/SpyNet' },
  { id: 'polenchain', nome: 'PólenChain', href: 'https://github.com/Lumx-hackathon/Ada-Lovelace-Bounties' },
  { id: 'highblock', nome: 'High Block', href: 'https://inteliblockchain-ibc.github.io/docs3/docs/projeto/introducao' },
  { id: 'docs3', nome: 'Docs³', href: 'https://docs3.inteliblockchain.org' },
];

/* MOLDURAS 2 a 5. A cor É a taxonomia: uma por departamento do enum
   Department da plataforma de gestão. Não é decoração — não reordene sem
   mover o preenchimento junto. */
export const AREAS = [
  { id: 'educacional', ord: '01', mold: 'mold--aco' },
  { id: 'projetos', ord: '02', mold: 'mold--gelo' },
  { id: 'marketing', ord: '03', mold: 'mold--noite mold--ciano' },
  { id: 'pessoas', ord: '04', mold: 'mold--vinho mold--ciano' },
];

/* `atual` pinta o ano em ciano — é o 5º e último uso do acento (SPEC §3.4). */
export const MARCOS = [
  { ano: '2022' },
  { ano: '2023' },
  { ano: '2024' },
  { ano: '2025', atual: true },
];

/* As quatro já vêm recortadas em 3:2 — o object-fit no CSS é cinto de
   segurança, não o mecanismo. */
export const FOTOS = [
  { id: 'workshop', src: workshopCodigo, largura: 700, altura: 466 },
  { id: 'bootcamp', src: bootcampEscada, largura: 700, altura: 467 },
  { id: 'ganhadores', src: meridianGanhadores, largura: 700, altura: 466 },
  { id: 'delegacao', src: meridianDelegacao, largura: 700, altura: 467 },
];

export const DESTAQUE = { src: grupoPosando, largura: 1440, altura: 679 };

/* Nomes de parceiro são nomes próprios: não traduzem, então ficam aqui. */
export const PARCEIROS = [
  { nome: 'Stellar', href: 'https://stellar.org/', src: stellar },
  { nome: 'Ethereum Brasil', href: 'https://www.ethereumbrasil.com/', src: ethereumbrasil },
  { nome: 'VinteUm', href: 'https://vinteum.org/', src: vinteum },
  { nome: 'EthSamba', href: 'https://ethsamba.org/pt/', src: ethsamba },
  { nome: 'EthLatam', href: 'https://ethereumlatam.org/', src: ethlatam },
  { nome: 'Starknet Foundation', href: 'https://www.starknet.org/', src: starknet },
  { nome: 'Chainlink Labs', href: 'https://chain.link/', src: chainlink },
  { nome: 'NearX', href: 'https://nearx.com.br/', src: nearx },
  { nome: 'Superteam Brasil', href: 'https://www.superteam.com.br/', src: superteambrasil },
  { nome: 'Blockchain.Rio', href: 'https://blockchainrio.com.br/', src: blockchainrio },
  { nome: 'Mercado Bitcoin', href: 'https://www.mercadobitcoin.com.br/', src: mercadobitcoin },
  { nome: 'ERC55', href: 'https://erc55.xyz/', src: erc55 },
];

export const REDES = [
  { texto: 'GitHub', href: GITHUB_ORG },
  { texto: 'LinkedIn', href: 'https://www.linkedin.com/company/inteli-blockchain' },
  { texto: 'Instagram', href: 'https://www.instagram.com/inteli_blockchain' },
];

export const ESTUDO = [
  { id: 'docs3', href: 'https://docs3.inteliblockchain.org' },
  { id: 'aulas', href: `${GITHUB_ORG}/educational` },
  { id: 'blog', href: 'https://inteliblockchain-ibc.github.io/docs3/blog' },
];
