import React from 'react';
import { Container, Row, Col , Card} from 'react-bootstrap';
import {Search, ChatSquareDots} from 'react-bootstrap-icons';




// NavigationBar Component
export function NavigationBar () {
   return (
       <Container>
          <Row style={{ marginBottom: '2%', marginTop: '2%',}}>
          <Col  xs={6} sm={8} md={8} lg={8}> 
             <Row>
                 <Col  xs={2} sm={2} md={2} lg={2}>
                    <ChatSquareDots color="rgb(63,131,214)" size={30}/>
                 </Col>
                 <Col  xs={4} sm={4} md={4} lg={4}>
                     <h4>TALKBOX</h4>
                 </Col>
             </Row>
             </Col>
          <Col  xs={3} sm={2} md={2} lg={2}>
             <Search size={30}/>
          </Col>
          <Col  xs={3} sm={2} md={2} lg={2}>
          <Card style={{borderRadius: '100%', marginTop:'2px', height:'2.5rem', width:'2.5rem', backgroundSize: "cover", backgroundImage: `url("./assets/images/donattah.jpeg")`, backgroundRepeat:'no-repeat', backgroundPosition:'center'}}><Card style={{borderRadius: '100%', marginTop:'59%', marginLeft:'62%', float:'right', height:'0.9rem', width:'0.9rem', backgroundColor:'green'}}></Card></Card>
          </Col>
          </Row>
        </Container>
   )
};


export default NavigationBar;