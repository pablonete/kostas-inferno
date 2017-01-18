import Inferno from 'inferno';

export const MovementsGrid = (props) =>
  <div>
    {[1, 2, 3, 4, 5].map(i => <MovementRow index={i} />)}
  </div>;

const MovementRow = (props) =>
  <div>
    {props.index}
  </div>;