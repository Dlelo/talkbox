import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { Container, Row , Col, Card} from 'react-bootstrap';
import {Mic} from 'react-bootstrap-icons';
import { fetchTokenAction } from '../store/Actions/actions';
import { SpeechFromMic } from './SpeechFromMic';

// SingleChatMic Component
const SingleChatMic = props =>{
    
const { fetchTokenAction } = props
   const [msg, setMessage] = useState({displayText: 'speak...'});
   const [tokenObj , setTokenObj] = useState("")
   const [responseStatus , setResponseStatus] = useState(200)
   
 
    const getToken = async () => {
        await fetchTokenAction()
    }
 
    useEffect(()=>{
        getToken();
     }, [responseStatus]);
  
     console.log(tokenObj, "see the token object");
     // console.log(tokenObj.region, "token region");
   


   function speechFromMic() {
        const speechConfig = speechsdk.SpeechConfig.fromAuthorizationToken(tokenObj.authToken, "uk-south");
        speechConfig.speechRecognitionLanguage = 'en-UK';
        
        const audioConfig = speechsdk.AudioConfig.fromDefaultMicrophoneInput();
        const recognizer = new speechsdk.SpeechRecognizer(speechConfig, audioConfig);

        // this.setState({
        //     displayText: 'speak...'
        // });

        recognizer.recognizeOnceAsync(result => {
            let displayText;
            if (result.reason === ResultReason.RecognizedSpeech) {
                displayText = `RECOGNIZED: Text=${result.text}`
            } else {
                displayText = 'ERROR: Speech was cancelled or could not be recognized. Ensure your microphone is working properly.';
            }

            this.msg = {displayText: displayText}
            
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
                   <code>{msg[0]}</code>
                   </Card>
               </Row>
            </Card>
            </Row>
        </Container>
   )
};

function mapStateToProps(state){
    return{
        token : state.token
    };
}

export default connect(mapStateToProps, {fetchTokenAction})(SingleChatMic);