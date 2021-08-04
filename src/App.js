import React, {useState} from 'react';
import './App.css';
import AllChats from './components/AllChats';
import NavigationBar from './components/NavigationBar';

// three components (Navigation Bar, AllChats, Footer) will load on intial so they will be wrapped in an empty quotes called fragment

function App() {
  // useState (reacts manages states inside the application and if the state changes it rerenders things(chats) on the webpage)
  // theChats are all the chats inside theChats state and shoLatestChats is the function used to update the chats
  // the chat has 4 elements (image, name, message, createdTime)
   const [theChats, showLatestChats] = useState([
     {"image":"holder.js/100px180", "name":"Anjit Raj", "message": "How is the game going??", "time":"Wed Aug 04 2021 16:10:45 GMT+0300"},
     {"image":"holder.js/100px180", "name":"Anjit Raj", "message": "How is the game going??", "time":"Wed Aug 04 2021 16:10:45 GMT+0300"},
     {"image":"holder.js/100px180", "name":"Anjit Raj", "message": "How is the game going??", "time":"Wed Aug 04 2021 16:10:45 GMT+0300"},
     {"image":"holder.js/100px180", "name":"Anjit Raj", "message": "How is the game going??", "time":"Wed Aug 04 2021 16:10:45 GMT+0300"}
   ])
  let chats;
   for(let oneChat of theChats){
      chats = oneChat;
   };
  // object distructuring
  return (
    < >
    <NavigationBar/>
    {/* we pass props to our components  eg add chats in allChats */}
    <AllChats theChats ={chats}/>
    </>
  );
}

export default App;
