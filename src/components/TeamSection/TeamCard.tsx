import React from 'react';

const teamCard = [
  {
    image: '../../src/assets/person-small.png',
    name: 'Dominika Wiśniewska',
    info: 'Kobieta od zadań specjalnych. Dominika posiada nie tylko imponującą wiedzę z zakresu kosmetologii ale również doskonale wykorzystuje ją w swoich zdolnościach manualnych.',
  },
  {
    image: '../../src/assets/person-small.png',
    name: 'Aleksandra Bojarowicz',
    info: 'Ola ponad wszystko ceni sobie zadowolenie klienta dlatego ustawiają się do niej kolejki. Niebywała kultura osobista i niezwykła gościnność to jej znak rozpoznawczy.',
  },
  {
    image: '../../src/assets/person-small.png',
    name: 'Milena Jackowska',
    info: 'Kobieta „błyskawica”, która w ekspresowym tempie wykonuje usługi na najwyższym możliwym poziomie. Z wielką pasją tworzy najpiękniejsze rzęsy w Olsztynie ',
  },
  {
    image: '../../src/assets/person-small.png',
    name: 'Kinga Wowk',
    info: '„Królowa paznokci” to jej drugie imię, ponieważ jej niebywała precyzja jest zachwycająca. Serdeczna i zawsze uśmiechnięta co sprawia, że po wizycie u niej czujesz zastrzyk endorfin',
  },
];

const TeamCard = () => {
  return (
    <>
      {teamCard.map((team) => (
        <div className='person'>
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
