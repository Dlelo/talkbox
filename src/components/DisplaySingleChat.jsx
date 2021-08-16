import React , {useState}from 'react';
import OneChat from './OneChat';
import SingleChatNav from './SingleChatNav';
import SingleChatMic from './SingleChatMic';

// three components will load on intial so they will be wrapped in an empty quotes called fragment
export function DisplaySingleChat () {
    // useState (reacts manages states inside the application and if the state changes it rerenders things(chats) on the webpage)
    // theChats are all the chats inside theChats state and shoLatestChats is the function used to update the chats
     // the chat has 4 elements (image, name, message, createdTime)
     const [chats, showSingleChat] = useState([
       {"id":"1","name":"Donattah A.", "userType":"sender", "message": "How is the game going??", "time":"Wed Aug 04 2021 16:10:45 GMT+0300"},
       {"id":"2", "name":"Aaron R.","userType":"receiver",  "message": "Its going fine.", "time":"Wed Aug 04 2021 16:10:45 GMT+0300"},
       { "id":"3","name":"Sarah G.", "userType":"receiver", "message": "I am enjoying!", "time":"Wed Aug 04 2021 16:10:45 GMT+0300"},
       { "id":"4","name":"James K.", "userType":"receiver","message": "I will keep you updated??", "time":"Wed Aug 04 2021 16:10:45 GMT+0300"}
        ])
    return (
        < >   
          <SingleChatNav/>  
          {/* we pass props to our components  eg prop chats in OneChat component and we are passing a variable chat */}
          <OneChat chats ={chats}/>
          {/* <SingleChat/> */}
          <SingleChatMic/>

        </>
    )
 };
 
 
 export default DisplaySingleChat;