import React, { useState, useEffect } from 'react';
import  { CurrentUserContext, UsersContext } from './YodlrContext';
import Routes from './Routes';
import YodlrApi from './api.js';
import './App.css';

function App() {
  // create states for needed information
  const [isLoading, setIsLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState(null);
  

  // get needed information on load if user is stored in localstorage
  useEffect(() => {
    async function onLoad() {
      try{
      const id = localStorage.getItem('id');
      const token = localStorage.getItem('token');
      // if (token && id) {YodlrApi.token = token;
      // } else {throw new Error()}
      YodlrApi.token = token;
      const user = await YodlrApi.getUser(id);
      setCurrentUser({token: token, firstName: user.firstName, lastName: user.lastName, email: user.email});
      const newUsers = await YodlrApi.getUsers();
      console.log(newUsers)
      setUsers(newUsers);
      setIsLoading(false)
      } catch (err) {
        setCurrentUser(false);
      }
    }
    onLoad();
  }, [isLoading]);

  // login user
  async function login(formData) {
    const res = await YodlrApi.login(formData);
    setCurrentUser({token: res, id: formData.id});
    localStorage.setItem('token', res);
    localStorage.setItem('id', formData.id);
    setIsLoading(true);
  }

  // logout user
  async function logout() {
    await YodlrApi.logout();
    setCurrentUser({});
    localStorage.clear();
    setIsLoading(true);
  }

  // register new user
  async function signup (formData) {
    await YodlrApi.signup(formData);
    return (<div><h3>Thank you for registering!</h3></div>);
  }

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
      <UsersContext.Provider value={users}>
        <Routes login={login} logout={logout} signup={signup} />
      </UsersContext.Provider>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
