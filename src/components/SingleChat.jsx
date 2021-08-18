import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import moment from 'moment';

const speechsdk = require('microsoft-cognitiveservices-speech-sdk');
    


// Single Chat Component
export function SingleChat({chat}) {
   const {msg, setMessage} = chat;
   
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
               <Row className='text-style'> 
                  <Col className={className}>
                  <p className="msg">{chat?.message}</p>
                  </Col>
               </Row>
               <Row className="time">{thetime}</Row>
               
               
              
           </Container>
      )
   
   
};


export default SingleChat;