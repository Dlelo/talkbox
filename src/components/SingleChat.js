import React from 'react';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import {ArrowLeft, ChevronLeft, Mic} from 'react-bootstrap-icons';
import {Card} from 'react-bootstrap';


// Single Chat Component
export function SingleChat() {
   return (
      <Container>
         <Row>
         <Col  xs={3} sm={2} md={2} lg={2}> 
             <Row>
                 <Col  xs={2} sm={2} md={2} lg={2}>
                    <ChevronLeft color="rgb(63,131,214)" size={30}/>
                 </Col>
             </Row>
             </Col>
          <Col  xs={6} sm={8} md={9} lg={9} style={{alignContent:'center'}}>
          <h4>Donattah A.</h4>
          </Col>
          <Col  xs={3} sm={2} md={1} lg={1}>
              <Card style={{borderRadius: '0.45rem', height:'2rem', backgroundImage: `url("./assets/images/donattah.jpeg")`, backgroundRepeat:'no-repeat', backgroundPosition:'center'}}></Card>
          </Col>
         </Row>
            <Row>
               <div class="chatcontainer light">
               <p class="chatmsgdark">Hello. How are you today?</p>
               </div>
               <span class="time-right">11:00</span>

               <div class="chatcontainer darker">
               <p class="chatmsg">Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
               </div>
               <span class="time-left">11:01</span>

               <div class="chatcontainer light">
               <p class="chatmsgdark">Sweet! So, what do you wanna do today?</p>
               </div>
               <span class="time-right">11:02</span>

               <div class="chatcontainer darker">
               <p class="chatmsg">Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
               </div>
               <span class="time-left">11:05</span>
            </Row>
            <Card Style={{border:'none'}}>
               <Row style={{ bottom: 0, width:'100%', padding: '2rem', position: 'fixed', alignContent:'center' }}>
                  <Col  xs={5} sm={5} md={5} lg={5}>
                  </Col>
                  <Col  xs={4} sm={4} md={4} lg={4}>
                     <Mic color="rgb(63,131,214)" size={30}/>
                  </Col>
                  <Col  xs={3} sm={3} md={3} lg={3}>
                  </Col>

               </Row>
            </Card>
           
        </Container>
   )
};


export default SingleChat;