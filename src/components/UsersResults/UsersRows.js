import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import { formatDate } from '../../utils';

const UsersRows = ({ user }) => {
  const {
    numele, prenumele, idnp, phone, lastTransaction, panCard,
  } = user;
  const displayDate = formatDate(lastTransaction);
  return (
    <Row className="border-bottom py-1 ml-2 ">
      <Col>
        <span className="green">
          {numele}
          {' '}
          {prenumele}
        </span>
      </Col>
      <Col><span>{idnp}</span></Col>
      <Col><span>{phone}</span></Col>
      <Col><span>{panCard}</span></Col>
      <Col><span>{displayDate}</span></Col>
    </Row>
  );
};
UsersRows.propTypes = {
  user: PropTypes.instanceOf(Object).isRequired,

};
export default UsersRows;
