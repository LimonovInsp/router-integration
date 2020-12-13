import React from 'react';
import ServiceProviderCard from './ServiceProviderCard';
import classes from '../styles.module.css';
import { Clinics } from '../types';

const ServiceProviderList: React.FC<Clinics> = ({ clinics }) => {
  return (
    <ul className={classes.service_provider__list}>
      {clinics.map((clinic) => {
        return (
          <ServiceProviderCard
            key={clinic.id}
            name={clinic.name}
            city={clinic.city}
            location={clinic.location}
            id={clinic.id}
          />
        );
      })}
    </ul>
  );
};

export default ServiceProviderList;
