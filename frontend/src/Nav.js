import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';


const Nav = () => {

  return (
    <nav className="Nav navbar navbar-light bg-light">
      <span className="navbar-brand">Yodlr</span>
      <div>
        <NavLink exact to="/">Home</NavLink>
        <NavLink exact to="/signup">Sign Up</NavLink>
        <NavLink exact to="/admin">Admin</NavLink>
      </div>
    </nav>
  )
}


export default Nav;