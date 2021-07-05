import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Form, Row, Col, Button,
} from 'react-bootstrap';
import {
  setIdnp, setPhone, setAccessDate, clearFields, clearName,
} from '../../redux/UsersReducer/actions';

const FindUser = () => {
  const dispatch = useDispatch();
  const [fields, setFields] = useState({
    idnp: '',
    phone: '',
    date: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields({
      ...fields,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setIdnp(fields.idnp.trim()));
    dispatch(setPhone(fields.phone.trim()));
    dispatch(setAccessDate(fields.date.trim()));
  };
  const clearField = () => {
    setFields({
      ...fields,
      idnp: '',
      phone: '',
      date: '',
    });
    dispatch(clearFields());
    dispatch(clearName());
  };

  return (
    <>
      <h4>Cauta Uilizator</h4>
      <Form
        noValidate
        onSubmit={handleSubmit}
      >
        <Col lg={8}>
          <Row className="mb-3 d-flex align-items-end">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label className="green">IDNP</Form.Label>
              <Form.Control
                name="idnp"
                onChange={handleChange}
                value={fields.idnp}
                className="rounded-0 border-top-0 border-left-0 border-right-0 shadow-none mt-2 px-0"
                type="text"
                placeholder="nr IDNP"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label className="green">Nr. Telefon</Form.Label>
              <Form.Control
                name="phone"
                onChange={handleChange}
                value={fields.phone}
                className="rounded-0 border-top-0 border-left-0 border-right-0 shadow-none mt-2 px-0"
                type="text"
                placeholder="Nr.Telefon"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label className="green">Data acces</Form.Label>
              <Form.Control
                name="date"
                onChange={handleChange}
                value={fields.date}
                className="rounded-0 border-top-0 border-left-0 border-right-0 shadow-none mt-2 px-0"
                type="date"
              />
            </Form.Group>
            <Form.Group as={Col} className="d-flex" controlId="formGridZip">
              <Button
                onClick={clearField}
                type="button"
                className="w-100 rounded-0 bg-danger text-uppercase border-0"
              >
                curăță
              </Button>
              <Button
                type="submit"
                className="w-100 rounded-0 title text-uppercase border-0"

              >
                Cauta
              </Button>
            </Form.Group>
          </Row>
        </Col>
      </Form>
    </>
  );
};

export default FindUser;
