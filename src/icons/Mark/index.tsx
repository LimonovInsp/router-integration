import React from 'react';
import IconProps from '../types';

const Mark: React.FC<IconProps> = ({ fill }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M9 16.1699L4.83 11.9999L3.41 13.4099L9 18.9999L21 6.9999L19.59 5.5899L9 16.1699Z"
      fill={fill}
    />
  </svg>
);

Mark.defaultProps = {
  fill: 'black',
};

export default Mark;
