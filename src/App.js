import React, { Component } from 'react';
import { Route } from 'react-router';
import { Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import ChatsFeed from './components/ChatsFeed';
import { DisplaySingleChat } from './components/DisplaySingleChat';

class App extends Component {
  render(){
    return(
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={ChatsFeed} exact/>
            <Route path="/chat" component={DisplaySingleChat} exact />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;

