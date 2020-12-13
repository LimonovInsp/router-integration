import React from 'react';
import classes from './styles.module.css';

interface Props {
  headline: string;
}

const Headline: React.FC<Props> = ({ headline }) => {
  return <h1 className={classes.headline}>{headline}</h1>;
};

export default Headline;
