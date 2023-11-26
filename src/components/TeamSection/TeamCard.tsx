import React from 'react';
import  './TeamCard.css';

const teamCard = [
  {
    id:1,
    image: '/person-small1.png',
    name: 'Dominika Wiśniewska',
    link: '/team#worker-one',
    info: 'Kobieta od zadań specjalnych. Dominika posiada nie tylko imponującą wiedzę z zakresu kosmetologii ale również doskonale wykorzystuje ją w swoich zdolnościach manualnych.',
  },
  {
    id:2,
    image: '/person-small3.png',
    name: 'Aleksandra Bojarowicz',
    link: '/team#worker-two',
    info: 'Ola ponad wszystko ceni sobie zadowolenie klienta dlatego ustawiają się do niej kolejki. Niebywała kultura osobista i niezwykła gościnność to jej znak rozpoznawczy.',
  },
  {
    id:3,
    image: '/person-small4.png',
    name: 'Milena Jackowska',
    link: '/team#worker-three',
    info: 'Kobieta „błyskawica”, która w ekspresowym tempie wykonuje usługi na najwyższym możliwym poziomie. Z wielką pasją tworzy najpiękniejsze rzęsy w Olsztynie ',
  },
  {
    id:4,
    image: '/person-small2.png',
    name: 'Kinga Wowk',
    link: '/team#worker-four',
    info: '„Królowa paznokci” to jej drugie imię, ponieważ jej niebywała precyzja jest zachwycająca. Serdeczna i zawsze uśmiechnięta co sprawia, że po wizycie u niej czujesz zastrzyk endorfin',
  },
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
