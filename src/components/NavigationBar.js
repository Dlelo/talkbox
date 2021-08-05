import React from 'react';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import {Search} from 'react-bootstrap-icons';
import {Person} from 'react-bootstrap-icons';
import {ChatSquareDots} from 'react-bootstrap-icons';




// NavigationBar Component
export function NavigationBar () {
   return (
       <Container>
          <Row style={{ marginBottom: '5%', marginTop: '5%',}}>
          <Col  xs={6} sm={8} md={8} lg={8}> 
             <Row>
                 <Col  xs={2} sm={2} md={2} lg={2}>
                    <ChatSquareDots size={30}/>
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
              <Person size={30}/>
          </Col>
          </Row>
        </Container>
   )
};


export default NavigationBar;