export default function PetItem({ name, type, age }) {
  return <div>
    <p>This is my pet {name}</p>
    <p>They are a {type}</p>
    <p>They are {age} years old</p>
  </div>;
}