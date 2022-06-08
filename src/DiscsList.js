import DiscItem from './DiscItem';

export default function DiscsList({ discs }) {
  console.log(discs);
  return <div>
    {
      discs.map((disc, i) => <DiscItem disc={disc} key={disc + i} />)
    }
  </div>;
}