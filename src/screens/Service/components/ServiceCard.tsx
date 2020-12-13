import React from 'react';
import Fork from '../../../icons/Fork/Fork';
import XRay from '../../../icons/XRay';
import classes from '../styles.module.css';
import { v4 as uuidv4 } from 'uuid';
import ServiceExam from './ServiceExam';
import { useDispatch, useSelector } from 'react-redux';
import { ServiceAppointmentState } from '../../../store/reducers/serviceAppointmentReducer';
import { setAppointment } from '../../../store/actions/serviceAction';

interface Props {
  type: string;
  price: number;
  currency: string;
  tag: string;
  description: string;
  signs: string[];
  id: string;
}

type Icon = {
  [key: string]: React.ReactNode;
};

const ServiceCard: React.FC<Props> = ({ type, price, currency, tag, description, signs, id }) => {
  const identifierGlobal = useSelector((state: ServiceAppointmentState) => state.appointment.id);
  const dispatch = useDispatch();

  const icons: Icon = {
    'x-ray': <XRay />,
    fork: <Fork />,
  };

  const handleChecked = (value: string) => {
    dispatch(
      setAppointment({
        type,
        price,
        currency,
        tag,
        description,
        signs,
        id: value,
      }),
    );
  };

  return (
    <li className={classes.service__card}>
      <div className={classes.service__card__poster} />
      <div className={classes.service__card__content}>
        <div className={classes.service__card__top}>
          <span className={classes.service__card__type}>{type}</span>
          <div className={classes.service__card__cost}>
            <span>{currency}</span>
            <span>{price}</span>
          </div>
        </div>
        <span className={classes.service__card__tag}>{tag}</span>
        <p className={classes.service__card__description}>{description}</p>
        <div className={classes.service__card__bottom}>
          <div className={classes.service__card__signs}>
            {signs.map((sign: string) => {
              return (
                <div key={uuidv4()} className={classes.service__sign}>
                  {icons[sign]}
                </div>
              );
            })}
          </div>
          <ServiceExam id={id} onClick={handleChecked} cardId={identifierGlobal} />
        </div>
      </div>
    </li>
  );
};

export default ServiceCard;
