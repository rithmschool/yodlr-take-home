import React, { useEffect } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { loadUsers } from './reducer/action';
import Nav from './Nav';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);

  return (
    <div className="App">
      <Nav />
    </div>
  );
}

export default App;
