import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Button } from 'react-bootstrap';
import { AiOutlineDashboard } from 'react-icons/ai';
import { GrSupport } from 'react-icons/gr';

const LeftBar = () => (
  <Col className="left-bar d-flex flex-column fullheight">
    <Link to="/" className="w-100 my-3">
      <Button variant="light" className="d-flex h-2 align-items-center w-75 ml-4 fs-4 cust-button">
        <AiOutlineDashboard className="mr-2" />
        Dashboard
      </Button>
    </Link>
    <Link to="/support" className="w-100 my-3">
      <Button
        variant="light"
        className="d-flex h-2 align-items-center  ml-4 fs-4 cust-button w-75"
      >
        <GrSupport className="mr-2 text-white" />
        Support
      </Button>
    </Link>
  </Col>
);

export default LeftBar;
