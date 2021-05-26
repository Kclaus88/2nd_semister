import React, { useEffect, useState} from 'react'
import Home from './components/home';
import Index from './components/index';
import Account from './components/account';
import Login from './components/login';
import Signup from './components/signup';
import Messages from './components/messages';
import Chat from './components/chat';
import {auth} from './components/firebase';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default function App() {
  const [login , setLogin] = useState(false);
  useEffect(()=> {
    auth.onAuthStateChanged((user) => {
      console.log(user);
      if(!user) {
        setLogin(false);
        console.log("login page ru ochno u")
      }
      
    });
  },[])
  return (
    <Router>
        <Switch>
          <Route path="/messages" component={Messages}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/login" component={Login}/>
          <Route path="/chat" component={Chat}/>
          <Route path="/account" component={Account}/>
          <Route path="/index" component={Index}/>
          <Route path="/">
          {setLogin ?  <Home/>  : <Signup/>}
          </Route>

        </Switch>
    </Router>
  );
}
