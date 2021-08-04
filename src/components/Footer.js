import React from 'react';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import {Card} from 'react-bootstrap';


// NavigationBar Component
export function Footer () {
   return (
       <Container>
           <Card style={{ borderRadius: '100px'}}>
            <Row style={{ marginTop: '4%', padding: '3%'}}>
                    <Col  xs={6} sm={8} md={8} lg={8}> <h6>TALKBOX</h6></Col>
                    <Col  xs={3} sm={2} md={2} lg={2}>Search</Col>
                    <Col  xs={3} sm={2} md={2} lg={2}>User Photo</Col>
            </Row>
           </Card>
        </Container>
   )
};


export default Footer;