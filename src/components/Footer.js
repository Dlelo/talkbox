import React from 'react';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import {Card} from 'react-bootstrap';
import {Telephone} from 'react-bootstrap-icons';
import {HouseDoor} from 'react-bootstrap-icons';
import {Bell} from 'react-bootstrap-icons'


// NavigationBar Component
export function Footer () {
   return (
       <Container>
           <Card style={{ borderRadius: '100px', height:'5rem'}}>
            <Row style={{ padding: '5%'}}>
                    <Col  xs={5} sm={7} md={7} lg={7}> 
                       <Telephone  size={30} />
                    </Col>
                    <Col  xs={4} sm={3} md={3} lg={3}>
                       <HouseDoor size={30}/>
                       </Col>
                    <Col  xs={3} sm={2} md={2} lg={2}>
                       <Bell size={30}/>
                     </Col>
            </Row>
           </Card>
        </Container>
   )
};


export default Footer;