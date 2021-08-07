import React from 'react';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import {Card} from 'react-bootstrap';
import {Telephone} from 'react-bootstrap-icons';
import {HouseDoor} from 'react-bootstrap-icons';
import {Bell} from 'react-bootstrap-icons'
import { Link } from "react-router-dom";


// Footer Component
export function Footer () {
   return (
       <Container>
           <Card style={{ borderRadius: '100px', height:'4rem', boxShadow:'1px 0px 17px 9px rgb(32 33 36 / 28%)' }}>
            <Row style={{ padding: '1rem'}}>
                    <Col  xs={5} sm={7} md={6} lg={6}> 
                       <Telephone color="rgb(150 152 154)" size={30} />
                    </Col>
                    <Col  xs={4} sm={3} md={4} lg={4}>
                        <Link to='/'> <HouseDoor color="rgb(15,91,184)" size={30}/></Link>
                     </Col>
                    <Col  xs={3} sm={2} md={2} lg={2}>
                       <Bell color="rgb(150 152 154)" size={30}/>
                     </Col>
            </Row>
           </Card>
        </Container>
   )
};


export default Footer;