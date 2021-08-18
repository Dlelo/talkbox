import React , {useState}from 'react';
import OneChat from './OneChat';
import { connect } from 'react-redux';
import SingleChatNav from './SingleChatNav';
import SingleChatMic from './SingleChatMic';
import { getChatData, fetchChats } from '../store/Actions/actions';

export function DisplaySingleChat () {

     const theChat = fetchChats();
     console.log('theChat', theChat)
 
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
          {/* <OneChat chats ={chats}/> */}
          {/* <SingleChat/> */}
          <SingleChatMic/>

        </>
    )
 };
 
 
 export default DisplaySingleChat;