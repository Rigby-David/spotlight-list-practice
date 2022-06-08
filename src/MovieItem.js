export default function MovieItem({ title, cast, release }) {
  return <div>
    <p>{title} stars</p>
    <p>{cast}</p>
    <p>{release}</p>
  </div>;
}
