import React, {useState, useEffect} from 'react';
import { Container, Row , Col, Card} from 'react-bootstrap';
import {Mic} from 'react-bootstrap-icons';
import Axios from "axios";
import { ResultReason } from 'microsoft-cognitiveservices-speech-sdk';
const speechsdk = require('microsoft-cognitiveservices-speech-sdk')

// Footer Component
export function SingleChatMic () {
   const [msg, setMessage] = useState([]);
   const headers = {
         'Ocp-Apim-Subscription-Key': '0dc358cd8b9a42b58493eb2220e19984',
         'Host': 'uksouth.api.cognitive.microsoft.com',
        'Content-type': 'application/x-www-form-urlencoded',
         'Content-Length': '0',
       }
   const url = "https://uksouth.api.cognitive.microsoft.com/sts/v1.0/issuetoken"
   let tokenObj = {};
   useEffect(()=>{
      Axios.post(url, {
         headers:headers
       }).then((response)=>{
          tokenObj = response;
          console.log('response accessing token', response);
       })
       .catch((error)=>
          console.log('error accessing token', error)
       )
   });

   function sttFromMic() {
        const speechConfig = speechsdk.SpeechConfig.fromAuthorizationToken(tokenObj.authToken, tokenObj.region);
        speechConfig.speechRecognitionLanguage = 'en-UK';
        
        const audioConfig = speechsdk.AudioConfig.fromDefaultMicrophoneInput();
        const recognizer = new speechsdk.SpeechRecognizer(speechConfig, audioConfig);

        this.setState({
            displayText: 'speak...'
        });

        recognizer.recognizeOnceAsync(result => {
            let displayText;
            if (result.reason === ResultReason.RecognizedSpeech) {
                displayText = `RECOGNIZED: Text=${result.text}`
            } else {
                displayText = 'ERROR: Speech was cancelled or could not be recognized. Ensure your microphone is working properly.';
            }

            this.setState({
                displayText: displayText
            });
        });
    }
   return (
       <Container>
           <Row>
            <Card className="chat-card" Style={{border:'0'}}>
               <Row style={{ bottom: 0, width:'100%', padding: '0.4rem', position: 'fixed', alignContent:'center' }}>
                  <Col  xs={5} sm={5} md={5} lg={5}>
                  </Col>
                  <Col  xs={4} sm={4} md={4} lg={4}>
                     <button onClick={() => this.sttFromMic()} style={{backgroundColor:'rgb(63,131,214)', borderRadius:'100%', padding:'3px', border:'0', borderColor:'rgb(63,131,214)'}}><Mic color="#ccc"  size={30}/></button>
                  </Col>
                  <Col  xs={3} sm={3} md={3} lg={3}>
                  </Col>

               </Row>
            </Card>
            </Row>
        </Container>
   )
};


export default SingleChatMic;