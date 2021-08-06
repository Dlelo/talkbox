import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { ChevronLeft, Mic} from 'react-bootstrap-icons';
import { Link } from "react-router-dom";


// Single Chat Component
export function SingleChat() {
   return (
      <Container>
         <Row>
         <Col  xs={3} sm={2} md={2} lg={2}> 
             <Row>
                 <Col  xs={2} sm={2} md={2} lg={2}>
                     <Link to='/'><ChevronLeft color="rgb(63,131,214)" size={30}/></Link>
                 </Col>
             </Row>
             </Col>
             <Col  xs={7} sm={9} md={9} lg={9} style={{alignContent:'center'}}>
          <h4>Donattah A.</h4>
          </Col>
          <Col  xs={2} sm={1} md={1} lg={1}>
              <Card style={{borderRadius: '0.45rem', marginTop:'2px', height:'2rem', backgroundImage: `url("./assets/images/donattah.jpeg")`, backgroundRepeat:'no-repeat', backgroundPosition:'center'}}></Card>
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
            <Card className="chat-card" Style={{border:'0'}}>
               <Row style={{ bottom: 0, width:'100%', padding: '0.4rem', position: 'fixed', alignContent:'center' }}>
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