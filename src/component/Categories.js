import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
const Categories = () => {
    return ( <>
    
    <div className='main'>
    <Container  className='Cs'>
        <h2>Categories</h2>
      <Row style={{ marginTop:"40px"}}>
        <Col style={{ marginRight:"20px"}}>
        <h3>Pet Grooming</h3>
        <p> Pet Grooming is the process of maintaining your pet's hygine and enhancing their physical appearance,which
      include task like washing,brushing,trimming fur and clipping nail 
      <Nav variant="pills" defaultActiveKey="/home" style={{ marginTop:"25px"}}>
      <Nav.Item>
        <Nav.Link href="/home">GetStarted</Nav.Link>
      </Nav.Item>
      </Nav>
        </p>
         </Col>
        <Col style={{marginTop:"-50px",borderRadius:"30%"}}>
        <Image className='cate' src="https://s3-alpha-sig.figma.com/img/c736/5967/26b50c5f64821c64730f02ff8b3f957b?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PKs6eSCJ2j62U9K5bkartZw3KGqv1H9lIUvX1t6LtCvk3IcRrjbclqju~GLnK3Ed8~v~YVq6UnFJwOlIvwRs9S0dxH6CdU5BoxlGh3Krt-vjkdy6kTr2SVF9qLZf0B~9WOHDDeGgj~mbYTBQdbFT-B5AV~0hLOLxPSDGJLugmyC9IjNIY5AJSUqmJ7AMEWhV-datd-Lwj1joCZjtgGwPVdd1gMT5aumBSGJUeDpPDWFbXHwwWZr3KK6MbK-S~d1ZRqFE0mHs36~ogIA7Gl7jSy18q2jqPStKTU95~SHaRCTuGroh1-CTN~QcaPmI7uvdW4dqDJyoZBRKR5ZKoNOr0A__"  />
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
        <Nav.Link href="/home">Pet Training</Nav.Link>
      </Nav.Item>
      
    </Nav>
        </Col>
      </Row>
    </Container>
    {/* </Container> */}
    </div>
    </>
    );
}
 
export default Categories;

