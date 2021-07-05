import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import UsersRows from './UsersRows';
import { filterer } from '../../utils';
import { setName } from '../../redux/UsersReducer/actions';

const UsersResults = () => {
  const dispatch = useDispatch();
  const reducer = useSelector((state) => state.users);
  const {
    users, idnpSelected, phoneSelected, dateSelected, displayName,
  } = reducer;
  const searchDate = new Date(dateSelected);
  const somdeDate = () => `${searchDate.getDate()}/${searchDate.getMonth() + 1}/${searchDate.getFullYear()}`;
  const reqDate = somdeDate();
  const filtered = filterer(users,
    idnpSelected,
    phoneSelected,
    reqDate,
    dateSelected);
  useEffect(() => {
    if (filtered.length === 1) {
      const { numele, prenumele } = filtered[0];
      dispatch(setName(`${numele} ${prenumele}`));
    }
  }, [filtered.length]);

  return (
    <>
      <Row className="ml-2">
        <h2>
          Resultatele cautarii:
          {' '}
          {displayName}
        </h2>
      </Row>
      <Row className="border-bottom pb-2 ml-1">
        <Col><h6>Numele Prenumele</h6></Col>
        <Col><h6>IDNP</h6></Col>
        <Col><h6>Nr.Telefon</h6></Col>
        <Col><h6>PAN Card</h6></Col>
        <Col><h6>Last Transaction</h6></Col>
      </Row>
      {filtered.map((user) => (
        <UsersRows key={user.id} user={user} />
      ))}
    </>
  );
};

export default UsersResults;
