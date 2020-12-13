import React from 'react';
import Arrow from '../../icons/Arrow';
import classes from './styles.module.css';

interface Props {
  onClick: () => void;
}

const NavigationEscape: React.FC<Props> = ({ onClick }) => {
  return (
    <div className={classes.navigation__escape} onClick={onClick}>
      <Arrow />
    </div>
  );
};

export default NavigationEscape;
