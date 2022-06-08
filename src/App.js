import './App.css';
// import your arrays here
import { discs } from './discs-data';
import { pets } from './pets-data';

import DiscsList from './DiscsList';
import PetsList from './PetsList';

console.log(pets);
console.log(discs);
function App() {
  return (
    <div>
      <DiscsList discs={discs} />
      <hr />
      <PetsList pets={pets} />
    </div>
  );
}

export default App;