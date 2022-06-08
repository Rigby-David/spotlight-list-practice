import PetItem from './PetItem';

export default function PetsList({ pets }) {
  return <div>
    {
      pets.map((pet, i) => <PetItem {...pet} key={pet.name + i } />)
    }
  </div>;
}