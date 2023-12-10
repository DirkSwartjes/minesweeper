import { Status } from '@components';
import classes from './scorebar.module.css';

interface IScoreBarProps {

};

const ScoreBar: React.FC<IScoreBarProps> = ({}) =>  {

  return (
    <div className={classes.scorebar}>
      <Status />
    </div>
  )
};

export default ScoreBar;
