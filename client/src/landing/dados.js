/* Conteúdo da landing, separado da marcação. Editar um projeto, um parceiro
   ou um marco é mexer aqui — nenhuma seção precisa ser aberta.

   Nada nestes dados foi inventado: projetos e links saem do repositório da
   organização, os rótulos de hackathon só existem onde o nome do repositório
   prova (SPEC-rodada-2 §1.1) e os números foram confirmados pelo Messias.
   Ver design-concepts/SPEC-landing-hibrida.md e SPEC-rodada-2.md. */

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

/* ┌──────────────────────────────────────────────────────────────┐
   │  DADOS DO CLUBE — ÚNICO LUGAR DA PÁGINA. EDITE AQUI.         │
   │                                                              │
   │  Confirmados por Messias Olivindo em 8 de agosto de 2026.    │
   │  Só o 25 foi contado contra Projetos.js; os outros três      │
   │  vieram do site antigo e não foram recontados.               │
   │  É o dado com maior chance de envelhecer — ver SPEC §5.      │
   └──────────────────────────────────────────────────────────────┘ */
export const NUMEROS = [
  { valor: '30+', rotulo: 'membros ativos' },
  { valor: '25', rotulo: 'projetos entregues' },
  { valor: '20+', rotulo: 'eventos realizados' },
  { valor: '10+', rotulo: 'parceiros' },
];

/* O único projeto com parceiro confirmado. Descrição copiada do repositório,
   não reescrita. Nunca inferir parceria — SPEC-rodada-2 §1.1. */
export const PARCERIA = {
  nome: 'Projeto Alphractal',
  href: 'https://github.com/InteliBlockchain-IBC/projeto-alphractal',
  descricao:
    'Sistema de monitoramento em tempo real de custos de taxa na rede Ethereum — projeto do Inteli Blockchain com a Alphractal.',
};

/* Doze dos vinte e cinco. O rótulo nomeia o hackathon só onde o nome do
   repositório prova; os demais ficam com o rótulo de domínio. */
export const PROJETOS = [
  {
    rotulo: 'ETHSamba',
    nome: 'DeVolt',
    href: 'https://github.com/DeVolt-ETHSamba',
    descricao:
      'Marketplace descentralizado que conecta produtores e consumidores de energia, com negociação direta e melhor aproveitamento de fontes renováveis.',
  },
  {
    rotulo: 'Sustentabilidade',
    nome: 'CarbonTracker',
    href: 'https://github.com/CarbonVerifier',
    descricao:
      'IoT e blockchain para monitorar emissões de carbono e tornar a compensação transparente e auditável.',
  },
  {
    rotulo: 'Stellar · Meridian',
    nome: '4Bridge',
    href: 'https://github.com/m4rcusml/hackmeridian-2025',
    descricao:
      'Une filantropia, DeFi e liquidez para apoiar causas com rendimento transparente, sem travar o capital de quem doa.',
  },
  {
    rotulo: 'Solana',
    nome: 'Cronia',
    href: 'https://github.com/Cr0nia/Cronia',
    descricao:
      'Protocolo de crédito e pagamentos que converte cripto em linhas de crédito instantâneas para consumidores e lojistas.',
  },
  {
    rotulo: 'Bitcoin · Lightning',
    nome: 'BTContract',
    href: 'https://github.com/Inteli-Table5/BTContract',
    descricao:
      'Simplifica contratos financeiros na rede Bitcoin, com interface direta e suporte à Lightning Network.',
  },
  {
    rotulo: 'Celo',
    nome: 'SmartTrans',
    href: 'https://github.com/SmartTrans-ETH/smart-trans',
    descricao:
      'Bilhetagem digital para transporte público com blockchain, IoT e validação por NFC integrados à rede Celo.',
  },
  {
    rotulo: 'Chiliz',
    nome: 'trbe',
    href: 'https://github.com/Inteli-Club5/trbe',
    descricao:
      'Transforma engajamento de torcida em reputação on-chain, com recompensas gamificadas para o torcedor.',
  },
  {
    rotulo: 'Identidade',
    nome: 'SkillPass',
    href: 'https://github.com/vict0rcarvalh0/skillpass',
    descricao:
      'Valida habilidades profissionais com NFTs intransferíveis e staking de reputação feito pela própria comunidade.',
  },
  {
    rotulo: 'Agentes de IA',
    nome: 'SpyNet',
    href: 'https://github.com/Web3Squad/SpyNet',
    descricao:
      'Infraestrutura de pagamentos para economias de agentes de IA, com micropagamentos cripto de alta frequência.',
  },
  {
    rotulo: 'Lumx',
    nome: 'PólenChain',
    href: 'https://github.com/Lumx-hackathon/Ada-Lovelace-Bounties',
    descricao:
      'Liga doadores, ONGs e empresas com transparência de ponta a ponta e recompensas em NFT resgatáveis em parceiros.',
  },
  {
    rotulo: 'Programa do clube',
    nome: 'High Block',
    href: 'https://inteliblockchain-ibc.github.io/docs3/docs/projeto/introducao',
    descricao:
      'Programa de desenvolvimento Web3 com desafios práticos, voltado a formar builders dentro do Inteli.',
    ir: 'Ver o programa →',
  },
  {
    rotulo: 'Documentação',
    nome: 'Docs³',
    href: 'https://docs3.inteliblockchain.org',
    descricao:
      'Site público com documentação e tutoriais do clube: Foundry, carteira, faucet e o primeiro contrato.',
    ir: 'Abrir o Docs³ →',
  },
];

/* As quatro do enum Department da plataforma de gestão. A cor É a taxonomia:
   nenhuma outra superfície da página recebe preenchimento chapado. */
export const AREAS = [
  {
    ord: '01',
    nome: 'Educacional',
    mold: 'mold--aco',
    descricao: 'Aulas internas, dicionário, trilhas e todo o material de estudo do clube.',
  },
  {
    ord: '02',
    nome: 'Projetos',
    mold: 'mold--gelo',
    descricao: 'Os projetos técnicos, do MVP à entrega, com acompanhamento semanal.',
  },
  {
    ord: '03',
    nome: 'Marketing',
    mold: 'mold--noite mold--ciano',
    descricao: 'Presença pública, conteúdo e as redes sociais do Inteli Blockchain.',
  },
  {
    ord: '04',
    nome: 'Pessoas',
    mold: 'mold--vinho mold--ciano',
    descricao: 'Processo seletivo, PDI, acompanhamento e cultura dos membros.',
  },
];

/* `atual` pinta o ano em ciano — é o 5º e último uso do acento (SPEC §3.4). */
export const MARCOS = [
  { ano: '2022', itens: ['Fundação do clube', 'Ethereum SP', 'DEVCON VI'] },
  { ano: '2023', itens: ['Workshop Web3', 'Workshop preparatório', 'Inteli Blockchain Challenge'] },
  { ano: '2024', itens: ['Processo seletivo'] },
  {
    ano: '2025',
    atual: true,
    itens: [
      'Starknet Basecamp',
      '1º Bitcoin Students Day',
      'Tokennation',
      'Lançamento do Docs³',
      'Meridian da Stellar',
      '1º Workshop ZK',
    ],
  },
];

/* As legendas são as palavras do Messias (SPEC-rodada-2 §3.5). As quatro já
   vêm recortadas em 3:2 — o object-fit no CSS é cinto de segurança. */
export const FOTOS = [
  {
    src: workshopCodigo,
    largura: 700,
    altura: 466,
    legenda: 'Workshop com Solange Gueiros',
    alt: 'Sala do Inteli durante o workshop: alunos em fileiras com notebooks abertos, telas de projeção ao fundo e, em primeiro plano, um notebook com código de contrato aberto no editor.',
  },
  {
    src: bootcampEscada,
    largura: 700,
    altura: 467,
    legenda: 'Bootcamp com Solange Gueiros',
    alt: 'Cerca de quarenta e cinco participantes do bootcamp posando na escadaria central do Inteli, com o letreiro da faculdade na parede ao fundo.',
  },
  {
    src: meridianGanhadores,
    largura: 700,
    altura: 466,
    legenda: 'Ganhadores do Meridian 2025',
    alt: 'Dez membros do clube no palco do Meridian 2025 segurando a bandeira do Inteli Blockchain, dois deles com os troféus nas mãos, diante do painel de patrocinadores do evento.',
  },
  {
    src: meridianDelegacao,
    largura: 700,
    altura: 467,
    legenda: 'A delegação no Meridian 2025',
    alt: 'Cerca de quarenta membros do Inteli Blockchain reunidos ao ar livre à beira-mar, de camiseta do clube e crachá, segurando a bandeira do clube.',
  },
];

export const DESTAQUE = {
  src: grupoPosando,
  largura: 1440,
  altura: 679,
  legenda: 'Time 2026',
  alt: 'Cerca de trinta e cinco membros do Inteli Blockchain posando juntos em duas fileiras num auditório do Inteli, com os telões atrás exibindo a marca do clube.',
};

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

export const RODAPE_LINKS = [
  {
    titulo: 'Onde a gente está',
    itens: [
      { texto: 'GitHub', href: 'https://github.com/InteliBlockchain-IBC' },
      { texto: 'LinkedIn', href: 'https://www.linkedin.com/company/inteli-blockchain' },
      { texto: 'Instagram', href: 'https://www.instagram.com/inteli_blockchain' },
    ],
  },
  {
    titulo: 'Para estudar',
    itens: [
      { texto: 'Docs³ — tutoriais', href: 'https://docs3.inteliblockchain.org' },
      { texto: 'Material das aulas', href: 'https://github.com/InteliBlockchain-IBC/educational' },
      { texto: 'Blog', href: 'https://inteliblockchain-ibc.github.io/docs3/blog' },
    ],
  },
];
