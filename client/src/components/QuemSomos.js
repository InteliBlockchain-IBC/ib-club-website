import React from 'react';
import inteliLogo from './imgs/inteliblcok.jpg';
import francisco from './imgs/franciscofilho.jpg';
import { useTranslation } from '../i18n';

const QuemSomos = () => {
  const { t } = useTranslation();
  const membrosAtivos = [
    {
      nome: "Vinicius Testa",
      funcao: "Presidente",
      foto: "https://media.licdn.com/dms/image/v2/D4E03AQGUqyOXV2R4jw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1728412680730?e=1756944000&v=beta&t=0-5CwxAivSaJhXSqmYisxWM9h4st1tmQ3ra5MVFeyWM",
      linkedin: "https://www.linkedin.com/in/vinicius-testa-passos/"
    },
    {
      nome: "Giovanna Britto",
      funcao: "Presidente",
      foto: "https://media.licdn.com/dms/image/v2/D5603AQEhNNprd7IbxA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1710704389038?e=1756944000&v=beta&t=0zYSUMRMX2nxSkb1nPh9EfwuiC0_QYyuI85EjBmors8",
      linkedin: "https://www.linkedin.com/in/giovanna-britto/"
    },
    {
      nome: "Daniel Gonçalves",
      funcao: "Diretor de Relações Externas",
      foto: "https://media.licdn.com/dms/image/v2/D4D03AQElr3HLsXZZUw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1723344865206?e=1756944000&v=beta&t=wETIb22UUO6bl8SS98Ya5ugPhgqzQjTsZsZ1zEu0wb0",
      linkedin: "https://www.linkedin.com/in/danielaraujogonncalves/"
    },
    {
      nome: "Victor Garcia",
      funcao: "Membro",
      foto: "https://media.licdn.com/dms/image/v2/D4D03AQFjLdkmaOoMag/profile-displayphoto-shrink_800_800/B4DZb35c7KGgAg-/0/1747915755719?e=1756944000&v=beta&t=6VyqV9iLDmkiH2Yw219NjTS1l_Ujp3jbFKjxnQOgqOY",
      linkedin: "https://www.linkedin.com/in/victor-garcia-dos-santos/"
    },
    {
      nome: "Kethlen Martins",
      funcao: "Membro",
      foto: "https://media.licdn.com/dms/image/v2/D4D03AQGGTYx6qQ70NQ/profile-displayphoto-shrink_800_800/B4DZZtPc0EGsAg-/0/1745589490328?e=1756944000&v=beta&t=5MU4gLCoXZo4cu7mdTPgI38urcBpuSPJISHlS6ROAQU",
      linkedin: "https://www.linkedin.com/in/kethlenmartins/"
    },
    {
      nome: "Marco Ruas",
      funcao: "Membro",
      foto: "https://media.licdn.com/dms/image/v2/D4E03AQF8-iAVEnkOfg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1710803425000?e=1756944000&v=beta&t=IWBgxZp84fikHndnuPptB0gDIk8ZMpIE9fjxTZqiMlk",
      linkedin: "https://www.linkedin.com/in/marcoruas/"
    },
    {
      nome: "Messias Olivindo",
      funcao: "Membro",
      foto: "https://media.licdn.com/dms/image/v2/D4D03AQHp5KG5dVEQWw/profile-displayphoto-shrink_800_800/B4DZUbfJtjG8Ak-/0/1739922907012?e=1756944000&v=beta&t=SpGj3fpzKimqDCyluYJNpKjilJu4iUwWssNosspc7EY",
      linkedin: "https://www.linkedin.com/in/messias-olivindo/"
    },
    {
      nome: "Mirela Bianchi",
      funcao: "Membro",
      foto: "https://media.licdn.com/dms/image/v2/D4D03AQEA5rbZcw5EoQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1703695250753?e=1756944000&v=beta&t=ztyT1I-CFSkF624wGMUm3tIsjHXOF-3FaHcxLstc8e0",
      linkedin: "https://www.linkedin.com/in/mirela-bianchi-608601254/"
    },
    {
      nome: "Livia Cavalcanti",
      funcao: "Membro",
      foto: "https://media.licdn.com/dms/image/v2/D4D03AQFKFNLH_HbLLw/profile-displayphoto-shrink_800_800/B4DZUUxr5XHYAc-/0/1739810325486?e=1756944000&v=beta&t=aflTh64K1c9OthE00bRxN7IXSgw-WVioKBCbtPoB1OQ",
      linkedin: "https://www.linkedin.com/in/liviacavalcantioliveira/"
    },
    {
      nome: "Lorena Garcia",
      funcao: "Membro",
      foto: "https://media.licdn.com/dms/image/v2/D4E03AQE87Ua83B0SZw/profile-displayphoto-shrink_800_800/B4EZVnqJFcH0Ac-/0/1741200856232?e=1756944000&v=beta&t=59uOeja5fkBL5co2NMBhfL7p0P0aAEP9whyayMJ9gLk",
      linkedin: "https://www.linkedin.com/in/llorengarcia/"
    },
    {
      nome: "Maria Arielly",
      funcao: "Membro",
      foto: "https://media.licdn.com/dms/image/v2/D4D03AQGV5mZsfjQCgA/profile-displayphoto-shrink_800_800/B4DZcT7_dUGkAc-/0/1748386183565?e=1756944000&v=beta&t=7D1b_ZvHooKMp_0aGRJb5YxzUSQ-Y18xouQw7NUci2Q",
      linkedin: "https://www.linkedin.com/in/maria-arielly/"
    },
    {
      nome: "Giovanna Neves",
      funcao: "Membro",
      foto: "https://media.licdn.com/dms/image/v2/D5603AQFksP2NHvPz4A/profile-displayphoto-shrink_800_800/B56ZaSIsyPHsAc-/0/1746208476886?e=1756944000&v=beta&t=fV6Kv1x4FZpfYERESnU7Eo9SVqE-Mp35xWg4es1bdKQ",
      linkedin: "https://www.linkedin.com/in/giovanna-neves-rodrigues/"
    },
    {
      nome: "Pedro Jorge",
      funcao: "Membro",
      foto: "https://media.licdn.com/dms/image/v2/D4D03AQG3ILxvJmR-lQ/profile-displayphoto-shrink_800_800/B4DZUVWJRDHwAc-/0/1739819882533?e=1756944000&v=beta&t=kzeiZgNj4PvaJbPRl8vqHJfG5iBWfYL3Z6ER8ESo_mM",
      linkedin: "https://www.linkedin.com/in/pedro-jorge-alves/"
    },
    {
      nome: "Francisco Filho",
      funcao: "Membro",
      foto: `${francisco}`
    },
    {
      nome: "Davi Duarte",
      funcao: "Membro",
      foto: "https://media.licdn.com/dms/image/v2/D4D03AQHuktAytEyaGw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1708210393339?e=1756944000&v=beta&t=nIgqN_55IBMY0HraMge7WjEmrFH0QmrRXxJN414tuXw",
      linkedin: "https://www.linkedin.com/in/daviduarte/"
    },
    {
      nome: "Maria Eduarda",
      funcao: "Membro",
      foto: "https://media.licdn.com/dms/image/v2/D4E03AQHLx3TxYnYr9w/profile-displayphoto-shrink_800_800/B4EZUwT7z3GgAc-/0/1740272287481?e=1756944000&v=beta&t=Gna_8v3ZFg9PIrHdNv3F3pd1xJoT78dcjKlF5feFZaU",
      linkedin: "https://www.linkedin.com/in/mariaeduardaoliveiraa/"
    },
    {
      nome: "Maria Vitória",
      funcao: "Membro",
      foto: "https://media.licdn.com/dms/image/v2/D4D03AQHsvfMIc01Ojg/profile-displayphoto-shrink_800_800/B4DZWK3TvyHIAc-/0/1741791510590?e=1756944000&v=beta&t=mElj0QJqP5N0jgczNBeX33PiB_sIy9olP0rQhWzJUhk",
      linkedin: "https://www.linkedin.com/in/maria-vit%C3%B3ria-dos-santos/"
    },
    {
      nome: "Leunam Sousa",
      funcao: "Membro",
      foto: "https://media.licdn.com/dms/image/v2/D4D03AQEsUIvwIj1yww/profile-displayphoto-shrink_800_800/B4DZbOTzbxGwAg-/0/1747218022100?e=1756944000&v=beta&t=6mldpeXxvORSNxadGaevydQ3vbbEijiCIOFaWE16ndU",
      linkedin: "https://www.linkedin.com/in/leunam/"
    },
    {
      nome: "Gustavo Costa",
      funcao: "Membro",
      foto: "https://media.licdn.com/dms/image/v2/D4D03AQEuvRMTPnXlcQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1728386807104?e=1756944000&v=beta&t=W4_7Vlszb6mu49sBv4tWf-7MQcRXYgnNgh-Y-zzOWT0",
      linkedin: "https://www.linkedin.com/in/gustavo-dacosta/"
    },
    {
      nome: "Davi Abreu",
      funcao: "Membro",
      foto: "https://media.licdn.com/dms/image/v2/D4D03AQEpxucBy_KJCQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1720059817581?e=1756944000&v=beta&t=4ZD3E_8vkjO7P57c2wIUy-w4gVdViro28iMC2z76JZw",
      linkedin: "https://www.linkedin.com/in/davi-abreu-da-silveira/"
    },
  ];

  const exMembros = [
    {
      nome: "Paulo Evangelista",
      funcao: "Co-Fundador",
      foto: "https://media.licdn.com/dms/image/v2/D4D03AQF08yrjyaHdfA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1712272657106?e=1756944000&v=beta&t=olurtjWndQXN-mbhc_avi4a_yi_Y9yq7Er7Rq1RTBXQ",
      linkedin: "https://www.linkedin.com/in/paulo-evangelista/"
    },
    {
      nome: "Lyorrei Shono",
      funcao: "Co-Fundador",
      foto: "https://media.licdn.com/dms/image/v2/C4D03AQGFg5YFfbx_xw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1659193121458?e=1756944000&v=beta&t=6nYvlA6aZ88ewLC9WVMqhf1IYS1-4Uf8wduWPZxQ4Bc",
      linkedin: "https://www.linkedin.com/in/lyorrei/"
    },
    {
      nome: "Abner Silva",
      funcao: "Co-Fundador",
      foto: "https://media.licdn.com/dms/image/v2/D4D03AQE1TqbwOY1yZw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1722540851356?e=1756944000&v=beta&t=iHyoxv5JnIg4YZXajNLzvBdUfsrXd_DBdvNkRh_v8cI",
      linkedin: "https://www.linkedin.com/in/abner-silva-barbosa-8a3542225/"
    },
    {
      nome: "Henrique Lemos",
      funcao: "Co-Fundador",
      foto: "https://media.licdn.com/dms/image/v2/D4D03AQFzDk8AX1Ybww/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1728583548588?e=1756944000&v=beta&t=kG0o6YgEPuyCkWE51XMAeHpm7kfpT4oNv7HFVcwVSkc",
      linkedin: "https://www.linkedin.com/in/henriquelfmatias/"
    },
    {
      nome: "João Carazzato",
      funcao: "Co-Fundador",
      foto: "https://media.licdn.com/dms/image/v2/D4D03AQE9rWK6h9PV7Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1697737707973?e=1756944000&v=beta&t=QWz_B4WlRP8Djaq3mIj6vg-OltjJLLJUVGTnlLQwCYM",
      linkedin: "https://www.linkedin.com/in/joaocarazzato/"
    },
    {
      nome: "Yago Phellipe",
      funcao: "Ex-Presidente",
      foto: "https://media.licdn.com/dms/image/v2/D4D03AQFAtG5UxxiPgA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1696286109030?e=1756944000&v=beta&t=phNk9rtaMXtEP18lsF5U3WJ5y2UBUQZM2b9qmBtFjhA",
      linkedin: "https://www.linkedin.com/in/yago-phellipe/"
    },
    {
      nome: "Hugo Noyma",
      funcao: "Ex-Presidente",
      foto: "https://media.licdn.com/dms/image/v2/D4D03AQG8_RlD-Qs7qA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1683156942667?e=1756944000&v=beta&t=EF3dzoi-zstlwylRfi-d3jNShKzm9qnZgJ9h6UI08yQ",
      linkedin: "https://www.linkedin.com/in/hugo-noyma/"
    },
    {
      nome: "Rafael Coutinho",
      funcao: "Ex-Presidente",
      foto: "https://media.licdn.com/dms/image/v2/D4D03AQFZLnTySOVCtA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1682441582735?e=1756944000&v=beta&t=oCGkIVjIuRUR_y9-UcVWsBaoADUK-8wxGwfWkyCLYpQ",
      linkedin: "https://www.linkedin.com/in/rafael-coutinho2004/"
    },
    {
      nome: "Murilo Couto",
      funcao: "Ex-Diretor de Marketing",
      foto: "https://media.licdn.com/dms/image/v2/D4E03AQFIMn-odBbfEg/profile-displayphoto-crop_800_800/B4EZhiB.BAGwAU-/0/1753991340918?e=1756944000&v=beta&t=oEwrvmkfDLirAlgDspqYAhNbdtK_lq5CJ5WXBFTLzwY",
      linkedin: "https://www.linkedin.com/in/murilo-couto-oliveira/"
    },
    {
      nome: "Henrique Marlon",
      funcao: "Ex-Diretor de Relações Externas",
      foto: "https://media.licdn.com/dms/image/v2/D4D03AQGDiz0i9sfhew/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1703971977459?e=1756944000&v=beta&t=Y_YcP5tFovHQZp93jMIbDxaWTvegi3WWvVXuwppysAo",
      linkedin: "https://www.linkedin.com/in/henriquemarlon/"
    },
    {
      nome: "Emanuele Morais",
      funcao: "Ex-Membro",
      foto: "https://media.licdn.com/dms/image/v2/D4D03AQF0-Y-DLeB7gQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1731711004310?e=1756944000&v=beta&t=J9amW0YJfDfi9FEo3_q3YT7ZULp_ToystBALt2czLtE",
      linkedin: "https://www.linkedin.com/in/emanuele-morais/"
    },
    {
      nome: "Bianca Cassemiro",
      funcao: "Ex-Membro",
      foto: "https://media.licdn.com/dms/image/v2/D4D03AQFFaef8n1Kwpg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1695507611304?e=1756944000&v=beta&t=qlo3KChkEFj-tS7uNbeXQWb5NvuATYnjkW75fDISZB4",
      linkedin: "https://www.linkedin.com/in/bianca-cassemiro/"
    },
    {
      nome: "Marcos Teixeira",
      funcao: "Ex-Membro",
      foto: "https://media.licdn.com/dms/image/v2/D4D03AQE98-0GnOzjtg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1683762873493?e=1756944000&v=beta&t=Kys0BbzrOEOiPB3RVKpIXQ5dBYj8lAxY6cFDjQTcrEg",
      linkedin: "https://www.linkedin.com/in/marcos-teixeira-37676a24a/"
    },
    {
      nome: "Ian Pereira",
      funcao: "Ex-Membro",
      foto: "https://media.licdn.com/dms/image/v2/D5603AQHNBBIBUsCNVQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1708359490553?e=1756944000&v=beta&t=bSj2B9-kYqdZWkG86kfSvnNk7EIm3Aw8F8FZMhx1kRs",
      linkedin: "https://www.linkedin.com/in/ian-pereira-simao/"
    },
    {
      nome: "Isabelle Dantas",
      funcao: "Ex-Membro",
      foto: "https://media.licdn.com/dms/image/v2/D4D03AQHwUNL74kCtJg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1725482980705?e=1756944000&v=beta&t=1YmoLxHdS-FRU75X4daqe138sxYb05xTSiQVdBq_UXA",
      linkedin: "https://www.linkedin.com/in/iisabelledantas/"
    },
    {
      nome: "Vinicius Ibiapina",
      funcao: "Ex-Membro",
      foto: "https://media.licdn.com/dms/image/v2/D4D03AQHzC4gBmXI9Gg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1708378799274?e=1756944000&v=beta&t=VyoZkyWdNABHlIiUxeTuE-1b-KEdQgAXAc9tcI020Kc",
      linkedin: "https://www.linkedin.com/in/vinicius-ibiapina/"
    },
    {
      nome: "Leonardo Ogata",
      funcao: "Ex-Membro",
      foto: "https://media.licdn.com/dms/image/v2/D4D03AQHx9xLPmHToJQ/profile-displayphoto-shrink_800_800/B4DZWNumT8HIAg-/0/1741839558467?e=1756944000&v=beta&t=qf6Xa9pyQ0cAG6bJACGKjQoIOPZNl_FoJPoRBR8veNg",
      linkedin: "https://www.linkedin.com/in/leonardo-ogata-983b032b5/"
    },
    {
      nome: "Gabrio Lina",
      funcao: "Ex-Membro",
      foto: "https://media.licdn.com/dms/image/v2/D4D03AQGONP4HE5zGAg/profile-displayphoto-shrink_800_800/B4DZao0RH2HwAc-/0/1746588997659?e=1756944000&v=beta&t=NjywjaLnbWiD5Ml1iaYrPG8edEGeMRV_2Jbogt2MeZI",
      linkedin: "https://www.linkedin.com/in/gabrio-lina-17ba60205/"
    },
    {
      nome: "Alexandre Fonseca",
      funcao: "Ex-Membro",
      foto: "https://media.licdn.com/dms/image/v2/D4D03AQFeZxpc6jYiSA/profile-displayphoto-shrink_800_800/B4DZbLHCxkGUAk-/0/1747164344545?e=1756944000&v=beta&t=pr2ccpcHgUSex42k0CAz24heforVLVxbSmoG1SjAisA",
      linkedin: "https://www.linkedin.com/in/alexandrefonseca00/"
    },
    {
      nome: "Enya Oliveira",
      funcao: "Ex-Membro",
      foto: "https://media.licdn.com/dms/image/v2/D4D03AQEG_jyedakqJw/profile-displayphoto-shrink_800_800/B4DZaxG5HcG4Ag-/0/1746728096981?e=1756944000&v=beta&t=uyeXoTxXHoMMCU5aLlM6e7y3jZt1gRlGX0M0hvflDr0",
      linkedin: "https://www.linkedin.com/in/enya-oliveira/"
    },
    {
      nome: "Marcelo Maia",
      funcao: "Ex-Membro",
      foto: "https://media.licdn.com/dms/image/v2/D4D03AQGUbtCNEfjXjQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718265539850?e=1756944000&v=beta&t=c3qI-jPoTvpHrcgFwz1bn1P0XhAL4ICuBAVZjyw0CrA",
      linkedin: "https://www.linkedin.com/in/marcelomaiaf/"
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero quem-somos-hero">
        <div className="hero-content">
          <h1 className="hero-title">
            {t('about.hero_title').split(' ')[0]} <span>{t('about.hero_title').split(' ')[1] || ''}</span>
          </h1>
          <p className="hero-subtitle">{t('about.hero_subtitle')}</p>
          <p className="hero-description">{t('about.hero_description')}</p>
        </div>
      </section>

      {/* Membros Ativos Section */}
      <section className="membros-section">
        <div className="container">
          <div className="membros-content">
            <h2 className="section-title">{t('about.members_title')}</h2>
            <p className="section-subtitle">{t('about.members_subtitle')}</p>
            
            <div className="membros-grid">
              {membrosAtivos.map((membro, index) => (
                membro.linkedin ? (
                  <a 
                    key={index} 
                    href={membro.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="membro-card"
                  >
                    <div className="membro-foto">
                      <img src={membro.foto} alt={membro.nome} />
                      <div className="linkedin-overlay">
                        <i className="fab fa-linkedin"></i>
                      </div>
                    </div>
                    <h3 className="membro-nome">{membro.nome}</h3>
                    <p className="membro-funcao">{membro.funcao}</p>
                  </a>
                ) : (
                  <div key={index} className="membro-card">
                    <div className="membro-foto">
                      <img src={membro.foto} alt={membro.nome} />
                    </div>
                    <h3 className="membro-nome">{membro.nome}</h3>
                    <p className="membro-funcao">{membro.funcao}</p>
                  </div>
                )
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ex Membros Section */}
      <section className="membros-section ex-membros">
        <div className="container">
          <div className="membros-content">
            <h2 className="section-title">{t('about.ex_members_title')}</h2>
            <p className="section-subtitle">{t('about.ex_members_subtitle')}</p>
            
            <div className="membros-grid">
              {exMembros.map((membro, index) => (
                membro.linkedin ? (
                  <a 
                    key={index} 
                    href={membro.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="membro-card ex-membro"
                  >
                    <div className="membro-foto">
                      <img src={membro.foto} alt={membro.nome} />
                      <div className="linkedin-overlay">
                        <i className="fab fa-linkedin"></i>
                      </div>
                    </div>
                    <h3 className="membro-nome">{membro.nome}</h3>
                    <p className="membro-funcao">{membro.funcao}</p>
                  </a>
                ) : (
                  <div key={index} className="membro-card ex-membro">
                    <div className="membro-foto">
                      <img src={membro.foto} alt={membro.nome} />
                    </div>
                    <h3 className="membro-nome">{membro.nome}</h3>
                    <p className="membro-funcao">{membro.funcao}</p>
                  </div>
                )
              ))}
            </div>
          </div>
        </div>
      </section>

              {/* Footer */}
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-logo">
              <img src={inteliLogo} alt="Inteli Blockchain" className="footer-logo-img" />
            </div>
            <p className="footer-text">{t('footer.text')}</p>
                     <div className="footer-social">
           <a href="https://github.com/InteliBlockchain-IBC" target="_blank" rel="noopener noreferrer" className="social-icon github">
             <i className="fab fa-github"></i>
           </a>
              <a href="https://www.linkedin.com/company/inteli-blockchain" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/inteli_blockchain" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
            <p className="footer-copyright">{t('footer.copyright')}</p>
          </div>
        </footer>
    </>
  );
};

export default QuemSomos; 