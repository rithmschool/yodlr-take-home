import React, { useEffect } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { loadUsers } from './reducer/users/action';
import Nav from './Nav';
import Routes from './Routes';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);

  return (
    <div className="App">
      <Nav />
      <div className="container">
        <Routes />
      </div>
    </div>
  );
}

export default App;
