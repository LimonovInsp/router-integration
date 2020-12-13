import React from 'react';
import Mark from '../../icons/Mark';
import classes from './styles.module.css';

const Appointment: React.FC = () => {
  return (
    <div className={classes.appointment}>
      <Mark />
    </div>
  );
};

export default Appointment;
