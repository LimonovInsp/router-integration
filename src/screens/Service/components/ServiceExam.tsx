import React from 'react';
import Appointment from '../../../components/Appointment';
import classes from '../styles.module.css';

interface Props {
  onClick: (id: string) => void;
  cardId: string;
  id: string;
}

const ServiceExam: React.FC<Props> = ({ onClick, id, cardId }) => {
  const handleClick = () => {
    onClick(id);
  };

  return (
    <>
      {cardId === id ? (
        <Appointment />
      ) : (
        <span className={classes.service__card__exam} onClick={handleClick}>
          Choose exam
        </span>
      )}
    </>
  );
};

export default ServiceExam;
