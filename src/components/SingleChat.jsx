import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import Axios from './../hooks/AxiosAccessTkn';
import { ResultReason } from 'microsoft-cognitiveservices-speech-sdk';
import moment from 'moment';

const speechsdk = require('microsoft-cognitiveservices-speech-sdk');
    


// Single Chat Component
export function SingleChat({chat}) {

   let className = 'chatcontainer';
   if (chat.userType === 'sender'){
      className+= ' darker';
   } else if(chat.userType === 'receiver') {
      className+= ' light';
   }

   let formattedTime = moment(new Date(chat.time));
   const thetime = formattedTime.format('h:mma');

      
      
   return (
         <Container>
               <Row className="text-style"> 
                  <Col className={className}>
                  <p className="msg">{chat?.message}</p>
                  </Col>
               </Row>
               <Row className="time">{thetime}</Row>
               
               
              
           </Container>
      )
   
   
};


export default SingleChat;