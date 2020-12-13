import React from 'react';
import NavigationItem from './NavigationItem';
import classes from './styles.module.css';
import { routers } from './constants';
import Logo from '../../icons/Logo';
import NavigationEscape from './NavigationEscape';
import { useDispatch, useSelector } from 'react-redux';
import { RouterState } from '../../store/reducers/routerReducer';
import { Link } from 'react-router-dom';
import { removeRoute } from '../../store/actions/routerAction';

const Navigation: React.FC = () => {
  const routes = useSelector((state: RouterState) => state.router);
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(removeRoute());
  };

  return (
    <div className={classes.navigation}>
      <div className={classes.navigation__top}>
        {!!routes.length && (
          <Link to={routes[routes.length - 1].route}>
            <NavigationEscape onClick={onClick} />
          </Link>
        )}
        <Logo />
      </div>
      <div className={classes.navigation__divider} />
      <ul className={classes.navigation__list}>
        {routers.map((router, index) => {
          return (
            <NavigationItem
              key={`${router.step}_${index}`}
              route={router.route}
              step={router.step}
              type={router.type}
              onClick={onClick}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Navigation;
