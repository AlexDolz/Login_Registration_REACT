import React from 'react';
import s from './Button.module.css';

const Button = ({ title, color, onClick }) => {
  return (
    <button onClick={onClick} className={`${s.button_elem} ${s[color]}`}>
      {title}
    </button>
  );
};

export default Button;
