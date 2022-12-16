import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./styles.css";
import InputGroup from 'react-bootstrap/InputGroup';
import Select from 'react-select';
import { useState } from 'react';
/* React component where show/hide 
  functionality is implemented */
export default function Default() {
  const data = [
    {
      value: 1,
      label: "Yes"
    },
    {
      value: 2,
      label: "No"
    },
  
  ];
  // set value for default selection
  const [selectedValue, setSelectedValue] = useState(0);

  // handle onChange event of the dropdown
  const handleChange = e => {
    setSelectedValue(e.value);
  }




  const schoolName = [
    {
      value: 1,
      label: "City School of London"
    },
    {
      value: 2,
      label: "Broklin High"
    },

  ];


  // set value for default selection
  const [selectedSchoolNameChangeValue, setSchoolNameChangeValue] = useState(0);

  // handle onChange event of the dropdown
  const handleSchoolNameChange = e => {
    setSchoolNameChangeValue(e.value);
  }






  // set value for default selection
  const [selectedqualifictaionValue, setSelectedqualifictaionValue] = useState(0);

  // handle onChange event of the dropdown
  const handlequalifictaionChange = e => {
    setSelectedqualifictaionValue(e.value);
  }
  const qualifictaion = [
    {
      value: 1,
      label: "BTEC"
    },
    {
      value: 2,
      label: "NVQ"
    },
    {
      value: 3,
      label: "A levels"
    },
  ];


  return (

    <div >



      <Row>
        <Col sm>
          <Form.Label>Does the student live at a different address than you?</Form.Label>
          <Select
            placeholder="Select Option"
            value={data.find(obj => obj.value === selectedValue)} // set selected value
            options={data} // set list of the data
            onChange={handleChange} // assign onChange function
          />

          {/* {selectedValue && <div style={{ marginTop: 20, lineHeight: '25px' }}>
            <div><b>Selected Value: </b> {selectedValue}</div>
          </div>} */}
        </Col>
        <Col sm>
          <Form.Label >Date admitted to school</Form.Label>
          <Form.Group as={Col} controlId="validationCustomUsername">
            <InputGroup hasValidation>

              <Form.Control
                type="Date"

                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter date
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>


        </Col>
        <Col sm>
          <Form.Label>Name of school/college attending </Form.Label>
          <Select hasValidation
            placeholder="Select Option"
            value={schoolName.find(obj => obj.value === setSchoolNameChangeValue)} // set selected value
            options={schoolName} // set list of the data
            onChange={handleSchoolNameChange} // assign onChange function
          />

          {/* {selectedValue && <div style={{ marginTop: 20, lineHeight: '25px' }}>
            <div><b>Selected Value: </b> {selectedValue}</div>
          </div>} */}
        </Col>
      </Row>
      <Row>
        <Col sm>

          <Form.Label>On what grounds are you applying?</Form.Label>
          <Form.Control.Feedback type="invalid" >Please choose a  name.</Form.Control.Feedback>
          <Select className="w-25"
            placeholder="Select Option"
            value={qualifictaion.find(obj => obj.value === selectedqualifictaionValue)} // set selected value
            options={qualifictaion} // set list of the data
            onChange={handlequalifictaionChange} // assign onChange function
            required
          />

          {/* {selectedValue && <div style={{ marginTop: 20, lineHeight: '25px' }}>
              <div><b>Selected Value: </b> {selectedValue}</div>
            </div>} */}
        </Col>
      </Row>












    </div>

  );
}