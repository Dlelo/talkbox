import React from 'react';
import './../App.css';
import {Card} from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

export function AllChats ({chat}) {
   return (
    <Container>
       <Card style={{ marginBottom: '4%' , padding: '5%', borderRadius: '0.45rem', boxShadow:'0 1px 6px 0 rgb(32 33 36 / 28%)'}}>
           <Row>
             <Col  xs={4} sm={3} md={3} lg={3}>
             <Card.Img variant="top" src="holder.js/100px180" />
             </Col>
             <Col  xs={8} sm={9} md={9} lg={9}>
                <Row>
                    <Col  xs={8} sm={8} md={8} lg={8}>
                        <Card.Title>
                            Card Title {chat?.name}
                            </Card.Title>
                    </Col>
                    <Col  xs={4} sm={4} md={4} lg={4}> 30min Ago  {chat?.time}</Col>
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

      {/* to be deleted */}
      <Card style={{ marginBottom: '4%' , padding: '5%', borderRadius: '0.45rem', boxShadow:'0 1px 6px 0 rgb(32 33 36 / 28%)'}}>
           <Row>
             <Col  xs={4} sm={3} md={3} lg={3}>
             <Card.Img variant="top" src="holder.js/100px180" />
             </Col>
             <Col  xs={8} sm={9} md={9} lg={9}>
                <Row>
                    <Col  xs={8} sm={8} md={8} lg={8}>
                        <Card.Title>
                            Card Title {chat?.name}
                            </Card.Title>
                    </Col>
                    <Col  xs={4} sm={4} md={4} lg={4}> 10min ago {chat?.time}</Col>
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

      <Card style={{ marginBottom: '4%' , padding: '5%', borderRadius: '0.45rem', boxShadow:'0 1px 6px 0 rgb(32 33 36 / 28%)'}}>
           <Row>
             <Col  xs={4} sm={3} md={3} lg={3}>
             <Card.Img variant="top" src="holder.js/100px180" />
             </Col>
             <Col  xs={8} sm={9} md={9} lg={9}>
                <Row>
                    <Col  xs={8} sm={8} md={8} lg={8}>
                        <Card.Title>
                            Card Title {chat?.name}
                            </Card.Title>
                    </Col>
                    <Col  xs={4} sm={4} md={4} lg={4}> 1hr Ago {chat?.time}</Col>
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

      <Card style={{ marginBottom: '4%' , padding: '5%', borderRadius: '0.45rem', boxShadow:'0 1px 6px 0 rgb(32 33 36 / 28%)'}}>
           <Row>
             <Col  xs={4} sm={3} md={3} lg={3}>
             <Card.Img variant="top" src="holder.js/100px180" />
             </Col>
             <Col  xs={8} sm={9} md={9} lg={9}>
                <Row>
                    <Col  xs={8} sm={8} md={8} lg={8}>
                        <Card.Title>
                            Card Title {chat?.name}
                            </Card.Title>
                    </Col>
                    <Col  xs={4} sm={4} md={4} lg={4}> 1 day ago {chat?.time}</Col>
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
};


export default AllChats;