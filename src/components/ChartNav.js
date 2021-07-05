import React from 'react';
import { Row, Button } from 'react-bootstrap';

const ChartNav = () => (
  <Row className="py-2 title">
    <Button className="bg-transparent position-relative rounded-0 border-0 underline
    text-uppercase mx-3 font-weight-bold border-white"
    >
      Chart
    </Button>
    <Button className="bg-transparent rounded-0 border-0
    text-uppercase mx-3 font-weight-bold border-white"
    >
      Report
    </Button>
  </Row>
);

export default ChartNav;
