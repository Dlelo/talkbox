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
            <Card style={{ marginBottom: '4.5%' , padding: '2%',  borderRadius: '0.45rem', boxShadow:'0 1px 6px 0 rgb(32 33 36 / 28%)'}}>
                <Row>
                    <Col  xs={4} sm={3} md={3} lg={3}>
                        <Card style={{borderRadius: '0.45rem', height:'8rem', backgroundImage: `url("./assets/images/donattah.jpeg")`, backgroundRepeat:'no-repeat', backgroundPosition:'center'}}>
                        {/* <Card.Img variant="top" src="./assets/images/donattah.jpeg" alt="photo" style={{height: "8rem"}}/> */}
                        </Card>
                    </Col>
                    <Col  xs={8} sm={9} md={9} lg={9}>
                        <Row>
                            <Col  xs={7} sm={7} md={9} lg={9}>
                                <Card.Title>
                                    {chat?.name}
                                    </Card.Title>
                            </Col>
                            <Col  xs={5} sm={5} md={3} lg={3}> <span style={{fontSize: '0.7rem'}}>2mins Ago</span></Col>
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