import React from 'react';
import Headline from '../../components/Headline';
import classes from './styles.module.css';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ServiceAppointmentState } from '../../store/reducers/serviceAppointmentReducer';
import { useLocation } from 'react-router-dom';
import { setRoute } from '../../store/actions/routerAction';
import ServiceList from './components/ServiceList';

const Service: React.FC = () => {
  const location = useLocation();
  const isAppointed = useSelector((state: ServiceAppointmentState) => state.appointment.id);
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(setRoute({ route: location.pathname }));
  };

  return (
    <div className={classes.service}>
      <Headline headline="Select the service" />
      <ServiceList />
      <Link to="/service-provider">
        <Button content="Continue shedule" onClick={onClick} disabled={!isAppointed.length} />
      </Link>
    </div>
  );
};

export default Service;
