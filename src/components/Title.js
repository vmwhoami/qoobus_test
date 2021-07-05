import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'react-bootstrap';

const Title = ({ title }) => (
  <Row className="py-2 border-bottom title">
    <h2 className="text-white ml-3">{title}</h2>
  </Row>
);
Title.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Title;
