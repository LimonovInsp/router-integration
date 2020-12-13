import React, { useState } from 'react';
import Button from '../../components/Button';
import Headline from '../../components/Headline';
import ServiceProviderSearch from './components/ServiceProviderSearch';
import classes from './styles.module.css';
import ServiceProviderList from './components/ServiceProviderList';
import { clinics } from './constants';
import { useSelector } from 'react-redux';
import { ServiceAppointmentState } from '../../store/reducers/serviceAppointmentReducer';
import { ServiceProviderState } from '../../store/reducers/serviceProviderReducer';

const ServiceProvider: React.FC = () => {
  const [search, setSearch] = useState<string>('');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const service = useSelector((state: ServiceAppointmentState) => state.appointment);
  const clinic = useSelector((state: ServiceProviderState) => state.clinic);

  const onClick = () => {
    console.log(service, clinic);
  };

  const clinicsFiltered = clinics.filter((clinic) => {
    return clinic.city.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  });

  return (
    <div className={classes.service_provider}>
      <Headline headline="Select your service provider" />
      <ServiceProviderSearch value={search} onChange={onChange} />
      <h2 className={classes.service_provider__tag}>All clinics</h2>
      {clinicsFiltered.length ? (
        <ServiceProviderList clinics={clinicsFiltered} />
      ) : (
        <h1 className={classes.service_provider__empty}>Clinic not found</h1>
      )}
      <Button content="Submit" onClick={onClick} disabled={!clinic.id.length} />
    </div>
  );
};

export default ServiceProvider;
