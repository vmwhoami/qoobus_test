import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  Row, Button, Form, Col,
} from 'react-bootstrap';
import { setTimeRange } from '../../redux/downloadsReducer/actions';

const ChartFilter = () => {
  const dispatch = useDispatch();
  const downUsers = useSelector((state) => state.downloads);
  const { timeDifference, activeDownloads, downloads } = downUsers;
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const getDifference = (startDate, timeDifference) => {
    if (startDate && timeDifference) {
      return startDate.getTime() - (timeDifference * ((1000 * 3600 * 24)));
    }
    return null;
  };

  const diff = getDifference(startDate, timeDifference);

  const prevDate = new Date(diff);
  const results = downloads.filter((d) => {
    const date = new Date(d.date);
    if (prevDate && startDate) {
      return prevDate <= date && date <= startDate;
    }
    return d;
  });
  const activeUserDownloads = () => results.reduce((a, b) => a + (b.nrUniqUsers || 0), 0);
  const previosUniqUsers = activeUserDownloads();
  const percentage = `${(((activeDownloads - previosUniqUsers) / activeDownloads) * 100).toFixed(2)}%`;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (startDate && endDate) {
      dispatch(setTimeRange(dateRange));
    }
  };
  return (
    <>
      <Form onSubmit={handleSubmit} className="m-4 d-flex justify-content-between">
        <Button type="submit" className="text-uppercase rounded-0 title border-0 py-0">Configure raport</Button>
        <div className="date-select px-4 py-2">
          { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="floatingSelect">
            {timeDifference ? `Last ${timeDifference} days` : 'Available data'}
          </label>
          <DatePicker
            placeholderText="Select a range"
            selectsRange
            startDate={startDate}
            endDate={endDate}
            onChange={(update) => {
              setDateRange(update);
            }}
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
          />
        </div>
      </Form>
      <Row>
        <Col lg={4} sm={6} className="py-4 ml-3 box-shadow">
          <h6>Instalari pe dispozitive active</h6>
          <Col className="d-flex align-items-center">
            <h2 className="mr-2">
              {activeDownloads}
            </h2>
            <span>
              {`${percentage} vs previous ${timeDifference || ''} days`}
            </span>
          </Col>
        </Col>
      </Row>
    </>
  );
};

export default ChartFilter;
