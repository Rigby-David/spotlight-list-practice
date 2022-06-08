import MovieItem from './MovieItem';
import './App.css';

export default function MoviesList({ movies }) {
  console.log(movies);
  return <div className='movie-div'>
    {
      movies.map((movie, i) => <MovieItem {...movie} key={movie + i}/>)
    }
  </div>;
}