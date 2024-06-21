import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
const PetDayCare = () => {
    return (<>
    
    <div className='main'>
    <Container  className='Cs'>
        <h2>Categories</h2>
      <Row style={{ marginTop:"40px"}}>
        <Col style={{ marginRight:"20px"}}>
        <h3>Pet DayCare</h3>
        <p> Pet daycare offers a safe and stimulating environment for pets while their owners are away, providing companionship, exercise, and socialization opportunities. Supervised by trained staff, pets engage

      <Nav variant="pills" defaultActiveKey="/home" style={{ marginTop:"25px"}}>
      <Nav.Item>
        <Nav.Link href="/home">GetStarted</Nav.Link>
      </Nav.Item>
      </Nav>
        </p>
         </Col>
        <Col style={{marginTop:"-50px",borderRadius:"30%"}}>
        <Image className="cate3" src="https://th.bing.com/th/id/OIP.ZU3npxxJGAKeVKk0FF2adgHaKQ?pid=ImgDet"/>
        
        </Col>
      </Row>
    </Container>
      <Container>
      <Row>
        <Col>
        <Nav >
      <Nav.Item  style={{ marginRight:"6px ",backgroundColor:"burlywood"}}>
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
    </>  );
}
 
export default PetDayCare;