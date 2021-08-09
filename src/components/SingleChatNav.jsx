import React from 'react';
import { Container, Row, Col, Card} from 'react-bootstrap';
import { ArrowLeft} from 'react-bootstrap-icons';
import { Link } from "react-router-dom";




// NavigationBar Component
export function SingleChatNav () {
   return (
       <Container>
          <Row style={{marginBottom: '2rem'}}>
         <Col  xs={3} sm={2} md={2} lg={2}> 
             <Row>
                 <Col  xs={2} sm={2} md={2} lg={2}>
                     <Link to='/'> <button style={{backgroundColor:'rgb(199 218 241)', borderRadius:'100%', padding:'3px', borderColor:'rgb(199 218 241)', border:'0'}} ><ArrowLeft color="rgb(63,131,214)"  size={30}/></button></Link>
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
        </Container>
   )
};


export default SingleChatNav;