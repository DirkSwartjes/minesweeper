import classes from './minefield.module.css';

interface IMinefieldProps {
  mines: React.ReactElement[],
  columns: number,
  rows: number
};

const Minefield: React.FC<IMinefieldProps> = ({mines, columns, rows}) =>  {
  const gridStyling = {
    gridTemplateColumns: `repeat(${columns}, 20px)`,
    gridTemplateRows: `repeat(${rows}, 20px)`
  }

  return (
    <div className={classes.minefield} style={gridStyling}>
      {mines}
    </div>
  )
};

export default Minefield;
