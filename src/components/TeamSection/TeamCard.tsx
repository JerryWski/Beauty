import React from 'react';
import  './TeamCard.css';

const teamCard = [
  {
    id:1,
    image: '/person-small4.webp',
    name: 'Agata Ambroziak',
    link: '/team#worker-one',
    info: 'Agata -  dumny właściciel kliniki. Zaraża pozytywną energią i rozsiewa aurę aloha, dlatego wizyta u niej na zabiegu to również rodzaj terapii, po której wracasz do domu uszczęśliwiona/ny.',
  },
  {
    id:2,
    image: '/person-small3.webp',
    name: 'Aleksandra Bojarowicz',
    link: '/team#worker-two',
    info: 'Ola ponad wszystko ceni sobie zadowolenie klienta dlatego ustawiają się do niej kolejki. Niebywała kultura osobista i niezwykła gościnność to jej znak rozpoznawczy.',
  },
  // {
  //   id:3,
  //   image: '/person-small1.webp',
  //   name: 'Jolanta Zienkiewicz',
  //   link: '/team#worker-three',
  //   info: 'Bardzo pozytywne usposobienie spotyka się z ogromną sympatią wśród klientek. Zaangażowana, staranna z imponującą branżową wiedzą. Jeśli trafisz w jej ręce z pewnością pozostaniesz jej wierna.',
  // },
  {
    id:4,
    image: '/person-small2.webp',
    name: 'Kinga Wowk',
    link: '/team#worker-four',
    info: '„Królowa paznokci” to jej drugie imię, ponieważ jej niebywała precyzja jest zachwycająca. Serdeczna i zawsze uśmiechnięta co sprawia, że po wizycie u niej czujesz zastrzyk endorfin',
  },
  {
    id:5,
    image: '/person-small5.webp',
    name: 'Klaudia Kołecka',
    link: '/team#worker-five',
    info: 'Aktywna i uśmiechnięta. Specjalizuje się w pielęgnacji twarzy i ciała, nieustannie poszerzając swoje kompetencje. Jak to się mawia  „stworzona do swojego zawodu”.',
  },
  // {
  //   id:6,
  //   image: '/person-small6.webp',
  //   name: 'Koleta Głowacka',
  //   link: '/team#worker-six',
  //   info: 'Swoją ekspercką wiedzę i umiejętności pozyskała na stanowisku szkoleniowca beuty. Robi piorunujące pierwsze wrażenie i wytrwale je podtrzymuje ponieważ przyciąga klientów jak magnes',
  // },
];

const TeamCard = () => {
  return (
    <>
      {teamCard.map((team) => (
        <div key={team.id} className='person'>
          <div className='person-photo'>
            <img className='person-photo-worker' src={team.image} alt='woman' />
          </div>
          <div className='person-info'>
            <h3 className='person-info-title'>{team.name}</h3>
            <p className='person-info-text'>{team.info}</p>
            <a href={team.link} className='person-info-link'>
              Czytaj więcej
            </a>
          </div>
        </div>
      ))}
    </>
  );
};

export default TeamCard;
