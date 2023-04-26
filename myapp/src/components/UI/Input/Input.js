import React, { forwardRef } from 'react';
import s from './Input.module.css';

const Input = forwardRef((props, ref) => {
  return <input ref={ref} {...props} className={s.input_elem} />;
});

export default Input;
