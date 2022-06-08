import MovieItem from './MovieItem';

export default function MoviesList({ movies }) {
  console.log(movies);
  return <div>
    {
      movies.map((movie, i) => <MovieItem {...movie} key={movie + i}/>)
    }
  </div>;
}