import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';

const PetClinic = () => {
    return ( <>
  
  <div className='main'>
    <Container  className='Cs'>
        <h2>Categories</h2>
      <Row style={{ marginTop:"40px"}}>
        <Col style={{ marginRight:"20px"}}>
        <h3>Pet Clinic</h3>
        <p> The pet clinic offers comprehensive veterinary services, including medical consultations, vaccinations, and surgical procedures, ensuring the well-being of furry companions. The clinic provides compassionate care and support to pets and their owners. 
      <Nav variant="pills" defaultActiveKey="/home" style={{ marginTop:"25px"}}>
      <Nav.Item>
        <Nav.Link href="/home">GetStarted</Nav.Link>
      </Nav.Item>
      </Nav>
        </p>
         </Col>
        <Col style={{marginTop:"-50px",borderRadius:"10%"}}>
        <Image className='cate3' src="https://th.bing.com/th/id/OIP.9ffwJISzT1wfButn3qD2fAHaE9?pid=ImgDet"  />
        </Col>
      </Row>
    </Container>
      <Container>
      <Row>
        <Col>
        <Nav >


      <Nav.Item style={{ marginRight:"6px",backgroundColor:"burlywood"}}>
        <Nav.Link href="/categories">Pet Grooming</Nav.Link>
      </Nav.Item>
      <Nav.Item style={{ marginRight:"6px",backgroundColor:"burlywood"}}>
        <Nav.Link href="/petclinic">Pet Clinic</Nav.Link>
      </Nav.Item>
      <Nav.Item style={{ marginRight:"6px",backgroundColor:"burlywood"}}>
        <Nav.Link href="/petdaycare">Pet DayCare</Nav.Link>
      </Nav.Item>
      <Nav.Item style={{ marginRight:"6px",backgroundColor:"burlywood"}}>
        <Nav.Link href="/pettraining">Pet Training</Nav.Link>
      </Nav.Item>
      
    </Nav>
        </Col>
      </Row>
    </Container>
    </div> 
    
    </> );
}
 
export default PetClinic;