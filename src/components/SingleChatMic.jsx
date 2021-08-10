import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { Container, Row , Col, Card} from 'react-bootstrap';
import {Mic} from 'react-bootstrap-icons';
import { fetchTokenAction } from '../store/Actions/actions';
import { SpeechFromMic } from './SpeechFromMic';

// SingleChatMic Component
const SingleChatMic = props =>{
    
   const { fetchTokenAction } = props
   const [msg, setMessage] = useState([]);
   const [tokenObj , setTokenObj] = useState("")
   const [responseStatus , setResponseStatus] = useState(200)
   
 
    const getToken = async () => {
        await fetchTokenAction()
    }
 
    useEffect(()=>{
       getToken()
    }, [responseStatus]);
 
     console.log(tokenObj, "see the token object");
     console.log(tokenObj.region, "token region");
   
   return (
       <Container>
           <Row>
            <Card className="chat-card" Style={{border:'0'}}>
               <Row style={{ bottom: 0, width:'100%', padding: '0.4rem', position: 'fixed', alignContent:'center' }}>
                  <Col  xs={5} sm={5} md={5} lg={5}>
                  </Col>
                  <Col  xs={4} sm={4} md={4} lg={4}>
                     <button onClick={SpeechFromMic(tokenObj)} style={{backgroundColor:'rgb(63,131,214)', borderRadius:'100%', padding:'3px', border:'0', borderColor:'rgb(63,131,214)'}}><Mic color="#ccc"  size={30}/></button>
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
        token : state.token
    };
}

export default connect(mapStateToProps, {fetchTokenAction})(SingleChatMic);