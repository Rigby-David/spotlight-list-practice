import './MovieItem.css';

export default function MovieItem({ title, cast, release }) {
  return <div className='movie-item'>
    <p>{title} stars</p>
    <p>{cast}</p>
    <p>{release}</p>
  </div>;
}
