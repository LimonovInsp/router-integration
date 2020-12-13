import React from 'react';
import ServiceCard from './ServiceCard';
import classes from '../styles.module.css';
import { services } from '../constants';

const ServiceList: React.FC = () => {
  return (
    <ul className={classes.service__list}>
      {services.map((service) => {
        return (
          <ServiceCard
            key={service.id}
            type={service.type}
            price={service.price}
            currency={service.currency}
            tag={service.tag}
            description={service.description}
            signs={service.signs}
            id={service.id}
          />
        );
      })}
    </ul>
  );
};

export default ServiceList;
