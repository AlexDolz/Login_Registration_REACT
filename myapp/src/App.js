import React, { useEffect, useState } from 'react';
import './App.css';
import Button from './components/UI/Button/Button';
import { Link } from 'react-router-dom';
import Modal from './components/Modal/Modal';

const App = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.addEventListener('popstate', () => setActive(false));
  });

  return (
    <div className='app'>
      <Link to={'/login'}>
        <Button
          onClick={() => setActive(true)}
          title={'Login / Registration'}
          color={'yellow'}
        />
      </Link>
      <Modal setActive={setActive} active={active} />
    </div>
  );
};

export default App;
