import React from 'react';
import './App.css';
import { BrowserRouter as Router , Route, Switch} from 'react-router-dom'
import ChatsFeed from './components/ChatsFeed';
import History from './components/History';
import { DisplaySingleChat } from './components/DisplaySingleChat';



function App() {
  return (
    <Router history={History}>
      <Switch>
         <Route exact path='/'>
            <ChatsFeed/>
          </Route>
         <Route path='/chat'>
             <DisplaySingleChat/>
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
