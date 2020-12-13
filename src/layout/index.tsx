import React from 'react';
import Navigation from '../components/Navigation';
import classes from './styles.module.css';

const Layout: React.FC = ({ children }) => (
  <div className={classes.layout}>
    <Navigation />
    <div className={classes.layout__content}>{children}</div>
  </div>
);

export default Layout;
