import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./Home";
import Header from "./Header";
import {useStateValue} from './StateProvider';
import { auth } from './firebase';
import Login from "./Login.js"
import {BrowserRouter as Router, Switch,Route } from "react-router-dom"
import Checkout from "./Checkout";

global.url_back =
  " https://swapi.dev/api/";


function App() {
  const [{user},dispatch]=useStateValue();

  useEffect( () => {
    const unsubcribe=auth.onAuthStateChanged((authUser)=>{
    if (authUser){
      //log in
  
      dispatch({
        type:"SET_USER",
        user:authUser
      })
    }
    else{
      //log out
      dispatch({
        type:"SET_USER",
        user:null,
      })
    }});  
  
  
  
  
  return () => {
    //ANy clean up
    unsubcribe();
  }
  
  },[]);

  console.log("User Is",user);

  return (
    <div style={{ backgroundColor:"black" }} >
    <Router>
    <div className="app">
      <Switch>
        <Route path="/checkout">
          <Header/>
          <Checkout></Checkout>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/">
          <Header/>
          <Home/>
          
          </Route>

      </Switch>
    </div>
    </Router>
    </div>
  );
}

export default App;
