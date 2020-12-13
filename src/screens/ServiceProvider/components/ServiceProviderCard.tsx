import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Appointment from '../../../components/Appointment';
import { setClinic } from '../../../store/actions/serviceProviderAction';
import { ServiceProviderState } from '../../../store/reducers/serviceProviderReducer';
import classes from '../styles.module.css';

interface Props {
  name: string;
  city: string;
  location: string;
  id: string;
}

const ServiceProviderCard: React.FC<Props> = ({ name, city, location, id }) => {
  const clinicChosen = useSelector((state: ServiceProviderState) => state.clinic);
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(
      setClinic({
        name,
        city,
        location,
        id,
      }),
    );
  };

  return (
    <li className={classes.service_provider__card} onClick={onClick}>
      <div className={classes.service_provider__card__wrapper}>
        <div className={classes.service_provider__left}>
          <div className={classes.service_provider__card__poster} />
          <span className={classes.service_provider__card__name}>{name}</span>
          <div className={classes.service_provider__card__location}>
            <span className={classes.service_provider__card__seat}>City:</span>
            <span className={classes.service_provider__card__area}>{city}</span>
          </div>
        </div>
        <div className={classes.service_provider__card__right}>
          <div className={classes.service_provider__card__location}>
            <span className={classes.service_provider__card__seat}>Location:</span>
            <span className={classes.service_provider__card__area}>{location}</span>
          </div>
          {clinicChosen.id === id && (
            <div className={classes.service_provider__card__appointment}>
              <Appointment />
            </div>
          )}
        </div>
      </div>
    </li>
  );
};

export default ServiceProviderCard;
