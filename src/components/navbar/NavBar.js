import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { TiChartPie } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import {
  Navbar, Nav, Button,
} from 'react-bootstrap';
import { setLoggedInUser, setLoggedIn } from '../../redux/regAuth/regActions';
import { LogoAnimation, LogOutBtnAnimation } from '../../aninamtionOptions/navbarAnim';

const NavBar = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.register.isLoggedIn);
  const signOut = () => {
    dispatch(setLoggedInUser(null));
    dispatch(setLoggedIn(false));
  };
  return (
    <Navbar variant="green">
      <Navbar.Brand className="logo d-flex ml-4 text-white" href="#home">
        {' '}
        <motion.div
          variants={LogoAnimation}
          initial={isLoggedIn ? 'rotated' : 'nonrotated'}
          animate={isLoggedIn ? 'logged' : 'nonLogged'}
        >
          <TiChartPie />
        </motion.div>
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link className="text-white">
          <motion.div>
            VMWHOAMI
          </motion.div>
        </Nav.Link>
      </Nav>

      {isLoggedIn ? (
        <motion.div
          className="mr-4"
          variants={LogOutBtnAnimation}
          whileHover="hover"
        >
          <Button
            type="button"
            onClick={() => signOut()}
            className="text-white text-uppercase rounded-0 border border-white btn bg-transparent"
          >
            Logout
          </Button>
        </motion.div>
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
