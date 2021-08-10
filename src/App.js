import React from 'react';
import './App.css';
import { BrowserRouter as Router , Route, Switch} from 'react-router-dom'
import ChatsFeed from './components/ChatsFeed';
import History from './components/History';
import { DisplaySingleChat } from './components/DisplaySingleChat';
import { Provider } from 'react-redux';
import store from './store';



function App() {
  return (
    <Provider store={store}>
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
    </Provider>
    
  );
}

export default App;
