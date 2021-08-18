import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import AllChats from './AllChats';
import NavigationBar from './NavigationBar';
import Footer from './Footer';
import { fetchTokenAction, addChat } from '../store/Actions/actions';
import { useDispatch } from 'react-redux';

const ChatsFeed = props =>{
  const { chats } = props;


  return (
    < >     
      <NavigationBar/>
      {/* we pass props to our components  eg prop chats in allChats component and we are passing a variable chat */}
      <AllChats chats ={chats}/>
      {/* <SingleChat/> */}
      <Footer/>

    </>
)
}
function mapStateToProps(state){
  return{
      chats : state.chats?.chats
  };
}


// // three components (Navigation Bar, AllChats, Footer) will load on intial so they will be wrapped in an empty quotes called fragment
// export function ChatsFeed () {
//     // useState (reacts manages states inside the application and if the state changes it rerenders things(chats) on the webpage)
//     // theChats are all the chats inside theChats state and shoLatestChats is the function used to update the chats
//      // the chat has 4 elements (image, name, message, createdTime)
//     const [chats, showLatestChats] = useState([
//         {"id":"1","image":"./assets/images/donattah.jpeg", "name":"Donattah A", "message": "How is the game going?? Some quick example text to build", "userType":"sender","time":"Wed Aug 04 2021 12:10:45 GMT+0300"},
//         {"id":"2", "image":"./assets/images/user2.jpeg", "name":"Mat K.", "message": " Some quick example text to build", "userType":"receiver", "time":"Tuesday Aug 09 2021 13:10:45 GMT+0300"},
//         {"id": "3", "image":"./assets/images/user3.jpeg", "name":"Anthony K.", "message": "Hey", "userType":"receiver", "time":"Wed Aug 04 2021 14:10:45 GMT+0300"},
//         {"id:":"4","image":"./assets/images/user4.jpeg", "name":"Abby A.", "message": "How is are you?", "userType":"receiver", "time":"Wed Aug 04 2021 16:10:45 GMT+0300"}
//       ])
//     return (
//         < >     
//           <NavigationBar/>
//           {/* we pass props to our components  eg prop chats in allChats component and we are passing a variable chat */}
//           <AllChats chats ={chats}/>
//           {/* <SingleChat/> */}
//           <Footer/>

//         </>
//     )
//  };
 
 
 export default connect(mapStateToProps)(ChatsFeed);