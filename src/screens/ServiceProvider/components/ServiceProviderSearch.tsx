import React from 'react';
import classes from '../styles.module.css';

interface Props {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ServiceProviderSearch: React.FC<Props> = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="City"
      value={value}
      onChange={onChange}
      className={classes.service_provider__search}
    />
  );
};

export default ServiceProviderSearch;
