import React from 'react';
import  './TeamCard.css';

const teamCard = [
  {
    id:1,
    image: '/src/assets/person-small1.png',
    name: 'Dominika Wiśniewska',
    info: 'Kobieta od zadań specjalnych. Dominika posiada nie tylko imponującą wiedzę z zakresu kosmetologii ale również doskonale wykorzystuje ją w swoich zdolnościach manualnych.',
  },
  {
    id:2,
    image: './src/assets/person-small3.png',
    name: 'Aleksandra Bojarowicz',
    info: 'Ola ponad wszystko ceni sobie zadowolenie klienta dlatego ustawiają się do niej kolejki. Niebywała kultura osobista i niezwykła gościnność to jej znak rozpoznawczy.',
  },
  {
    id:3,
    image: './src/assets/person-small4.png',
    name: 'Milena Jackowska',
    info: 'Kobieta „błyskawica”, która w ekspresowym tempie wykonuje usługi na najwyższym możliwym poziomie. Z wielką pasją tworzy najpiękniejsze rzęsy w Olsztynie ',
  },
  {
    id:4,
    image: './src/assets/person-small2.png',
    name: 'Kinga Wowk',
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
            <a href='/' className='person-info-link'>
              Czytaj więcej
            </a>
          </div>
        </div>
      ))}
    </>
  );
};

export default TeamCard;
