import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./styles.css";
/* React component where show/hide 
  functionality is implemented */
export default function StudentEdu2ndDropdownDetails() {
  return (
    <div >

  <Row>
    <Col sm>
    
    <Form >
        <Form.Label>Name of school/college attending</Form.Label>
      <Form.Select aria-label="Default select example " required>
     
      <option  required>select </option>
      <option value="1">City of London School</option>
      <option value="2">ICS London </option>
    
    </Form.Select>
    </Form>

    </Col>
    <Col sm>
    <Form >
        <Form.Label>What qualification will this course lead to? </Form.Label>
      <Form.Select aria-label="Default select example " required>
     
      <option  required>select </option>
      <option value="1">BTEC</option>
      <option value="2">NVQ</option>
      <option value="3">A levels</option>
    
    </Form.Select>
    </Form>
    </Col>
    <Col sm>
    <Form>
    <Form.Label>Title of the course</Form.Label>
      <Form.Select aria-label="Default select example " required>
     
      <option  required>select </option>
      <option value="1">CS200-CLoud Computing</option>
      <option value="2">PL900-Dynamics365</option>
    
    </Form.Select>

    </Form>
    </Col>
  </Row>
    
      </div>

  );
}