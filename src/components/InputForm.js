import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import StudentEdu2ndDropdownDetails from "./StudentEdu2ndDropdownDetails";
import Default from './Default';
import Alert from 'react-bootstrap/Alert';
import Badge from 'react-bootstrap/Badge';
import Select from 'react-select'
import Container from 'react-bootstrap/Container';
import ApplicationDetailsData from './ApplicationDetailsData';
import { FaWpforms } from 'react-icons/fa';

function InputForm() {
    // const options = [  { value: '1', label: 'Chocolate' },  { value: 'strawberry', label: 'Strawberry' },  { value: 'vanilla', label: 'Vanilla' }]
    const data = [
        {
            value: 1,
            label: "Primary school"
        },
        {
            value: 2,
            label: "Secondary school"
        },
        {
            value: 3,
            label: "Sixth form at school"
        },
        {
            value: 4,
            label: "Sixth form at college"
        },
        {
            value: 5,
            label: "Further education at college"
        },
        {
            value: 6,
            label: "Post-16 training provider"
        }
    ];
    // set value for default selection
    const [selectedValue, setSelectedValue] = useState(0);

    // handle onChange event of the dropdown
    const handleChange = e => {
        setSelectedValue(e.value);
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
    const [value, setValue] = useState('0');
    const handleSelect = (e) => {
        console.log(e);
        setValue(e)

    }

    return (
        <div className='mt-3 p-4'>
            <Badge bg="primary">  <h3> <FaWpforms/> Application form for TWC Travel Assistance</h3></Badge>
            <hr/>
            <ApplicationDetailsData/>
            <Alert variant='primary' className='mt-3'>
                <div className="d-grid gap2 p-5 ">
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="4" controlId="validationCustom01">
                                <Form.Label>First name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="First name"

                                />
                                <Form.Control.Feedback type="invalid" >Please choose a First name.</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                <Form.Label>Last name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Last name"

                                />
                                <Form.Control.Feedback type="invalid" >Please choose a Last name.</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                                <Form.Label>DOB</Form.Label>
                                <InputGroup hasValidation>

                                    <Form.Control
                                        type="Date"

                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please choose a username.
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                        </Row>

                        {/* <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>State</Form.Label>
          <Form.Control type="text" placeholder="State" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Zip</Form.Label>
          <Form.Control type="text" placeholder="Zip" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group> */}

                       




                    






                    



                  
                        <Row>
                            <Col sm>
                                 <Form.Group as={Col} md="mb-3" controlId="validationCustom03">
                            <Form.Label>What type of education will the student be in?</Form.Label>
                            <Select
                            required
                                placeholder="Select Option"
                                value={data.find(obj => obj.value === selectedValue)} // set selected value
                                options={data} // set list of the data
                                onChange={handleChange} // assign onChange function
                            />

                        </Form.Group>
                        
                        {/* <div>{value == '1' || value == '2' ? <Default> </Default> : value == '3' || value == '4' || value == '5' || value == '6' ? <StudentEdu2ndDropdownDetails /> : ""}</div> */}
                   
                    <Form.Control.Feedback type="invalid">
                        Please Select a option
                    </Form.Control.Feedback>
                    </Col>
                            <Col sm>
                                <Form.Group as={Col}  controlId="validationCustom01">
                                <Form.Label>Guardian Name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Guardian name"

                                />
                                <Form.Control.Feedback type="invalid" >Please choose a First name.</Form.Control.Feedback>
                            </Form.Group>
                            </Col>
                            <Col sm>
                                <Form.Group as={Col}  controlId="validationCustom01">
                                <Form.Label>Address</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Address"

                                />
                                <Form.Control.Feedback type="invalid" >Please choose a First name.</Form.Control.Feedback>
                            </Form.Group>
                            </Col>
                        </Row>
                       
                    
                        {<div style={{ marginTop: 20, lineHeight: '25px' }}>
                            {/* <div><b>Selected Value: </b> {selectedValue}</div> */}
                            <div>{selectedValue == '1' || selectedValue == '2' ? <Default> </Default> : selectedValue == '3' || selectedValue == '4' || selectedValue == '5' || selectedValue == '6' ? <StudentEdu2ndDropdownDetails /> : ""}</div>
                        </div>}


                        <Button type="submit" variant='success' className='w-25 mt-3'>Submit Application</Button>
                       
                    </Form>
                    
                </div>
               
            </Alert>



            {/* <Select options={options} /> */}

        </div >
    );
}

export default InputForm;