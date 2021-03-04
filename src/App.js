import logo from './logo.svg';
import './App.css';
import Home from "./Home";
import Header from "./Header";

import Login from "./Login.js"
import {BrowserRouter as Router, Switch,Route } from "react-router-dom"


function App() {
  return (
    <div style={{ backgroundColor:"black" }} >
    <Router>
    <div className="app">
      <Switch>
        {/* <Route path="/checkout">
          <Header/>
          <Checkout></Checkout>
        </Route> */}
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
