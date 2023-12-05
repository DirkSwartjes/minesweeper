import classes from './window.module.css';

interface IWindowProps {
  children: React.ReactNode
};

const Window: React.FC<IWindowProps> = ({children}) =>  (
  <div className={classes.window}>
    {children}
  </div>
);

export default Window;
