import React , {useState}from 'react';
import AllChats from './AllChats';
import NavigationBar from './NavigationBar';
import Footer from './Footer';
// ChatsFeed Component

// three components (Navigation Bar, AllChats, Footer) will load on intial so they will be wrapped in an empty quotes called fragment
export function ChatsFeed () {
    // useState (reacts manages states inside the application and if the state changes it rerenders things(chats) on the webpage)
    // theChats are all the chats inside theChats state and shoLatestChats is the function used to update the chats
     // the chat has 4 elements (image, name, message, createdTime)
    const [chats, showLatestChats] = useState([
        {"image":"holder.js/100px180", "name":"Anjit Raj", "message": "How is the game going??", "time":"Wed Aug 04 2021 16:10:45 GMT+0300"},
        {"image":"holder.js/100px180", "name":"Anjit Raj", "message": "How is the game going??", "time":"Wed Aug 04 2021 16:10:45 GMT+0300"},
        {"image":"holder.js/100px180", "name":"Anjit Raj", "message": "How is the game going??", "time":"Wed Aug 04 2021 16:10:45 GMT+0300"},
        {"image":"holder.js/100px180", "name":"Anjit Raj", "message": "How is the game going??", "time":"Wed Aug 04 2021 16:10:45 GMT+0300"}
      ])
    return (
        < >
          <NavigationBar/>
          {/* we pass props to our components  eg prop chats in allChats component and we are passing a variable chat */}
          <AllChats chats ={chats}/>
          {/* <SingleChat/> */}
          <Footer/>

        </>
    )
 };
 
 
 export default ChatsFeed;