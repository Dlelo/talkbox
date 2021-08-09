import React from 'react';
import { Container, Row} from 'react-bootstrap';
import Axios from './../hooks/AxiosAccessTkn';
import { ResultReason } from 'microsoft-cognitiveservices-speech-sdk';

const speechsdk = require('microsoft-cognitiveservices-speech-sdk');
    



// function accessTokenFun(){
//    const getAccessToken=()=>{
//       const headers = {
//          'Ocp-Apim-Subscription-Key': 'application/json',
//          'Host': 'uksouth.api.cognitive.microsoft.com',
//          'Content-type': 'application/x-www-form-urlencoded',
//          'Content-Length': '0',
//        }
//        const url = "https://uksouth.api.cognitive.microsoft.com/sts/v1.0/issuetoken"
       
//       Axios.post(url, {
//          headers:headers
//       }).then((response)=>{
//          console.log('response axios', response);
//       })
//    }

//    return getAccessToken
// }


// Single Chat Component
export function SingleChat({chat}) {

   let className = 'chatcontainer';
   if (chat.userType === 'sender'){
      className+= 'darker';
   } else if(chat.userType === 'receiver') {
      className+= 'light';
   }
      
      
   return (
         <Container>
               <Row> 
                  <div className={{className}}>
                  <p className="msg">{chat?.message}</p>
                  </div>
                  <span className="time-left">{chat?.time}</span>
               </Row>
               
               
              
           </Container>
      )
   
   
};


export default SingleChat;