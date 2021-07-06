import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TiChartPie } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import {
  Navbar, Nav, Button,
} from 'react-bootstrap';
import { setLoggedInUser, setLoggedIn } from '../../redux/regAuth/regActions';

const NavBar = () => {
  const dispatch = useDispatch();
  const isLoggedInd = useSelector((state) => state.register.isLoggedIn);
  const signOut = () => {
    dispatch(setLoggedInUser(null));
    dispatch(setLoggedIn(false));
  };
  return (
    <Navbar variant="green">
      <Navbar.Brand className="logo d-flex ml-4 text-white" href="#home"><TiChartPie /></Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link className="text-white">VMWHOAMI</Nav.Link>
      </Nav>

      {isLoggedInd ? (
        <Button
          type="button"
          onClick={() => signOut()}
          className="text-white text-uppercase mr-4 rounded-0 border border-white btn bg-transparent"
        >
          Logout
        </Button>
      ) : (
        <>
          <Link className="text-white text-uppercase mr-4" to="/login">Login</Link>
          <Link className="text-white text-uppercase mr-4" to="/register">Register</Link>
        </>
      )}

    </Navbar>
  );
};

export default NavBar;
