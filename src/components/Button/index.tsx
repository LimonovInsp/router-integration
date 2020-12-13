import React from 'react';
import classes from './styles.module.css';

interface Props {
  content: string;
  disabled: boolean;
  onClick: () => void;
}

const Button: React.FC<Props> = ({ content, disabled, onClick }) => {
  return (
    <button className={classes.button} onClick={onClick} disabled={disabled} type="button">
      {content}
    </button>
  );
};

export default Button;
