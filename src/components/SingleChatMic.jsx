import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { Container, Row , Col, Card} from 'react-bootstrap';
import {ArrowUpCircleFill, Mic} from 'react-bootstrap-icons';
import { fetchTokenAction } from '../store/Actions/actions';
import { ResultReason } from 'microsoft-cognitiveservices-speech-sdk';
const speechsdk = require('microsoft-cognitiveservices-speech-sdk')

// SingleChatMic Component
const SingleChatMic = props =>{
    
    const { fetchTokenAction, token } = props;
    const [msg, setMessage] = useState('Speak...');
    const [isValidToken , setIsValidToken] = useState(false)
    const token_timout_duration = 10*60*1000;
    const [showMsgHolder, setMsgHolder] = useState('none');
    const [color, setColor] = useState('rgb(63,131,214)');
    const [sendarrowcolor, setSendArrowColor] = useState('rgb(150, 152, 154)');

 
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
        //setShowMsg(true)
        const speechConfig = speechsdk.SpeechConfig.fromAuthorizationToken(token, 'centralus');
        speechConfig.speechRecognitionLanguage = 'en-Us';       
        const audioConfig = speechsdk.AudioConfig.fromDefaultMicrophoneInput();
        const recognizer = new speechsdk.SpeechRecognizer(speechConfig, audioConfig);
        console.log(ResultReason.RecognizedSpeech, "the result reason recognizer result")
        recognizer.recognizeOnceAsync(result => {
            console.log(result, "the speech recognizer result")
            let displayText;
            if (result.reason === ResultReason.RecognizedSpeech) {
                console.log(result, 'recognized speech results')
                displayText = `RECOGNIZED: Text=${result.text}`
                setMessage(result?.text);
                setColor('red');
                setSendArrowColor('rgb(63,131,214)');
                setMsgHolder('block');
            } else {
                displayText = result?.errorDetails + ' ERROR: Speech was cancelled or could not be recognized. Ensure your microphone is working properly.';
                setMessage(displayText)
                console.log('error', result?.errorDetails);
                setMsgHolder('block');
            }
            
        });
    }
   return (
       <Container>
           <Row>
            <Card className="chat-card" style={{ border:'none' }}>   
                <Card className="displayTheText" style={{display:showMsgHolder}}><p>{msg} <span className="send-arrow" style={{color:sendarrowcolor}}><ArrowUpCircleFill size={25}/></span></p></Card>
               <Row style={{ bottom: 0, width:'100%', padding: '0.4rem', position: 'fixed', alignContent:'center' }}>
                  <Col  xs={5} sm={5} md={5} lg={5}>
                  </Col>
                  <Col  xs={4} sm={4} md={4} lg={4}>
                    <button onClick={speechFromMic()} className="micButton" style={{backgroundColor:color, borderRadius: "100%", height:"3rem", width:"3rem", borderColor:color, backgroundSize: "cover" }}><Mic color="#ccc"  size={30}/></button>
                  </Col>
                  <Col  xs={3} sm={3} md={3} lg={3}>
                  </Col>

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