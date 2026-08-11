import React from 'react';
import Cabeca from '../Cabeca';
import Paineis from '../Paineis';
import { DESTAQUE } from '../dados';

const PAINEIS = [
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
];

export default function QuemConstroi() {
  return (
    <section className="secao sobe">
      {/* A FOTO DE DESTAQUE DA PÁGINA. É a primeira imagem depois da dobra, e é
          ela que sustenta a afirmação do hero: dizer "grande clube universitário"
          custa nada; mostrar o time inteiro custa uma foto. Vem antes do título
          de propósito — a evidência entra antes do argumento. */}
      <figure className="destaque mold">
        <img
          src={DESTAQUE.src}
          width={DESTAQUE.largura}
          height={DESTAQUE.altura}
          alt={DESTAQUE.alt}
        />
        <figcaption>{DESTAQUE.legenda}</figcaption>
      </figure>

      <Cabeca rotulo="Quem constrói" titulo={<>Universitários que <b>entregam</b></>}>
        O clube é feito de alunos do Inteli que constroem de verdade — em
        competição e em casa. Desde 2022 são <strong>25 projetos entregues</strong>,
        rodando em Stellar, Solana, Bitcoin, Celo e Chiliz, ao lado de Ethereum
        Brasil, Chainlink Labs e Starknet Foundation. As duas frentes se
        alimentam: o que a gente aprende no hackathon volta para o ciclo interno,
        e o que amadurece internamente chega mais pronto na próxima competição.
      </Cabeca>

      <Paineis paineis={PAINEIS} />
    </section>
  );
}
