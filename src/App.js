import './App.css';
// import your arrays here
import { discs } from './discs-data';
import { pets } from './pets-data';
import { animals } from './animals-data';
import { movies } from './movies-data';

import DiscsList from './DiscsList';
import PetsList from './PetsList';
import AnimalsList from './AnimalsList';
import MoviesList from './MoviesList';

console.log(pets);
console.log(discs);
console.log(animals);
console.log(movies);
function App() {
  return (
    <div>
      <DiscsList discs={discs} />
      <hr />
      <PetsList pets={pets} />
      <hr />
      <AnimalsList animals={animals} />
      <hr />
      <MoviesList movies={movies} />
    </div>
  );
}

export default App;