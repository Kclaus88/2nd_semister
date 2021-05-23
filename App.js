import React from 'react'
import Home from './components/index';
import Account from './components/account'
import SignUp from './components/signup';
import Login from './components/login';
import Messages from './components/messages';
import Chat from './components/chat'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default function App() {
  return (
    <Router>
        <Switch>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/messages">
            <Messages />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/chat">
            <Chat />
          </Route>
          <Route path="/account">
            <Account />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}
