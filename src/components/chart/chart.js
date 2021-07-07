import React, { useEffect, useState } from 'react';
import {
  Row, Col, Spinner,
} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { Line } from 'react-chartjs-2';
import ReportResults from './reportResults';
import {
  timeDifference, paginate, genkey,
} from '../../utils';
import { setTimeDifference, setActiveDownloads } from '../../redux/downloadsReducer/actions';
import { chartData, options } from '../../chartOptions';

const Chart = () => {
  const dispatch = useDispatch();
  const downUsers = useSelector((state) => state.downloads);
  const { downloads, timeRange, loading } = downUsers;
  const [start, end] = timeRange;
  const startDate = new Date(start);
  const endDate = new Date(end);
  const results = downloads.filter((d) => {
    const date = new Date(d.date);
    if (start && end) {
      return startDate <= date && date <= endDate;
    }
    return d;
  });
  const activeUserDownloads = () => results.reduce((a, b) => a + (b.nrUniqUsers || 0), 0);
  const activeDown = activeUserDownloads();

  useEffect(() => {
    dispatch(setActiveDownloads(activeDown));
  }, [activeDown]);

  useEffect(() => {
    const timeDiff = timeDifference(startDate, endDate);
    dispatch(setTimeDifference(timeDiff));
  }, [start, end]);

  const data = chartData(results, downloads);
  const newData = paginate(results, 50);
  const [page, setPage] = useState(0);
  const [newResults, setNewResults] = useState([]);

  useEffect(() => {
    if (loading) return;
    setNewResults(newData[page]);
  }, [loading, page]);

  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > newData.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
  };
  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 0) {
        prevPage = newData.length - 1;
      }
      return nextPage;
    });
  };

  if (loading) {
    return <Spinner animation="border" variant="success" />;
  }
  return (
    <>
      <Row className="box-shadow mt-5 mx-1 p-2">
        <Line data={data} options={options} />
      </Row>
      <div className="box-shadow mb-5 pb-5">
        <Row className="border-bottom mt-5 mx-1 p-3 text-center">
          <Col><h6>Data</h6></Col>
          <Col><h6>Numar utilizatori total</h6></Col>
          <Col><h6>Numar utilizatori unici</h6></Col>
          <Col><h6>Numar utilizatori unici</h6></Col>
        </Row>
        {newResults.map((result) => <ReportResults key={result.id} report={result} />)}
      </div>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item"><button onClick={prevPage} type="button" className="page-link">Previous</button></li>
          {newData && newData.map((_item, index) => (
            <li key={genkey()} className={`page-item ${page === index ? 'active' : null}`}>
              <button onClick={() => setPage(index)} type="button" className="page-link">{index + 1}</button>
            </li>
          ))}
          <li className="page-item"><button onClick={nextPage} type="button" className="page-link">Next</button></li>
        </ul>
      </nav>
    </>
  );
};

export default Chart;
