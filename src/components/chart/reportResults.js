import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import { formatDate } from '../../utils';

const ReportResults = ({ report }) => {
  const { nrOfUsers, nrUniqUsers, date } = report;
  const formattedDate = formatDate(date, true);
  return (
    <Row className="border-bottom mx-3 text-center">
      <Col className="py-2"><span>{formattedDate}</span></Col>
      <Col className="py-2"><span>{nrOfUsers}</span></Col>
      <Col className="py-2"><span>{nrUniqUsers}</span></Col>
      <Col className="py-2"><span>{nrUniqUsers}</span></Col>
    </Row>
  );
};

ReportResults.propTypes = {
  report: PropTypes.instanceOf(Object).isRequired,
};
export default ReportResults;
