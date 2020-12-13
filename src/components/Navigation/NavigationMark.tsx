import React from 'react';
import Mark from '../../icons/Mark';
import classes from './styles.module.css';

const NavigationMark: React.FC = () => {
  return (
    <div className={classes.navigation__mark}>
      <Mark fill="#fff" />
    </div>
  );
};

export default NavigationMark;
