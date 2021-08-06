import React from 'react';
import './App.css';
import { BrowserRouter as Router , Route, Switch} from 'react-router-dom'
import ChatsFeed from './components/ChatsFeed';
import SingleChat from './components/SingleChat';
import History from './components/History';



function App() {
  return (
    <Router history={History}>
      {/* <ChatsFeed/> */}
      <Switch>
         <Route exact path='/'>
            <ChatsFeed/>
          </Route>
         <Route path='/chat'>
             <SingleChat/>
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
