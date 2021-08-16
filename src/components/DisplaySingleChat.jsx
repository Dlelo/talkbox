import React , {useState}from 'react';
import OneChat from './OneChat';
import SingleChatNav from './SingleChatNav';
import SingleChatMic from './SingleChatMic';
import {getChatData} from '../store/Actions/actions';


// three components will load on intial so they will be wrapped in an empty quotes called fragment
export function DisplaySingleChat () {
    // useState (reacts manages states inside the application and if the state changes it rerenders things(chats) on the webpage)
    // theChats are all the chats inside theChats state and shoLatestChats is the function used to update the chats
     // the chat has 4 elements (image, name, message, createdTime)
    const [chats, updateChats] = useState(getChatData)
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