import React from 'react';
import Cabeca from '../Cabeca';
import Paineis from '../Paineis';

const PAINEIS = [
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
];

export default function Ritmo() {
  return (
    <section className="secao sobe">
      <Cabeca rotulo="O ritmo" titulo={<>A disciplina por <b>trás</b></>}>
        Nada disso sai de improviso. São duas cadências fixas, que rodam desde
        2022 e não se atropelam.
      </Cabeca>
      <Paineis paineis={PAINEIS} />
    </section>
  );
}
