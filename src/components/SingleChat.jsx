import React from 'react';
import { Container, Row, Col, Card} from 'react-bootstrap';
import { ArrowLeft, Mic} from 'react-bootstrap-icons';
import { Link } from "react-router-dom";
import Axios from 'axios';

function accessTokenFun(){
   const getAccessToken=()=>{
      const headers = {
         'Ocp-Apim-Subscription-Key': 'application/json',
         'Host': 'uksouth.api.cognitive.microsoft.com',
         'Content-type': 'application/x-www-form-urlencoded',
         'Content-Length': '0',
       }
       const url = "https://uksouth.api.cognitive.microsoft.com/sts/v1.0/issuetoken"
       
      Axios.post(url, {
         headers:headers
      }).then((response)=>{
         console.log('response axios', response);
      })
   }

   return getAccessToken
}


// Single Chat Component
export function SingleChat() {
   return (
      <Container>
         <Row>
         <Col  xs={3} sm={2} md={2} lg={2}> 
             <Row>
                 <Col  xs={2} sm={2} md={2} lg={2}>
                     <Link to='/'> <button style={{backgroundColor:'rgb(199 218 241)', borderRadius:'100%', padding:'3px', borderColor:'rgb(199 218 241)', border:'0'}} onClick={accessTokenFun} ><ArrowLeft color="rgb(63,131,214)"  size={30}/></button></Link>
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
               <div className="chatcontainer light">
               <p className="chatmsgdark">Hello. How are you today?</p>
               </div>
               <span className="time-right">11:00</span>

               <div className="chatcontainer darker">
               <p className="chatmsg">Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
               </div>
               <span className="time-left">11:01</span>

               <div className="chatcontainer light">
               <p className="chatmsgdark">Sweet! So, what do you wanna do today?</p>
               </div>
               <span className="time-right">11:02</span>

               <div className="chatcontainer darker">
               <p className="chatmsg">Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
               </div>
               <span className="time-left">11:05</span>
            </Row>
            <Card className="chat-card" Style={{border:'0'}}>
               <Row style={{ bottom: 0, width:'100%', padding: '0.4rem', position: 'fixed', alignContent:'center' }}>
                  <Col  xs={5} sm={5} md={5} lg={5}>
                  </Col>
                  <Col  xs={4} sm={4} md={4} lg={4}>
                     <button style={{backgroundColor:'rgb(63,131,214)', borderRadius:'100%', padding:'3px', border:'0', borderColor:'rgb(63,131,214)'}} onClick={accessTokenFun} ><Mic color="#ccc"  size={30}/></button>
                  </Col>
                  <Col  xs={3} sm={3} md={3} lg={3}>
                  </Col>

               </Row>
            </Card>
           
        </Container>
   )
};


export default SingleChat;