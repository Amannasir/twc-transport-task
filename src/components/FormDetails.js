
import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Popover from 'react-bootstrap/Popover';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Default from './Default';
import ToggleVisibility from "./ToggleVisibility";
import "./styles.css";
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import StudentEdu2ndDropdownDetails from "./StudentEdu2ndDropdownDetails";
const popover = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">Popover right</Popover.Header>
    <Popover.Body>
      And here's some <strong>amazing</strong> content. It's very engaging.
      right?
    </Popover.Body>
  </Popover>
);



function FormDetails() {

  const [value, setValue] = useState('0');
  const handleSelect = (e) => {
    console.log(e);
    setValue(e)

  }
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };






  return (



    <div className="d-grid gap-2 p-5">
      <Container>
        <Form className=" p-5 w-100" validated={validated} onSubmit={handleSubmit}>
          <Row>

            <Col>
            
              <Form.Group controlId="formFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="First Name" required/>
              </Form.Group>


              <Form.Group className="mb-3" controlId="formDOB">
                <Form.Label>D.O.B</Form.Label>
                <Form.Control type="date" placeholder="DOB" required/>
              </Form.Group>

              <br></br>
              
            
          </Col>
          <Col>
           

              <Form.Group controlId="formLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Last Name" required/>
              </Form.Group>
              <br></br>
              <Form.Label > What type of education will the student be in?</Form.Label>
              {/* <Form.Select aria-label="Default select example " required>

                <option >select </option>
                <option value="1" >Primary school</option>
                <option value="2">Secondary school</option>



              </Form.Select> */}
              <DropdownButton
                alignRight
                title="Dropdown right"
                id="dropdown-menu-align-right"
                onSelect={handleSelect}
                required
              >
                <Dropdown.Item eventKey="1">Primary school</Dropdown.Item>
                <Dropdown.Item eventKey="2">Secondary school</Dropdown.Item>
                <Dropdown.Item eventKey="3">Sixth form at school</Dropdown.Item>
                <Dropdown.Item eventKey="4">Sixth form at college</Dropdown.Item>
                <Dropdown.Item eventKey="5">Further education at college</Dropdown.Item>
                <Dropdown.Item eventKey="6">Post-16 training provider</Dropdown.Item>
              </DropdownButton>


            
          </Col>

        </Row>
        </Form>
      </Container>

      {/* <h4>You selected : {value}</h4> */}
      <div>{value == '1' || value == '2' ? <Default> </Default> : value == '3' || value == '4' || value == '5' || value == '6' ? <StudentEdu2ndDropdownDetails /> : ""}</div>
      {/* <ToggleVisibility>
        <Default></Default>
      </ToggleVisibility> */}

      <Button type="submit">Submit form</Button>  


    </div>
  );
}

export default FormDetails;