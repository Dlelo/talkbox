import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { Container, Row , Col, Card} from 'react-bootstrap';
import {Mic} from 'react-bootstrap-icons';
import { fetchTokenAction } from '../store/Actions/actions';
import { ResultReason } from 'microsoft-cognitiveservices-speech-sdk';
const speechsdk = require('microsoft-cognitiveservices-speech-sdk')

// SingleChatMic Component
const SingleChatMic = props =>{
    
    const { fetchTokenAction, token } = props
    const [msg, setMessage] = useState('speak...');
    const [isValidToken , setIsValidToken] = useState(false)
    const token_timout_duration = 10*60*1000;
 
    const getToken = async () => {
        await fetchTokenAction()
    }
 
    useEffect(()=>{
        getToken();
     }, [isValidToken]);

     useEffect(() => {
        const interval = setInterval(() => {
            setIsValidToken(!isValidToken)
        }, token_timout_duration);
        return () => clearInterval(interval);
        }, []) 
  

        function speechFromMic() {
            const speechConfig = speechsdk.SpeechConfig.fromAuthorizationToken(token, 'uk-south');
            speechConfig.speechRecognitionLanguage = 'uk-south';       
            const audioConfig = speechsdk.AudioConfig.fromDefaultMicrophoneInput();
            const recognizer = new speechsdk.SpeechRecognizer(speechConfig, audioConfig);
            
            recognizer.recognizeOnceAsync(result => {
                 console.log(result, "the result")
                 let displayText;
                 if (result.reason === ResultReason.RecognizedSpeech) {
                     console.log(result, 'recognized speech results')
                     displayText = `RECOGNIZED: Text=${result.text}`
                     setMessage(result?.text)
                 } else {
                     displayText = result?.errorDetails + ' ERROR: Speech was cancelled or could not be recognized. Ensure your microphone is working properly.';
                     setMessage(displayText)
                     console.log('error', result?.errorDetails);
                 }
                 
             });
         }
   return (
       <Container>
           <Row>
            <Card className="chat-card" Style={{ border:'none' }}>
               <Row style={{ bottom: 0, width:'100%', padding: '0.4rem', position: 'fixed', alignContent:'center' }}>
                  <Col  xs={5} sm={5} md={5} lg={5}>
                  </Col>
                  <Col  xs={4} sm={4} md={4} lg={4}>
                  <button onClick={speechFromMic()}  className="micButton" style={{backgroundColor:'rgb(63,131,214)', borderRadius:'100%', padding:'3px', border:'0', borderColor:'rgb(63,131,214)'}}><Mic color="#ccc"  size={30}/></button>
                  </Col>
                  <Col  xs={3} sm={3} md={3} lg={3}>
                  </Col>

               </Row>
               <Row className="display-text">
                   <Card>
                   <code>{msg}</code>
                   </Card>
               </Row>
            </Card>
            </Row>
        </Container>
   )
};

function mapStateToProps(state){
    return{
        token : state.token?.token?.data
    };
}


export default connect(mapStateToProps, {fetchTokenAction})(SingleChatMic);