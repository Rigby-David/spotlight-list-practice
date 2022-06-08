import AnimalItem from './AnimalItem';

export default function AnimalsList({ animals }) {
  return <div>
    {
      animals.map((animal, i) => <AnimalItem {...animal} key={animal + i} />)
    }
  </div>;
}