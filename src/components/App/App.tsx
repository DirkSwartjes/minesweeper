import { Fragment } from 'react';
import { Window, Minefield, Cell } from '@components';
import classes from './app.module.css';

const App: React.FC = () => {
  const columns = 10;
  const rows = 10;
  const mines: React.ReactElement[] = [];

  for(let i = 0; i < columns * rows; i++) {
    mines.push(<Fragment key={i}><Cell /></Fragment>);
  }

  return (
    <div className={classes.app}>
      <Window>
        <Minefield
          mines={mines}
          columns={columns}
          rows={rows}
        />
      </Window>
    </div>
  )
};

export default App;
