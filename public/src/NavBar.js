import React, { useContext } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import {CurrentUserContext} from './YodlrContext';
import './NavBar.css';

function NavBar ({ logout }) {
  const currentUser = useContext(CurrentUserContext);

  // display navbar at top of page, provides access to admin page if logged in
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Yodlr</NavbarBrand>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/signup">Register</NavLink>
            </NavItem>
            {(currentUser) ? 
            <NavItem>
              <NavLink href="/admin">Admin</NavLink>
            </NavItem> : 
            <NavItem>
            <NavLink href="/login">Login</NavLink>
          </NavItem>}
          {(currentUser) ? <NavItem>
            <NavLink to="/" onClick={logout}>Logout</NavLink>
          </NavItem> : <div/>}
          </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;