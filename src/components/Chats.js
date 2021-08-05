// This component (maps out each element of the chat array)
import React from 'react'
import {Card} from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

function getTimetaken(theTime){
    const todayDate = new Date();
    let thePeriod = todayDate-theTime;
 return thePeriod
}

export function Chats({chat}){
    return(
        <Container>
            <Card style={{ marginBottom: '4%' , padding: '5%', borderRadius: '0.45rem', boxShadow:'0 1px 6px 0 rgb(32 33 36 / 28%)'}}>
                <Row>
                    <Col  xs={4} sm={3} md={3} lg={3}>
                        <Card style={{borderRadius: '0.45rem'}}>
                        <Card.Img variant="top" src="./assets/images/donattah.jpeg" alt="photo" style={{height:'100px'}}/>
                        </Card>
                    </Col>
                    <Col  xs={8} sm={9} md={9} lg={9}>
                        <Row>
                            <Col  xs={8} sm={8} md={8} lg={8}>
                                <Card.Title>
                                    Card Title {chat?.name}
                                    </Card.Title>
                            </Col>
                            <Col  xs={4} sm={4} md={4} lg={4}> 2mins Ago</Col>
                        </Row>
                        <Row>
                            <Col  xs={12} sm={12} md={12} lg={12}>
                                <Card.Text>
                                Some quick example text to build {chat?.message}
                                </Card.Text>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Card>
    </Container>
    )
}
export default Chats;