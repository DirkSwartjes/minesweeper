import StatusAlive from '@assets/status/alive.png';
import classes from './status.module.css';

interface IStatusProps {

};

const Status: React.FC<IStatusProps> = ({}) =>  {

  return (
    <div className={classes.status} style={{backgroundImage: `url(${StatusAlive})`}} />
  )
};

export default Status;
