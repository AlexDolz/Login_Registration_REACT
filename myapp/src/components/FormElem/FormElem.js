import React, { useRef } from 'react';
import s from './FormElem.module.css';
import { Link } from 'react-router-dom';
import Button from '../UI/Button/Button';
import { useForm } from 'react-hook-form';
import Input from '../UI/Input/Input';

const FormElem = ({ title, link, button, input, infoText, type }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();

  const password = useRef();
  password.current = watch('password', '');

  const emailElem = register('email', {
    required: 'Email must be completed',
    pattern: {
      value:
        /^([A-z])+([0-9-_.])*([A-z0-9-_.])*@([A-z])+([0-9-_.])*([A-z0-9-_.])*[.]([A-z]){2,3}$/,
      message: 'Email is false',
    },
  });

  const passwordElem = register('password', {
    required: 'Password must be completed',
    pattern: {
      value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      message:
        'Password mus container at least 8 letters and at least 1 number',
    },
  });
  const secondPasswordElem =
    type === 'reg'
      ? register('secondPassword', {
          required: 'Password must be completed',
          validate: value =>
            value === password.current || 'Passwords do not match',
        })
      : '';

  const onSubmit = data => {
    console.log(data);
    reset();
  };

  return (
    <div>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <h2>{title}</h2>

        <p>{input.email}</p>
        <Input {...emailElem} />
        <div>
          {errors.email && (
            <p className={s.warning_text}>{errors.email.message}</p>
          )}
        </div>

        {type !== 'reset' && (
          <>
            <p>{input.password}</p>
            <Input {...passwordElem} />
            <div>
              {errors.password && (
                <p className={s.warning_text}>{errors.password.message}</p>
              )}
            </div>
          </>
        )}

        {type === 'reg' && (
          <>
            <p>{input.secondPassword}</p>
            <Input {...secondPasswordElem} />
            <div>
              {errors.secondPassword && (
                <p className={s.warning_text}>
                  {errors.secondPassword.message}
                </p>
              )}
            </div>
          </>
        )}

        <p className={s.info_text}>{infoText}</p>

        {type === 'login' && (
          <Link to='/reset'>
            <p className={s.info_text_forgot}>Forgot Password? Click here!</p>
          </Link>
        )}

        <Button title={button.submit} color='yellow' />
        <Link to={link}>
          <Button title={button.redirect} color='white' />
        </Link>
      </form>
    </div>
  );
};

export default FormElem;
