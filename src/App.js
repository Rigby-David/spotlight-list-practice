import './App.css';
// import your arrays here
import { discs } from './discs-data';
import { pets } from './pets-data';
import { animals } from './animals-data';

import DiscsList from './DiscsList';
import PetsList from './PetsList';
import AnimalsList from './AnimalsList';

console.log(pets);
console.log(discs);
console.log(animals);
function App() {
  return (
    <div>
      <DiscsList discs={discs} />
      <hr />
      <PetsList pets={pets} />
      <hr />
      <AnimalsList animals={animals} />
    </div>
  );
}

export default App;