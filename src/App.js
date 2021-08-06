import React, {useState} from 'react';
import './App.css';
import SingleChat from './components/SingleChat'
import AllChats from './components/AllChats';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';

// three components (Navigation Bar, AllChats, Footer) will load on intial so they will be wrapped in an empty quotes called fragment

function App() {
  // useState (reacts manages states inside the application and if the state changes it rerenders things(chats) on the webpage)
  // theChats are all the chats inside theChats state and shoLatestChats is the function used to update the chats
  // the chat has 4 elements (image, name, message, createdTime)
   const [chats, showLatestChats] = useState([
     {"image":"holder.js/100px180", "name":"Anjit Raj", "message": "How is the game going??", "time":"Wed Aug 04 2021 16:10:45 GMT+0300"},
     {"image":"holder.js/100px180", "name":"Anjit Raj", "message": "How is the game going??", "time":"Wed Aug 04 2021 16:10:45 GMT+0300"},
     {"image":"holder.js/100px180", "name":"Anjit Raj", "message": "How is the game going??", "time":"Wed Aug 04 2021 16:10:45 GMT+0300"},
     {"image":"holder.js/100px180", "name":"Anjit Raj", "message": "How is the game going??", "time":"Wed Aug 04 2021 16:10:45 GMT+0300"}
   ])
  
  // object distructuring
  return (
    < >
    {/* <NavigationBar/> */}
    {/* we pass props to our components  eg prop chats in allChats component and we are passing a variable chat */}
    {/* do not delete */}
    {/* <AllChats chats ={chats}/> */}

    {/* designing this */}
    <SingleChat/>
    {/* <Footer/> */}
    </>
  );
}

export default App;
