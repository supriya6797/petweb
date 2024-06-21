import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';


const Home = () => {
    return (<>
   <Container className='front'>
  <Row>
        <Col sm={6} >

        <Carousel>
    
    <Carousel.Item interval={1000}>
    <div className='pet'>
    <h3 style={{fontSize:"1.2em"}}>Taking</h3>
    <h3 style={{fontSize:"1.2em"}}>  care</h3>
    <h3 style={{fontSize:"1.2em"}}>  for</h3>
    <h3 style={{fontSize:"1.2em"}}>  your</h3>
    <h3 style={{fontSize:"1.2em"}}>  pets!</h3>
    </div>
    
       </Carousel.Item>
    <Carousel.Item interval={1000}>
    <div className='pet'>
    <h3 style={{fontSize:"1.2em"}}>Taking</h3>
    <h3 style={{fontSize:"1.2em"}}>  care</h3>
    <h3 style={{fontSize:"1.2em"}}>  for</h3>
    <h3 style={{fontSize:"1.2em"}}>  your</h3>
    <h3 style={{fontSize:"1.2em"}}>  pets!</h3>
    </div>
    
       </Carousel.Item>
        </Carousel>
    
        </Col>
     <Col sm={6}>
     <Container fluid>

    
     <Carousel>
    
      <Carousel.Item interval={1000}>
      
        <Image className='pic'
  
         src="https://veryinformed.com/wp-content/uploads/2022/09/frenchbulldog.jpg" rounded />
        
        </Carousel.Item>
        <Carousel.Item interval={1000}>
      
        <Image className='pic'
    
         src="https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"thumbnail />  
     
         </Carousel.Item>
      
        <Carousel.Item interval={1000}>
       
        <Image className='pic'
         
           src="https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBldHxlbnwwfHwwfHx8MA%3D%3D" thumbnail/>
       
           </Carousel.Item>

        <Carousel.Item interval={1000}>
        <Image  className='pic' 
   src="https://th.bing.com/th/id/OIP.V0euXV7m4nahly_EDYUUBgHaLG?pid=ImgDet&w=182&h=273&c=7" rounded />
        
   </Carousel.Item>
        <Carousel.Item interval={1000}>
        <Image className='pic'
    src="https://choca.fr/wp-content/uploads/2022/05/Livre-des-records.-Le-chien-le-plus-grand-du-monde-Zeus-mesure-plus-de-2-metres-de-haut-sur-ses-pattes-arriere-768x1024.jpeg" rounded /> 
       
    </Carousel.Item>
     
    </Carousel>
    </Container>
     </Col>
      </Row> 
  </Container> 
  

    </>  );
}
 
export default Home;