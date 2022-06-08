export default function AnimalItem({ type, from, cute, danger }) {
  return <div> 
    <p>{type}</p>
    <p>{from}</p>
    <p>{cute}</p>
    <p>{danger.lethal}</p>
    <p>{danger.survival}</p>
  </div>;
}
