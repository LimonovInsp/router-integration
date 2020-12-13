import React from 'react';
import { useSelector } from 'react-redux';
import { ServiceAppointmentState } from '../../store/reducers/serviceAppointmentReducer';
import classes from './styles.module.css';
import { useLocation } from 'react-router-dom';
import NavigationMark from './NavigationMark';
import { RouterState } from '../../store/reducers/routerReducer';
import { Link } from 'react-router-dom';

interface Props {
  step: number;
  type: string;
  route: string;
  onClick: () => void;
}

const NavigationItem: React.FC<Props> = ({ step, type, route, onClick }) => {
  const location = useLocation();
  const routes = useSelector((state: RouterState) => state.router);
  const isPassed = routes.find((path) => path.route === route);
  const serviceCurrent = useSelector((state: ServiceAppointmentState) => state.appointment.type);

  const labelModifier = isPassed ? classes.navigation__item__paragraph_passed : '';

  const itemDisabled =
    location.pathname !== route && !isPassed ? classes.navigation__item__disabled : '';

  return (
    <li className={`${classes.navigation__item} ${itemDisabled}`}>
      {isPassed ? (
        <Link to={routes[routes.length - 1].route} onClick={onClick}>
          <NavigationMark />
        </Link>
      ) : (
        <span className={classes.navigation__item__circle}>{step}</span>
      )}
      <div className={classes.navigation__item__content}>
        <p className={`${classes.navigation__item__paragraph} ${labelModifier}`}>{type}</p>
        {isPassed && <span className={classes.navigation__item__service}>{serviceCurrent}</span>}
      </div>
    </li>
  );
};

export default NavigationItem;
