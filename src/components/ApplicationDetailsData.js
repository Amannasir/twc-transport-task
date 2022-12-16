import ListGroup from 'react-bootstrap/ListGroup';
import { FaWpforms } from 'react-icons/fa';
import Badge from 'react-bootstrap/Badge';
import { Container } from 'react-bootstrap';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function ApplicationDetailsData() {
    return (
        <div>


            <Badge bg="danger">  <h5> <FaWpforms /> Step 1 - Application Details</h5></Badge>
            <div className='mt-3 p-4'>
                <p>
                    Before completing this application form please ensure you have read the Transport Policy relevant to your application as well as the guidance notes on applying for travel assistance
                </p>
            </div>

            <Row>

                <Col xs={6}>
                    <div className='mt-3 p-4'>
                        <ListGroup >

                            <ListGroup.Item action variant="light">Home to School Transport Policy (opens new window)</ListGroup.Item>
                            <ListGroup.Item action variant="light">Post 16 Transport Policy. (opens new window)</ListGroup.Item>
                            <ListGroup.Item action variant="light">Post 16 Transport Policy 2021 2022 (opens new window)</ListGroup.Item>


                        </ListGroup>
                        <strong className='text-danger'>Note:</strong>
                        <ListGroup >
                            <ListGroup.Item action variant="primary">We are unable to provide travel assistance to children under primary school age.</ListGroup.Item>
                            <ListGroup.Item action variant="primary">The student, or carer on behalf of the student, should apply for a bursary from the chosen school/college before making an application for travel assistance.</ListGroup.Item>
                            <ListGroup.Item action variant="primary">You should allow up to 20 working days for your application to be processed, however more complex cases may take longer.</ListGroup.Item>
                        </ListGroup>
                    </div>
                </Col>
                <Col xs={6}>
                    <img
                        src='https://ensureias.com/assets/images/student-login-2.svg'
                        className='img-fluid hover-shadow m-auto' 
                        alt=''
                    />


                </Col>
            </Row>



        </div>
    );
}

export default ApplicationDetailsData;